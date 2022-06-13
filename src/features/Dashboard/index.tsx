import React from 'react';
import { Route, Routes } from 'react-router-dom';
import DashboardPage from './pages/Dashboard';

function DashboardFeature() {
    return (
        <Routes>
            <Route path="/dashboard" element={<DashboardPage />} />
        </Routes>
    );
}

export default DashboardFeature;