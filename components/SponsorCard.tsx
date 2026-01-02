type SponsorCardProps = {
  name: string;
  logo: string;
  tier?: string;
  border: string;
  badge?: string;
};

const SponsorCard = ({ name, logo, tier, border, badge }: SponsorCardProps) => {
  return (
    <div
      className={`bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 
          border-t-4 ${border}
          w-full sm:w-[240px] md:w-[260px] lg:w-[280px] xl:w-[286px]
          h-[260px] flex items-center justify-center`}
    >
      <div className="flex flex-col items-center text-center h-full justify-between">
        {/* Logo */}
        <div className="h-20 w-full flex items-center justify-center">
          <img
            src={logo}
            alt={`${name} Logo`}
            className="h-full w-full object-contain"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.style.display = "none";
            }}
          />
        </div>

        {/* Name */}
        <h4 className="text-sm font-semibold text-gray-800 leading-tight px-1">
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
