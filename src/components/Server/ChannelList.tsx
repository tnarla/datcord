import { useQuery } from "@tanstack/react-query";
import clsx from "clsx";
import { atom, useSetAtom } from "jotai";
import { useEffect } from "react";
import { Link, NavLink, useParams } from "react-router-dom";
import { lastSeenChannelAtom } from "../../atoms";
import { supabase } from "../../supabaseClient";

export type Channel = {
  id: string;
  name: string;
  created_at: Date;
  server_id: string;
};

export function ChannelList() {
  let { server } = useParams();
  const setLastSeenChannelAtom = useSetAtom(lastSeenChannelAtom);

  const { data } = useQuery([`${server}:channels`], async () => {
    const { data } = await supabase
      .from<Channel>("Channel")
      .select("*")
      .eq("server_id", server!);
    return data;
  });

  return (
    <div className="flex flex-col gap-1 w-full">
      {data?.map((channel) => (
        <NavLink
          onClick={() => setLastSeenChannelAtom(channel.id)}
          key={channel.id}
          to={`/${server}/${channel.id}`}
          className={({ isActive }) =>
            clsx(
              "text-gray-200 w-full hover:bg-gray-600 px-2 py-1 rounded-md",
              isActive && "bg-gray-500"
            )
          }
        >
          # {channel.name}
        </NavLink>
      ))}
    </div>
  );
}
