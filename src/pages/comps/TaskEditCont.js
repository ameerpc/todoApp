import { useEffect, useState } from 'react'

const TaskEditCont = () => {
    const [taskhead, setTaskhead] = useState("")
    const [taskpara, setTaskpara] = useState("")

    const handleSubmit = (event) => {
        event.preventDefault()
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input type='text' value={taskhead} onChange={(e) => setTaskhead(e.target.value)} />
                <textarea value={taskpara} onChange={(e) => setTaskpara(e.target.value)} />
                <input type='submit' value='Save' />
            </form>
        </>
    )
}

export default TaskEditCont