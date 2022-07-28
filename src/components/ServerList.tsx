export default function ServerList() {
  return (
    <div className="flex flex-col items-center gap-4 p-4 h-screen overflow-y-auto bg-gray-900">
      <div className="w-12 h-12 rounded-[24px] transition-all hover:rounded-xl bg-indigo-400"></div>
      <div className="flex flex-col gap-4 bg-gray-800 rounded-full">
        {Array.from({ length: 6 }, () => (
          <div className="w-12 h-12 rounded-[24px] transition-all hover:rounded-xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"></div>
        ))}
      </div>
    </div>
  );
}
