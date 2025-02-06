import { BrowserRouter, Navigate, NavLink, Route, Routes } from 'react-router-dom'

import { _Routes, routes } from './routes'
import logo from './../assets/react.svg'

export const Navigation = () => {
    return (
        <BrowserRouter>
            <div className="main-layout">
                <nav>
                    <img src={logo} alt="React Logo" />
                    <ul>
                        {
                            routes.map((route: _Routes) => (
                                <li key={route.name}>
                                    <NavLink
                                        to={route.to}
                                        className={({ isActive }) => isActive ? 'nav-active' : ''}>
                                        {route.name}
                                    </NavLink>
                                </li>
                            ))
                        }
                    </ul>
                </nav>
                <Routes>
                    {
                        routes.map(({Component, path}: _Routes) => (
                            <Route
                                key={path}
                                path={path}
                                element={<Component/>}
                            />
                        ))
                    }
                    <Route path='/*' element={<Navigate to={routes[0].to} />} />
                </Routes>
            </div>
        </BrowserRouter>
    )
}
