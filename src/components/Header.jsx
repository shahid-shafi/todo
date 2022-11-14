import React from 'react'
import { CgGoogleTasks } from "react-icons/cg";

const Header = () => {
    return (
        <div className='flex w-full bg-slate-300 bg-opacity-30 text-center py-4 justify-center text-2xl rounded-xl space-x-3 mb-6'>
            <span className='text-4xl text-blue-600'><CgGoogleTasks /></span>
            <p className='font-bold text-white'>Task Tracker</p>
        </div>
    )
}

export default Header