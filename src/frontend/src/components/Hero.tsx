export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6">
      {/* Serene background image with warm ethereal aesthetic and light bloom */}
      <div
        className="absolute inset-0 opacity-20 animate-fade-in"
        style={{
          backgroundImage: "url(/assets/generated/about-warm-ethereal.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      {/* Geometric pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "url(/assets/generated/geometric-pattern.dim_1200x800.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      <div className="relative max-w-4xl mx-auto text-center animate-fade-in">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-light mb-6 tracking-tight">
          Aiko Herzig
        </h1>

        <div className="flex items-center justify-center gap-3 md:gap-4 text-base md:text-lg text-muted-foreground mb-8">
          <span>Private Training</span>
          <span className="text-xs">·</span>
          <span>Bodywork</span>
          <span className="text-xs">·</span>
          <span>Recovery</span>
        </div>

        <p className="text-sm md:text-base text-muted-foreground italic">
          (By referral)
        </p>
      </div>
    </section>
  );
}
