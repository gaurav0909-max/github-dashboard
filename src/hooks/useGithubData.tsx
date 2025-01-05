import Users from "@/lib/github/users/users.server";
import { useState, useEffect } from "react";

const useGitHubData = (username: string, token: string, searchType: string) => {
  const [profile, setProfile] = useState<any>(null);
  const [repos, setRepos] = useState<any[]>([]);
  const [users, setUsers] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchGitHubData = async (url: string) => {
    const res = await fetch(url, {
      headers: { Authorization: `Bearer ${token}` },
    });

    if (!res.ok) {
      throw new Error(`Failed to fetch: ${url}`);
    }

    return await res.json();
  };

  const fetchProfile = async (username: string) => {
    try {
      setLoading(true);
      const profileData = await fetchGitHubData(
        `https://api.github.com/users/${username}`
      );
      setProfile(profileData);
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred");
    }
  };

  const fetchRepositories = async (username: string) => {
    try {
      const reposData = await fetchGitHubData(
        `https://api.github.com/users/${username}/repos`
      );
      setRepos(reposData);
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred");
    }
  };

  const fetchUsers = async (username: string) => {
    try {
      if (searchType === "users") {
        const userData = await Users({ username });
        setUsers(userData || []);
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred");
    }
  };

  useEffect(() => {
    if (!username) return;

    const fetchData = async () => {
      try {
        await fetchProfile(username);
        await fetchRepositories(username);
        await fetchUsers(username);
      } catch (err) {
        setError(err instanceof Error ? err.message : "An error occurred");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [username, token, searchType]);

  return { profile, repos, users, loading, error };
};

export default useGitHubData;
