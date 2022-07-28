import Badge from "../Badge";
import { AvatarWithStatus } from "./AvatarWithStatus";

const badgeText = [
  "Admin",
  "Nitro Booster",
  "Vape Naysh",
  "Promoter",
  "Twitch Subscriber",
];

export default function UserCard() {
  return (
    <div className="flex flex-col gap-4 rounded-lg bg-gray-900 shadow-lg p-4 overflow-hidden w-72">
      <div className="bg-indigo-400 h-11 absolute inset-0 rounded-t-lg" />
      <AvatarWithStatus size={72} />

      <div className="font-semibold text-white">VapeJuiceJordan</div>
      <div className="font-bold text-gray-600 text-sm">ROLES</div>
      <div className="flex flex-wrap gap-1">
        {badgeText.map((text) => (
          <Badge text={text} />
        ))}
      </div>
    </div>
  );
}
