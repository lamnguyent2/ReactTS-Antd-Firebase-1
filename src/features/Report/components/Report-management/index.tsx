import React, { useEffect, useState } from 'react';
import { Avatar, Image, Layout, DatePicker, Space, Table, Select, Drawer } from 'antd';
import './style.scss';
import LeftMenu from '../../../../components/Left-menu';
import moment from 'moment';
import { CaretLeftOutlined, CaretRightOutlined } from '@ant-design/icons';
import { IconCalendar } from './icon/icon-calendar';
import { Link } from 'react-router-dom';
import { IconDot } from './icon/icon-dot';
import { IconDownload } from './icon/icon-download';
import { IconDropdown } from './icon/icon-dropdown';
import { onValue, ref} from '@firebase/database';
import { dbrealtime } from '../../../../config/config';

const { Content } = Layout;

const dateFormatList = ['DD/MM/YYYY', 'DD/MM/YY'];
const STTOptions = [
    { value: 'Tất cả' }, { value: '2010001' }, { value: '2010002' }, { value: '2010003' }, { value: '2010004' }, { value: '2010005' },
    { value: '2010006' }, { value: '2010007' }, { value: '2010008' }, { value: '2010009' }, { value: '20100010' }
];

const granttimeOptions = [
    { value: 'Tất cả' }, { value: '07:10  01/10/2021' }, { value: '07:15  01/10/2021' }, { value: '07:28  01/10/2021' },
    { value: '07:20 - 07/10/2021' }, { value: '07:20 - 07/10/2021' }
];

const statusOptions = [
    { value: 'Tất cả' }, { value: 'Đang chờ' }, { value: 'Đã sử dụng' }, { value: 'Bỏ qua' }
];

const PowersupplyOptions = [
    { value: 'Tất cả' }, { value: 'Kiosk' }, { value: 'Hệ thống' }
];


const columns: any = [
    {
        title: 'Số thứ tự',
        dataIndex: 'STT',
        key: 'STT',
        className: `stt-one`,
        filterIcon: (filtered: any) => <IconDropdown />,
        filterDropdown: () => {
            return <Select
                style={{ width: '190px' }}
                options={STTOptions}
                className="service-item"
                defaultValue='Tất cả'
            />;
        },
    },
    {
        title: 'Tên dịch vụ',
        dataIndex: 'service',
        className: 'stt',
        filters: [
            {
                text: 'Tất cả',
                value: 'Joe',
            },
            {
                text: 'Khám tim mạch',
                value: 'Khám tim mạch',
            },
            {
                text: 'Khám mắt',
                value: 'Khám mắt',
            },
            {
                text: 'Khám tổng quát',
                value: 'Khám tổng quát',
            },
        ],
        filterIcon: (filtered: any) => <IconDropdown />,
        onFilter: (value: any, record: any) => record.service.indexOf(value) === 0
    },
    {
        title: 'Thời gian cấp',
        dataIndex: 'granttime',
        className: 'stt',
        filterIcon: (filtered: any) => <IconDropdown />,
        filterDropdown: () => {
            return <Select
                style={{ width: '238px' }}
                options={granttimeOptions}
                className="service-item"
                defaultValue='Tất cả'
            />;
        },

    },
    {
        title: 'Tình trạng',
        dataIndex: 'status',
        className: 'stt',
        filterIcon: (filtered: any) => <IconDropdown />,
        filterDropdown: () => {
            return <Select
                style={{ width: '190px' }}
                options={statusOptions}
                className="service-item"
                defaultValue='Tất cả'
            />;
        },
        render: (text: any) => <div className={`${text.classstatus}`}> <IconDot /> {text.name}</div>,

    },
    {
        title: 'Nguồn cấp',
        dataIndex: 'powersupply',
        className: 'stt-final',
        filterIcon: (filtered: any) => <IconDropdown />,
        filterDropdown: () => {
            return <Select
                style={{ width: '180px' }}
                options={PowersupplyOptions}
                className="service-item"
                defaultValue='Tất cả'
            />;
        },
    }
];

export interface IReportManagementProps { }

const ReportManagementComponent: React.FC<IReportManagementProps> = () => {
    const [visible, setVisible] = useState(false);

    const showDrawer = () => {
        setVisible(true);
    };

    const onClose = () => {
        setVisible(false);
    };

    const [dataReport, setDataReport] = useState<any[]>([]);

    useEffect(() => {
        onValue(ref(dbrealtime), (snapshot: any) => {
            const data = snapshot.val();
            if (data !== null) {
                Object.values(data).map((todo: any) => (
                    setDataReport((oldArray) => [...oldArray, todo])
                ))
            }
        })
    }, [])

    return (
        <div className='ReportManagement-Component'>
            <Layout>
                <LeftMenu KeysMenu="5" />
                <Layout>
                    <Content style={{ margin: '24px 16px 0' }}>
                        <div className="site-layout-background" style={{ padding: 24, minHeight: 104 }}>
                            <div className="left-title">
                                <h2>Báo cáo &nbsp; <i className="fa-solid fa-angle-right"></i> &nbsp; <span>Lập báo cáo</span></h2>
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
                        </div>
                        <div className="number-create-link">
                            <IconDownload />
                            <Link to="/">Tải về</Link>
                        </div>
                        <div className="number-details" style={{ height: "539px !important" }}>
                            <Table rowClassName={(record, index) => index % 2 === 0 ? 'table-row-light' : 'table-row-dark'} columns={columns} dataSource={dataReport[0]?.Reports} pagination={{ pageSize: 10, prevIcon: <CaretLeftOutlined />, nextIcon: <CaretRightOutlined /> }} bordered />
                        </div>
                    </Content>
                </Layout>
            </Layout>
        </div>
    );
};

export default ReportManagementComponent;