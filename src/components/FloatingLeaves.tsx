import { motion } from "motion/react";
import { Leaf } from "lucide-react";

const leaves = [
  { left: "8%", delay: 0, dur: 18, size: 18 },
  { left: "22%", delay: 4, dur: 22, size: 14 },
  { left: "41%", delay: 8, dur: 26, size: 22 },
  { left: "58%", delay: 2, dur: 20, size: 16 },
  { left: "74%", delay: 10, dur: 24, size: 20 },
  { left: "89%", delay: 6, dur: 19, size: 15 },
];

export function FloatingLeaves() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      {leaves.map((l, i) => (
        <motion.span
          key={i}
          className="text-leaf/50 absolute -top-10"
          style={{ left: l.left }}
          animate={{ y: ["-5vh", "105vh"], rotate: [0, 320], opacity: [0, 0.8, 0] }}
          transition={{ duration: l.dur, delay: l.delay, repeat: Infinity, ease: "linear" }}
        >
          <Leaf size={l.size} />
        </motion.span>
      ))}
    </div>
  );
}
