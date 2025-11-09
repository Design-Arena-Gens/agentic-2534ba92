import { ModuleSection } from "@/content/modules";

type SectionDetailProps = {
  section: ModuleSection;
  index: number;
};

export default function SectionDetail({
  section,
  index
}: SectionDetailProps) {
  return (
    <article className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-lg shadow-aurora/10 transition hover:-translate-y-1 hover:shadow-2xl">
      <div className="absolute -top-16 left-10 h-32 w-32 rounded-full bg-aurora/20 blur-3xl" />
      <div className="relative flex flex-col gap-6 p-8">
        <div className="flex items-center gap-4">
          <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-midnight text-lg font-semibold text-white">
            {index + 1}
          </span>
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-slate-400">
              Depth 1 Concept
            </p>
            <h3 className="text-2xl font-semibold text-midnight">
              {section.title}
            </h3>
          </div>
        </div>
        <p className="text-base leading-relaxed text-slate-700">
          {section.description}
        </p>
        <div className="rounded-2xl bg-slate-50 p-5">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-midnight">
            Yaad Rakhne Layak Bindu
          </p>
          <ul className="mt-3 space-y-3 text-sm text-slate-700">
            {section.takeaway.map((point, idx) => (
              <li key={idx} className="flex gap-3">
                <span className="mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-saffron" />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </article>
  );
}
