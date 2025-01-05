// src/app/github/Users.server.tsx
import { token } from "@/lib/helper";

export default async function Users({ username }: { username: string }) {
  if (!token) {
    throw new Error(
      "GitHub token is missing. Please add it to your environment variables."
    );
  }

  const response = await fetch(
    `https://api.github.com/search/users?q=${username}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  if (!response.ok) {
    throw new Error(
      `GitHub API error: ${response.status} - ${response.statusText}`
    );
  }

  const users = await response.json();

  console.log("users", users);

  if (!users.items || users.items.length === 0) {
    return { message: `No users found for "${username}"` };
  }

  console.log(users.total_count);

  return users.items;
}
