import Image from 'next/image'
import React from 'react'

function GithubHeader({ profile, searchType, repos, users, username }) {
    return (
        <div className="flex items-center justify-center space-x-12">
            {profile && (
                <Image
                    src={profile.avatar_url}
                    alt={`${username}'s profile`}
                    className="rounded-full border-4 border-teal-500"
                    width={100}
                    height={100}
                />
            )}
            <div>
                <h1
                    className="text-4xl font-bold text-transparent bg-clip-text 
              bg-gradient-to-r from-teal-400 via-cyan-300 to-blue-500"
                >
                    {searchType === "repos"
                        ? `Repositories of ${username}`
                        : `Users starting with ${username}`}
                </h1>
                <p className="mt-4 text-gray-400 text-lg">
                    {searchType === "repos"
                        ? `Exploring ${repos.length} repositories`
                        : `Found ${users.length} users`}
                </p>
            </div>
        </div>
    )
}

export default GithubHeader
