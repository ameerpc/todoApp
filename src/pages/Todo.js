import { useState, useEffect } from 'react'
import TaskEditCont from './comps/TaskEditCont'
import Task from './comps/Task'
import taskStyles from './Todo.module.css'


const Todo = () => {
    // Array of TASKS
    const [todolist, setTodolist] = useState([])

    /* Handle task insertion, deletion and edition */
    const handleSubmit = (taskTitle, taskPara,event) => {
        event.preventDefault()
        // 
        if(event.target.value === 'Save') {
            if(localStorage.getItem(taskTitle) === null) {
                setTodolist(
                    previousValue => {
                        return [ 
                            ...previousValue, { 
                                id: Math.floor(Math.random() * 1001), 
                                title: taskTitle, 
                                para: taskPara
                            }
                        ]
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

    /* Delete task from localStorage when it is done */
    const handleDone = (task) => {
        console.log('Done ' + task)
        setTodolist(todolist.filter(item => item.title !== task))
        localStorage.removeItem(task)
    }

    /* Initial fetch and loade tasks from localStorage */
    useEffect(() => {
        setTodolist([])
        setTodolist(
            Object.keys(localStorage).map(
                (value, index, array) => { 
                    return {id: index, title: array[index], para: localStorage.getItem(array[index])}
                    }
                )
            )
    }, [])

    return (
        <>
            <div className={taskStyles.container}>
                <div className={taskStyles.form_container}>
                    <TaskEditCont parentCallBack={handleSubmit}  />
                </div>
                <div className={taskStyles.task_container}>
                    {todolist.slice(0).reverse().map((task) => <Task key={task.id} tasktitle={task.title} taskpara={task.para} parentCallBack1 = {handleDone} />)}
                </div>
            </div>
        </>
    )
}

export default Todo