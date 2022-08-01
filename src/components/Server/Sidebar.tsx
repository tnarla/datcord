import { ChevronDownIcon, CogIcon } from "@heroicons/react/solid";
import { useContext } from "react";
import { Outlet } from "react-router-dom";
import { AuthContext } from "../../auth/AuthProvider";
import { AvatarWithStatus } from "../User/AvatarWithStatus";
import { Account } from "./Account";
import { ChannelList } from "./ChannelList";

function ServerHeader() {
  return (
    <button
      type="button"
      className="flex justify-between items-center py-3 px-2"
    >
      <div className="font-bold text-white">VJJ & Mewtru</div>
      <ChevronDownIcon className="h-5 w-5 text-white" aria-hidden="true" />
    </button>
  );
}

export default function Sidebar() {
  const user = useContext(AuthContext);

  return (
    <>
      <div className="flex flex-col relative w-60 h-screen overflow-y-auto bg-gray-800">
        <div className="flex flex-col px-2">
          <ServerHeader />
          <ChannelList />
        </div>

        <div className="flex items-center justify-between absolute w-full bottom-0 bg-gray-900 p-2">
          <Account />
        </div>
      </div>
      
      <Outlet />
    </>
  );
}
