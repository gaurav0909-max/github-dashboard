export const getLanguageColor = (language: string): string => {
    const colors: { [key: string]: string } = {
        JavaScript: "bg-yellow-400",
        TypeScript: "bg-blue-400",
        Python: "bg-green-400",
        Java: "bg-red-400",
        "C++": "bg-purple-400",
        Ruby: "bg-pink-400",
        default: "bg-gray-300",
    };
    return colors[language] || colors.default;
};
