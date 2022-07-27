import { useState } from "react";
import { useForm } from "react-hook-form";
import { PaperClipIcon, PlusCircleIcon } from "@heroicons/react/solid";
import Message from "./Message";

interface InputProps {
  onSubmit(e: any): void;
}

function Input({ onSubmit }: InputProps) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  function handleMessageSubmit(e: React.KeyboardEvent) {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSubmit(onSubmit)();
      reset();
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="relative">
      <div className="flex rounded-lg shadow-sm overflow-hidden focus-within:border-indigo-500 focus-within:ring-1 focus-within:ring-indigo-500">
        <div className="bg-gray-600 flex items-center justify-center pl-4">
          <button
            type="button"
            className="-m-2.5 w-10 h-10 rounded-full flex items-center justify-center text-gray-400 hover:text-gray-500"
          >
            <PlusCircleIcon className="h-5 w-5" aria-hidden="true" />
            <span className="sr-only">Attach a file</span>
          </button>
        </div>

        <label htmlFor="message" className="sr-only">
          Message #channel
        </label>
        <textarea
          {...register("message")}
          rows={1}
          onKeyDown={handleMessageSubmit}
          className="block w-full py-3 px-4 resize-none bg-gray-600 caret-white text-white"
          placeholder="Message #channel"
          defaultValue={""}
        />

        <div className="bg-gray-600 flex items-center justify-center pr-4">
          <button
            type="button"
            className="-m-2.5 w-10 h-10 rounded-full flex items-center justify-center text-gray-400 hover:text-gray-500"
          >
            <PaperClipIcon className="h-5 w-5" aria-hidden="true" />
            <span className="sr-only">Attach a file</span>
          </button>
        </div>
      </div>
    </form>
  );
}

export default function Feed() {
  const [feed, setFeed] = useState<string[]>([]);

  function onSubmit(data: any) {
    console.log(data);
    setFeed((prevFeed) => [...prevFeed, data.message]);
  }

  return (
    <div className="flex flex-col h-full overflow-hidden pb-4">
      <div className="flex-1 overflow-y-auto flex flex-col gap-4 my-4 pr-4">
        {feed.map((text) => (
          <Message text={text} key={text} />
        ))}
      </div>
      <Input onSubmit={onSubmit} />
    </div>
  );
}
