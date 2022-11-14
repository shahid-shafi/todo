import React from 'react'
import Task from './common/Task';
import { useSelector } from 'react-redux';
import { getUpcomingTasks } from '../utils/tasks';

const UpcomingTasks = () => {
  const taskList = getUpcomingTasks(useSelector(state => state.task.taskList))
  console.log(taskList)
  const upComingTasks = getUpcomingTasks(taskList);
  return (
    <div className=' bg-slate-400 p-4 rounded-2xl'>
      <h1 className='text-xl font-semibold text-slate-500 mb-2 space-y-2'>UPCOMING TASKS</h1>
      <div className='space-y-3'>
        {upComingTasks.map((task) =>
          <Task key={task.id} name={task.name} id={task.id} isCompleted={task.isCompleted} />
        )}
      </div>
    </div>
  )
}

export default UpcomingTasks;