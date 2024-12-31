"use client";
import React, { useState, useEffect } from "react";
import Filter from "./Filter.client";
import { useSearchParams } from "next/navigation";
import { Loader2 } from "lucide-react";

export default function GitHubPage() {
  const [username, setUsername] = useState<string>("");
  const [repos, setRepos] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string>("");
  const [profile, setProfile] = useState<any>(null);

  const searchParams = useSearchParams();

  useEffect(() => {
    const fetchRepos = async () => {
      const usernameFromUrl = searchParams.get("username");
      if (usernameFromUrl) {
        setUsername(usernameFromUrl);
        try {
          setLoading(true);

          // Fetch user profile
          const profileRes = await fetch(
            `https://api.github.com/users/${usernameFromUrl}`
          );
          if (!profileRes.ok) {
            throw new Error(
              profileRes.status === 404
                ? "User not found"
                : "Failed to fetch user profile"
            );
          }
          const profileData = await profileRes.json();
          setProfile(profileData);

          // Fetch user repositories
          const reposRes = await fetch(
            `https://api.github.com/users/${usernameFromUrl}/repos`
          );
          if (!reposRes.ok) {
            throw new Error(
              reposRes.status === 404
                ? "Repositories not found"
                : "Failed to fetch repositories"
            );
          }
          const reposData = await reposRes.json();
          setRepos(reposData);
        } catch (err) {
          setError(err instanceof Error ? err.message : "An error occurred");
        } finally {
          setLoading(false);
        }
      }
    };

    fetchRepos();
  }, [searchParams]);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center">
        <div className="text-center">
          <Loader2 className="h-12 w-12 animate-spin text-teal-500 mx-auto" />
          <p className="mt-4 text-gray-400">Loading repositories...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center">
        <div className="text-center text-gray-300">
          <h2 className="text-2xl font-bold text-red-400 mb-2">Error</h2>
          <p>{error}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="text-left mb-12">
          <div className="flex items-center justify-center space-x-12">
            {profile && (
              <img
                src={profile.avatar_url}
                alt={`${username}'s profile`}
                className="w-20 h-20 rounded-full border-4 border-teal-500"
              />
            )}
            <div>
              <h1
                className="text-4xl font-bold text-transparent bg-clip-text 
                          bg-gradient-to-r from-teal-400 via-cyan-300 to-blue-500"
              >
                {username}'s Repositories
              </h1>
              <p className="mt-4 text-gray-400 text-lg">
                Exploring {repos.length} repositories
              </p>
            </div>
          </div>
        </div>

        <Filter repos={repos} />
      </div>
    </div>
  );
}
