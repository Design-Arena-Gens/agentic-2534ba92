const steps = [
  {
    heading: "Sunna + Dekhna",
    detail:
      "Pehele visuals observe karo. Linear graph ko as smooth rail track aur logistic ko subway turn ke tarah imagine karo."
  },
  {
    heading: "Bol ke Samjhao",
    detail:
      "Kisi friend ko explain karne ki koshish karo. Hindi English mix allowed — target hai clarity."
  },
  {
    heading: "Reflect Karo",
    detail:
      "Ek chhota reflection likho: data se insight nikalne me tumne kya feel kiya? Kis step me sabse zyada clarity aayi?"
  }
];

export default function ReadingGuide() {
  return (
    <section className="mt-20 rounded-3xl border border-slate-200 bg-midnight p-8 text-white shadow-xl shadow-aurora/20">
      <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
        <div className="max-w-lg space-y-3">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-aurora">
            Study Ritual
          </p>
          <h2 className="text-2xl font-semibold sm:text-3xl">
            Module 1 Ko Kaise Padhna Hai
          </h2>
          <p className="text-sm text-slate-200">
            Beginners ke liye design kiya gaya flow. Har step me pause lekar
            visuals ko mehsoos karo aur apne shabdon me dobara bolo.
          </p>
        </div>
        <div className="grid flex-1 gap-4">
          {steps.map((step, index) => (
            <article
              key={step.heading}
              className="rounded-3xl border border-white/10 bg-white/5 p-6"
            >
              <span className="text-xs font-semibold uppercase tracking-[0.4em] text-saffron-300">
                Step {index + 1}
              </span>
              <h3 className="mt-2 text-lg font-semibold">{step.heading}</h3>
              <p className="mt-2 text-sm text-slate-200">{step.detail}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
