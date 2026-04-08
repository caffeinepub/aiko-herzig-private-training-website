export function Session() {
  return (
    <section id="session" className="py-16 md:py-20 px-6">
      <div className="container mx-auto max-w-3xl">
        <div className="animate-fade-in text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-light mb-10 tracking-tight">
            Session
          </h2>

          <div className="text-left space-y-14">
            {/* Austria pricing */}
            <div className="max-w-xs">
              <h3 className="text-lg font-serif font-light tracking-widest uppercase mb-5 text-muted-foreground">
                Austria
              </h3>
              <ul className="space-y-3">
                <li className="flex justify-between">
                  <span className="text-muted-foreground">60 min.</span>
                  <span className="font-serif font-light">€250</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-muted-foreground">90 min.</span>
                  <span className="font-serif font-light">€280</span>
                </li>
              </ul>
            </div>

            {/* Penthouse Sports block */}
            <div className="border-t border-border/40 pt-12">
              <div className="mb-8">
                <h3 className="text-base font-serif font-light tracking-widest uppercase mb-1 text-muted-foreground">
                  At Penthouse Sports 1010, Vienna
                </h3>
                <p className="text-lg font-serif font-light tracking-wide mb-4">
                  Private sessions
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed max-w-lg">
                  Each session is designed around your body, your pace, and your
                  goals, never a template.
                </p>
              </div>

              {/* Service items */}
              <div className="space-y-0 divide-y divide-border/30 max-w-xl">
                <div
                  className="py-5 flex justify-between items-start gap-6"
                  data-ocid="service-suspension"
                >
                  <div className="flex-1 min-w-0">
                    <p className="font-serif font-light text-foreground mb-1">
                      Suspension &amp; functional training
                    </p>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Precision movement, postural work, and strength using
                      suspension
                    </p>
                  </div>
                  <span className="font-serif font-light text-foreground whitespace-nowrap pt-0.5">
                    € 130
                  </span>
                </div>

                <div
                  className="py-5 flex justify-between items-start gap-6"
                  data-ocid="service-osteopathic"
                >
                  <div className="flex-1 min-w-0">
                    <p className="font-serif font-light text-foreground mb-1">
                      Osteopathic face &amp; neck treatment
                    </p>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Targeted release work for the face, jaw, and cervical
                      spine. Deeply restorative.
                    </p>
                  </div>
                  <span className="font-serif font-light text-muted-foreground whitespace-nowrap pt-0.5 text-sm">
                    € 60 add-on
                  </span>
                </div>

                <div
                  className="py-5 flex justify-between items-start gap-6"
                  data-ocid="service-deep-tissue"
                >
                  <div className="flex-1 min-w-0">
                    <p className="font-serif font-light text-foreground mb-1">
                      Deep tissue massage &amp; reflexology
                    </p>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Structural bodywork combined with reflex point therapy for
                      full-body recovery.
                    </p>
                  </div>
                  <span className="font-serif font-light text-muted-foreground whitespace-nowrap pt-0.5 text-sm">
                    € 60 add-on
                  </span>
                </div>
              </div>

              {/* Recommended block */}
              <div
                className="mt-8 max-w-xl border border-border/60 px-7 py-6"
                data-ocid="recommended-session"
              >
                <span className="text-xs font-light tracking-widest uppercase text-muted-foreground mb-4 block">
                  Recommended
                </span>
                <div className="flex justify-between items-start gap-6">
                  <div className="flex-1 min-w-0">
                    <p className="font-serif font-light text-foreground text-lg mb-1">
                      Full session
                    </p>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Suspension training + your choice of massage therapy — the
                      complete experience.
                    </p>
                  </div>
                  <div className="text-right whitespace-nowrap pt-0.5">
                    <p className="font-serif font-light text-foreground text-lg">
                      € 250
                    </p>
                    <p className="text-xs text-muted-foreground mt-0.5">
                      per session
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
