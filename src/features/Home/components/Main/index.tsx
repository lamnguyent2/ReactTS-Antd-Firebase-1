import React from 'react';
import './style.scss';

export interface IHomeProps { }

const HomeComponent: React.FC<IHomeProps> = () => {
    return (
        <div className='center-layout'>
            Danh sách link: <br /><br />
            Đăng nhập: http://localhost:3000/login <br />
            Check email: http://localhost:3000/check-email <br />
            Quên mật khẩu: http://localhost:3000/forgot-password <br />
            Tài khoản cá nhân: http://localhost:3000/profile/1 <br /><br />
            Dashboard: http://localhost:3000/dashboard <br /><br />
            Quản lý thiết bị: http://localhost:3000/device-management <br />
            Thêm thiết bị: http://localhost:3000/device-create <br />
            Thông tin chi tiết: http://localhost:3000/device-details/0 <br />
            Cập nhật thiết bị: http://localhost:3000/device-update/0 <br /><br />
            Danh sách dịch vụ: http://localhost:3000/service-list <br />
            Thêm dịch vụ: http://localhost:3000/service-create <br />
            Chi tiết: http://localhost:3000/service-details/0 <br />
            Cập nhật: http://localhost:3000/service-update/0 <br /><br />
            Quản lý cấp số: http://localhost:3000/number-level-management <br />
            Quản lý cấp số đang chờ: http://localhost:3000/number-level-management-waiting <br />
            Quản lý cấp số đã sử dụng: http://localhost:3000/number-level-management-used <br />
            Quản lý cấp số bỏ qua: http://localhost:3000/number-level-management-skipped <br />
            Cấp số mới cần đăng nhập: http://localhost:3000/number-level-create-login-required <br />
            Thông tin chi tiết: http://localhost:3000/number-level-details <br />
            Cấp số mới không đăng nhập: http://localhost:3000/number-level-create-no-login-required <br /><br />
            Quản lý báo cáo: http://localhost:3000/report-management <br /><br />
            Quản lý vai trò: http://localhost:3000/role-management <br />
            Thêm vai trò: http://localhost:3000/role-create <br />
            Cập nhật vai trò: http://localhost:3000/role-update/0 <br /><br />
            Danh sách tài khoản: http://localhost:3000/account-list <br />
            Thêm tài khoản: http://localhost:3000/account-create <br />
            Cập nhật tài khoản: http://localhost:3000/account-update/0 <br /><br />
            Nhật ký người dùng: http://localhost:3000/user-logs-list
        </div>
    );
};

export default HomeComponent;