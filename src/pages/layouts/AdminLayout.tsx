import React from 'react'
import { Outlet } from 'react-router-dom'

type Props = {}

const AdminLayout = (props: Props) => {
  return (
    <div>
        <header>Header main</header>
        <aside>
            Menu main
        </aside>
        <main>
            <Outlet />
        </main>
    </div>
  )
}

export default AdminLayout