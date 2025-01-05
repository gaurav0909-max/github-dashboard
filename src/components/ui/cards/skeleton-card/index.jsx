import React from "react";

const SkeletonUserCard = () => {
    return (
        <div className="group relative bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 animate-pulse">
            <div className="mt-2 flex items-center justify-between space-x-4">
                {/* Avatar skeleton */}
                <div className="w-12 h-12 bg-gray-600 rounded-full"></div>

                {/* Name skeleton */}
                <div className="flex-1 space-y-2">
                    <div className="h-6 bg-gray-600 rounded w-3/4"></div>
                    <div className="h-4 bg-gray-600 rounded w-1/2"></div>
                </div>

                {/* External link skeleton */}
                <div className="w-8 h-8 bg-gray-600 rounded"></div>
            </div>

            {/* Skeleton for additional data */}
            <div className="mt-4 space-y-2">
                <div className="h-4 bg-gray-600 rounded w-3/4"></div>
                <div className="h-4 bg-gray-600 rounded w-1/2"></div>
            </div>
        </div>
    );
};

export default SkeletonUserCard;
