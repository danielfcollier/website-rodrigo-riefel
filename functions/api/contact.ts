interface Env {
  GOOGLE_SCRIPT_URL: string;
}

interface ContactRequest {
  fullname: string;
  email: string;
  phone: string;
  message: string;
  createdAt: string;
}

export const onRequestPost: PagesFunction<Env> = async (context) => {
  const { request, env } = context;

  try {
    const body: ContactRequest = await request.json();

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
          createdAt: body.createdAt,
        }),
      });

      if (!googleResponse.ok) {
        throw new Error("Erro ao enviar mensagem, tente novamente!");
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
      JSON.stringify({ error: error instanceof Error ? error.message : "Erro desconhecido" }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
};