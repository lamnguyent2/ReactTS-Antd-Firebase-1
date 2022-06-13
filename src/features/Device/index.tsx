import React from 'react';
import { Route, Routes } from 'react-router-dom';
import DeviceCreatePage from './pages/Device-create-page';
import DeviceDetailsPage from './pages/Device-details-page';
import DeviceManagementPage from './pages/Device-management-page';
import DeviceUpdatePage from './pages/Device-update-page';

function DeviceFeature() {
    return (
        <Routes>
            <Route path="/device-create" element={<DeviceCreatePage />} />
            <Route path="/device-details/:id" element={<DeviceDetailsPage />} />
            <Route path="/device-management" element={<DeviceManagementPage />} />
            <Route path="/device-update/:id" element={<DeviceUpdatePage />} />
        </Routes>
    );
}

export default DeviceFeature;