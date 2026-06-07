export function TrustSection() {
  const items = [
    {
      title: 'Handverlesen',
      body: 'Wir zeigen nur Karten, die uns wirklich überzeugen.',
      icon: (
        <path d="M10 2L12.5 7.5L18.5 8.3L14 12.5L15.2 18.5L10 15.5L4.8 18.5L6 12.5L1.5 8.3L7.5 7.5L10 2Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      ),
    },
    {
      title: 'Drei aus über 100',
      body: 'Wir filtern vor, damit du in Minuten entscheidest.',
      icon: (
        <path d="M3 6L7 10L17 2M3 14L7 18L17 10" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
      ),
    },
    {
      title: 'Kostenlos für dich',
      body: 'Wir verdienen über den Anbieter, nie über dich.',
      icon: (
        <path d="M10 2V18M5 13C5 15 7 17 10 17C13 17 15 15 15 13C15 11 13 10 10 10C7 10 5 9 5 7C5 5 7 3 10 3C13 3 15 5 15 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      ),
    },
  ];

  return (
    <section className="py-16 sm:py-20">
      <div className="container-narrow">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 sm:gap-8">
          {items.map((item) => (
            <div key={item.title} className="text-center sm:text-left">
              <div className="mx-auto sm:mx-0 flex h-12 w-12 items-center justify-center rounded-2xl bg-mint/10 text-mint ring-1 ring-mint/20">
                <svg width="22" height="22" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                  {item.icon}
                </svg>
              </div>
              <h3 className="mt-4 text-lg font-bold text-cloud">{item.title}</h3>
              <p className="mt-1.5 text-[15px] text-ash leading-relaxed">{item.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
