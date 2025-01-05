import React from "react";

import { featureItems } from './../../lib/utils';

export default function FeatureCard() {
    return (
        <div className="py-24 bg-gradient-to-b from-slate-900 to-slate-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 ">
                    {featureItems.map((feature, index) => (
                        <div
                            key={index}
                            className="relative group rounded-2xl overflow-hidden p-8 
                         bg-[#aed8ff] border border-gray-700/50
                         transition-all duration-300 hover:scale-[1.02]"
                            style={{
                                background: `linear-gradient(to bottom right, ${feature.gradient})`,
                            }}
                        >
                            <div className="relative z-10">
                                <div
                                    className="w-16 h-16 rounded-xl bg-white/10 backdrop-blur-sm 
                              flex items-center justify-center mb-6 group-hover:scale-110 
                              transition-transform duration-300 border-2 border-[#3e3d36]"
                                >
                                    {feature.icon}
                                </div>
                                <h3 className="text-2xl font-semibold text-black/80 mb-4">
                                    {feature.title}
                                </h3>
                                <p className="text-gray-700">{feature.description}</p>
                            </div>
                            <div
                                className="absolute inset-0 bg-gradient-to-br opacity-0 
                             group-hover:opacity-10 transition-opacity duration-300"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
