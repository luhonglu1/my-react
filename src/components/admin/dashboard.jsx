import React from 'react'
import SideBar from './sidebar.jsx'
import Users from './users'
import Posts from './posts'
import { Route } from 'react-router-dom'

const Dashboard = ({ match }) => {
  return (
    <div>
      <h1>Admin Dashboard</h1>
      <SideBar></SideBar>
      <Route path="/admin/users" component={Users}></Route>
      <Route path="/admin/Posts" component={Posts}></Route>
    </div>
  )
}

export default Dashboard
