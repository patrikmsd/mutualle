import logoMark from "@/assets/mutualle-mark.png";

type Props = { className?: string; showText?: boolean; invert?: boolean };

export function MutualleLogo({ className, showText = true, invert = true }: Props) {
  return (
    <div className={`flex items-center gap-3 ${className ?? ""}`}>
      <img
        src={logoMark}
        alt="Mutualle"
        className="h-full w-auto object-contain"
        style={invert ? { filter: "brightness(0) invert(1)" } : undefined}
      />
      {showText && (
        <div className="leading-none">
          <div className="font-display font-bold text-base tracking-[0.18em]">MUTUALLE</div>
          <div className="text-[9px] tracking-[0.3em] opacity-70">ADMINISTRADORA</div>
        </div>
      )}
    </div>
  );
}
