import React from 'react';
import { Image, Layout, Menu } from 'antd';
import './style.scss';
import { SettingSVG } from './svg/setting';
import { DashboardSVG } from './svg/dashboard';
import { PcIconSVG } from './svg/pc-icon';
import { ServiceSVG } from './svg/service';
import { NumberSVG } from './svg/number';
import { ReportSVG } from './svg/report';
import SubMenu from 'antd/lib/menu/SubMenu';
import { useNavigate } from 'react-router-dom';

const { Sider } = Layout;

export interface ILeftMenuProps { KeysMenu:string }

const LeftMenu: React.FC<ILeftMenuProps> = ({KeysMenu}: ILeftMenuProps) => {
    const navigate = useNavigate()
    
    const LinkProfile = () =>{
        navigate('/profile/1')
    }

    const LinkDashboard = () =>{
        navigate('/dashboard')
    }

    const LinkDevice = () =>{
        navigate('/device-management')
    }

    const LinkService = () =>{
        navigate('/service-list')
    }

    const LinkNumberLoginRequired = () =>{
        navigate('/number-level-management')
    }

    const LinkNReport = () =>{
        navigate('/report-management')
    }

    const LinkAccountList = () =>{
        navigate('/account-list')
    }

    const LinkRole = () =>{
        navigate('/role-management')
    }

    const LinkNUserLog = () =>{
        navigate('/user-logs-list')
    }

    const LinkLogout = () =>{
        localStorage.removeItem("dataUser")
        navigate('/login')
    }

    return (
        <Sider
            breakpoint="lg"
            collapsedWidth="0"
            onBreakpoint={broken => {
                console.log(broken);
            }}
            onCollapse={(collapsed, type) => {
                console.log(collapsed, type);
            }}
        >
            <div className="logo" onClick={LinkProfile}/>
            <Menu theme="light" mode="vertical" defaultSelectedKeys={[KeysMenu]} defaultOpenKeys={[KeysMenu]}>
                <SubMenu key="1" icon={<DashboardSVG />} title='Dashboard' onTitleClick={LinkDashboard}>
                </SubMenu>
                <SubMenu key="2" icon={<PcIconSVG />} title='Thi???t b???' onTitleClick={LinkDevice}>
                </SubMenu>
                <SubMenu key="3" icon={<ServiceSVG />} title='D???ch v???' onTitleClick={LinkService}>
                    
                </SubMenu>
                <SubMenu key="4" icon={<NumberSVG />} title='C???p s???' onTitleClick={LinkNumberLoginRequired}>
                    
                </SubMenu>
                <SubMenu key="5" icon={<ReportSVG />} title='B??o c??o' onTitleClick={LinkNReport}>
                    
                </SubMenu>
                <SubMenu key="6" icon={<SettingSVG />} title="C??i ?????t h??? th???ng" className='Setting'>
                    <Menu.Item key="7" className='setting-item-one' onClick={LinkRole}>Qu???n l?? vai tr??</Menu.Item>
                    <Menu.Item key="8" className='setting-item-two' onClick={LinkAccountList}>Qu???n l?? t??i kho???n</Menu.Item>
                    <Menu.Item key="9" className='setting-item-three' onClick={LinkNUserLog}>Nh???t k?? ng?????i d??ng</Menu.Item>
                </SubMenu>
                <div className="Logout">
                    <SubMenu key="10" icon={<Image src="../../../images/User/Profile/logout.png" alt="" />} title='????ng xu???t' onTitleClick={LinkLogout}>
                        ????ng xu???t
                    </SubMenu>
                </div>
            </Menu>
        </Sider>
    );
};

export default LeftMenu;