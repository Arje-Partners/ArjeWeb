"use client";

import { useEffect, useRef, useState } from "react";
import type { ReactNode } from "react";

// Lienzo fijo de las piezas animadas autocontenidas (HTML en /public/animaciones)
const STAGE_W = 1280;
const STAGE_H = 720;

// Pieza animada según el encuadre de animaciones:
// - El HTML se usa tal cual; el envoltorio lo escala al ancho disponible porque el lienzo mide 1280×720 fijos.
// - Solo se carga y anima cuando el contenedor está visible al 40 % y la pestaña está en primer plano;
//   al dejar de verse se desmonta el iframe, de modo que no consume nada y vuelve a empezar al reaparecer.
// - Con movimiento reducido, o por debajo de 1024 px (a menos anchura el texto escalado no se lee),
//   no se anima: se muestra la reserva estática.
// - Es decorativa: el texto de la sección ya cuenta lo que dibuja.
export default function AnimatedPiece({ src, title, fallback }: { src: string; title: string; fallback: ReactNode }) {
  const boxRef = useRef<HTMLDivElement>(null);
  const [canAnimate, setCanAnimate] = useState(false);
  const [inView, setInView] = useState(false);
  const [pageVisible, setPageVisible] = useState(true);
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    const wide = window.matchMedia("(min-width: 1024px)");
    const update = () => setCanAnimate(!reduced.matches && wide.matches);
    update();
    reduced.addEventListener("change", update);
    wide.addEventListener("change", update);
    return () => {
      reduced.removeEventListener("change", update);
      wide.removeEventListener("change", update);
    };
  }, []);

  useEffect(() => {
    const onVisibility = () => setPageVisible(!document.hidden);
    onVisibility();
    document.addEventListener("visibilitychange", onVisibility);
    return () => document.removeEventListener("visibilitychange", onVisibility);
  }, []);

  useEffect(() => {
    const box = boxRef.current;
    if (!canAnimate || !box) return;
    const io = new IntersectionObserver(([entry]) => setInView(entry.intersectionRatio >= 0.4), { threshold: [0, 0.4] });
    const ro = new ResizeObserver(() => setScale(box.offsetWidth / STAGE_W));
    io.observe(box);
    ro.observe(box);
    return () => {
      io.disconnect();
      ro.disconnect();
    };
  }, [canAnimate]);

  if (!canAnimate) return <>{fallback}</>;

  return (
    <div ref={boxRef} className="relative w-full aspect-video overflow-hidden rounded-lg bg-ros-navy" aria-hidden="true">
      {inView && pageVisible && (
        <iframe
          src={src}
          title={title}
          loading="lazy"
          tabIndex={-1}
          scrolling="no"
          className="absolute top-0 left-0 border-0 origin-top-left"
          style={{ width: STAGE_W, height: STAGE_H, transform: `scale(${scale})` }}
        />
      )}
    </div>
  );
}
