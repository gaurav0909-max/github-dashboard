// src/app/github/Repos.server.tsx
import React from "react";

type Repo = {
  id: number;
  name: string;
  description: string;
  language: string;
  html_url: string;
};

export default async function Repos({ username }: { username: string }) {
  const repos = await fetch(
    `https://api.github.com/users/${username}/repos`
  ).then((res) => res.json());

  if (!Array.isArray(repos)) {
    return <p className="text-red-500">No repositories found for {username}</p>;
  }

  return repos;
}
