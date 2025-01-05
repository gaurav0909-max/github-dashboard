import { useMemo } from "react";

export function useFilteredRepos(repos, filter, searchTerm) {
  return useMemo(() => {
    return repos.filter((repo) => {
      const matchesLanguage = filter
        ? repo.language?.toLowerCase() === filter.toLowerCase()
        : true;
      const matchesSearch = searchTerm
        ? repo.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          repo.description?.toLowerCase().includes(searchTerm.toLowerCase())
        : true;
      return matchesLanguage && matchesSearch;
    });
  }, [repos, filter, searchTerm]);
}
