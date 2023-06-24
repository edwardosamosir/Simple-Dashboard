import React from 'react'
import {createBrowserRouter, redirect } from 'react-router-dom'
import DashboardPage from '../pages/DashboardPage'
import UsersPage from '../pages/UsersPage'
import ProductsPage from '../pages/ProductsPage'
import Layout from '../pages/Layout'
import LoginPage from '../pages/LoginPage'

const router = createBrowserRouter([
    {
        element : <Layout />,
        loader : () => {
            const token = localStorage.getItem('access_token')
            if(!token) throw redirect ('/login')
            return null
        },
        children : [
            {
                path : "/",
                element : <DashboardPage/>
            },
            {
                path : "/products",
                element : <ProductsPage/>
            },
            {
                path : "/users",
                element : <UsersPage/>
            }
        ]
    },
    {
        path : '/login',
        loader : () => {
            const token = localStorage.getItem('access_token')
            if(token) throw redirect ('/')
            return null
        },
        element : <LoginPage />
    }
])

export default router;