import { useMemo, useState } from "react";
import {
  approaches,
  caseStudyStatus,
  dittoResults,
  graphRagDemo,
  pipelineStages,
} from "../data/portfolio";

type SortKey = "pair" | "confidence" | "correct";

export function PacerDeepDive() {
  const [activeApproach, setActiveApproach] = useState(2);
  const [activeStage, setActiveStage] = useState(0);
  const [activeDemo, setActiveDemo] = useState(0);
  const [sortKey, setSortKey] = useState<SortKey>("confidence");
  const [sortAsc, setSortAsc] = useState(false);

  const sortedDitto = useMemo(() => {
    return [...dittoResults].sort((a, b) => {
      const mul = sortAsc ? 1 : -1;
      if (sortKey === "pair") return mul * a.pair.localeCompare(b.pair);
      if (sortKey === "correct")
        return mul * (Number(a.correct) - Number(b.correct));
      return mul * (a.confidence - b.confidence);
    });
  }, [sortKey, sortAsc]);

  const toggleSort = (key: SortKey) => {
    if (sortKey === key) setSortAsc(!sortAsc);
    else {
      setSortKey(key);
      setSortAsc(false);
    }
  };

  return (
    <div className="space-y-8 mt-6">
      <div className="section-card rounded-xl p-5 border-accent/20">
        <p className="text-muted text-sm leading-relaxed">
          SCALES&apos;s challenge: recognizing that &quot;H2O&quot; and
          &quot;Water&quot; refer to the same entity at 1.28M federal court case
          scale. Three approaches tried — two abandoned. Here&apos;s what shipped.
        </p>
      </div>

      <div>
        <h4 className="font-display font-semibold mb-3">Three Approaches</h4>
        <div className="grid sm:grid-cols-3 gap-3">
          {approaches.map((a, i) => (
            <button
              key={a.name}
              onClick={() => setActiveApproach(i)}
              className={`text-left section-card rounded-xl p-4 transition-all ${
                activeApproach === i ? "border-accent/50 ring-1 ring-accent/20" : ""
              }`}
            >
              {a.shipped && (
                <span className="text-[10px] px-2 py-0.5 rounded-full bg-accent/20 text-accent">
                  Shipped
                </span>
              )}
              <p className="font-medium text-sm mt-1">{a.name}</p>
              <p className="text-xs text-muted mt-2">{a.description}</p>
              <p className="text-xs text-accent/80 mt-2">{a.outcome}</p>
            </button>
          ))}
        </div>
      </div>

      <div>
        <h4 className="font-display font-semibold mb-2">
          Ditto Stress Test — Found Broken, Fixed
        </h4>
        <p className="text-xs text-muted mb-3">
          Threshold 0.85 → 0.95 + first-name veto. Result: 3 correct merges, 0 errors.
        </p>
        <div className="overflow-x-auto">
          <table className="w-full text-xs section-card rounded-xl overflow-hidden">
            <thead>
              <tr className="border-b border-border bg-white/5">
                {(["pair", "confidence", "correct"] as SortKey[]).map((key) => (
                  <th key={key} className="text-left p-3">
                    <button onClick={() => toggleSort(key)} className="hover:text-accent capitalize">
                      {key === "correct" ? "Outcome" : key}
                      {sortKey === key ? (sortAsc ? " ↑" : " ↓") : ""}
                    </button>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {sortedDitto.map((row) => (
                <tr key={row.pair} className="border-b border-border/40">
                  <td className="p-3 font-mono">{row.pair}</td>
                  <td className="p-3">{row.confidence.toFixed(4)}</td>
                  <td className={`p-3 ${row.correct ? "text-green-400" : "text-red-400"}`}>
                    {row.correct ? "✅ Correct" : "❌ Wrong"}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div>
        <h4 className="font-display font-semibold mb-3">4-Stage Pipeline</h4>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-3">
          {pipelineStages.map((s, i) => (
            <button
              key={s.title}
              onClick={() => setActiveStage(i)}
              className={`section-card rounded-lg p-3 text-left ${
                activeStage === i ? "border-accent/50" : ""
              }`}
            >
              <span className="text-accent font-bold text-lg">{s.step}</span>
              <p className="text-sm font-medium mt-1">{s.title}</p>
              <p className="text-[10px] text-muted font-mono">{s.file}</p>
            </button>
          ))}
        </div>
        <div className="section-card rounded-xl p-4 text-sm text-muted">
          {pipelineStages[activeStage].detail}
        </div>
      </div>

      <div>
        <h4 className="font-display font-semibold mb-3">GraphRAG Chat Demo</h4>
        <div className="section-card rounded-xl overflow-hidden">
          <div className="flex border-b border-border">
            {graphRagDemo.map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveDemo(i)}
                className={`flex-1 px-3 py-2 text-xs ${
                  activeDemo === i ? "bg-accent/10 text-accent" : "text-muted"
                }`}
              >
                Q{i + 1}
              </button>
            ))}
          </div>
          <div className="p-4 space-y-3 text-sm">
            <div>
              <p className="text-[10px] text-muted uppercase mb-1">Question</p>
              <p>{graphRagDemo[activeDemo].question}</p>
            </div>
            <div>
              <p className="text-[10px] text-muted uppercase mb-1">Cypher</p>
              <pre className="text-[11px] font-mono bg-black/30 rounded p-3 overflow-x-auto text-accent/90">
                {graphRagDemo[activeDemo].cypher}
              </pre>
            </div>
            <div>
              <p className="text-[10px] text-muted uppercase mb-1">Answer</p>
              <p className="text-muted">{graphRagDemo[activeDemo].answer}</p>
            </div>
          </div>
        </div>
      </div>

      <div>
        <h4 className="font-display font-semibold mb-3">Status</h4>
        <ul className="space-y-2">
          {caseStudyStatus.map((item) => (
            <li key={item.text} className="flex gap-2 text-sm text-muted">
              <span>{item.done ? "✅" : "⏳"}</span>
              {item.text}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
