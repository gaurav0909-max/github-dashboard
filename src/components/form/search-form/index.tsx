"use client";
import { useCallback } from "react";
import { useRouter } from "next/navigation";

export default function SearchForm({
  username,
  setUsername,
  searchType,
  setSearchType,
}: {
  username: string;
  setUsername: (value: string) => void;
  searchType: "users" | "repos";
  setSearchType: (value: "users" | "repos") => void;
}) {
  const router = useRouter();

  const handleSearch = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault();
      const trimmedUsername = username.trim();
      if (trimmedUsername) {
        router.push(
          `/github?searchType=${searchType}&username=${trimmedUsername}`
        );
      }
    },
    [username, searchType, router]
  );

  return (
    <form
      onSubmit={handleSearch}
      className="w-full max-w-2xl mx-auto space-y-4 sm:space-y-0 sm:flex sm:gap-4"
    >
      <div className="relative w-full">
        <div className="flex w-full">
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder={`Enter GitHub ${searchType}`}
            className="w-full px-4 py-4 pr-20 rounded-xl text-lg bg-white/10 backdrop-blur-md 
           text-white placeholder-gray-400 border border-gray-400/20
           shadow-lg focus:ring-2 focus:ring-teal-500/50 focus:border-transparent
           outline-none transition-all duration-300"
          />

          <button
            type="button"
            onClick={() =>
              setSearchType(searchType === "users" ? "repos" : "users")
            }
            className="absolute right-0 top-1/2 transform -translate-y-1/2 px-4 py-4 text-sm text-gray-400 
           rounded-xl border-2 border-gray-400/20 bg-white/10 backdrop-blur-md 
           hover:bg-white/20 transition-all duration-300 focus:ring-2 focus:ring-teal-500/50 focus:ring-offset-2"
          >
            {searchType === "users" ? "Users" : "Repositories"}
          </button>
        </div>
      </div>

      <button
        type="submit"
        disabled={!username.trim()}
        className={`w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-teal-500 to-cyan-500 
        text-white rounded-xl font-medium text-lg shadow-lg
        transition-all duration-300 focus:ring-2 
        focus:ring-teal-500/50 focus:ring-offset-2 
        focus:ring-offset-transparent 
        ${
          !username.trim()
            ? "cursor-not-allowed opacity-50"
            : "hover:shadow-teal-500/25 hover:from-teal-400 hover:to-cyan-400"
        }`}
      >
        Search
      </button>
    </form>
  );
}
