export default function Header() {
  return (
    <header className="flex flex-col gap-4 rounded-3xl bg-midnight px-6 py-8 text-white shadow-2xl shadow-midnight/20 sm:px-12 sm:py-12 lg:flex-row lg:items-center lg:justify-between">
      <div className="space-y-3">
        <p className="text-sm uppercase tracking-[0.3em] text-slate-300">
          Vishva-klass Notebook
        </p>
        <h1 className="text-3xl font-bold leading-snug sm:text-4xl lg:text-5xl">
          Machine Learning ko Anubhav Karo
        </h1>
        <p className="max-w-xl text-base text-slate-200 sm:text-lg">
          Linear regression aur logistic regression ko Hindi (English script)
          me samjho — visuals, kahaaniyan, aur bilkul friendly intuitive soch.
        </p>
      </div>
      <div className="mt-8 flex items-center gap-4 rounded-2xl border border-white/20 bg-white/10 p-4 text-left text-sm text-slate-200 backdrop-blur lg:mt-0 lg:w-72 lg:flex-col">
        <span className="rounded-full bg-aurora/20 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-aurora">
          Depth 1 — Module 1
        </span>
        <p className="text-sm leading-relaxed">
          Reader ko maths ka dar nahi. Har concept ko mehsoos karne wali
          kahaniyon se jodo.
        </p>
      </div>
    </header>
  );
}
