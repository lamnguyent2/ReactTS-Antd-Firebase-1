import React from 'react';
import { Route, Routes } from 'react-router-dom';
import AccountListPage from './pages/Account-management-page/Account-list-page';
import AccountCreatePage from './pages/Account-management-page/Create-page';
import AccountUpdatePage from './pages/Account-management-page/Update-page';
import RoleCreatePage from './pages/Role-management-page/Create-page';
import RoleManagementPage from './pages/Role-management-page/Management-page';
import RoleUpdatePage from './pages/Role-management-page/Update-page';

function ManagementFeature() {
    return (
        <Routes>
            {/* Account Management */}
            <Route path="/account-list" element={<AccountListPage />} />
            <Route path="/account-create" element={<AccountCreatePage />} />
            <Route path="/account-update/:id" element={<AccountUpdatePage />} />
            {/* Role Management */}
            <Route path="/role-create" element={<RoleCreatePage />} />
            <Route path="/role-management" element={<RoleManagementPage />} />
            <Route path="/role-update/:id" element={<RoleUpdatePage />} />
        </Routes>
    );
}

export default ManagementFeature;