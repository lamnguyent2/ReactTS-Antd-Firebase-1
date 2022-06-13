import React, { useEffect, useState } from 'react';
import { Avatar, Image, Layout, Select, Space, Input, Table, Drawer } from 'antd';
import './style.scss';
import LeftMenu from '../../../../components/Left-menu';
import { CaretDownOutlined, CaretLeftOutlined, CaretRightOutlined } from '@ant-design/icons';
import { IconSearch } from './icon/icon-search';
import { Link } from 'react-router-dom';
import { IconAdd } from './icon/icon-add';
import { IconDot } from './icon/icon-dot';
import { dbrealtime } from '../../../../config/config';
import { onValue, ref } from '@firebase/database';

const { Content } = Layout;

const columns: any = [
    {
        title: 'Mã thiết bị',
        dataIndex: 'STT',
        className: `stt-one`,
        // render: (text: any) => <a href='/'>{text}</a>,
    },
    {
        title: 'Tên thiết bị',
        dataIndex: 'service',
        className: 'stt-two',
        // className: 'column-money',
        // dataIndex: 'money',
        // align: 'right',
    },
    {
        title: 'Địa chỉ IP',
        dataIndex: 'ipaddress',
        className: 'stt-three',
    },
    {
        title: 'Trạng thái hoạt động',
        dataIndex: 'status',
        className: 'stt-four',
        render: (text: any) => <div className={`${text.classstatus}`}> <IconDot /> {text.name}</div>,

    },
    {
        title: 'Trạng thái kết nối',
        dataIndex: 'connect',
        className: 'stt-five',
        render: (text: any) => <div className={`${text.classconnect}`}> <IconDot /> {text.name}</div>,

    },
    {
        title: 'Dịch vụ sử dụng',
        dataIndex: 'usedservice',
        className: 'stt-six',
        render: (text: any) => <div className='used-service'><p>{text}</p> <Link to='/'>Xem thêm</Link></div>,

    },
    {
        title: '',
        dataIndex: 'details',
        className: 'stt stt-link',
        render: (text: any) => <Link to={`${text}`}>Chi tiết</Link>,
    },
    {
        title: '',
        dataIndex: 'updatelink',
        render: (text: any) => <Link to={`${text}`}>Cập nhật</Link>,
        className: 'stt-final',
    },
];

export interface IDeviceManagementProps { }

const DeviceManagementComponent: React.FC<IDeviceManagementProps> = () => {
    const ServiceOptions = [{ value: 'Tất cả' }, { value: 'Hoạt động' }, { value: 'Ngưng hoạt động' }];
    const ConnectOptions = [{ value: 'Tất cả' }, { value: 'Kết nối' }, { value: 'Mất kết nối' }];

    const [visible, setVisible] = useState(false);

    const showDrawer = () => {
        setVisible(true);
    };

    const onClose = () => {
        setVisible(false);
    };

    const [dataDevice, setDataDevice] = useState<any[]>([]);

    useEffect(() => {
        onValue(ref(dbrealtime), (snapshot: any) => {
            const data = snapshot.val();
            if (data !== null) {
                Object.values(data).map((todo: any) => (
                    setDataDevice((oldArray) => [...oldArray, todo])
                ))
            }
        })
    }, [])

    return (
        <div className='DeviceManagement-Component'>
            <Layout>
                <LeftMenu KeysMenu="2" />
                <Layout>
                    <Content style={{ margin: '24px 16px 0' }}>
                        <div className="site-layout-background" style={{ padding: 24, minHeight: 104 }}>
                            <div className="left-title">
                                <h2>Thiết bị &nbsp; <i className="fa-solid fa-angle-right"></i> &nbsp; <span>Danh sách thiết bị</span></h2>
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
                        <h2 className='Title-Number'>Danh sách thiết bị</h2>
                        <div className="menu-service">
                            <div className='two-services'>
                                <div className="services status-service">
                                    <label htmlFor="service-item">Trạng thái hoạt động</label>
                                    <Select
                                        suffixIcon={<CaretDownOutlined />}
                                        style={{ width: '93.79%' }}
                                        placeholder="Chọn dịch vụ"
                                        options={ServiceOptions}
                                        className="service-item"
                                        defaultValue={"Tất cả "}
                                    />
                                </div>
                                <div className="services connection-service">
                                    <label htmlFor="service-item">Trạng thái kết nối</label>
                                    <Select
                                        suffixIcon={<CaretDownOutlined />}
                                        style={{ width: '60.963%' }}
                                        placeholder="Chọn dịch vụ"
                                        options={ConnectOptions}
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
                            <Link to="/device-create">Thêm <br /> thiết bị</Link>
                        </div>
                        <div className="number-details" style={{ height: "490px !important" }}>
                            <Table rowClassName={(record, index) => index % 2 === 0 ? 'table-row-light' : 'table-row-dark'} columns={columns} dataSource={dataDevice[0]?.Devices} pagination={{ pageSize: 9, prevIcon: <CaretLeftOutlined />, nextIcon: <CaretRightOutlined /> }} bordered />
                        </div>
                    </Content>
                </Layout>
            </Layout>
        </div>
    );
};

export default DeviceManagementComponent;