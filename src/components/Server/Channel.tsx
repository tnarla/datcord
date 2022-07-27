import Feed from "./Feed";

export function Channel() {
  return (
    <div className="bg-gray-700 w-full h-screen flex flex-col">
      <div className="h-8 border-b">Title with stuff</div>
      <div className="flex mt-8 flex-1 overflow-hidden">
        <div className="flex-1 px-4">
          <Feed />
        </div>
        <div className="w-48">List of people</div>
      </div>
    </div>
  );
}
