import { useState } from "react";
import { Routes, Route } from 'react-router-dom';
import UserListPage from './UserListPage';
import SingleUserPage from './SingleUserPage';

export default function Users() {
    const [singleData, setSingleData] = useState([])

    return (
        <>
          
            <Routes>
                <Route index element={<UserListPage setSingle = {setSingleData} key={singleData.id} />} />
                <Route path='*' element={<SingleUserPage single = {singleData} key={singleData.id}/>} />
            </Routes>
          
        </>
    );
}
