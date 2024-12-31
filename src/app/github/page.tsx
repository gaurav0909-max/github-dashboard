// src/app/github/page.tsx
"use client";

import React, { useState, useEffect } from "react";
import Repos from "./Repos.server";
import Filter from "./Filter.client";
import { useSearchParams } from "next/navigation";

export default function GitHubPage() {
  const [username, setUsername] = useState<string>("");
  const [repos, setRepos] = useState<any[]>([]);

  // Use the useSearchParams hook to fetch the username from URL
  const searchParams = useSearchParams();
  let usernameFromUrl: string | null = null;
  useEffect(() => {
    usernameFromUrl = searchParams.get("username");
    if (usernameFromUrl) {
      setUsername(usernameFromUrl);

      // Fetch repositories for the specified username
      fetch(`https://api.github.com/users/${usernameFromUrl}/repos`)
        .then((res) => res.json())
        .then((data) => {
          setRepos(data);
        });
    }
  }, [searchParams]);

  if (!username) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-6">
        GitHub Repositories for {username}
      </h1>

      {/* Pass the repositories and username to the Filter component */}
      <Filter repos={repos} username={usernameFromUrl} />
    </div>
  );
}
