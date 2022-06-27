import React from 'react';
import './style.scss';

export interface IHomeProps { }

const HomeComponent: React.FC<IHomeProps> = () => {
    return (
        <div className='center-layout'>
            <a href="" target="_blank" ></a>
            Danh sách link: <br /><br />
            Đăng nhập: <a href="/login" target="_blank" >https://react-ts-antd-firebase-1.vercel.app/login</a> <br />
            Check email: <a href="/check-email" target="_blank" >https://react-ts-antd-firebase-1.vercel.app/check-email</a> <br />
            Quên mật khẩu: <a href="/forgot-password" target="_blank" >https://react-ts-antd-firebase-1.vercel.app/forgot-password</a> <br />
            Dashboard: <a href="/dashboard" target="_blank" >https://react-ts-antd-firebase-1.vercel.app/dashboard</a> <br />
            Quản lý thiết bị: <a href="/device-management" target="_blank" >https://react-ts-antd-firebase-1.vercel.app/device-management</a> <br />
            Danh sách dịch vụ: <a href="/service-list" target="_blank" >https://react-ts-antd-firebase-1.vercel.app/service-list</a> <br />
            Quản lý cấp số: <a href="/number-level-management" target="_blank" >https://react-ts-antd-firebase-1.vercel.app/number-level-management</a> <br />
            Quản lý báo cáo: <a href="/report-management" target="_blank" >https://react-ts-antd-firebase-1.vercel.app/report-management</a> <br />
            Quản lý vai trò: <a href="/role-management" target="_blank" >https://react-ts-antd-firebase-1.vercel.app/role-management</a> <br />
            Danh sách tài khoản: <a href="/account-list" target="_blank" >https://react-ts-antd-firebase-1.vercel.app/account-list</a> <br />
            Nhật ký người dùng: <a href="/user-logs-list" target="_blank" >https://react-ts-antd-firebase-1.vercel.app/user-logs-list</a>
        </div>
    );
};

export default HomeComponent;