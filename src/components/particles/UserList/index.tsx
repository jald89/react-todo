import React, { useEffect, useState } from 'react'
import { Outlet, Link } from 'react-router-dom'
import { Endpoints } from '../../../endpoints'
import {
    Wrapper,
    ColUsers,
} from './style'

export type UserType = {
    id: number;
    name: string;
}

const UserList = () => {
    const [users, setUsers] = useState<UserType[]>([])

    useEffect(() => {
        (async () => {
            const usersData = await fetch(Endpoints.USERS).then((res) => res.json())
            setUsers(usersData)
        })();
    }, [])

    return (
        <Wrapper>
            <ColUsers>
                <h1>UserList</h1>
                <hr />
                {users.length > 0 && (<ul>
                    {users.map((user) => (
                        <Link
                            key={user.id}
                            to={`/users/${user.id}`}>
                                <li>{user.name}</li>
                        </Link>
                    ))}
                </ul>)}
            </ColUsers>
            <ColUsers>
                <Outlet />
            </ColUsers>
        </Wrapper>
    )
}

export default UserList
