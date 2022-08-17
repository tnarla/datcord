export default function MessageList() {
  return (
    <div className="flex flex-col gap-1 w-full">
      {Array.from({ length: 10 }, () => (
        <div className="text-gray-200 w-full hover:bg-gray-600 px-2 py-1 rounded-md">
          Robin
        </div>
      ))}
    </div>
  );
}
