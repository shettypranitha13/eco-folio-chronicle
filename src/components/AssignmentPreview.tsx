import { useEffect, useRef, useState } from "react";
import { FileText, LoaderCircle } from "lucide-react";
import pdfWorkerUrl from "pdfjs-dist/build/pdf.worker.min.mjs?url";
import type { Assignment } from "@/lib/portfolio-data";

function DocumentPreview({ url, title }: { url: string; title: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [status, setStatus] = useState<"loading" | "ready" | "error">("loading");

  useEffect(() => {
    let cancelled = false;
    let cleanup: (() => void) | undefined;
    setStatus("loading");

    async function renderPage() {
      try {
        const pdfjs = await import("pdfjs-dist");
        if (cancelled) return;
        pdfjs.GlobalWorkerOptions.workerSrc = pdfWorkerUrl;
        const task = pdfjs.getDocument({ url });
        cleanup = () => { void task.destroy(); };
        const document = await task.promise;
        const page = await document.getPage(1);
        const canvas = canvasRef.current;
        if (cancelled || !canvas) return;
        const viewport = page.getViewport({ scale: 1.5 });
        canvas.width = viewport.width;
        canvas.height = viewport.height;
        await page.render({ canvas, viewport }).promise;
        if (!cancelled) setStatus("ready");
      } catch {
        if (!cancelled) setStatus("error");
      }
    }

    void renderPage();
    return () => { cancelled = true; cleanup?.(); };
  }, [url]);

  return (
    <>
      <canvas ref={canvasRef} role="img" aria-label={`First page of ${title}`} className={`h-full w-full object-contain ${status === "ready" ? "" : "invisible"}`} />
      {status !== "ready" && (
        <div className="text-muted-foreground absolute inset-0 flex flex-col items-center justify-center gap-2 text-xs" role="status">
          {status === "loading" ? <LoaderCircle className="animate-spin motion-reduce:animate-none" size={24} /> : <FileText size={32} />}
          {status === "error" ? "Preview unavailable" : "Loading preview"}
        </div>
      )}
    </>
  );
}

export function AssignmentPreview({ assignment }: { assignment: Assignment }) {
  const url = assignment.viewUrl;
  if (url === "#") {
    return (
      <div className="text-muted-foreground flex h-full flex-col items-center justify-center gap-3 text-sm">
        <FileText size={36} strokeWidth={1.25} />
        <span>Not submitted yet</span>
      </div>
    );
  }
  if (/\.pdf(?:$|\?)/i.test(url)) return <DocumentPreview url={url} title={assignment.title} />;
  if (/\.(?:jpe?g|png|webp)(?:$|\?)/i.test(url)) {
    return <img src={url} alt={`${assignment.title} submission`} loading="lazy" className="h-full w-full object-contain" />;
  }
  return (
    <iframe
      src={url}
      title={`${assignment.title} page preview`}
      loading="lazy"
      tabIndex={-1}
      aria-hidden="true"
      className="pointer-events-none h-[400%] w-[400%] origin-top-left scale-25 border-0"
    />
  );
}