import { offset, shift, useFloating } from "@floating-ui/react-dom";
import { Popover } from "@headlessui/react";
import { Tooltip } from "../Tooltip";

interface Props {
  text: string;
}

export default function Message({ text }: Props) {
  const { x, y, reference, floating, strategy } = useFloating({
    placement: "right-end",
    strategy: "fixed",
    middleware: [offset(24), shift()],
  });

  return (
    <Tooltip contents="hello" placement="top-end" offsetAmount={-12}>
      <div className="flex gap-4 hover:bg-gray-800/30 p-2">
        <div className="w-12 h-12 bg-indigo-600 rounded-full flex-shrink-0 cursor-pointer"></div>
        <div className="flex flex-col">
          <div className="flex items-center gap-4">
            <div className="text-red-500 font-semibold cursor-pointer hover:underline hover:underline-offset-2">
              mewtru
            </div>
            <div className="text-gray-500 text-xs">Today at 10:45 AM</div>
          </div>
          <div className="text-white">{text}</div>
        </div>
      </div>
    </Tooltip>
  );
}
