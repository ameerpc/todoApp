import { useState, useEffect } from 'react'
import TaskEditCont from './comps/TaskEditCont'
import Task from './comps/Task'
import taskStyles from './Todo.module.css'


const Todo = () => {
    const [todolist, setTodolist] = useState([])

    const handleSubmit = (taskTitle, taskPara, event) => {
        event.preventDefault()
        
        if(event.target.value === 'Save') {
            if(localStorage.getItem(taskTitle) === null) {
                const taskId = Math.floor(Math.random() * 101)
                setTodolist(
                    previousValue => {
                        return [ ...previousValue, {id: taskId, title: taskTitle, para: taskPara}]
                    })
                localStorage.setItem(taskTitle, taskPara)
                console.log('Saved !')
            }
            else console.log('Warning: task exists!')
        }
        else if(event.target.value === 'Delete') {
            if(localStorage.getItem(taskTitle) !== null) {
                setTodolist(todolist.filter(item => item.title !== taskTitle))
                localStorage.removeItem(taskTitle)
                console.log('delete')
            }
            else console.log('Warning: task not exist !')
        }
        
    }
    const handleDone = (task) => {
        console.log('Done ' + task)
        setTodolist(todolist.filter(item => item.title !== task))
        localStorage.removeItem(task)
    }

    useEffect(() => {
        setTodolist([])
        const taskKeys = Object.keys(localStorage)
        const a = taskKeys.map((value, index, array) => { return {id: index, title: array[index], para: localStorage.getItem(array[index])}})
        setTodolist(a)
    }, [])

    return (
        <>
            <div className={taskStyles.container}>
                <div className={taskStyles.form_container}>
                    <TaskEditCont parentCallBack={handleSubmit}  />
                </div>
                <div className={taskStyles.task_container}>
                    {todolist.map((task) => <Task key={task.id} tasktitle={task.title} taskpara={task.para} parentCallBack1 = {handleDone} />)}
                </div>
            </div>
        </>
    )
}

export default Todo