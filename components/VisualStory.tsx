import { useMemo } from "react";

const scatterPoints = [
  { x: 20, y: 130 },
  { x: 60, y: 110 },
  { x: 100, y: 90 },
  { x: 140, y: 80 },
  { x: 180, y: 60 },
  { x: 220, y: 50 }
];

const logisticPoints = Array.from({ length: 50 }).map((_, index) => {
  const x = index / 49;
  const y = 1 / (1 + Math.exp(-12 * (x - 0.5)));
  return { x: 20 + x * 220, y: 200 - y * 160 };
});

export default function VisualStory() {
  const logisticPath = useMemo(() => {
    return logisticPoints.reduce((acc, point, idx) => {
      const command = `${idx === 0 ? "M" : "L"}${point.x.toFixed(
        2
      )} ${point.y.toFixed(2)}`;
      return `${acc} ${command}`;
    }, "");
  }, []);

  return (
    <section className="mt-20 grid gap-10 lg:grid-cols-[1.1fr,0.9fr]">
      <article className="rounded-3xl border border-slate-200 bg-white p-6 shadow-xl shadow-aurora/20">
        <div className="flex flex-col gap-5">
          <div className="flex items-center justify-between gap-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-midnight">
                Visual Studio
              </p>
              <h3 className="text-xl font-semibold text-midnight">
                Linear Regression Scene
              </h3>
            </div>
            <span className="rounded-full bg-aurora/10 px-3 py-1 text-xs font-medium text-aurora">
              bazaar day dream
            </span>
          </div>

          <p className="text-sm leading-relaxed text-slate-600">
            Graph me har point ek din ke aam ki price ko dikhata hai. Line woh
            friend hai jo poore bazaar ko dekh kar bolta hai — “kal around yeh
            price hoga.” Seedhi line thoughtful average nikal kar future guess
            karti hai.
          </p>

          <div className="overflow-hidden rounded-2xl border border-slate-200 bg-gradient-to-br from-slate-900 via-midnight to-slate-900 p-6">
            <svg
              viewBox="0 0 260 200"
              className="h-48 w-full text-white"
              role="img"
              aria-label="Linear regression line with scatter points"
            >
              <defs>
                <linearGradient id="lineGradient" x1="0" x2="1" y1="0" y2="0">
                  <stop offset="0%" stopColor="#38bdf8" />
                  <stop offset="100%" stopColor="#fdb714" />
                </linearGradient>
              </defs>
              <rect x="0" y="0" width="260" height="200" fill="#0f172a" />
              <g stroke="#475569" strokeDasharray="4 6">
                <line x1="30" y1="180" x2="30" y2="20" />
                <line x1="30" y1="180" x2="240" y2="180" />
              </g>
              <text x="36" y="32" fontSize="12" fill="#cbd5f5">
                Price
              </text>
              <text x="200" y="196" fontSize="12" fill="#cbd5f5">
                Din
              </text>
              <line
                x1="30"
                y1="150"
                x2="240"
                y2="50"
                stroke="url(#lineGradient)"
                strokeWidth="3"
              />
              {scatterPoints.map((point, idx) => (
                <circle
                  key={idx}
                  cx={point.x + 30}
                  cy={point.y}
                  r="6"
                  fill="#fdb714"
                  opacity="0.85"
                />
              ))}
            </svg>
          </div>

          <ul className="grid gap-3 text-sm text-slate-600 sm:grid-cols-2">
            <li className="rounded-2xl border border-aurora/30 bg-aurora/10 p-3">
              <strong className="block text-midnight">Slope = Raftar</strong>
              Jab din badhe to price kitna upar jayega, iss rate ko slope bolte
              hain.
            </li>
            <li className="rounded-2xl border border-saffron/30 bg-saffron/10 p-3">
              <strong className="block text-midnight">
                Intercept = Starting point
              </strong>
              Din zero ho tab line kaha se start karti hai, woh base idea deta
              hai.
            </li>
          </ul>
        </div>
      </article>

      <article className="rounded-3xl border border-slate-200 bg-white p-6 shadow-xl shadow-saffron/20">
        <div className="flex flex-col gap-5">
          <div className="flex items-center justify-between gap-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-midnight">
                Visual Studio
              </p>
              <h3 className="text-xl font-semibold text-midnight">
                Logistic Regression Scene
              </h3>
            </div>
            <span className="rounded-full bg-saffron/10 px-3 py-1 text-xs font-medium text-saffron-600">
              email spam switch
            </span>
          </div>

          <p className="text-sm leading-relaxed text-slate-600">
            Imagine karo tumhara inbox. Logistic regression ek soft switch hai
            jo step by step decide karta hai ki email spam hai ya safe. Middle
            zone me judgement sabse zyada sharp hoti hai.
          </p>

          <div className="overflow-hidden rounded-2xl border border-slate-200 bg-gradient-to-br from-white via-slate-50 to-slate-100 p-6">
            <svg
              viewBox="0 0 260 200"
              className="h-48 w-full text-slate-800"
              role="img"
              aria-label="Logistic regression S-curve"
            >
              <g stroke="#94a3b8" strokeDasharray="4 6">
                <line x1="30" y1="180" x2="30" y2="20" />
                <line x1="30" y1="180" x2="240" y2="180" />
                <line x1="30" y1="60" x2="240" y2="60" />
              </g>
              <text x="36" y="36" fontSize="12" fill="#0f172a">
                Probability (Spam)
              </text>
              <text x="150" y="196" fontSize="12" fill="#0f172a">
                Email features score
              </text>
              <path
                d={logisticPath}
                fill="none"
                stroke="#f97316"
                strokeWidth="4"
                strokeLinecap="round"
              />
              <circle cx="150" cy="120" r="10" fill="#38bdf8" />
              <text x="165" y="125" fontSize="11" fill="#0f172a">
                0.6 → Spam?
              </text>
              <circle cx="210" cy="70" r="10" fill="#dc2626" />
              <text x="225" y="75" fontSize="11" fill="#0f172a">
                0.9 → Haan
              </text>
            </svg>
          </div>

          <ul className="grid gap-3 text-sm text-slate-600 sm:grid-cols-2">
            <li className="rounded-2xl border border-aurora/20 bg-aurora/5 p-3">
              <strong className="block text-midnight">
                Mid zone = sabse mehsoos zone
              </strong>
              Logistic curve ka beech sabse zyada sensitive hota hai decision
              me.
            </li>
            <li className="rounded-2xl border border-saffron/20 bg-saffron/5 p-3">
              <strong className="block text-midnight">
                Threshold set karna tumhara haath
              </strong>
              Business ya app decide kar sakta hai ki 0.5 se pehle haan bolni ya
              baad me.
            </li>
          </ul>
        </div>
      </article>
    </section>
  );
}
