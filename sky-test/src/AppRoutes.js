import { Route, Routes } from 'react-router-dom';
import { Main } from './Pages/Main/Main';
import { NotFound } from './Pages/NotFound/NotFound';
import { UserProfile } from './Pages/UserProfile/UserProfile';


export const AppRoutes = () => {
    return (
        <Routes>
            <Route path='/' element={<Main />} />
            <Route path='/users/:id' element={<UserProfile />} />
            <Route path='*' element={<NotFound />} />
        </Routes>
    )
}