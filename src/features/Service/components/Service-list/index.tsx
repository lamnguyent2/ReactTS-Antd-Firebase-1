import React, { useEffect, useState } from 'react';
import { Avatar, Image, Layout, Select, DatePicker, Space, Input, Table, Drawer } from 'antd';
import './style.scss';
import LeftMenu from '../../../../components/Left-menu';
import { onValue, ref} from '@firebase/database';
import moment from 'moment';
import { CaretDownOutlined, CaretLeftOutlined, CaretRightOutlined } from '@ant-design/icons';
import { IconCalendar } from './icon/icon-calendar';
import { IconSearch } from './icon/icon-search';
import { Link } from 'react-router-dom';
import { IconAdd } from './icon/icon-add';
import { IconDot } from './icon/icon-dot';
import { dbrealtime } from '../../../../config/config';

const { Content } = Layout;

const dateFormatList = ['DD/MM/YYYY', 'DD/MM/YY'];

const columns: any = [
    {
        title: 'Mã dịch vụ',
        dataIndex: 'STT',
        className: `stt-one`,
    },
    {
        title: 'Tên dịch vụ',
        dataIndex: 'service',
        className: 'stt-two',
    },
    {
        title: 'Mô tả',
        dataIndex: 'description',
        className: 'stt-three',
    },
    {
        title: 'Trạng thái hoạt động',
        dataIndex: 'status',
        className: 'stt',
        render: (text: any) => <div className={`${text.classstatus}`}> <IconDot /> {text.name}</div>,
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

export interface IServiceListProps { }

const ServiceListComponent: React.FC<IServiceListProps> = () => {
    const ServiceOptions = [{ value: 'Tất cả' }, { value: 'Hoạt động' }, { value: 'Ngưng hoạt động' }];
    const [visible, setVisible] = useState(false);

    const showDrawer = () => {
        setVisible(true);
    };

    const onClose = () => {
        setVisible(false);
    };

    const [dataService, setDataService] = useState<any[]>([]);

    useEffect(() => {
        onValue(ref(dbrealtime), (snapshot: any) => {
            const data = snapshot.val();
            if (data !== null) {
                Object.values(data).map((todo: any) => (
                    setDataService((oldArray) => [...oldArray, todo])
                ))
            }
        })
    }, [])

    return (
        <div className='ServiceList-Component'>
            <Layout>
                <LeftMenu KeysMenu="3" />
                <Layout>
                    <Content style={{ margin: '24px 16px 0' }}>
                        <div className="site-layout-background" style={{ padding: 24, minHeight: 104 }}>
                            <div className="left-title">
                                <h2>Dịch vụ &nbsp; <i className="fa-solid fa-angle-right"></i> &nbsp; <span>Danh sách dịch vụ</span></h2>
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
                        <h2 className='Title-Number'>Quản lý dịch vụ</h2>
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
                            <Link to="/service-create">Thêm <br /> dịch vụ</Link>
                        </div>
                        <div className="number-details" style={{ height: "490px !important" }}>
                            <Table rowClassName={(record, index) => index % 2 === 0 ? 'table-row-light' : 'table-row-dark'} columns={columns} dataSource={dataService[0]?.Services} pagination={{ pageSize: 9, prevIcon: <CaretLeftOutlined />, nextIcon: <CaretRightOutlined /> }} bordered />
                        </div>
                    </Content>
                </Layout>
            </Layout>
        </div>
    );
};

export default ServiceListComponent;