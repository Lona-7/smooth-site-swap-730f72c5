import { Zap, Download } from "lucide-react";

interface GameCardProps {
  title: string;
  category: string;
  version: string;
  size: string;
  image: string;
  isMod?: boolean;
  isUpdate?: boolean;
}

const GameCard = ({
  title,
  category,
  version,
  size,
  image,
  isMod = false,
  isUpdate = false,
}: GameCardProps) => {
  return (
    <a
      href="#"
      className="block"
    >
      <div className="post-item bg-card rounded-[18px] px-6 pt-6 h-full flex flex-col transition duration-300 hover:shadow-lg hover:-translate-y-1 cursor-pointer">
        {/* Status badge */}
        {isUpdate && (
          <div className="status-update">
            <span className="absolute left-2 top-1/2 -translate-y-1/2 bg-primary w-2 h-2 rounded-full"></span>
            <span className="pl-3">Updates</span>
          </div>
        )}

        {/* Image */}
        <div className="relative mx-auto">
          <img
            src={image}
            alt={title}
            className="w-[100px] h-[100px] md:w-[125px] md:h-[125px] rounded-[18px] drop-shadow-xl object-cover"
            loading="lazy"
          />
          {isMod && <div className="mod-label">Mod</div>}
        </div>

        {/* Content */}
        <div className="text-center my-4 flex-grow">
          <h3 className="font-semibold font-lato leading-snug text-foreground hover:opacity-90 transition line-clamp-2">
            {title}
          </h3>
          <p className="text-muted-foreground font-poppins text-[13px] mt-2">
            {category}
          </p>
        </div>

        {/* Stats */}
        <ul className="flex justify-between mt-auto relative pb-4 text-muted-foreground border-t border-border pt-4">
          <li className="text-center flex-1">
            <Zap className="w-4 h-4 mx-auto mb-1" />
            <span className="font-lato block text-xs">{version}</span>
          </li>
          <li className="absolute left-1/2 top-0 bottom-0 w-px bg-border"></li>
          <li className="text-center flex-1">
            <Download className="w-4 h-4 mx-auto mb-1" />
            <span className="font-lato block text-xs">{size}</span>
          </li>
        </ul>
      </div>
    </a>
  );
};

export default GameCard;
