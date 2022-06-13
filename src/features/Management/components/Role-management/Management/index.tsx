import React, { useEffect, useState } from 'react';
import { Avatar, Image, Layout, Space, Input, Table, Drawer } from 'antd';
import './style.scss';
import LeftMenu from '../../../../../components/Left-menu';
import { CaretLeftOutlined, CaretRightOutlined } from '@ant-design/icons';
import { IconSearch } from './icon/icon-search';
import { Link } from 'react-router-dom';
import { IconAdd } from './icon/icon-add';
import { dbrealtime } from '../../../../../config/config';
import { onValue, ref} from '@firebase/database';

const { Content } = Layout;

const columns: any = [
    {
        title: 'Tên vai trò',
        dataIndex: 'name',
        className: `stt-one`,
    },
    {
        title: 'Số người dùng',
        dataIndex: 'numberofuser',
        className: 'stt-two'
    },
    {
        title: 'Mô tả',
        dataIndex: 'description',
        className: 'stt-three',
    },
    {
        title: '',
        dataIndex: 'updatelink',
        render: (text: any) => <Link to={`${text}`}>Cập nhật</Link>,
        className: 'stt-final',
    },
];

export interface IRoleManagementProps { }

const RoleManagementComponent: React.FC<IRoleManagementProps> = () => {
    const [visible, setVisible] = useState(false);

    const showDrawer = () => {
        setVisible(true);
    };

    const onClose = () => {
        setVisible(false);
    };

    const [dataRule, setDataRule] = useState<any[]>([]);
    useEffect(() => {
        onValue(ref(dbrealtime), (snapshot: any) => {
            const data = snapshot.val();
            if (data !== null) {
                Object.values(data).map((todo: any) => (
                    setDataRule((oldArray) => [...oldArray, todo])
                ))
            }
        })
    }, [])
    
    return (
        <div className='RoleManagement-Component'>
            <Layout>
                <LeftMenu KeysMenu="7" />
                <Layout>
                    <Content style={{ margin: '24px 16px 0' }}>
                        <div className="site-layout-background" style={{ padding: 24, minHeight: 104 }}>
                            <div className="left-title">
                                <h2>Cài đặt hệ thống &nbsp; <i className="fa-solid fa-angle-right"></i> &nbsp; <span>Quản lý vai trò</span></h2>
                            </div>
                            <div className="right-mini-profile">
                                <div className="icon-notification">
                                    <img src="../images/User/Profile/notification.png" alt="" onClick={showDrawer} />
                                    <Drawer title="Thông báo" placement="right" onClose={onClose} visible={visible}>
                                        <div className="information-notification">
                                            <h3>Người dùng: Nguyễn Thị Thùy Dung</h3>
                                            <p>Thời gian nhận số: 12h20 ngày 30/11/2021</p>
                                        </div>
                                        <hr />
                                        <div className="information-notification">
                                            <h3>Người dùng: Nguyễn Thị Thùy Dung</h3>
                                            <p>Thời gian nhận số: 12h20 ngày 30/11/2021</p>
                                        </div>
                                        <hr />
                                        <div className="information-notification">
                                            <h3>Người dùng: Nguyễn Thị Thùy Dung</h3>
                                            <p>Thời gian nhận số: 12h20 ngày 30/11/2021</p>
                                        </div>
                                        <hr />
                                        <div className="information-notification">
                                            <h3>Người dùng: Nguyễn Thị Thùy Dung</h3>
                                            <p>Thời gian nhận số: 12h20 ngày 30/11/2021</p>
                                        </div>
                                        <hr />
                                        <div className="information-notification">
                                            <h3>Người dùng: Nguyễn Thị Thùy Dung</h3>
                                            <p>Thời gian nhận số: 12h20 ngày 30/11/2021</p>
                                        </div>
                                        <hr />
                                        <div className="information-notification">
                                            <h3>Người dùng: Nguyễn Thị Thùy Dung</h3>
                                            <p>Thời gian nhận số: 12h20 ngày 30/11/2021</p>
                                        </div>
                                        <hr />
                                        <div className="information-notification">
                                            <h3>Người dùng: Nguyễn Thị Thùy Dung</h3>
                                            <p>Thời gian nhận số: 12h20 ngày 30/11/2021</p>
                                        </div>
                                    </Drawer>
                                </div>
                                <div className="person-notification">
                                    <Avatar src={<Image src="../images/User/Profile/avatar.png" />} />
                                    <div className="hello-title">
                                        <p>Hello</p>
                                        <h2>Lê Quỳnh Ái Vân</h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="menu-service">
                            <h2 className='Title-Number'>Danh sách vai trò</h2>
                            <div className="services search-service">
                                <label htmlFor="service-item">Từ khóa</label> <br />
                                <Space direction="vertical" size={12}>
                                    <Input type='text' placeholder="Nhập từ khóa" style={{ width: 300 }} suffix={<IconSearch />} />
                                </Space>
                            </div>
                        </div>
                        <div className="number-create-link">
                            <IconAdd />
                            <Link to="/role-create">Thêm <br /> vai trò</Link>
                        </div>
                        <div className="number-details" style={{ height: "490px !important" }}>
                            <Table rowClassName={(record, index) => index % 2 === 0 ? 'table-row-light' : 'table-row-dark'} columns={columns} dataSource={dataRule[0]?.Roles} pagination={{ pageSize: 9, prevIcon: <CaretLeftOutlined />, nextIcon: <CaretRightOutlined /> }} bordered />
                        </div>
                    </Content>
                </Layout>
            </Layout>
        </div>
    );
};

export default RoleManagementComponent;