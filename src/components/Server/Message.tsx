interface Props {
  text: string;
}

export default function Message({ text }: Props) {
  return (
    <div className="flex gap-4">
      <div className="w-12 h-12 bg-indigo-600 rounded-full flex-shrink-0"></div>
      <div className="flex flex-col">
        <div className="text-red-500 font-bold">mewtru</div>
        <div className="text-white">{text}</div>
      </div>
    </div>
  );
}
