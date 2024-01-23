import { Route, Routes } from 'react-router-dom';
import { Main } from './Pages/Main/Main';
import { NotFound } from './Pages/NotFound/NotFound';


export const AppRoutes = () => {
    return (
        <Routes>
            <Route path='/' element={<Main />} />
            <Route path='*' element={<NotFound />} />
        </Routes>
    )
}