import taskStyles from './task.module.css'

const Task = (props) => {
    return (
        <>
            <div className={taskStyles.container}>
                <h3>{props.tasktitle}</h3>
                <p>{props.taskpara}</p>
                <div>
                    <button onClick={() => props.parentCallBack1(props.tasktitle)} value='Done' className={taskStyles.button}>Done</button>
                </div>
            </div>
        </>
    )
}

export default Task