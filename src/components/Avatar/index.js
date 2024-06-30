import React from 'react'

export default function Avatar() {
    return (
        <div className="flex -space-x-4 rtl:space-x-reverse">
            <img className="w-10 h-10 border border-white rounded-full dark:border-gray-800" src="/Avatar.png" alt="image" />
            <img className="w-10 h-10 border border-white rounded-full dark:border-gray-800" src="/Avatar1.png" alt="image" />
            <img className="w-10 h-10 border border-white rounded-full dark:border-gray-800" src="/Avatar2.png" alt="image" />
        </div>
    )
}
