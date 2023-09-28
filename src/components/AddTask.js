import React from 'react'

export const AddTask = ({ tasklist, setTasklist }) => {
    const handleSubmit = (e) => {
        e.preventDefault();
        const date = new Date();
        const newTask = { id: date.getTime(), name: e.target.task.value, time: `${date.toLocaleTimeString()}${date.toLocaleDateString()}` }
        setTasklist([...tasklist, newTask]);
        e.target.task.value = "";

    }

    return (
        <section >
            <form className='frm' onSubmit={handleSubmit}>
                <input className='txt' type="text" name='task' autoComplete='off' placeholder='Add Task' />
                <button className='btn' type='submit'>Add</button>
            </form>
        </section>
    )
}
