import React, { useEffect, useState } from 'react';
import { Avatar, Image, Layout, Select, DatePicker, Space, Input, Table, Drawer } from 'antd';
import './style.scss';
import LeftMenu from '../../../../../components/Left-menu';
import moment from 'moment';
import { CaretDownOutlined, CaretLeftOutlined, CaretRightOutlined } from '@ant-design/icons';
import { IconCalendar } from './icon/icon-calendar';
import { IconSearch } from './icon/icon-search';
import { Link, useNavigate } from 'react-router-dom';
import { IconAdd } from './icon/icon-add';
import { IconDot } from './icon/icon-dot';
import { dbrealtime } from '../../../../../config/config';
import { onValue, ref } from '@firebase/database';

const { Content } = Layout;

const dateFormatList = ['DD/MM/YYYY', 'DD/MM/YY'];

const columns: any = [
    {
        title: 'STT',
        dataIndex: 'STT',
        className: `stt-one`,
    },
    {
        title: 'Tên khách hàng',
        dataIndex: 'name',
        className: 'stt-two',
    },
    {
        title: 'Tên dịch vụ',
        dataIndex: 'service',
        className: 'stt',
    },
    {
        title: 'Thời gian cấp',
        dataIndex: 'granttime',
        className: 'stt',
    },
    {
        title: 'Hạn sử dụng',
        dataIndex: 'expiry',
        className: 'stt',
    },
    {
        title: 'Trạng thái',
        dataIndex: 'status',
        className: 'stt',
        render: (text: any) => <div className={`${text?.classstatus}`}> <IconDot /> {text?.name}</div>,
    },
    {
        title: 'Nguồn cấp',
        dataIndex: 'powersupply',
        className: 'stt',
    },
    {
        title: '',
        dataIndex: 'details',
        render: (text: any) => <a href={`${text}`}>Chi tiết</a>,
        className: 'stt-final',
    },
];

export interface INumberLevelManagementUsedProps { }

const NumberLevelManagementUsedComponent: React.FC<INumberLevelManagementUsedProps> = () => {
    const navigate = useNavigate();
    const ServiceOptions = [{ value: 'Tất cả' }, { value: 'Khám tổng quát' }, { value: 'Khám hô hấp' }, { value: 'Khám tim mạch' }, { value: 'Khám sản - Phụ khoa' }, { value: 'Khám răng hàm mặt' }, { value: 'Khám tai mũi họng' }, { value: 'Xét nghiệm' }, { value: 'Khám Mắt' }, { value: 'Cấp giấy bảo hiểm định kỳ' }];
    const StatusOptions = [{ value: 'Tất cả' }, { value: 'Đang chờ' }, { value: 'Đã sử dụng' }, { value: 'Bỏ qua' }];
    const PowerSupplyOptions = [{ value: 'Tất cả' }, { value: 'Kiosk' }, { value: 'Hệ thống' }];
    const [visible, setVisible] = useState(false);

    const showDrawer = () => {
        setVisible(true);
    };

    const onClose = () => {
        setVisible(false);
    };

    const [dataNumber, setDataNumber] = useState<any[]>([]);
    useEffect(() => {
        onValue(ref(dbrealtime), (snapshot: any) => {
            const data = snapshot.val();
            if (data !== null) {
                Object.values(data).map((todo: any) => (
                    todo.NumberLevels.map((dd:any) =>(
                        dd.status.classstatus === "da-su-dung" ? (
                            setDataNumber((ddaraay) => [...ddaraay, dd])
                        ) : ("")
                        
                    ))
                ))
            }
        })
    }, [])

    const linkOptions = (value:any) =>{
        if(value==="Tất cả"){
            navigate("/number-level-management");
        }else if(value==="Đang chờ"){
            navigate("/number-level-management-waiting");
        }else if(value==="Đã sử dụng"){
            navigate("/number-level-management-used");
        }else if(value==="Bỏ qua"){
            navigate("/number-level-management-skipped");
        }
    }

    return (
        <div className='NumberLevelMananementUsed-Component'>
            <Layout>
                <LeftMenu KeysMenu="4" />
                <Layout>
                    <Content style={{ margin: '24px 16px 0' }}>
                        <div className="site-layout-background" style={{ padding: 24, minHeight: 104 }}>
                            <div className="left-title">
                                <h2>Cấp số &nbsp; <i className="fa-solid fa-angle-right"></i> &nbsp; <span>Danh sách cấp số</span></h2>
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
                        <h2 className='Title-Number'>Quản lý cấp số </h2>
                        <div className="menu-service">
                            <div className="services">
                                <label htmlFor="service-item">Tên dịch vụ</label>
                                <Select
                                    suffixIcon={<CaretDownOutlined />}
                                    style={{ width: '100%' }}
                                    placeholder="Chọn dịch vụ"
                                    options={ServiceOptions}
                                    className="service-item"
                                    defaultValue={"Tất cả "}
                                />
                            </div>
                            <div className="services">
                                <label htmlFor="service-item">Tình trạng</label>
                                <Select
                                    suffixIcon={<CaretDownOutlined />}
                                    style={{ width: '100%' }}
                                    placeholder="Chọn dịch vụ"
                                    options={StatusOptions}
                                    className="service-item"
                                    defaultValue={"Đã sử dụng"}
                                    onChange={(e: any) => linkOptions(e)}
                                />
                            </div>
                            <div className="services">
                                <label htmlFor="service-item">Nguồn cấp</label>
                                <Select
                                    suffixIcon={<CaretDownOutlined />}
                                    style={{ width: '100%' }}
                                    placeholder="Chọn dịch vụ"
                                    options={PowerSupplyOptions}
                                    className="service-item"
                                    defaultValue={"Tất cả"}
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
                            <div className="services">
                                <label htmlFor="service-item">Từ khóa</label> <br />
                                <Space direction="vertical" size={12}>
                                    <Input type='text' placeholder="Nhập từ khóa" style={{ width: 240 }} suffix={<IconSearch />} />
                                </Space>
                            </div>
                        </div>
                        <div className="number-create-link">
                            <IconAdd />
                            <Link to="/number-level-create-login-required">Cấp <br /> số mới</Link>
                        </div>
                        <div className="number-details" style={{ height: "490px !important" }}>
                            <Table rowClassName={(record, index) => index % 2 === 0 ? 'table-row-light' : 'table-row-dark'} columns={columns} dataSource={dataNumber} pagination={{ pageSize: 9, prevIcon: <CaretLeftOutlined />, nextIcon: <CaretRightOutlined /> }} bordered />
                        </div>
                    </Content>
                </Layout>
            </Layout>
        </div>
    );
};

export default NumberLevelManagementUsedComponent;