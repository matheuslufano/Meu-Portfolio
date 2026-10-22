import Contact from "../../components/Contact/Contact";
import PageLayout from "../../components/PageLayout/PageLayout";

/** Página de contato; preserva os canais e o formulário de preparação de e-mail. */
export default function ContactPage() {
  return (
    <PageLayout
      eyebrow="Contato"
      title="Vamos conversar?"
      description="Tem um projeto em mente? Escolha um dos canais abaixo ou prepare uma mensagem."
    >
      <Contact />
    </PageLayout>
  );
}
