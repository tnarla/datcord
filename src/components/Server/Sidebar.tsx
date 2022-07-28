import { ChevronDownIcon } from "@heroicons/react/solid";
import { ChannelList } from "./ChannelList";

function ServerHeader() {
  return (
    <button type="button" className="flex justify-between items-center py-3 px-2">
      <div className="font-bold text-white">VJJ & Mewtru</div>
      <ChevronDownIcon className="h-5 w-5 text-white" aria-hidden="true" />
    </button>
  );
}

export default function Sidebar() {
  return (
    <div className="flex flex-col w-60 h-screen overflow-y-auto bg-gray-800 px-2">
      <ServerHeader />
      <ChannelList />
    </div>
  );
}
