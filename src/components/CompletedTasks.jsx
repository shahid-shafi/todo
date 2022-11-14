import React from 'react'
import Task from './common/Task'
import { useSelector } from 'react-redux';

const CompletedTasks = () => {
    const list = useSelector(state => state.task.taskList)
    const completedTasks = list.filter(item => item.isCompleted === true);
    return (
        <div className=' bg-slate-400 p-4 rounded-2xl'>
            <h1 className='text-xl font-semibold text-slate-500 mb-2'>COMPLETED TASKS</h1>
            <div className='space-y-3'>
                {completedTasks.map((task) =>
                    <Task key={task.id} name={task.name} id={task.id} isCompleted={task.isCompleted} />
                )}
            </div>
        </div>
    )

}

export default CompletedTasks