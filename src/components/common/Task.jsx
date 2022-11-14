import React from 'react'
import { FiEdit } from "react-icons/fi";
import { MdDelete, MdCheckCircleOutline } from "react-icons/md";
import { BsCircle, BsCheck2Circle } from "react-icons/bs";
import { useDispatch } from 'react-redux';
import { taskActions } from '../../store/slices/taskSlice';

const Task = ({ id, name, isCompleted }) => {
    const dispatch = useDispatch();

    const taskCompleteHandler = (id) => {
        dispatch(taskActions.taskCompleted({ id }))
    }

    const deleteTaskHandler = (id) => {
        dispatch(taskActions.deleteTask({ id }))
    }

    return (
        <div className='flex justify-between py-2 px-4 bg-gray-300 rounded-xl shadow'>
            <div className='flex space-x-4'>
                {isCompleted ? <MdCheckCircleOutline className='mt-1' /> : <BsCircle className=' mt-1' />}
                <h1 className='text-sm'>{name}</h1>
            </div>
            <div className='flex space-x-4'>
                {/* <p className='text-sm'>12/11/2022, 08:00:00 AM</p> */}
                <div className='flex mt-1 space-x-4'>
                    {!isCompleted && <FiEdit className=' text-yellow-400 hover:cursor-pointer' />}
                    <MdDelete onClick={() => deleteTaskHandler(id)} className='text-red-600 hover:cursor-pointer' />
                    {!isCompleted && <BsCheck2Circle onClick={() => taskCompleteHandler(id)} className='text-green-600 hover:cursor-pointer' />}
                </div>
            </div>
        </div>
    )
}

export default Task