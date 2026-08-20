import type { ReactNode } from "react";
import { ArrowRightIcon } from "@/components/ui/icons";

type CommonProps = {
  children: ReactNode;
  withArrow?: boolean;
  variant?: "primary" | "secondary" | "outline" | "white";
};

type ButtonAsButton = CommonProps &
  React.ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined; onClick: () => void };

type ButtonAsLink = CommonProps &
  React.AnchorHTMLAttributes<HTMLAnchorElement> & { href: string };

export type ButtonProps = ButtonAsButton | ButtonAsLink;

const variantClasses: Record<NonNullable<CommonProps["variant"]>, string> = {
  primary: "btn-pill",
  secondary: "btn-pill-solid",
  outline: "btn-outline",
  white: "btn-ghost-white",
};

function Arrow({ className = "" }: { className?: string }) {
  return <ArrowRightIcon className={`h-4 w-4 ${className}`} />;
}

export function Button(props: ButtonAsLink): React.JSX.Element;
export function Button(props: ButtonAsButton): React.JSX.Element;
export function Button(props: ButtonProps) {
  const { children, withArrow, variant = "primary", className } = props;

  if ("href" in props && props.href !== undefined) {
    const { href, target, rel, ...rest } = props as ButtonAsLink;
    return (
      <a
        href={href}
        target={target}
        rel={rel}
        className={`${variantClasses[variant]} ${className ?? ""}`}
        {...rest}
      >
        {children}
        {withArrow && <Arrow />}
      </a>
    );
  }

  const { onClick, type = "button", ...rest } = props as ButtonAsButton;
  return (
    <button type={type} onClick={onClick} className={`${variantClasses[variant]} ${className ?? ""}`} {...rest}>
      {children}
      {withArrow && <Arrow />}
    </button>
  );
}