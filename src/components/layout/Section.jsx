import PageContainer from "./PageContainer";

export default function Section({
  id,
  children,
  className = "",
  containerClassName = "",
}) {
  return (
    <section id={id} className={`py-16 md:py-24 lg:py-28 ${className}`}>
      <PageContainer className={containerClassName}>{children}</PageContainer>
    </section>
  );
}
