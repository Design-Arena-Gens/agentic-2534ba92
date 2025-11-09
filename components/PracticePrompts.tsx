const prompts = [
  {
    title: "Line ka Guessing Game",
    description:
      "Teen data points socho (din, doodh ka price). Rough paper par seedhi line kheencho jo sab ke beech se jayegi. Kaise mehsoos hua?",
    mode: "Hands-on"
  },
  {
    title: "Spam Inbox Drama",
    description:
      "Apne inbox me last 10 emails dekho. Kaunse features (jaise ALL CAPS) tumhe spam feel karwate hain? Unko 0-1 score do.",
    mode: "Observation"
  },
  {
    title: "Threshold Experiment",
    description:
      "Ek list banao jahaan tum 0.3, 0.5, 0.8 threshold try karo. Dekho kaunse emails safe side me aa rahe hain.",
    mode: "Decision"
  }
];

export default function PracticePrompts() {
  return (
    <section className="mt-20 rounded-3xl border border-slate-200 bg-white p-8 shadow-xl shadow-saffron/10">
      <div className="flex flex-col gap-2">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-midnight">
          Practice Beats
        </p>
        <h2 className="text-2xl font-semibold text-midnight sm:text-3xl">
          Khud Try Karo, Intuition Pakka Karo
        </h2>
        <p className="max-w-3xl text-sm text-slate-600">
          In mini-experiments se dimaag me pictures aur clear ho jayengi. Maths
          formula nahi, seedha anubhav.
        </p>
      </div>

      <div className="mt-6 grid gap-6 sm:grid-cols-3">
        {prompts.map((prompt) => (
          <article
            key={prompt.title}
            className="flex h-full flex-col gap-4 rounded-3xl border border-slate-100 bg-slate-50 p-6 transition hover:-translate-y-1 hover:shadow-lg"
          >
            <span className="self-start rounded-full bg-midnight px-3 py-1 text-xs font-semibold uppercase tracking-widest text-white">
              {prompt.mode}
            </span>
            <h3 className="text-lg font-semibold text-midnight">
              {prompt.title}
            </h3>
            <p className="text-sm leading-relaxed text-slate-600">
              {prompt.description}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
