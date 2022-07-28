import Avatar from "boring-avatars";
import Status, { StatusType } from "./Status";

interface Props {
  size?: number;
  name?: string;
}

export function AvatarWithStatus({ size = 36, name }: Props) {
  return (
    <div className="relative inline" style={{ height: size, width: size }}>
      <Avatar
        size={size}
        name={name ?? ""}
        variant="beam"
        colors={["#92A1C6", "#146A7C", "#F0AB3D", "#C271B4", "#C20D90"]}
      />

      <Status size={Math.floor(size / 3)} status={StatusType.Online} />
    </div>
  );
}
