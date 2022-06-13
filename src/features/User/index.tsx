import React from 'react';
import { Route, Routes } from 'react-router-dom';
import CheckEmailPage from './pages/Check-email-page';
import ForgotPasswordPage from './pages/Forgot-password-page';
import LoginPage from './pages/Login-page';
import ProfilePage from './pages/Profile-page';

function UserFeature() {
    return (
        <Routes>
            <Route path="/check-email" element={<CheckEmailPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/profile/:id" element={<ProfilePage />} />
            <Route path="/forgot-password" element={<ForgotPasswordPage />} />
        </Routes>
    );
}

export default UserFeature;