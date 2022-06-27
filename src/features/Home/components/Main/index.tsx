import React from 'react';
import './style.scss';

export interface IHomeProps { }

const HomeComponent: React.FC<IHomeProps> = () => {
    return (
        <div className='center-layout'>
            <h2>Danh sách link</h2>
            <div className="flex-link">
                <div>Đăng nhập: <a href="/login" target="_blank" >https://react-ts-antd-firebase-1.vercel.app/login</a></div>
                <div>Check email: <a href="/check-email" target="_blank" >https://react-ts-antd-firebase-1.vercel.app/check-email</a></div>
                <div>Quên mật khẩu: <a href="/forgot-password" target="_blank" >https://react-ts-antd-firebase-1.vercel.app/forgot-password</a></div>
                <div>Dashboard: <a href="/dashboard" target="_blank" >https://react-ts-antd-firebase-1.vercel.app/dashboard</a></div>
                <div>Quản lý thiết bị: <a href="/device-management" target="_blank" >https://react-ts-antd-firebase-1.vercel.app/device-management</a></div>
                <div>Danh sách dịch vụ: <a href="/service-list" target="_blank" >https://react-ts-antd-firebase-1.vercel.app/service-list</a></div>
                <div>Quản lý cấp số: <a href="/number-level-management" target="_blank" >https://react-ts-antd-firebase-1.vercel.app/number-level-management</a></div>
                <div>Quản lý báo cáo: <a href="/report-management" target="_blank" >https://react-ts-antd-firebase-1.vercel.app/report-management</a></div>
                <div>Quản lý vai trò: <a href="/role-management" target="_blank" >https://react-ts-antd-firebase-1.vercel.app/role-management</a></div>
                <div>Danh sách tài khoản: <a href="/account-list" target="_blank" >https://react-ts-antd-firebase-1.vercel.app/account-list</a></div>
                <div>Nhật ký người dùng: <a href="/user-logs-list" target="_blank" >https://react-ts-antd-firebase-1.vercel.app/user-logs-list</a></div>
            </div>
        </div>
    );
};

export default HomeComponent;