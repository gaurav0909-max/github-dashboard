import { ExternalLink, Mail, MapPin } from "lucide-react";
import Link from "next/link";
import React from "react";
import { BsTwitter } from "react-icons/bs";

function DynamicData({ user }) {
  return (
    <div className="flex flex-col gap-4 mt-4">
      {/* {user.bio && <p className="text-gray-400 text-sm">{user.bio}</p>} */}
      {user.location && (
        <p className="flex items-center text-gray-400 text-sm gap-2">
          <a
            href={`https://www.google.com/maps/search/?q=${encodeURIComponent(
              user.location
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-gray-400 text-sm gap-2"
          >
            <MapPin size={16} className="text-gray-400" />
            <span>{user.location}</span>
          </a>
        </p>
      )}
      {user.blog && (
        <Link
          href={user.blog}
          target="blank"
          className="flex items-center text-gray-400 text-sm gap-2"
        >
          <ExternalLink size={16} className="text-gray-400" />
          <span>{user.blog}</span>
        </Link>
      )}
      {user.twitter_username && (
        <div className="flex items-center text-gray-400 text-sm gap-2">
          <Link
            href={`https://x.com/${user.twitter_username}`}
            target="_blank"
            rel="noopener noreferrer"
            passHref
          >
            <p className="flex items-center text-gray-400 text-sm gap-2">
              <BsTwitter size={16} className="text-gray-400" />
              <span>{user.twitter_username}</span>
            </p>
          </Link>
        </div>
      )}

      {user.email && (
        <p className="flex items-center text-gray-400 text-sm gap-2">
          <Mail size={16} className="text-gray-400" />
          <span>{user.email}</span>
        </p>
      )}
    </div>
  );
}

export default DynamicData;
