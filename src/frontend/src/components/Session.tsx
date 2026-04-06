export function Session() {
  return (
    <section id="session" className="py-16 md:py-20 px-6">
      <div className="container mx-auto max-w-3xl">
        <div className="animate-fade-in text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-light mb-10 tracking-tight">
            Session
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 text-left">
            <div>
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

            <div>
              <h3 className="text-lg font-serif font-light tracking-widest uppercase mb-5 text-muted-foreground">
                Portugal
              </h3>
              <ul className="space-y-3">
                <li className="flex justify-between">
                  <span className="text-muted-foreground">60 min.</span>
                  <span className="font-serif font-light">€125</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-muted-foreground">90 min.</span>
                  <span className="font-serif font-light">€140</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
