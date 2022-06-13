import React from 'react';
import { Route, Routes } from 'react-router-dom';
import ServiceCreatePage from './pages/Service-create-page';
import ServiceDetailsPage from './pages/Service-details-page';
import ServiceListPage from './pages/Service-list-page';
import ServiceUpdatePage from './pages/Service-update-page';

function ServiceFeature() {
    return (
        <Routes>
            <Route path="/service-create" element={<ServiceCreatePage />} />
            <Route path="/service-details/:id" element={<ServiceDetailsPage />} />
            <Route path="/service-list" element={<ServiceListPage />} />
            <Route path="/service-update/:id" element={<ServiceUpdatePage />} />
        </Routes>
    );
}

export default ServiceFeature;