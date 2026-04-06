export function Session() {
  return (
    <section id="session" className="py-16 md:py-20 px-6">
      <div className="container mx-auto max-w-3xl">
        <div className="animate-fade-in text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-light mb-6 tracking-tight">
            Session
          </h2>

          <p className="text-4xl md:text-5xl font-serif font-light tracking-tight mb-8">
            €250
          </p>

          <p className="text-muted-foreground leading-relaxed mb-8">
            All-in-one session, tailored to the individual.
          </p>

          <ul className="space-y-3 text-muted-foreground leading-relaxed">
            <li>Suspension Yoga &amp; Pilates</li>
            <li>Deep Tissue / Bodywork</li>
            <li>Osteo Face Lift Massage</li>
            <li>Acupressure</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
