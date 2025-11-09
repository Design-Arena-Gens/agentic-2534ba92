const beats = [
  {
    title: "Data se dosti",
    description:
      "Har table ek kahani hai. Pehle apni aankhon ko pattern dikhane ki aadat daalo, numbers ko sirf homework mat socho.",
    cue: "Noticing"
  },
  {
    title: "Soch ka prototype",
    description:
      "Linear regression seedha sa prototype deta hai: agar x badhe to y kitna badhega. Simple par powerful.",
    cue: "Predicting"
  },
  {
    title: "Decision ka switch",
    description:
      "Logistic regression softly haan ya na ke beech ka bridge banata hai. Confidence score ke saath.",
    cue: "Deciding"
  }
];

export default function StoryBeats() {
  return (
    <section className="mt-20 rounded-3xl border border-slate-200 bg-white p-8 shadow-xl shadow-midnight/10">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-midnight">
            Narrative Flow
          </p>
          <h2 className="text-2xl font-semibold text-midnight sm:text-3xl">
            Machine Learning Ko Kahani Ki Tarah Dekho
          </h2>
        </div>
        <span className="text-xs font-semibold uppercase tracking-[0.4em] text-saffron-600">
          feel → frame → flip
        </span>
      </div>

      <div className="mt-6 grid gap-6 sm:grid-cols-3">
        {beats.map((beat) => (
          <article
            key={beat.title}
            className="group relative overflow-hidden rounded-3xl border border-slate-100 bg-slate-50 p-6 transition hover:-translate-y-1 hover:bg-aurora/5"
          >
            <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-aurora/20 blur-2xl transition group-hover:bg-aurora/40" />
            <div className="relative flex flex-col gap-4">
              <span className="self-start rounded-full bg-midnight px-3 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-white">
                {beat.cue}
              </span>
              <h3 className="text-xl font-semibold text-midnight">
                {beat.title}
              </h3>
              <p className="text-sm leading-relaxed text-slate-600">
                {beat.description}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
