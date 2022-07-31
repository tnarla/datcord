import { User } from "@supabase/supabase-js";
import Avatar from "boring-avatars";
import { useContext } from "react";
import { AuthContext } from "../../auth/AuthProvider";
import Status, { StatusType } from "./Status";

interface Props {
  size?: number;
  name?: string;
  user?: User;
}

export function AvatarWithStatus({ size = 36, name, user }: Props) {
  const userData = user?.user_metadata;

  return (
    <div className="relative inline" style={{ height: size, width: size }}>
      {userData?.picture ? (
        <img
          style={{ width: size, height: size }}
          className="rounded-full"
          src={userData.picture}
        />
      ) : (
        <Avatar
          size={size}
          name={name ?? ""}
          variant="beam"
          colors={["#92A1C6", "#146A7C", "#F0AB3D", "#C271B4", "#C20D90"]}
        />
      )}

      <Status size={Math.floor(size / 3)} status={StatusType.Online} />
    </div>
  );
}
