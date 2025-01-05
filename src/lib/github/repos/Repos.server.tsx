import { token } from "@/lib/helper";
import React from "react";

export default async function Repos({ username }: { username: string }) {
  const repos = await fetch(`https://api.github.com/users/${username}/repos`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }).then((res) => res.json());

  if (!Array.isArray(repos)) {
    return <p className="text-red-500">No repositories found for {username}</p>;
  }

  return repos;
}
