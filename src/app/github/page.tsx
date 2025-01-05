"use client";
import React from "react";
import { useSearchParams } from "next/navigation";
import LoaderPage from "./../../components/Loader/index";
import NotFoundPage from "./../../components/not-found/index";
import ReposFilter from "@/lib/github/repos/ReposFilter.client";
import UsersFilter from "@/lib/github/users/UserFilter.client";
import GithubHeader from "./header/githubHeader";
import useGitHubData from "@/hooks/useGithubData";
import { token } from "./../../lib/helper";

export default function GitHubPage() {
  const searchParams = useSearchParams();
  const searchType = searchParams.get("searchType") || ""; // Get searchType from URL

  const usernameFromUrl = searchParams.get("username") || "";
  const { profile, repos, users, loading, error } = useGitHubData(
    usernameFromUrl,
    token,
    searchType
  );

  if (loading) {
    return <LoaderPage />;
  }

  if (error) {
    return <NotFoundPage />;
  }

  return (
    <div className="min-h-screen bg-gray-900">
      <section className="max-w-7xl mx-auto px-4 py-8">
        <div className="text-left mb-12">
          <GithubHeader
            profile={profile}
            searchType={searchType}
            username={usernameFromUrl}
            repos={repos}
            users={users}
          />
        </div>

        <section className="mt-8">
          {searchType === "repos" && <ReposFilter repos={repos} />}
          {searchType === "users" && <UsersFilter users={users} />}
        </section>
      </section>
    </div>
  );
}
