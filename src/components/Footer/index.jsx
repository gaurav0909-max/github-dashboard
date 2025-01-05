import React from 'react'

function Footer() {
    return (
        <footer className="bg-slate-900 text-gray-300 py-8 border-t border-gray-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                    <p className="text-lg">
                        Powered by{" "}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-400 font-semibold">
                            RepoVision
                        </span>{" "}
                        - Your gateway to discovering open-source greatness.
                    </p>
                </div>
            </div>
        </footer>
    )
}

export default Footer
