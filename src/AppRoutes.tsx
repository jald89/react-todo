import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './components/pages/Home'
import UserList from './components/particles/UserList'
import TodoList from './components/particles/TodoList'
import React from 'react'

const AppRoutes = () => (
    <BrowserRouter>
        <Routes>
            <Route 
                path="/"
                element={<Home />}
            >
                <Route path="users" element={<UserList />}>
                    <Route path=":userId" element={<TodoList />} />
                </Route>
            </Route>
        </Routes>
    </BrowserRouter>
)

export default AppRoutes
