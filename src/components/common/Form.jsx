import React, { useState } from 'react'
import Button from './Button'
import Input from './Input'
import uniqid from 'uniqid'
import { AiOutlinePlus } from 'react-icons/ai'
import { useDispatch } from 'react-redux'
import { taskActions } from '../../store/slices/taskSlice'


const Form = () => {
    const dispatch = useDispatch()
    const [name, setName] = useState("")

    const onChangeHandler = (e) => {
        setName(e.target.value)
    }

    const addTaskHandler = (e) => {
        e.preventDefault();
        let id = uniqid();
        dispatch(taskActions.addTask({
            name,
            id,
            isComlpeted: false
        }));
        setName("")
    }
    return (
        <form onSubmit={addTaskHandler} className="w-[full] flex mb-10 space-x-4">
            <Input
                classes={"w-full md:w-[500px] py-2 px-6 rounded-full outline-0"}
                name={"name"}
                type={"text"}
                value={name}
                placeholder={"Enter task"}
                OnChange={onChangeHandler}
            />

            <Button
                type={"submit"}
                text={<AiOutlinePlus />}
                classes={"px-4 rounded-full bg-green-600"}
            />
        </form>

    )
}

export default Form