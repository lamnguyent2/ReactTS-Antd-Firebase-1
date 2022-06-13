import React, { useEffect, useState } from 'react';
import { Avatar, Image, Layout, Select, Space, Input, Table, Drawer } from 'antd';
import './style.scss';
import LeftMenu from '../../../../../components/Left-menu';
import { CaretDownOutlined, CaretLeftOutlined, CaretRightOutlined } from '@ant-design/icons';
import { IconSearch } from './icon/icon-search';
import { Link } from 'react-router-dom';
import { IconAdd } from './icon/icon-add';
import { IconDot } from './icon/icon-dot';
import { dbrealtime } from '../../../../../config/config';
import { onValue, ref} from '@firebase/database';

const { Content } = Layout;

const columns: any = [
    {
        title: 'Tên đăng nhập',
        dataIndex: 'username',
        className: `stt-one`,
    },
    {
        title: 'Họ tên',
        dataIndex: 'name',
        className: 'stt-two',
    },
    {
        title: 'Số điện thoại',
        dataIndex: 'phonenumber',
        className: 'stt-three',
    },
    {
        title: 'Email',
        dataIndex: 'email',
        className: 'stt-four',
    },
    {
        title: 'Vai trò',
        dataIndex: 'role',
        className: 'stt-five',
    },
    {
        title: 'Trạng thái hoạt động',
        dataIndex: 'status',
        className: 'stt-six',
        render: (text: any) => <div className={`${text.classstatus}`}> <IconDot /> {text.name}</div>,
    },
    {
        title: '',
        dataIndex: 'updatelink',
        render: (text: any) => <Link to={`${text}`}>Cập nhật</Link>,
        className: 'stt-final',
    },
];

export interface IAccountListProps { }

const AccountListComponent: React.FC<IAccountListProps> = () => {
    const ServiceOptions = [{ value: 'Tất cả' }, { value: 'Kế toán' }, { value: 'Quản lý' }, { value: 'Admin' }];
    const [visible, setVisible] = useState(false);

    const showDrawer = () => {
        setVisible(true);
    };

    const onClose = () => {
        setVisible(false);
    };

    const [dataAccount, setDataAccount] = useState<any[]>([]);

    useEffect(() => {
        onValue(ref(dbrealtime), (snapshot: any) => {
            const data = snapshot.val();
            if (data !== null) {
                Object.values(data).map((todo: any) => (
                    setDataAccount((oldArray) => [...oldArray, todo])
                ))
            }
        })
    }, [])

    return (
        <div className='AccountList-Component'>
            <Layout>
                <LeftMenu KeysMenu="8" />
                <Layout>
                    <Content style={{ margin: '24px 16px 0' }}>
                        <div className="site-layout-background" style={{ padding: 24, minHeight: 104 }}>
                            <div className="left-title">
                                <h2>Cài đặt hệ thống &nbsp; <i className="fa-solid fa-angle-right"></i> &nbsp; <span>Quản lý tài khoản</span></h2>
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
                        <h2 className='Title-Number'>Danh sách tài khoản</h2>
                        <div className="menu-service">
                            <div className='two-services'>
                                <div className="services status-service">
                                    <label htmlFor="service-item">Tên vai trò</label>
                                    <Select
                                        suffixIcon={<CaretDownOutlined />}
                                        style={{ width: '94.74%' }}
                                        placeholder="Chọn dịch vụ"
                                        options={ServiceOptions}
                                        className="service-item"
                                        defaultValue={"Tất cả "}
                                    />
                                </div>
                            </div>
                            <div className="services search-service">
                                <label htmlFor="service-item">Từ khóa</label> <br />
                                <Space direction="vertical" size={12}>
                                    <Input type='text' placeholder="Nhập từ khóa" style={{ width: 300 }} suffix={<IconSearch />} />
                                </Space>
                            </div>
                        </div>
                        <div className="number-create-link">
                            <IconAdd />
                            <Link to="/account-create">Thêm <br /> tài khoản</Link>
                        </div>
                        <div className="number-details" style={{ height: "490px !important" }}>
                            <Table rowClassName={(record, index) => index % 2 === 0 ? 'table-row-light' : 'table-row-dark'} columns={columns} dataSource={dataAccount[0]?.Accounts} pagination={{ pageSize: 9, prevIcon: <CaretLeftOutlined />, nextIcon: <CaretRightOutlined /> }} bordered />
                        </div>
                    </Content>
                </Layout>
            </Layout>
        </div>
    );
};

export default AccountListComponent;