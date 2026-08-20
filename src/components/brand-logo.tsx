import logo from "@/assets/chez-nanda-logo.png";

interface BrandLogoProps {
  className?: string;
}

export function BrandLogo({ className }: BrandLogoProps) {
  return (
    <img
      src={logo}
      alt="Chez Nanda"
      width={800}
      height={245}
      className={className ?? "h-10 w-auto"}
    />
  );
}
