import { HashtagIcon, SearchIcon, UsersIcon } from "@heroicons/react/solid";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { supabase } from "../../supabaseClient";
import MemberCard from "../User/MemberCard";
import Feed from "./Feed";

function Search() {
  return (
    <div>
      <label htmlFor="search" className="sr-only">
        Search
      </label>
      <div className="relative rounded-md shadow-sm">
        <input
          type="text"
          name="search"
          id="search"
          className="focus:ring-indigo-500 focus:border-indigo-500 border-none block w-full pr-10 text-sm bg-gray-900 rounded-md py-1 pl-2"
          placeholder="Search"
        />
        <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
          <SearchIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
        </div>
      </div>
    </div>
  );
}

function ChannelTitle() {
  let { channel } = useParams();

  const { data } = useQuery([channel, 'title'], async () => {
    const { data } = await supabase
      .from("Channel")
      .select("*")
      .eq("id", channel!).single();

    return data;
  });

  return (
    <div className="flex items-center justify-between py-2 px-3 border-b border-gray-900">
      <div className="flex items-center gap-2">
        <HashtagIcon className="w-6 h-6 text-gray-400" />
        <div className="font-bold text-lg text-white">{data?.name}</div>
      </div>

      <div className="flex items-center gap-4">
        <UsersIcon className="w-6 h-6 text-gray-400" />
        <Search />
      </div>
    </div>
  );
}

export function Channel() {
  let { server, channel } = useParams();

  const { data } = useQuery([server, channel], async () => {
    const { data } = await supabase
      .from("Message")
      .select("*")
      .eq("id", channel!);

    return data;
  });

  return (
    <div className="bg-gray-700 w-full h-screen flex flex-col">
      <ChannelTitle />
      <div className="flex flex-1 overflow-hidden">
        <div className="flex-1 px-4">
          <Feed />
        </div>
        <div className="w-48 bg-gray-800 py-6 px-4">
          <div className="flex flex-col gap-2">
            {Array.from({ length: 6 }, () => (
              <MemberCard />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
