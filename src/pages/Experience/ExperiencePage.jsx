import Experience from "../../components/Experience/Experience";
import PageLayout from "../../components/PageLayout/PageLayout";

/** Página dedicada à formação e à trajetória já cadastradas no portfólio. */
export default function ExperiencePage() {
  return (
    <PageLayout
      eyebrow="Minha trajetória"
      title="Experiência e formação."
      description="As experiências, os estudos e a prática que acompanham meu trabalho com tecnologia."
    >
      <Experience />
    </PageLayout>
  );
}
