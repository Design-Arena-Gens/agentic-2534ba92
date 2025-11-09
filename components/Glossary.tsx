const entries = [
  {
    term: "Algorithm",
    meaning:
      "Step-by-step recipe jo computer follow karta hai. Hindi me socho: 'vidhi'."
  },
  {
    term: "Regression",
    meaning:
      "Jaane waale data ko dekho aur aane waale ko guess karo. Linear regression me guess ek seedhi line hoti hai."
  },
  {
    term: "Feature",
    meaning:
      "Data ka ek attribute, jaise ghar ka area ya email me exclamation mark count."
  },
  {
    term: "Probability",
    meaning:
      "0 se 1 ke beech measure jo batata hai kitna chance hai kisi baat ka."
  },
  {
    term: "Threshold",
    meaning:
      "Ek boundary jiske upar hum 'haan' bolte hain aur neeche 'na'. Logistic regression me bohot kaam aata hai."
  }
];

export default function Glossary() {
  return (
    <section className="mt-20 rounded-3xl border border-slate-200 bg-white p-8 shadow-xl shadow-midnight/10">
      <div className="flex flex-col gap-2">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-midnight">
          Pocket Glossary
        </p>
        <h2 className="text-2xl font-semibold text-midnight sm:text-3xl">
          Shabdavali Jo Baar Baar Aayegi
        </h2>
        <p className="max-w-3xl text-sm text-slate-600">
          Hindi me English script ke saath meanings yaad rakho. Lecture ke
          beech reference ke liye ready.
        </p>
      </div>

      <dl className="mt-6 grid gap-6 sm:grid-cols-2">
        {entries.map((entry) => (
          <div
            key={entry.term}
            className="rounded-2xl border border-slate-100 bg-slate-50 p-5"
          >
            <dt className="text-sm font-semibold uppercase tracking-[0.2em] text-midnight">
              {entry.term}
            </dt>
            <dd className="mt-3 text-sm text-slate-600">{entry.meaning}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
