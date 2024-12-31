"use client";
import React, { useState } from "react";
import { Code2, ExternalLink, BookOpen, Clock } from "lucide-react";

type Repo = {
  id: number;
  name: string;
  description: string;
  language: string;
  html_url: string;
  updated_at?: string; // Assuming updated_at is a string, you can adjust this as needed
};

type FilterProps = {
  repos: Repo[];
};

export default function Filter({ repos }: FilterProps) {
  console.log(repos.map((repo) => repo.updated_at));
  const [filter, setFilter] = useState<string>("");
  const [searchTerm, setSearchTerm] = useState<string>("");

  const filteredRepos = repos.filter((repo) => {
    const matchesLanguage = filter
      ? repo.language?.toLowerCase() === filter.toLowerCase()
      : true;
    const matchesSearch = searchTerm
      ? repo.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        repo.description?.toLowerCase().includes(searchTerm.toLowerCase())
      : true;
    return matchesLanguage && matchesSearch;
  });

  const languages = Array.from(
    new Set(repos.map((repo) => repo.language).filter(Boolean))
  );

  const getLanguageColor = (language: string) => {
    const colors: { [key: string]: string } = {
      JavaScript: "bg-yellow-400",
      TypeScript: "bg-blue-400",
      Python: "bg-green-400",
      Java: "bg-red-400",
      "C++": "bg-purple-400",
      Ruby: "bg-pink-400",
      default: "bg-gray-300",
    };
    return colors[language] || colors.default;
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      {/* Search and Filter Controls */}
      <div className="mb-8 space-y-6">
        {/* Search Input */}
        <div className="relative">
          <input
            type="text"
            placeholder="Search repositories..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full px-4 py-3 pl-12 bg-white/5 backdrop-blur-sm border 
                     border-gray-700 rounded-xl text-gray-200 placeholder-gray-400 
                     focus:ring-2 focus:ring-teal-500/50 focus:border-transparent
                     outline-none transition-all duration-300"
          />
          <BookOpen
            className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400"
            size={20}
          />
        </div>

        <div className="flex flex-wrap gap-3">
          <button
            onClick={() => setFilter("")}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300
                     ${
                       !filter
                         ? "bg-teal-500 text-white"
                         : "bg-gray-800 text-gray-300 hover:bg-gray-700"
                     }`}
          >
            All Languages
          </button>
          {languages.map((lang) => (
            <button
              key={lang}
              onClick={() => setFilter(lang)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300
                       ${
                         filter === lang
                           ? "bg-teal-500 text-white"
                           : "bg-gray-800 text-gray-300 hover:bg-gray-700"
                       }`}
            >
              {lang}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredRepos.map((repo) => (
          <div
            key={repo.id}
            className="group relative bg-gray-800/50 backdrop-blur-sm border border-gray-700 
                     rounded-xl p-6 hover:bg-gray-800/70 transition-all duration-300"
          >
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <h3
                  className="text-xl font-semibold text-gray-100 group-hover:text-teal-400 
                           transition-colors duration-300"
                >
                  {repo.name}
                </h3>
                <p className="mt-2 text-gray-400 line-clamp-2">
                  {repo.description || "No description provided."}
                </p>
              </div>
              <a
                href={repo.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="ml-4 p-2 rounded-lg bg-gray-700/50 hover:bg-gray-700 
                         transition-colors duration-300"
              >
                <ExternalLink
                  size={20}
                  className="text-gray-400 hover:text-white"
                />
              </a>
            </div>

            <div className="mt-4 flex items-center justify-between">
              {repo.language && (
                <div className="flex items-center gap-2">
                  <span
                    className={`w-3 h-3 rounded-full ${getLanguageColor(
                      repo.language
                    )}`}
                  />
                  <span className="text-sm text-gray-400">{repo.language}</span>
                </div>
              )}
              {repo.updated_at && (
                <div className="flex items-center gap-2 text-gray-400">
                  <p className="text-md">Last updated:</p>
                  <span className="text-sm ">
                    {new Date(repo.updated_at).toLocaleDateString()}{" "}
                    {/* Format date */}
                  </span>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {filteredRepos.length === 0 && (
        <div className="text-center py-12">
          <Code2 className="mx-auto h-12 w-12 text-gray-400" />
          <h3 className="mt-4 text-lg font-medium text-gray-300">
            No repositories found
          </h3>
          <p className="mt-2 text-gray-400">
            Try adjusting your search or filter criteria
          </p>
        </div>
      )}
    </div>
  );
}
