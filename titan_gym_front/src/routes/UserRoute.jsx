import React from 'react';
import UserMainContainer from '../components/common/UserMainContainer/UserMainContainer';
import { Route, Routes } from 'react-router-dom';
import UserMainPage from '../pages/userPages/UserMainPage/UserMainPage';
import UserAboutPage from '../pages/userPages/UserAboutPage/UserAboutPage';
import UserLoginPage from '../pages/userPages/UserLoginPage/UserLoginPage';
import UserSignupPage from '../pages/userPages/UserSignupPage/UserSignupPage';

function UserRoute(props) {
    return (
        <UserMainContainer>
            <Routes>
                <Route path='/home' element={<UserMainPage />} />
                <Route path='/about' element={<UserAboutPage />} />
                <Route path='/login' element={<UserLoginPage />} />
                <Route path='/join' element={<UserSignupPage />} />
            </Routes>
        </UserMainContainer>
    );
}

export default UserRoute;