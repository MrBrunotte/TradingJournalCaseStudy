import PageContainer from "./PageContainer";

export default function Section({
  id,
  children,
  className = "",
  containerClassName = "",
  showSeparator = true,
}) {
  return (
    <section id={id} className={`py-12 md:py-16 lg:py-20 ${className}`}>
      <PageContainer className={containerClassName}>
        <div
          className={
            showSeparator
              ? "border-t border-neutral-500 pt-12 md:pt-16 lg:pt-20"
              : ""
          }
        >
          {children}
        </div>
      </PageContainer>
    </section>
  );
}
