interface Props {
  color?: string;
  text: string;
}

export default function Badge({ color, text }: Props) {
  return (
    <span className="inline-flex items-center px-2.5 py-0.5 rounded-md text-sm font-medium bg-gray-700 text-white">
      <svg
        className="-ml-0.5 mr-1.5 h-2 w-2 text-indigo-400"
        fill="currentColor"
        viewBox="0 0 8 8"
      >
        <circle cx={4} cy={4} r={4} />
      </svg>
      {text}
    </span>
  );
}
