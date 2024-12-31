"use client";

import React, { useState } from "react";

type Repo = {
  id: number;
  name: string;
  description: string;
  language: string;
  html_url: string;
};

type FilterProps = {
  repos: Repo[];
  username: string; // Accept username as a prop
};

export default function Filter({ repos, username }: FilterProps) {
  console.log("username", username);
  const [filter, setFilter] = useState<string>("");

  // Filter repositories based on selected language
  const filteredRepos = filter
    ? repos.filter(
        (repo) => repo.language?.toLowerCase() === filter.toLowerCase()
      )
    : repos;

  // Get all unique programming languages from repos
  const languages = Array.from(
    new Set(repos.map((repo) => repo.language).filter(Boolean))
  );

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="mb-6">
        <p className="text-2xl font-semibold text-gray-800">
          {username ? `${username}'s GitHub Repositories` : "Loading..."}
        </p>
      </div>

      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700">
          Filter by Language:
        </label>
        <select
          onChange={(e) => setFilter(e.target.value)}
          value={filter}
          className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 ease-in-out"
        >
          <option value="">All Languages</option>
          {languages.map((lang) => (
            <option key={lang} value={lang}>
              {lang}
            </option>
          ))}
        </select>
      </div>

      <ul className="space-y-6">
        {filteredRepos.map((repo) => (
          <li
            key={repo.id}
            className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white rounded-xl p-4 shadow-lg hover:shadow-xl transition-shadow transform hover:scale-105"
          >
            <a
              href={repo.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg font-bold hover:underline"
            >
              {repo.name}
            </a>
            <p className="text-gray-100 mt-2">
              {repo.description || "No description provided."}
            </p>
            <span className="text-sm text-gray-300 mt-2 inline-block">
              Language: {repo.language || "N/A"}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
