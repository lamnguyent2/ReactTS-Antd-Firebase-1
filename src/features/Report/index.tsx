import React from 'react';
import { Route, Routes } from 'react-router-dom';
import ReportManagementPage from './pages/Report-management-page';

function ReportFeature() {
    return (
        <Routes>
            <Route path="/report-management" element={<ReportManagementPage />} />
        </Routes>
    );
}

export default ReportFeature;