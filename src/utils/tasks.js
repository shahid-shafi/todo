export const getUpcomingTasks = array => {
    return array.filter((task , index, array)=> task.isCompleted === false)
}

export const getCompletedTasks = array => {
    return array.filter(task => task.isCompleted === true)
}