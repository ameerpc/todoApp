import { useState, useEffect } from 'react'
import TaskEditCont from './comps/TaskEditCont'
import Task from './comps/Task'
import taskStyles from './Todo.module.css'


const Todo = () => {
    const [todolist, setTodolist] = useState([])

    const handleSubmit = (title, para, event) => {
        event.preventDefault()
        
        if(event.target.value === 'Save') {
            console.log('Saved !')
            setTodolist(previousValue => {return [ ...previousValue, {title: title, para: para}]})
            localStorage.setItem(title, para)
        }
        else if(event.target.value === 'Delete') {
            console.log('delete')
            setTodolist(todolist.filter(item => item.title !== title))
            localStorage.removeItem(title)
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