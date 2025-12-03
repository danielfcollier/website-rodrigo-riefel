interface Env {
  GOOGLE_SCRIPT_URL: string;
  TURNSTILE_SECRET_KEY: string;
}

interface ContactRequest {
  fullname: string;
  email: string;
  phone: string;
  message: string;
  origin: string;
  createdAt: string;
  turnstileToken: string;
}

export const onRequestPost: PagesFunction<Env> = async (context) => {
  const { request, env } = context;

  try {
    const body: ContactRequest = await request.json();

    // Validate Turnstile token
    const turnstileResponse = await fetch(
      "https://challenges.cloudflare.com/turnstile/v0/siteverify",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams({
          secret: env.TURNSTILE_SECRET_KEY || "1x0000000000000000000000000000000AA", // Test secret key
          response: body.turnstileToken,
        }),
      }
    );

    const turnstileResult = await turnstileResponse.json() as { success: boolean };

    if (!turnstileResult.success) {
      return new Response(
        JSON.stringify({ error: "Verificação de segurança falhou" }),
        {
          status: 400,
          headers: { "Content-Type": "application/json" },
        }
      );
    }

    // Send to Google Apps Script
    if (env.GOOGLE_SCRIPT_URL) {
      const googleResponse = await fetch(env.GOOGLE_SCRIPT_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fullname: body.fullname,
          email: body.email,
          phone: body.phone,
          message: body.message,
          origin: body.origin,
          createdAt: body.createdAt,
        }),
      });

      if (!googleResponse.ok) {
        throw new Error("Erro ao enviar para Google Apps Script");
      }
    }

    return new Response(
      JSON.stringify({ success: true, message: "Mensagem enviada com sucesso" }),
      {
        status: 200,
        headers: { "Content-Type": "application/json" },
      }
    );
  } catch (error) {
    console.error("Contact form error:", error);
    return new Response(
      JSON.stringify({ error: "Erro interno do servidor" }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
};
