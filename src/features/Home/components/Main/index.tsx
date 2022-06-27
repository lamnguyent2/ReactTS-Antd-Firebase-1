import React from 'react';
import './style.scss';

export interface IHomeProps { }

const HomeComponent: React.FC<IHomeProps> = () => {
    return (
        <div className='center-layout'>
            <br /><h2>Danh sách link</h2><br />
            <div className="grid-container">
                <div className='grid-item'>Đăng nhập:<br /> <a href="/login" target="_blank" >https://react-ts-antd-firebase-1.vercel.app/login</a></div>
                <div className='grid-item'>Check email:<br /> <a href="/check-email" target="_blank" >https://react-ts-antd-firebase-1.vercel.app/check-email</a></div>
                <div className='grid-item'>Quên mật khẩu:<br /> <a href="/forgot-password" target="_blank" >https://react-ts-antd-firebase-1.vercel.app/forgot-password</a></div>
                <div className='grid-item'>Dashboard:<br /> <a href="/dashboard" target="_blank" >https://react-ts-antd-firebase-1.vercel.app/dashboard</a></div>
                <div className='grid-item'>Quản lý thiết bị:<br /> <a href="/device-management" target="_blank" >https://react-ts-antd-firebase-1.vercel.app/device-management</a></div>
                <div className='grid-item'>Danh sách dịch vụ:<br /> <a href="/service-list" target="_blank" >https://react-ts-antd-firebase-1.vercel.app/service-list</a></div>
                <div className='grid-item'>Quản lý cấp số:<br /> <a href="/number-level-management" target="_blank" >https://react-ts-antd-firebase-1.vercel.app/number-level-management</a></div>
                <div className='grid-item'>Quản lý báo cáo:<br /> <a href="/report-management" target="_blank" >https://react-ts-antd-firebase-1.vercel.app/report-management</a></div>
                <div className='grid-item'>Quản lý vai trò:<br /> <a href="/role-management" target="_blank" >https://react-ts-antd-firebase-1.vercel.app/role-management</a></div>
                <div className='grid-item'>Danh sách tài khoản:<br /> <a href="/account-list" target="_blank" >https://react-ts-antd-firebase-1.vercel.app/account-list</a></div>
                <div className='grid-item'>Nhật ký người dùng:<br /> <a href="/user-logs-list" target="_blank" >https://react-ts-antd-firebase-1.vercel.app/user-logs-list</a></div>
            </div>
        </div>
    );
};

export default HomeComponent;