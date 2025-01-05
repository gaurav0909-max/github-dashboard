import { getLanguageColor } from "@/lib/languageColor";
import { Repo } from "@/types/types";
import { ExternalLink } from "lucide-react";

type RepoCardProps = {
  repo: Repo;
};

export default function RepoCard({ repo }: RepoCardProps) {
  return (
    <div
      key={repo.id}
      className="group relative bg-gray-800/50 backdrop-blur-sm border border-gray-700 
                 rounded-xl p-6 hover:bg-gray-800/70 transition-all duration-300"
    >
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <h3
            className="text-xl font-semibold text-gray-100 group-hover:text-teal-400 
                     transition-colors duration-300"
          >
            {repo.name}
          </h3>
          <p className="mt-2 text-gray-400 line-clamp-2">
            {repo.description || "No description provided."}
          </p>
        </div>
        <a
          href={repo.html_url}
          target="_blank"
          rel="noopener noreferrer"
          className="ml-4 p-2 rounded-lg bg-gray-700/50 hover:bg-gray-700 
                   transition-colors duration-300"
        >
          <ExternalLink size={20} className="text-gray-400 hover:text-white" />
        </a>
      </div>

      <div className="mt-4 flex items-center justify-between">
        {repo.language && (
          <div className="flex items-center gap-2">
            <span
              className={`w-3 h-3 rounded-full ${getLanguageColor(
                repo.language
              )}`}
            />
            <span className="text-sm text-gray-400">{repo.language}</span>
          </div>
        )}
        {repo.updated_at && (
          <div className="flex items-center gap-2 text-gray-400">
            <p className="text-md">Last updated:</p>
            <span className="text-sm ">
              {new Date(repo.updated_at).toLocaleDateString()}{" "}
            </span>
          </div>
        )}
      </div>
    </div>
  );
}
