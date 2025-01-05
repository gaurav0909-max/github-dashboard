"use client";
import React, { useState, useEffect, useMemo } from "react";
import { ExternalLink } from "lucide-react";
import Image from "next/image";
import Pagination from "@/components/pagination";
import DynamicData from "@/components/ui/dynamic-data/index";
import LoaderPage from "./../../../components/Loader/index";
import { token } from "@/lib/helper";
import { UserData, UserFilterProps } from "@/types/types";

const ITEMS_PER_PAGE = 6;

export default function UsersFilter({ users }: UserFilterProps) {
  const [componentData, setComponentData] = useState<{
    detailedUsers: UserData[];
    isLoading: boolean;
    searchTerm: string;
    currentPage: number;
    expandedUsers: Record<string, boolean>; // Track expanded users
  }>({
    detailedUsers: [],
    isLoading: true,
    searchTerm: "",
    currentPage: 1,
    expandedUsers: {}, // Initially, no users are expanded
  });

  // Fetch user details only once when component mounts
  useEffect(() => {
    let isMounted = true;

    const fetchUserDetails = async () => {
      try {
        const updatedUsers = await Promise.all(
          users.map(async (user) => {
            try {
              const response = await fetch(
                `https://api.github.com/users/${user.login}`,
                {
                  headers: {
                    Authorization: `token ${token}`,
                  },
                }
              );
              if (!response.ok) {
                throw new Error(`Failed to fetch data for ${user.login}`);
              }
              const data = await response.json();
              return { ...user, ...data };
            } catch (error) {
              console.error(`Error fetching data for ${user.login}:`, error);
              return { ...user, bio: "Error fetching bio" };
            }
          })
        );

        if (isMounted) {
          setComponentData((prev) => ({
            ...prev,
            detailedUsers: updatedUsers,
            isLoading: false,
          }));
        }
      } catch (error) {
        console.error("Failed to fetch user details:", error);
        if (isMounted) {
          setComponentData((prev) => ({
            ...prev,
            isLoading: false,
          }));
        }
      }
    };

    fetchUserDetails();

    return () => {
      isMounted = false;
    };
  }, [users]);

  // Memoize filtered users to prevent unnecessary recalculations
  const filteredUsers = useMemo(() => {
    return componentData.detailedUsers.filter((user) => {
      const searchLower = componentData.searchTerm.toLowerCase();
      return (
        !componentData.searchTerm ||
        user.login.toLowerCase().includes(searchLower) ||
        user.type.toLowerCase().includes(searchLower) ||
        (user.bio && user.bio.toLowerCase().includes(searchLower))
      );
    });
  }, [componentData.detailedUsers, componentData.searchTerm]);

  // Memoize pagination calculations
  const { currentUsers, totalPages } = useMemo(() => {
    const total = Math.ceil(filteredUsers.length / ITEMS_PER_PAGE);
    const startIndex = (componentData.currentPage - 1) * ITEMS_PER_PAGE;
    const current = filteredUsers.slice(
      startIndex,
      startIndex + ITEMS_PER_PAGE
    );

    return {
      currentUsers: current,
      totalPages: total,
    };
  }, [filteredUsers, componentData.currentPage]);

  const handlePageChange = (page: number) => {
    setComponentData((prev) => ({
      ...prev,
      currentPage: page,
    }));
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleSearch = (value: string) => {
    setComponentData((prev) => ({
      ...prev,
      searchTerm: value,
      currentPage: 1, // Reset page when search changes
    }));
  };

  const toggleExpanded = (userId: string) => {
    setComponentData((prev) => {
      const newExpandedUsers = { ...prev.expandedUsers };
      newExpandedUsers[userId] = !newExpandedUsers[userId]; // Toggle expanded state for the user
      return { ...prev, expandedUsers: newExpandedUsers };
    });
  };

  if (componentData.isLoading) {
    return <LoaderPage />;
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <div className="mb-8 space-y-6">
        <div className="relative">
          <input
            type="text"
            placeholder="Search users..."
            value={componentData.searchTerm}
            onChange={(e) => handleSearch(e.target.value)}
            className="w-full px-4 py-3 pl-12 bg-white/5 backdrop-blur-sm border 
                border-gray-700 rounded-xl text-gray-200 placeholder-gray-400 
                focus:ring-2 focus:ring-teal-500/50 focus:border-transparent
                outline-none transition-all duration-300"
          />
        </div>
      </div>

      {currentUsers.length > 0 ? (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {currentUsers.map((user) => (
              <div
                key={user.id}
                className="group relative bg-gray-800/50 backdrop-blur-sm border border-gray-700 
                      rounded-xl p-6 hover:bg-gray-800/70 transition-all duration-300"
              >
                <div className="mt-2 flex items-center justify-between">
                  <div className="flex items-center justify-between w-full">
                    <Image
                      src={user.avatar_url}
                      alt={user.login}
                      className="rounded-full"
                      width={100}
                      height={150}
                    />
                    <h3 className="text-2xl font-bold text-gray-100 group-hover:text-teal-400 transition-colors duration-300">
                      {user.login}
                    </h3>
                    <a
                      href={user.html_url}
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
                </div>

                {/* Bio preview with "Read more" */}
                <div className="mt-4 text-gray-400">
                  {user.bio && (
                    <>
                      <p className="text-sm">{user.bio}</p>
                      {(user.blog ||
                        user.location ||
                        user.twitter_username ||
                        user.email) && (
                        <button
                          onClick={() => toggleExpanded(user.login)}
                          className="text-teal-500 hover:text-teal-400"
                        >
                          Show More
                        </button>
                      )}
                    </>
                  )}

                  {/* Render full bio and DynamicData when "Read more" is clicked */}
                  {componentData.expandedUsers[user.login] && (
                    <>
                      <DynamicData user={user} />
                    </>
                  )}
                </div>
              </div>
            ))}
          </div>

          <Pagination
            currentPage={componentData.currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
        </>
      ) : (
        <div className="text-center text-gray-400 py-8">
          No users found matching your search criteria.
        </div>
      )}
    </div>
  );
}
