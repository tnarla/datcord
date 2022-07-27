import { ChannelList } from "./ChannelList";

export default function Sidebar() {
  return (
    <div className="flex flex-col items-center w-48 h-screen overflow-y-auto bg-gray-800 px-2">
      <ChannelList />
    </div>
  );
}
