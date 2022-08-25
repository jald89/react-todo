import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Endpoints } from '../../../endpoints'
import { UserType } from '../UserList'
import { Item, WrapperTodoDetails } from './style'

type TaskType = {
    id: number;
    title: string;
    userId: number;
    completed: boolean;
}

const TodoList = () => {
    const params = useParams()
    const [tasks, setTask] = useState<TaskType[]>([])
    const [user, setUser] = useState<UserType | undefined>()

    useEffect(() => {
        (async () => {
            const userTasks = await fetch(`${Endpoints.TODOS}${params.userId}`).then((res) => res.json())
            setTask(userTasks)
            const userData = await fetch(`${Endpoints.USERS}/${params.userId}`).then((res) => res.json())
            setUser(userData)
        })();
    }, [params.userId])

    return (
        <>
            <h1><i>{user?.name}</i> to dos:</h1>
            <hr />
            {tasks.length > 0 && (<ul>
                {tasks.map((task, index) => (
                    <Item>
                        <WrapperTodoDetails>
                            <input
                                type="checkbox"
                                name="task"
                                value={task.id}
                                checked={task.completed}
                            />
                            <div>
                                <b>{task.title}</b>
                            </div>
                        </WrapperTodoDetails>
                    </Item>
                ))}
            </ul>)}
        </>
    )
}

export default TodoList
