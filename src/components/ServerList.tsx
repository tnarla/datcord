import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import { supabase } from "../supabaseClient";

export default function ServerList() {
  const { data } = useQuery(["servers"], async () => {
    const { data } = await supabase.from("Server").select("*");
    return data;
  });

  return (
    <div className="flex flex-col items-center gap-4 p-4 h-screen overflow-y-auto bg-gray-900">
      <div className="w-12 h-12 rounded-[24px] transition-all hover:rounded-xl bg-indigo-400"></div>
      <div className="flex flex-col gap-4 bg-gray-800 rounded-full">
        {data?.map((data) => (
          <Link
            key={data.id}
            to={`/${data.id}`}
            className="w-12 h-12 rounded-[24px] transition-all hover:rounded-xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"
          ></Link>
        ))}
      </div>
    </div>
  );
}
