export function About() {
  return (
    <section id="about" className="py-16 md:py-20 px-6">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-serif font-light mb-8 tracking-tight text-center">
          About
        </h2>

        <div className="grid md:grid-cols-2 gap-10 md:gap-12 items-center">
          <div>
            <div className="aspect-[4/5] rounded-sm overflow-hidden shadow-subtle animate-fade-in">
              <img
                src="/assets/aikoherzig2026.02.jpg"
                alt="Aiko Herzig"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </div>

          <div className="space-y-6 text-muted-foreground leading-relaxed animate-fade-in">
            <p>
              Aiko Herzig has developed her practice over more than fifteen
              years, integrating strength training, therapeutic movement, and
              manual bodywork. Through a powerful blend of fascia release,
              breath work, emotional processing, and movement-based alignment,
              we regulate the nervous system, release stored trauma, and
              reconnect to the body.
            </p>

            <p>
              Her work has included long-term collaboration with athletes,
              performing artists, and individuals recovering from injury or
              managing chronic conditions. These varied contexts have shaped a
              precise, sustainable approach to physical development and
              recovery. Based on deep embodiment, years of study, and walking
              through her own healing, it's a full-body transformation.
            </p>

            <p>
              Professional education includes advanced training in strength and
              conditioning, manual therapy, and movement assessment. Applying
              naturopathy, TCM and ongoing study are regarded as integral to her
              work.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
