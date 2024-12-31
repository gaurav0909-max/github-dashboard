"use client";

import { Search, GitHub, Star, FileText } from "lucide-react";
import { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { FaGithub } from "react-icons/fa";
import { useRouter } from "next/navigation";

export default function Home() {
  const [username, setUsername] = useState("");
  const router = useRouter();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Redirect to /github with the username as a query parameter
    router.push(`/github?username=${username}`);
  };

  return (
    <main className="min-h-screen bg-gray-50 font-sans">
      {/* Hero Banner Section */}
      <div
        className="relative h-[500px] bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            'url("https://plus.unsplash.com/premium_photo-1678566111483-f45ad346d50a?q=80&w=2072&auto=format&fit=crop")',
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50" />
        <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col justify-center items-center h-full text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              GitHub Repository Explorer
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
              Discover and explore GitHub repositories. Search by username and
              find amazing projects and contributions from around the world.
            </p>

            {/* Search Box */}
            <form
              onSubmit={handleSearch}
              className="w-full max-w-2xl mx-auto flex gap-4 items-center"
            >
              <div className="relative flex-1">
                <input
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="Enter GitHub username"
                  className="w-full px-6 py-4 rounded-lg text-lg bg-white text-gray-800 shadow-md focus:ring-2 focus:ring-blue-400 focus:border-transparent outline-none"
                />
                <AiOutlineSearch
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400"
                  size={24}
                />
              </div>
              <button
                type="submit"
                className="px-8 py-4 bg-blue-500 hover:bg-blue-600 text-white rounded-lg font-semibold text-lg transition-colors shadow-md"
              >
                Search
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Feature 1 */}
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Search className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                Quick Search
              </h3>
              <p className="text-gray-600">
                Find repositories instantly by entering a GitHub username.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <FaGithub className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                Browse Projects
              </h3>
              <p className="text-gray-600">
                Explore repositories and discover innovative projects.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Star className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                Stay Updated
              </h3>
              <p className="text-gray-600">
                Keep track of the latest updates and contributions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
