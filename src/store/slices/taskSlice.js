import { createSlice } from "@reduxjs/toolkit";

const taskSlice = createSlice({
    name: 'task',
    initialState: {
        taskList: []
    },
    reducers: {
        addTask: (state, action) => {
            state.taskList.push({
                id: action.payload.id,
                name: action.payload.name,
                isComlpeted: action.payload.isComlpeted
            })
        },

        taskCompleted: (state, action) => {
            const id = action.payload.id;
            const list = state.taskList.map(task => {
                if (task.id === id) {
                    return { id: task.id, name: task.name, isComlpeted: true }
                }
                return task;
            })
            state.taskList = [...list]
        },

        deleteTask: (state, action) => {
            const id = action.payload.id;
            state.taskList = state.taskList.filter(task => task.id !== id)
        }
    }
})

export const taskActions = taskSlice.actions;
export default taskSlice.reducer