import { useState } from 'react'
import taskStyles from './taskeditorcont.module.css'

const TaskEditCont = (props) => {
    const [taskhead, setTaskhead] = useState("")
    const [taskpara, setTaskpara] = useState("")

    return (
        <>
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
                <button onClick={(event) => {(taskhead === "" && taskpara === "")?console.log('empty task'):props.parentCallBack(taskhead, taskpara, event)}} className={taskStyles.submit} value='Delete'>Delete</button>
                <button onClick={(event) => {(taskhead === "" && taskpara === "")?console.log('empty task'):props.parentCallBack(taskhead, taskpara, event)}} className={`${taskStyles.submit} ${taskStyles.ms}`} value='Save'>Save</button>
            </div>
        </>
    )
}

export default TaskEditCont