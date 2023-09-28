import React from 'react'

export const ShowTask = ({ tasklist, setTasklist }) => {

    const handleDelete = (id) => {
        const updatedTasklist = tasklist.filter(task => task.id !== id);
        setTasklist(updatedTasklist);

    }

    return (
        <section className="showTask">
            <div className="head show1">
                <div>
                    <span className='title'>ToDo</span>
                    <span className='count'>{tasklist.length}</span>
                </div>
                <button className="clearAll" onClick={() => setTasklist([])}>Clear All</button>
            </div>
            <ul>
                {tasklist.map((task) => (
                    <li key={task.id}>
                        <p>
                            <span className="name">{task.name}</span>
                            <span className="time">{task.time} </span>
                        </p>
                        <i className="bi bi-trash" onClick={() => handleDelete(task.id)}></i>
                    </li>))}
            </ul>
        </section>
    )
}
