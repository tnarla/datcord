import clsx from "clsx";

export enum StatusType {
  Online,
  Offline,
  Busy,
  Idle,
}

interface Props {
  size?: number;
  status: StatusType;
}

export default function Status({ size = 12, status }: Props) {
  return (
    <div
      className={clsx(
        "absolute bottom-0 right-0 border-current",
        status === StatusType.Online && "bg-green-600 rounded-full"
      )}
      style={{
        borderWidth: Math.ceil(size / 10),
        height: size,
        width: size,
      }}
    />
  );
}
