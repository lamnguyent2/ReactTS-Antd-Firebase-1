import React from 'react';
import { Route, Routes } from 'react-router-dom';
import NumberLevelCreateLoginRequiredPage from './pages/Number-level-create-page/Login-required-page';
import NumberLevelCreateNoLoginRequiredPage from './pages/Number-level-create-page/No-login-required-page';
import NumberLevelDetailsPage from './pages/Number-level-details-page';
import NumberLevelManagementPage from './pages/Number-level-management-page/Management-page';
import NumberLevelManagementSkippedPage from './pages/Number-level-management-page/Skipped-page';
import NumberLevelManagementUsedPage from './pages/Number-level-management-page/Used-page';
import NumberLevelManagementWaitingPage from './pages/Number-level-management-page/Waiting-page';

function NumberLevelFeature() {
    return (
        <Routes>
            <Route path="/number-level-create-login-required" element={<NumberLevelCreateLoginRequiredPage />} />
            <Route path="/number-level-create-no-login-required" element={<NumberLevelCreateNoLoginRequiredPage />} />
            <Route path="/number-level-details/:id" element={<NumberLevelDetailsPage />} />
            <Route path="/number-level-management" element={<NumberLevelManagementPage />} />
            <Route path="/number-level-management-skipped" element={<NumberLevelManagementSkippedPage />} />
            <Route path="/number-level-management-used" element={<NumberLevelManagementUsedPage />} />
            <Route path="/number-level-management-waiting" element={<NumberLevelManagementWaitingPage />} />
            
        </Routes>
    );
}

export default NumberLevelFeature;