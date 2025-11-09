import { modules } from "@/content/modules";

export default function ModuleTimeline() {
  return (
    <section className="mt-16 space-y-10">
      <div className="flex flex-col gap-2">
        <span className="text-xs font-semibold uppercase tracking-[0.3em] text-midnight/70">
          Learning Path Blueprint
        </span>
        <h2 className="text-2xl font-bold text-midnight sm:text-3xl">
          Teen Modules, Seedha Intuition
        </h2>
        <p className="max-w-3xl text-base text-slate-600 sm:text-lg">
          Har module ek mehsoos hone wali journey hai. Abhi hum Module 1 me
          deep dive kar rahe hain — baaki modules ka trailer yahan dekh lo.
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {modules.map((module) => (
          <article
            key={module.id}
            className={`relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-6 shadow-lg transition duration-300 ${
              module.status === "current"
                ? "shadow-aurora/40 ring-2 ring-aurora/40"
                : "opacity-80"
            }`}
          >
            <div
              className={`pointer-events-none absolute -left-20 top-0 h-48 w-48 rounded-full bg-gradient-to-br ${module.gradient} opacity-30 blur-3xl`}
            />
            <div className="flex flex-col gap-3">
              <span
                className={`text-xs font-semibold uppercase tracking-widest ${
                  module.status === "current"
                    ? "text-aurora"
                    : "text-slate-400"
                }`}
              >
                {module.status === "current" ? "Now Studying" : "Up Next"}
              </span>
              <h3 className="font-display text-xl font-semibold text-midnight">
                {module.title}
              </h3>
              <p className="text-sm text-slate-600">{module.subtitle}</p>
              <p className="rounded-2xl bg-slate-100/80 p-3 text-xs font-medium uppercase tracking-wide text-slate-500">
                {module.sensoryHook}
              </p>
              {module.status === "current" && (
                <ul className="mt-3 flex flex-col gap-2 text-sm text-slate-700">
                  {module.sections.map((section) => (
                    <li
                      key={section.id}
                      className="flex items-start gap-2 rounded-2xl border border-aurora/30 bg-aurora/10 p-3"
                    >
                      <span className="mt-1 h-2.5 w-2.5 flex-shrink-0 rounded-full bg-aurora shadow shadow-aurora/50" />
                      <div>
                        <h4 className="font-semibold text-midnight">
                          {section.title}
                        </h4>
                        <p className="text-xs text-slate-600">
                          {section.description}
                        </p>
                      </div>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
