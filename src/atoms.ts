import { atom } from "jotai";
import { Channel } from "./components/Server/ChannelList";
import { supabase } from "./supabaseClient";

export const lastSeenChannelAtom = atom<string | null>(null);
