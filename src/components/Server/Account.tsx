import { Menu } from "@headlessui/react";
import { CogIcon } from "@heroicons/react/solid";
import clsx from "clsx";
import { useContext } from "react";
import { AuthContext } from "../../auth/AuthProvider";
import { supabase } from "../../supabaseClient";
import { AvatarWithStatus } from "../User/AvatarWithStatus";

export function Account() {
  const user = useContext(AuthContext);
  async function signout() {
    const { error } = await supabase.auth.signOut();
  }

  return (
    <>
      <div className="flex items-center gap-2">
        <div className="text-gray-800">
          <AvatarWithStatus user={user!} />
        </div>
        <div className="text-white font-semibold text-sm">mewtru</div>
      </div>
      <Menu as="div" className="relative flex items-center">
        <Menu.Button>
          <CogIcon className="h-5 w-5 text-white" aria-hidden="true" />
        </Menu.Button>
        <Menu.Items className="absolute origin-bottom-right right-0 bottom-0 mb-8 w-36 rounded-md bg-gray-700 shadow-lg ">
          <Menu.Item>
            {({ active }) => (
              <button
                onClick={signout}
                className={clsx(
                  active && "bg-gray-800/50",
                  "group flex text-white w-full items-center rounded-md px-2 py-2 text-sm"
                )}
              >
                Sign Out
              </button>
            )}
          </Menu.Item>
        </Menu.Items>
      </Menu>
    </>
  );
}
