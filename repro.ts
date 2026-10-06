import type { ErrorRouteComponent, ErrorComponentProps } from "@tanstack/react-router";
const c: ErrorRouteComponent = ({ error, reset }: ErrorComponentProps) => { console.error(error); return null; };
const d: ErrorRouteComponent = ({ error, reset }: { error: Error; info?: { componentStack: string }; reset: () => void }) => { console.error(error); return null; };
console.log(c, d);
