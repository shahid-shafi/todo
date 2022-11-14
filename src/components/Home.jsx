import React from 'react'
import Form from './common/Form'
import CompletedTasks from './CompletedTasks'
import UpcomingTasks from './UpcomingTasks'

const Home = () => {
    return (
        <div className='bg-slate-300 bg-opacity-30 p-10 rounded-xl'>
            <Form />
            <div className='space-y-10'>
                <UpcomingTasks />
                <CompletedTasks />
            </div>
        </div>
    )
}

export default Home