import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

/* Stroke-based set (lucide-style): crisp 1.75px strokes, consistent weight */
const stroke: IconProps = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.75,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  "aria-hidden": true,
  focusable: false,
};

/* Fill-based set for brand glyphs and ratings */
const fill: IconProps = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24",
  fill: "currentColor",
  stroke: "none",
  "aria-hidden": true,
  focusable: false,
};

export function PhoneIcon(props: IconProps) {
  return (
    <svg {...stroke} {...props}>
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

export function ClockIcon(props: IconProps) {
  return (
    <svg {...stroke} {...props}>
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  );
}

export function CartIcon(props: IconProps) {
  return (
    <svg {...stroke} {...props}>
      <circle cx="8" cy="21" r="1" />
      <circle cx="19" cy="21" r="1" />
      <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
    </svg>
  );
}

export function ArrowRightIcon(props: IconProps) {
  return (
    <svg {...stroke} {...props}>
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  );
}

export function ChevronDownIcon(props: IconProps) {
  return (
    <svg {...stroke} {...props}>
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}

export function ChevronUpIcon(props: IconProps) {
  return (
    <svg {...stroke} {...props}>
      <path d="m18 15-6-6-6 6" />
    </svg>
  );
}

export function MenuIcon(props: IconProps) {
  return (
    <svg {...stroke} {...props}>
      <path d="M4 6h16" />
      <path d="M4 12h16" />
      <path d="M4 18h16" />
    </svg>
  );
}

export function CloseIcon(props: IconProps) {
  return (
    <svg {...stroke} {...props}>
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  );
}

export function CheckIcon(props: IconProps) {
  return (
    <svg {...stroke} {...props}>
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
}

export function EnvelopeIcon(props: IconProps) {
  return (
    <svg {...stroke} {...props}>
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );
}

export function MapPinIcon(props: IconProps) {
  return (
    <svg {...stroke} {...props}>
      <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

export function HeartIcon(props: IconProps) {
  return (
    <svg {...stroke} {...props}>
      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
    </svg>
  );
}

export function CompareIcon(props: IconProps) {
  return (
    <svg {...stroke} {...props}>
      <path d="m3 16 4 4 4-4" />
      <path d="M7 20V4" />
      <path d="m21 8-4-4-4 4" />
      <path d="M17 4v16" />
    </svg>
  );
}

export function SearchIcon(props: IconProps) {
  return (
    <svg {...stroke} {...props}>
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  );
}

export function GridIcon(props: IconProps) {
  return (
    <svg {...stroke} {...props}>
      <rect width="7" height="7" x="3" y="3" rx="1" />
      <rect width="7" height="7" x="14" y="3" rx="1" />
      <rect width="7" height="7" x="14" y="14" rx="1" />
      <rect width="7" height="7" x="3" y="14" rx="1" />
    </svg>
  );
}

export function ListIcon(props: IconProps) {
  return (
    <svg {...stroke} {...props}>
      <path d="M8 6h13" />
      <path d="M8 12h13" />
      <path d="M8 18h13" />
      <path d="M3 6h.01" />
      <path d="M3 12h.01" />
      <path d="M3 18h.01" />
    </svg>
  );
}

export function FilterIcon(props: IconProps) {
  return (
    <svg {...stroke} {...props}>
      <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" />
    </svg>
  );
}

export function DownloadIcon(props: IconProps) {
  return (
    <svg {...stroke} {...props}>
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <polyline points="7 10 12 15 17 10" />
      <path d="M12 15V3" />
    </svg>
  );
}

export function TruckIcon(props: IconProps) {
  return (
    <svg {...stroke} {...props}>
      <path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2" />
      <path d="M15 18H9" />
      <path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14" />
      <circle cx="17" cy="18" r="2" />
      <circle cx="7" cy="18" r="2" />
    </svg>
  );
}

export function ShieldIcon(props: IconProps) {
  return (
    <svg {...stroke} {...props}>
      <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
}

export function AwardIcon(props: IconProps) {
  return (
    <svg {...stroke} {...props}>
      <circle cx="12" cy="8" r="6" />
      <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11" />
    </svg>
  );
}

export function BoxIcon(props: IconProps) {
  return (
    <svg {...stroke} {...props}>
      <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z" />
      <path d="m3.3 7 8.7 5 8.7-5" />
      <path d="M12 22V12" />
    </svg>
  );
}

export function ShareIcon(props: IconProps) {
  return (
    <svg {...stroke} {...props}>
      <circle cx="18" cy="5" r="3" />
      <circle cx="6" cy="12" r="3" />
      <circle cx="18" cy="19" r="3" />
      <path d="m8.59 13.51 6.83 3.98" />
      <path d="m15.41 6.51-6.82 3.98" />
    </svg>
  );
}

export function UserIcon(props: IconProps) {
  return (
    <svg {...stroke} {...props}>
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  );
}

export function PlusIcon(props: IconProps) {
  return (
    <svg {...stroke} {...props}>
      <path d="M5 12h14" />
      <path d="M12 5v14" />
    </svg>
  );
}

export function MinusIcon(props: IconProps) {
  return (
    <svg {...stroke} {...props}>
      <path d="M5 12h14" />
    </svg>
  );
}

export function TrashIcon(props: IconProps) {
  return (
    <svg {...stroke} {...props}>
      <path d="M3 6h18" />
      <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6" />
      <path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
      <path d="M10 11v6" />
      <path d="M14 11v6" />
    </svg>
  );
}

export function BoltIcon(props: IconProps) {
  return (
    <svg {...stroke} {...props}>
      <path d="M13 2 3 14h9l-1 8 10-12h-9l1-8z" />
    </svg>
  );
}

export function TagIcon(props: IconProps) {
  return (
    <svg {...stroke} {...props}>
      <path d="M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z" />
      <circle cx="7.5" cy="7.5" r="0.5" fill="currentColor" />
    </svg>
  );
}

export function CheckCircleIcon(props: IconProps) {
  return (
    <svg {...stroke} {...props}>
      <circle cx="12" cy="12" r="10" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
}

/* ---------- Fill-based brand / rating icons ---------- */

export function StarIcon(props: IconProps) {
  return (
    <svg {...fill} {...props}>
      <path d="M12 2.5l2.9 6.1 6.6.8-4.9 4.6 1.3 6.5L12 17.6l-5.9 2.9 1.3-6.5L2.5 9.4l6.6-.8L12 2.5z" />
    </svg>
  );
}

export function FacebookIcon(props: IconProps) {
  return (
    <svg {...fill} {...props}>
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

export function InstagramIcon(props: IconProps) {
  return (
    <svg {...fill} {...props}>
      <path d="M12 2.2c3.2 0 3.6 0 4.8.1 1.2.1 1.9.2 2.3.4.6.2 1 .5 1.4.9.4.4.7.8.9 1.4.2.4.4 1.1.4 2.3.1 1.2.1 1.6.1 4.8s0 3.6-.1 4.8c-.1 1.2-.2 1.9-.4 2.3-.2.6-.5 1-.9 1.4-.4.4-.8.7-1.4.9-.4.2-1.1.4-2.3.4-1.2.1-1.6.1-4.8.1s-3.6 0-4.8-.1c-1.2-.1-1.9-.2-2.3-.4-.6-.2-1-.5-1.4-.9-.4-.4-.7-.8-.9-1.4-.2-.4-.4-1.1-.4-2.3C2.2 15.6 2.2 15.2 2.2 12s0-3.6.1-4.8c.1-1.2.2-1.9.4-2.3.2-.6.5-1 .9-1.4.4-.4.8-.7 1.4-.9.4-.2 1.1-.4 2.3-.4C8.4 2.2 8.8 2.2 12 2.2zm0 1.8c-3.1 0-3.5 0-4.7.1-1.1.1-1.7.2-2.1.4-.5.2-.8.4-1.2.8-.4.4-.6.7-.8 1.2-.2.4-.3 1-.4 2.1-.1 1.2-.1 1.6-.1 4.7s0 3.5.1 4.7c.1 1.1.2 1.7.4 2.1.2.5.4.8.8 1.2.4.4.7.6 1.2.8.4.2 1 .3 2.1.4 1.2.1 1.6.1 4.7.1s3.5 0 4.7-.1c1.1-.1 1.7-.2 2.1-.4.5-.2.8-.4 1.2-.8.4-.4.6-.7.8-1.2.2-.4.3-1 .4-2.1.1-1.2.1-1.6.1-4.7s0-3.5-.1-4.7c-.1-1.1-.2-1.7-.4-2.1-.2-.5-.4-.8-.8-1.2-.4-.4-.7-.6-1.2-.8-.4-.2-1-.3-2.1-.4-1.2-.1-1.6-.1-4.7-.1zm0 3a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm0 8.2a3.2 3.2 0 1 0 0-6.4 3.2 3.2 0 0 0 0 6.4zm6.4-8.4a1.2 1.2 0 1 1-2.4 0 1.2 1.2 0 0 1 2.4 0z" />
    </svg>
  );
}

export function TwitterIcon(props: IconProps) {
  return (
    <svg {...fill} {...props}>
      <path d="M22 5.9c-.7.3-1.5.6-2.3.7.8-.5 1.5-1.3 1.8-2.3-.8.5-1.7.8-2.6 1a4.2 4.2 0 0 0-7.2 3.8A11.9 11.9 0 0 1 3 5.1a4.2 4.2 0 0 0 1.3 5.6c-.7 0-1.3-.2-1.9-.5v.1c0 2 1.5 3.7 3.4 4.1-.4.1-.7.1-1.1.1-.3 0-.5 0-.8-.1a4.2 4.2 0 0 0 3.9 2.9A8.5 8.5 0 0 1 2 18.7a12 12 0 0 0 6.3 1.8c7.6 0 11.7-6.3 11.7-11.7v-.5c.8-.6 1.5-1.3 2-2.4z" />
    </svg>
  );
}

export function LinkedInIcon(props: IconProps) {
  return (
    <svg {...fill} {...props}>
      <path d="M6.94 8.5H3.56V21h3.38V8.5zM5.25 7a1.96 1.96 0 1 0 0-3.9 1.96 1.96 0 0 0 0 3.9zM20.5 21h-3.38v-6.6c0-1.6-.03-3.6-2.2-3.6-2.2 0-2.54 1.7-2.54 3.47V21H9V8.5h3.25v1.7h.05c.45-.86 1.56-1.77 3.22-1.77 3.44 0 4.08 2.27 4.08 5.22V21z" />
    </svg>
  );
}

export function GoogleIcon(props: IconProps) {
  return (
    <svg {...stroke} {...props}>
      <path d="M22.6 12.3c0-.7-.1-1.4-.2-2H12v3.9h5.9c-.3 1.4-1.1 2.6-2.3 3.4v2.8h3.7c2.2-2 3.3-4.9 3.3-8.1z" fill="#4285F4" stroke="none" />
      <path d="M12 23c3 0 5.6-1 7.4-2.7l-3.7-2.8c-1 .7-2.3 1.1-3.7 1.1-2.9 0-5.3-1.9-6.2-4.6H2.1v2.9A11 11 0 0 0 12 23z" fill="#34A853" stroke="none" />
      <path d="M5.8 14a6.6 6.6 0 0 1 0-4V7.1H2.1a11 11 0 0 0 0 9.8l3.7-2.9z" fill="#FBBC05" stroke="none" />
      <path d="M12 5.4c1.6 0 3.1.6 4.2 1.7l3.2-3.2A11 11 0 0 0 2.1 7.1l3.7 2.9c.9-2.7 3.3-4.6 6.2-4.6z" fill="#EA4335" stroke="none" />
    </svg>
  );
}

export function WhatsAppIcon(props: IconProps) {
  const { width = 50, height = 50, className = "", ...rest } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1024 1024"
      width={width}
      height={height}
      className={className}
      aria-hidden
      focusable={false}
      {...rest}
    >
      <path
        fill="url(#whatsapp-gradient)"
        d="M1023.9 765.2c0 5.6-.2 17.8-.5 27.2-.8 23-2.7 52.6-5.4 66.2-4.1 20.3-10.4 39.5-18.5 55.4-9.7 18.9-22 35.8-36.6 50.4-14.6 14.6-31.5 26.8-50.3 36.4-16 8.2-35.3 14.4-55.7 18.5-13.4 2.7-42.8 4.5-65.7 5.3-9.4.3-21.6.5-27.1.5l-504.2-.1c-5.6 0-17.8-.2-27.2-.5-23-.8-52.6-2.6-66.1-5.4-20.3-4.1-39.5-10.4-55.4-18.5-18.9-9.7-35.8-22-50.4-36.6-14.6-14.6-26.8-31.5-36.4-50.3-8.2-16-14.4-35.3-18.5-55.7-2.7-13.4-4.5-42.8-5.3-65.7-.3-9.4-.5-21.6-.5-27.1l.1-504.2c0-5.6.2-17.8.5-27.2.8-23 2.7-52.6 5.4-66.1 4.1-20.3 10.4-39.5 18.5-55.4 9.7-18.9 22-35.8 36.6-50.4C68.5 43.6 85.4 31.4 104.2 21.9c16-8.2 35.3-14.4 55.7-18.5 13.4-2.7 42.8-4.5 65.7-5.3 9.4-.3 21.6-.5 27.1-.5l504.2.1c5.6 0 17.8.2 27.2.5 23 .8 52.6 2.7 66.1 5.4 20.3 4.1 39.5 10.4 55.4 18.5 18.9 9.7 35.8 22 50.4 36.6 14.6 14.6 26.8 31.5 36.4 50.3 8.2 16 14.4 35.3 18.5 55.7 2.7 13.4 4.5 42.8 5.3 65.7.3 9.4.5 21.6.5 27.1l-.1 504.2z"
      />
      <path
        fill="#fff"
        d="M783.3 243.2c-69.3-69.4-161.5-107.6-259.8-107.7-202.4 0-367.1 164.7-367.2 367.1 0 64.7 16.9 127.9 49 183.5l-52.1 190.2 194.7-51c53.6 29.2 114 44.7 175.5 44.7h.2c202.4 0 367.1-164.7 367.2-367.1 0-98.1-38.1-190.3-107.5-259.7zM523.5 808h-.1c-54.8 0-108.5-14.7-155.3-42.5l-11.1-6.6-115.5 30.3 30.8-112.6-7.3-11.5c-30.5-48.6-46.7-104.7-46.7-162.4.1-168.2 137-305.1 305.3-305.1 81.5 0 158.2 31.8 215.8 89.5s89.3 134.3 89.3 215.9c0 168.2-137 305.1-305.2 305.1zm167.4-228.5c-9.2-4.6-54.3-26.8-62.7-29.8-8.4-3.1-14.5-4.6-20.6 4.6-6.1 9.2-23.7 29.8-29 36-5.4 6.1-10.7 6.9-19.9 2.3-9.2-4.6-38.7-14.3-73.8-45.5-27.3-24.3-45.7-54.4-51-63.5-5.4-9.2-.6-14.1 4-18.7 4.1-4.1 9.2-10.7 13.8-16.1 4.6-5.3 6.1-9.2 9.2-15.3 3-6.1 1.5-11.5-.8-16.1-2.3-4.6-20.6-49.7-28.3-68.1-7.4-17.9-15-15.5-20.6-15.7-5.3-.3-11.5-.3-17.6-.3s-16 2.3-24.5 11.5-32.1 31.4-32.1 76.5c0 45.1 32.9 88.8 37.5 94.9 4.6 6.1 64.7 98.8 156.7 138.5 21.9 9.5 39 15.1 52.3 19.3 22 7 42 6 57.8 3.6 17.6-2.6 54.3-22.2 61.9-43.6 7.6-21.4 7.6-39.8 5.4-43.6-2.3-3.8-8.4-6.1-17.6-10.7z"
      />
      <defs>
        <linearGradient id="whatsapp-gradient" x1="512" y1="1" x2="512" y2="1025">
          <stop offset="0" stopColor="#61fd7d" />
          <stop offset="1" stopColor="#2bb826" />
        </linearGradient>
      </defs>
    </svg>
  );
}