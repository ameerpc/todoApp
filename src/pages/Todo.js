import { useState, useEffect } from 'react'
import Task from './comps/Task'
import taskStyles from './Todo.module.css'

const Todo = () => {
    const [todolist, setTodolist] = useState([])
    const [taskhead, setTaskhead] = useState("")
    const [taskpara, setTaskpara] = useState("")

    const handleSubmit = (event) => {
        event.preventDefault()
        
        if(event.target.value == 'Save') {
            console.log('Saved !')
            setTodolist(previousValue => {return [ ...previousValue, {title: taskhead, para: taskpara}]})
            localStorage.setItem(taskhead, taskpara)
        }
        else if(event.target.value == 'Delete') {
            console.log('delete')
            setTodolist(todolist.filter(item => item.title !== taskhead))
            localStorage.removeItem(taskhead)
        }
        else if(event.target.value == 'Done') {
            console.log('asd')
        }
        
    }
    const handleDone = (task) => {
        console.log('Done ' + task)
        setTodolist(todolist.filter(item => item.title !== task))
        localStorage.removeItem(task)
    }
    const selectTask = (event) => {
        event.preventDefault()
        setTaskhead(event.target.tasktitle)
        setTaskpara(event.target.taskpara)
        console.log('done')
    }

    useEffect(() => {
        setTodolist([])
        const taskKeys = Object.keys(localStorage)
        const a = taskKeys.map((value, index, array) => { return {id: index, title: array[index], para: localStorage.getItem(array[index])}})
        setTodolist(a)
    }, [])

    return (
        <div className={taskStyles.container}>
            <div className={taskStyles.form_container}>
                <div className={taskStyles.form}>
                    <div className={taskStyles.title}>Tasks</div>
                    <div className={taskStyles.subtitle}>Let's create/edit tasks</div> 
                    <div className={taskStyles.input_container}>
                        <input type='text' value={taskhead} onChange={(e) => setTaskhead(e.target.value)} className={taskStyles.textInput} />
                        <div className={taskStyles.cut}></div>
                        <label className={taskStyles.placeholder}>Task</label>
                    </div>
                    <div className={taskStyles.input_container}>
                        <input type='text' value={taskpara} onChange={(e) => setTaskpara(e.target.value)} className={taskStyles.textInput} />
                        <div className={taskStyles.cut}></div>
                        <label className={taskStyles.placeholder}>Discription</label>
                    </div>
                    <button onClick={handleSubmit} className={taskStyles.submit} value='Delete'>Delete</button>
                    <button onClick={handleSubmit} className={`${taskStyles.submit} ${taskStyles.ms}`} value='Save'>Save</button>
                </div>
            </div>
            <div className={taskStyles.task_container}>
                {todolist.map((task) => <Task key={task.id} tasktitle={task.title} taskpara={task.para} parentCallBack1 = {handleDone} />)}
            </div>
        </div>
    )
}

export default Todo