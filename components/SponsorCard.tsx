type SponsorCardProps = {
  name: string;
  logo: string;
  tier?: string;
  border: string;
  badge?: string;
  logoSize?: "normal" | "large";
};

const SponsorCard = ({
  name,
  logo,
  tier,
  border,
  badge,
  logoSize = "normal",
}: SponsorCardProps) => {
  const logoHeight = logoSize === "large" ? "h-32" : "h-20";

  return (
    <div
      className={`bg-white rounded-xl p-6 shadow-md hover:shadow-lg 
      transition-all duration-300 border-t-4 ${border}
      w-full max-w-[320px] h-[260px]`}
    >
      <div className="flex flex-col items-center text-center h-full justify-between">
        {/* Logo */}
        <div
          className={`${logoHeight} w-full flex items-center justify-center`}
        >
          <img
            src={logo}
            alt={`${name} Logo`}
            className="max-h-full max-w-full object-contain"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.style.display = "none";
            }}
          />
        </div>

        {/* Name */}
        <h4 className="text-sm font-semibold text-gray-800 leading-snug px-2">
          {name}
        </h4>

        {/* Tier Badge */}
        {tier && (
          <span
            className={`text-[11px] font-medium uppercase tracking-wide px-3 py-1 rounded-full ${badge}`}
          >
            {tier}
          </span>
        )}
      </div>
    </div>
  );
};

export default SponsorCard;
