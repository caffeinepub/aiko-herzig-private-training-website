export function Location() {
  return (
    <section id="location" className="py-16 md:py-20 px-6">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-serif font-light mb-8 tracking-tight text-center">
          Locations
        </h2>

        <div className="grid md:grid-cols-2 gap-10 md:gap-12 items-center">
          <div className="space-y-6 text-muted-foreground leading-relaxed animate-fade-in">
            <div>
              <p className="font-medium text-foreground mb-1">
                Studio Belvedere
              </p>
              <p>Prinz Eugen Straße 48/ 1-2, 1040 Vienna, Austria</p>
            </div>

            <div>
              <p className="font-medium text-foreground mb-1">
                Clinicus Natura
              </p>
              <p>Rua do Raio nº26, Braga, Portugal</p>
            </div>

            <p>
              Off location, travel and via Zoom may be available upon request.
            </p>
          </div>

          <div>
            <div className="aspect-[4/5] rounded-sm overflow-hidden shadow-subtle animate-fade-in">
              <img
                src="/assets/generated/IMG_20251231_104321_172-2-warm-neutral.jpg"
                alt="Private training studio with arched architecture and natural lighting"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
