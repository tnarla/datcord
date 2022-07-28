import { offset, shift, useFloating } from "@floating-ui/react-dom";
import { Popover } from "@headlessui/react";
import { AvatarWithStatus } from "./AvatarWithStatus";
import UserCard from "./UserCard";

export default function MemberCard() {
  const { x, y, reference, floating, strategy } = useFloating({
    placement: "left-start",
    strategy: "fixed",
    middleware: [offset(24), shift()],
  });

  return (
    <Popover>
      <Popover.Button ref={reference}>
        <div className="flex items-center gap-2 relative">
          <div className="text-gray-700">
            <AvatarWithStatus />
          </div>
          <div className="text-[#C20D90] font-semibold">mewtru</div>
        </div>
      </Popover.Button>

      <Popover.Panel
        ref={floating}
        style={{
          position: strategy,
          top: y ?? 0,
          left: x ?? 0,
        }}
      >
        <UserCard />
      </Popover.Panel>
    </Popover>
  );
}
