"use client";

import { Search, Star } from "lucide-react";
import { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { FaGithub } from "react-icons/fa";
import { useRouter } from "next/navigation";

export default function Home() {
  const [username, setUsername] = useState("");
  const router = useRouter();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    router.push(`/github?username=${username}`);
  };

  return (
    <main className="min-h-screen bg-slate-50">
      {/* Hero Banner Section */}
      <div
        className="relative min-h-[85vh] bg-cover bg-fixed bg-center bg-no-repeat flex items-center justify-center"
        style={{
          backgroundImage:
            'url("https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop")',
        }}
      >
        {/* Modern Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/90 via-slate-800/80 to-transparent" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Title Section */}
          <div className="space-y-6 mb-12">
            <h1 className="text-6xl md:text-8xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-teal-400 via-cyan-300 to-blue-500 tracking-tight">
              RepoVision
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
              Explore GitHub repositories by username and discover top projects,
              contributions, and innovations in seconds. Your gateway to
              open-source greatness!
            </p>
          </div>

          {/* Search Box */}
          <form
            onSubmit={handleSearch}
            className="w-full max-w-2xl mx-auto space-y-4 sm:space-y-0 sm:flex sm:gap-4"
          >
            <div className="relative flex-1 group">
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Enter GitHub username"
                className="w-full px-6 py-4 rounded-xl text-lg bg-white/10 backdrop-blur-md 
                         text-white placeholder-gray-400 border border-gray-400/20
                         shadow-lg focus:ring-2 focus:ring-teal-500/50 focus:border-transparent
                         outline-none transition-all duration-300
                         group-hover:bg-white/20"
              />
              <AiOutlineSearch
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 
                         transition-transform group-hover:scale-110"
                size={24}
              />
            </div>
            <button
              type="submit"
              className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-teal-500 to-cyan-500 
                       text-white rounded-xl font-medium text-lg shadow-lg
                       transition-all duration-300 hover:shadow-teal-500/25
                       hover:from-teal-400 hover:to-cyan-400 focus:ring-2 
                       focus:ring-teal-500/50 focus:ring-offset-2 
                       focus:ring-offset-transparent"
            >
              Search
            </button>
          </form>

          {/* Stats Section */}
          <div className="flex flex-wrap justify-center gap-6 mt-12">
            {["1M+ Repositories", "100K+ Developers", "50K+ Organizations"].map(
              (stat) => (
                <div
                  key={stat}
                  className="px-6 py-2 rounded-full bg-white/10 backdrop-blur-sm 
                          border border-gray-400/20 text-gray-300 text-sm
                          shadow-lg hover:scale-105 transition-transform"
                >
                  {stat}
                </div>
              )
            )}
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-24 bg-gradient-to-b from-slate-900 to-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Search className="w-8 h-8 text-teal-500" />,
                title: "Quick Search",
                description:
                  "Find repositories instantly by entering a GitHub username.",
                gradient: "from-teal-500/10 to-cyan-500/10",
              },
              {
                icon: <FaGithub className="w-8 h-8 text-blue-500" />,
                title: "Browse Projects",
                description:
                  "Explore repositories and discover innovative projects.",
                gradient: "from-blue-500/10 to-indigo-500/10",
              },
              {
                icon: <Star className="w-8 h-8 text-purple-500" />,
                title: "Stay Updated",
                description:
                  "Keep track of the latest updates and contributions.",
                gradient: "from-purple-500/10 to-pink-500/10",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="relative group rounded-2xl overflow-hidden p-8 
                         bg-gradient-to-br border border-gray-700/50
                         transition-all duration-300 hover:scale-[1.02]"
                style={{
                  background: `linear-gradient(to bottom right, ${feature.gradient})`,
                }}
              >
                <div className="relative z-10">
                  <div
                    className="w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-sm 
                              flex items-center justify-center mb-6 group-hover:scale-110 
                              transition-transform duration-300"
                  >
                    {feature.icon}
                  </div>
                  <h3 className="text-2xl font-semibold text-white mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300">{feature.description}</p>
                </div>
                <div
                  className="absolute inset-0 bg-gradient-to-br opacity-0 
                             group-hover:opacity-10 transition-opacity duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <footer className="bg-slate-900 text-gray-300 py-8 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-lg">
              Powered by{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-400 font-semibold">
                RepoVision
              </span>{" "}
              - Your gateway to discovering open-source greatness.
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
