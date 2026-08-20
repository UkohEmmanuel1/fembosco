import { StarIcon } from "@/components/ui/icons";

export function StarRating({ count = 5, size = 16 }: { count?: number; size?: number }) {
  return (
    <div
      className="flex items-center gap-0.5"
      role="img"
      aria-label="Rated 5 out of 5"
      title="Rated 5 out of 5"
    >
      {Array.from({ length: count }).map((_, i) => (
        <StarIcon key={i} width={size} height={size} className="fill-amber-400" />
      ))}
    </div>
  );
}