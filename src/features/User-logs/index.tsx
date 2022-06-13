import React from 'react';
import { Route, Routes } from 'react-router-dom';
import UserLogsListPage from './pages/User-logs-list-page';

function UserLogsFeature() {
    return (
        <Routes>
            <Route path="/user-logs-list" element={<UserLogsListPage />} />
        </Routes>
    );
}

export default UserLogsFeature;