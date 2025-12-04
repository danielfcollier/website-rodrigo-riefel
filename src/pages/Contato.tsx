import { useState, useEffect, useRef } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "@/hooks/use-toast";
import { Loader2 } from "lucide-react";

const contactSchema = z.object({
  fullName: z
    .string()
    .min(1, "Nome completo é obrigatório")
    .refine(
      (val) => val.trim().split(/\s+/).length >= 2,
      "Por favor, insira nome e sobrenome"
    ),
  email: z.string().email("Email inválido"),
  phone: z
    .string()
    .min(1, "Telefone é obrigatório")
    .refine(
      (val) => {
        const digits = val.replace(/\D/g, "");
        // Brazilian format: 10-11 digits (with DDD)
        // International format: starts with + and has 7-15 digits
        if (val.startsWith("+")) {
          return digits.length >= 7 && digits.length <= 15;
        }
        return digits.length >= 10 && digits.length <= 11;
      },
      "Formato inválido. Use (XX) XXXXX-XXXX ou +XX XXXXXXXXXX"
    ),
  message: z
    .string()
    .min(20, "A mensagem deve ter pelo menos 20 caracteres")
    .max(1000, "A mensagem deve ter no máximo 1000 caracteres"),
});

type ContactFormData = z.infer<typeof contactSchema>;

declare global {
  interface Window {
    turnstile?: {
      render: (element: string | HTMLElement, options: { sitekey: string; callback: (token: string) => void }) => string;
      reset: (widgetId: string) => void;
    };
  }
}

const formatPhoneNumber = (value: string): string => {
  // If starts with +, use international format
  if (value.startsWith("+")) {
    const digits = value.replace(/[^\d+]/g, "");
    return digits;
  }
  
  // Brazilian format
  const digits = value.replace(/\D/g, "");
  
  if (digits.length <= 2) {
    return digits.length > 0 ? `(${digits}` : "";
  }
  if (digits.length <= 6) {
    return `(${digits.slice(0, 2)}) ${digits.slice(2)}`;
  }
  if (digits.length <= 10) {
    return `(${digits.slice(0, 2)}) ${digits.slice(2, 6)}-${digits.slice(6)}`;
  }
  return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7, 11)}`;
};

const Contato = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [turnstileToken, setTurnstileToken] = useState<string | null>(null);
  const turnstileRef = useRef<HTMLDivElement>(null);
  const widgetIdRef = useRef<string | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    watch,
    trigger,
    formState: { errors, touchedFields },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    mode: "onBlur",
  });

  const phoneValue = watch("phone");

  useEffect(() => {
    // Load Turnstile script
    const script = document.createElement("script");
    script.src = "https://challenges.cloudflare.com/turnstile/v0/api.js";
    script.async = true;
    script.onload = () => {
      if (window.turnstile && turnstileRef.current) {
        widgetIdRef.current = window.turnstile.render(turnstileRef.current, {
          sitekey: "0x4AAAAAAA0sCrXOxhR-aOBL",
          callback: (token: string) => {
            setTurnstileToken(token);
          },
        });
      }
    };
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const rawValue = e.target.value;
    const formatted = formatPhoneNumber(rawValue);
    setValue("phone", formatted);
  };

  const onSubmit = async (data: ContactFormData) => {
    if (!turnstileToken) {
      toast({
        title: "Verificação necessária",
        description: "Por favor, complete a verificação de segurança.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fullname: data.fullName,
          email: data.email,
          phone: data.phone,
          message: data.message,
          createdAt: new Date().toISOString(),
          turnstileToken,
        }),
      });

      if (response.ok) {
        toast({
          title: "Mensagem enviada!",
          description: "Entraremos em contato em breve. Obrigado!",
        });
        reset();
        setTurnstileToken(null);
        if (window.turnstile && widgetIdRef.current) {
          window.turnstile.reset(widgetIdRef.current);
        }
      } else {
        throw new Error("Erro ao enviar mensagem");
      }
    } catch (error) {
      toast({
        title: "Erro ao enviar",
        description: "Ocorreu um erro. Por favor, tente novamente ou entre em contato pelo WhatsApp.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Header />
      <main className="section-white min-h-screen">
        <div className="container-section">
          <div className="max-w-xl mx-auto">
            <h1 className="text-4xl font-bold text-center mb-8 text-brand-bold">
              Contato
            </h1>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="fullName">Nome Completo</Label>
                <Input
                  id="fullName"
                  placeholder="Seu nome completo"
                  {...register("fullName")}
                  onBlur={() => trigger("fullName")}
                  className={errors.fullName && touchedFields.fullName ? "border-destructive" : ""}
                />
                {errors.fullName && touchedFields.fullName && (
                  <p className="text-sm text-destructive">{errors.fullName.message}</p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="seu@email.com"
                  {...register("email")}
                  onBlur={() => trigger("email")}
                  className={errors.email && touchedFields.email ? "border-destructive" : ""}
                />
                {errors.email && touchedFields.email && (
                  <p className="text-sm text-destructive">{errors.email.message}</p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone">Telefone</Label>
                <Input
                  id="phone"
                  placeholder="(48) 99999-9999"
                  value={phoneValue || ""}
                  onChange={handlePhoneChange}
                  onBlur={() => trigger("phone")}
                  className={errors.phone && touchedFields.phone ? "border-destructive" : ""}
                />
                {errors.phone && touchedFields.phone && (
                  <p className="text-sm text-destructive">{errors.phone.message}</p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Mensagem</Label>
                <Textarea
                  id="message"
                  placeholder="Sua mensagem..."
                  rows={5}
                  {...register("message")}
                  onBlur={() => trigger("message")}
                  className={errors.message && touchedFields.message ? "border-destructive" : ""}
                />
                {errors.message && touchedFields.message && (
                  <p className="text-sm text-destructive">{errors.message.message}</p>
                )}
              </div>

              <div ref={turnstileRef} className="flex justify-center" />

              <Button
                type="submit"
                variant="brand"
                size="lg"
                className="w-full"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin mr-2" />
                    Enviando...
                  </>
                ) : (
                  "Enviar Mensagem"
                )}
              </Button>
            </form>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Contato;
