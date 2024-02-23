"use client";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [text, setText] = useState("");
  const [isEditing, setIsEditing] = useState(false);

  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    const target: any = e?.target;
    setText(target.value);
  };

  const handleEdit = (id: number, text: string) => {
    setIsEditing(true);
    setText(text);
  };

  const handleDelete = (id: number) => {};

  return (
    <main className="flex min-h-screen flex-col items-center justify-start p-24 gap-20">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm flex">
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          Created By
          <code className="font-mono font-bold">&nbsp;Aman Singh</code>
        </p>
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
          <Image
            src="/next.svg"
            alt="Next Logo"
            className="dark:invert"
            width={100}
            height={24}
            priority
          />
        </div>
      </div>

      <div className="flex flex-col justify-center to-do-div">
        <div className="flex items-center justify-between">
          <span className="uppercase font-extrabold text-2xl">to do list</span>
          <button
            data-tooltip-target="tooltip-default"
            type="button"
            className="text-white uppercase bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          >
            Add
          </button>
          <div
            id="tooltip-default"
            role="tooltip"
            className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700"
          >
            Tooltip content
            <div className="tooltip-arrow" data-popper-arrow></div>
          </div>
        </div>
        <div className="mt-10">
          <ol>
            <li className="flex items-center justify-between mt-5">
              <span className="text-lg text-slate-100">Aman</span>
              <div className="option flex items-center gap-3">
                <i
                  onClick={() => handleEdit(1, "Aman")}
                  className="bx bx-edit-alt cursor-pointer"
                ></i>
                <i
                  onClick={() => handleDelete(1)}
                  className="bx bx-trash cursor-pointer"
                ></i>
              </div>
            </li>
            <li className="flex items-center justify-between mt-5">
              <span className="text-lg text-slate-100">Aman</span>
              <div className="option flex items-center gap-3">
                <i className="bx bx-edit-alt"></i>
                <i className="bx bx-trash"></i>
              </div>
            </li>
          </ol>
        </div>
        <form>
          <div className="mt-5 mb-6 md:grid-cols-2 flex justify-center flex-col gap-5">
            <div className="w-full">
              <input
                onChange={handleChange}
                type="text"
                id="first_name"
                value={text}
                className="bg-gray-50  border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Enter text"
                required
              />
            </div>
            {isEditing && (
              <div className="flex justify-end">
                <button
                  type="button"
                  className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
                >
                  Save
                </button>
              </div>
            )}
          </div>
        </form>
      </div>
    </main>
  );
}
