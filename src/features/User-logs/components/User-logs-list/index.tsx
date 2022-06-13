import React, { useEffect, useState } from 'react';
import { Avatar, Image, Layout, DatePicker, Space, Input, Table, Drawer } from 'antd';
import './style.scss';
import LeftMenu from '../../../../components/Left-menu';
import moment from 'moment';
import { CaretLeftOutlined, CaretRightOutlined } from '@ant-design/icons';
import { IconCalendar } from './icon/icon-calendar';
import { IconSearch } from './icon/icon-search';
import { dbrealtime } from '../../../../config/config';
import { onValue, ref } from '@firebase/database';

const { Content } = Layout;

const dateFormatList = ['DD/MM/YYYY', 'DD/MM/YY'];

const columns: any = [
    {
        title: 'Tên đăng nhập',
        dataIndex: 'username',
        className: `stt-one`,
    },
    {
        title: 'Thời gian tác động',
        dataIndex: 'operatingtime',
        className: 'stt-two',
    },
    {
        title: 'IP thực hiện',
        dataIndex: 'ipimplementation',
        className: 'stt',
    },
    {
        title: 'Thao tác thực hiện',
        dataIndex: 'Operations',
        className: 'stt-final',
    },
];

export interface IUserLogsListProps { }

const UserLogsListComponent: React.FC<IUserLogsListProps> = () => {
    const [visible, setVisible] = useState(false);

    const showDrawer = () => {
        setVisible(true);
    };

    const onClose = () => {
        setVisible(false);
    };

    const [dataUserLog, setDataUserLog] = useState<any[]>([]);

    useEffect(() => {
        onValue(ref(dbrealtime), (snapshot: any) => {
            const data = snapshot.val();
            if (data !== null) {
                Object.values(data).map((todo: any) => (
                    setDataUserLog((oldArray) => [...oldArray, todo])
                ))
            }
        })
    }, [])

    return (
        <div className='UserLogsList-Component'>
            <Layout>
                <LeftMenu KeysMenu="9" />
                <Layout>
                    <Content style={{ margin: '24px 16px 0' }}>
                        <div className="site-layout-background" style={{ padding: 24, minHeight: 104 }}>
                            <div className="left-title">
                                <h2>Cài đặt hệ thống &nbsp; <i className="fa-solid fa-angle-right"></i> &nbsp; <span>Nhật ký hoạt động</span></h2>
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
                            <div className="services">
                                <label htmlFor="service-item">Chọn thời gian</label> <br />
                                <Space direction="vertical" size={12}>
                                    <DatePicker suffixIcon={<IconCalendar />} defaultValue={moment('10/10/2021', dateFormatList[0])} format={dateFormatList} />
                                </Space>
                                <CaretRightOutlined />
                                <Space direction="vertical" size={12}>
                                    <DatePicker suffixIcon={<IconCalendar />} defaultValue={moment('18/10/2021', dateFormatList[0])} format={dateFormatList} />
                                </Space>
                            </div>
                            <div className="services">
                                <label htmlFor="service-item">Từ khóa</label> <br />
                                <Space direction="vertical" size={12}>
                                    <Input type='text' placeholder="Nhập từ khóa" style={{ width: 240 }} suffix={<IconSearch />} />
                                </Space>
                            </div>
                        </div>
                        <div className="number-details" style={{ height: "539px !important" }}>
                            <Table rowClassName={(record, index) => index % 2 === 0 ? 'table-row-light' : 'table-row-dark'} columns={columns} dataSource={dataUserLog[0]?.Userlogs} pagination={{ pageSize: 10, prevIcon: <CaretLeftOutlined />, nextIcon: <CaretRightOutlined /> }} bordered />
                        </div>
                    </Content>
                </Layout>
            </Layout>
        </div>
    );
};

export default UserLogsListComponent;