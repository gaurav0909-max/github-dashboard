"use client";
import React, { useState } from "react";
import { BookOpen, Code2 } from "lucide-react";
import { useFilteredRepos } from "../../../hooks/useFilteredRepos";
import RepoCard from "@/components/repo-card";
import { FilterProps } from "@/types/types";

export default function ReposFilter({ repos }: FilterProps) {
  const [filter, setFilter] = useState<string>("");
  const [searchTerm, setSearchTerm] = useState<string>("");

  const filteredRepos = useFilteredRepos(repos, filter, searchTerm);

  const languages = Array.from(
    new Set(repos.map((repo) => repo.language).filter(Boolean))
  );

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      {/* Search and Filter Controls */}
      <div className="mb-8 space-y-6">
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
        {filteredRepos.map((repo: any) => (
          <RepoCard key={repo.id} repo={repo} />
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
