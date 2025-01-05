import React from "react";

function Description() {
  return (
    <div className="space-y-6 mb-12">
      <h1 className="text-6xl md:text-8xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-teal-400 via-cyan-300 to-blue-500 tracking-tight">
        RepoVision
      </h1>
      <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
        Explore GitHub repositories by username and discover top projects,
        contributions, and innovations in seconds. Your gateway to open-source
        greatness!
      </p>
    </div>
  );
}

export default Description;
