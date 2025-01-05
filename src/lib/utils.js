import { Search, Star } from "lucide-react";
import { FaGithub } from "react-icons/fa";

export const featureItems = [
  {
    icon: <Search className="w-8 h-8 text-teal-500" />,
    title: "Quick Search",
    description: "Find repositories instantly by entering a GitHub username.",
    gradient: "from-teal-500/10 to-cyan-500/10",
  },
  {
    icon: <FaGithub className="w-8 h-8 text-blue-500" />,
    title: "Browse Projects",
    description: "Explore repositories and discover innovative projects.",
    gradient: "from-blue-500/10 to-indigo-500/10",
  },
  {
    icon: <Star className="w-8 h-8 text-purple-500" />,
    title: "Stay Updated",
    description: "Keep track of the latest updates and contributions.",
    gradient: "from-purple-500/10 to-pink-500/10",
  },
];

export const stats = [
  "1M+ Repositories",
  "100K+ Developers",
  "50K+ Organizations",
];
