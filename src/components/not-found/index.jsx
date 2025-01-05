import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { motion } from 'framer-motion';

const NotFoundPage = () => {
    return (
        <div className="min-h-screen bg-[#111827] flex items-center justify-center p-4">
            <div className="w-full max-w-2xl text-center space-y-8 border-2 border-gray-800 rounded-lg p-8">
                {/* Main Error Section */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                    className="space-y-2"
                >
                    <motion.div
                        initial={{ scale: 0.8 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 1 }}
                        className="flex items-center justify-center gap-4 text-8xl font-bold text-gray-700"
                    >
                        <span className="text-9xl font-mono bg-gradient-to-b from-teal-500 to-teal-700 bg-clip-text text-transparent">
                            4
                        </span>
                        <span className="text-9xl font-mono bg-gradient-to-b from-teal-500 to-teal-700 bg-clip-text text-transparent">
                            0
                        </span>
                        <span className="text-9xl font-mono bg-gradient-to-b from-teal-500 to-teal-700 bg-clip-text text-transparent">
                            4
                        </span>
                    </motion.div>

                    <div className="mt-6 space-y-4">
                        <motion.h1
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.5, duration: 1 }}
                            className="text-2xl font-bold text-gray-100"
                        >
                            Oops! This page could not be found.
                        </motion.h1>
                    </div>
                </motion.div>

                {/* Icon + Text Section */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1, duration: 1 }}
                    className="mt-8 space-y-4"
                >
                    <div className="flex justify-center items-center gap-3 text-teal-300">
                        <span className="text-6xl">
                            🚀
                        </span>
                        <p className="text-xl text-gray-200">
                            Let's get you back on track.
                        </p>
                    </div>
                </motion.div>

                {/* Action Buttons */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.5, duration: 1 }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-8"
                >
                    <motion.button
                        initial={{ x: -100 }}
                        animate={{ x: 0 }}
                        transition={{ delay: 1.7, type: 'spring', stiffness: 100 }}
                        onClick={() => window.history.back()}
                        className="flex items-center px-6 py-3 bg-teal-600 hover:bg-teal-500 rounded-lg text-white text-lg font-medium transition-colors duration-200"
                    >
                        <ArrowLeft size={18} className="mr-2" />
                        Go Back
                    </motion.button>
                    <motion.a
                        initial={{ x: 100 }}
                        animate={{ x: 0 }}
                        transition={{ delay: 1.7, type: 'spring', stiffness: 100 }}
                        href="/"
                        className="flex items-center px-6 py-3 border border-teal-500 text-teal-300 hover:bg-teal-500 hover:text-white rounded-lg text-lg font-medium transition-colors duration-200"
                    >
                        <span className="mr-2">🏠</span>
                        Take Me Home
                    </motion.a>
                </motion.div>

                {/* Status Code */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 2, duration: 1 }}
                    className="text-xs text-gray-500 border border-gray-800 rounded-full px-3 py-1 inline-block mt-6"
                >
                    Status: 404
                </motion.div>
            </div>
        </div>
    );
};

export default NotFoundPage;
