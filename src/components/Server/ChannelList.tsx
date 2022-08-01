import { useQuery } from "@tanstack/react-query";
import { Link, useParams } from "react-router-dom";
import { supabase } from "../../supabaseClient";

export type Channel = {
  id: string;
  name: string;
  created_at: Date;
  server_id: string;
};

export function ChannelList() {
  // grab the url
  let { server } = useParams();

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
        <Link
          key={channel.id}
          to={`/${server}/${channel.id}`}
          className="text-gray-200 w-full hover:bg-gray-600 px-2 py-1 rounded-md"
        >
          # {channel.name}
        </Link>
      ))}
    </div>
  );
}
