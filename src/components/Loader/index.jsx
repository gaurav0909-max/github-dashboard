import { Loader2 } from 'lucide-react'
import React from 'react'

function LoaderPage() {
    return (
        <div className="min-h-screen bg-gray-900 flex items-center justify-center">
            <div className="text-center">
                <Loader2 className="h-12 w-12 animate-spin text-teal-500 mx-auto" />
                <p className="mt-4 text-gray-400">Loading data...</p>
            </div>
        </div>
    )
}

export default LoaderPage
