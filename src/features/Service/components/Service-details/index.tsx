import React, { useEffect, useState } from 'react';
import { Avatar, Image, Layout, Select, DatePicker, Space, Input, Table, Form, Drawer } from 'antd';
import './style.scss';
import LeftMenu from '../../../../components/Left-menu';
import moment from 'moment';
import { CaretDownOutlined, CaretLeftOutlined, CaretRightOutlined } from '@ant-design/icons';
import { IconCalendar } from './icon/icon-calendar';
import { IconSearch } from './icon/icon-search';
import { DataNumber } from './data';
import { Link, useParams } from 'react-router-dom';
import { IconDot } from './icon/icon-dot';
import { IconUpdate } from '../../../Device/components/Device-details/icon/icon-update';
import { IconBack } from '../../../Device/components/Device-details/icon/icon-back';
import { onValue, ref} from '@firebase/database';
import { dbrealtime } from '../../../../config/config';

const { Content } = Layout;

const dateFormatList = ['DD/MM/YYYY', 'DD/MM/YY'];

const columns: any = [
    {
        title: 'Số thứ tự',
        dataIndex: 'STT',
        className: `stt-one`,
    },
    {
        title: 'Trạng thái',
        dataIndex: 'status',
        render: (text: any) => <div className={`${text.classs}`}> <IconDot /> {text.name}</div>,
        className: 'stt-final',
    },
];

export interface IServiceDetailsProps { }

const ServiceDetailsComponent: React.FC<IServiceDetailsProps> = () => {
    const { id } = useParams();
    const ids:any = id  ;

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
        <div className='ServiceDetails-Component'>
            <Layout>
                <LeftMenu KeysMenu="3" />
                <Layout>
                    <Content style={{ margin: '24px 16px 0' }}>
                        <div className="site-layout-background" style={{ padding: 24 }}>
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
                        <div className="service-details">
                            <div className="left-details">
                                <div className="service-information">
                                    <h2>Thông tin dịch vụ</h2>
                                    <div className='service-content'><h3>Mã dịch vụ:</h3> <p>{dataService[0]?.Services[ids].STT}</p></div>
                                    <div className='service-content'><h3>Tên dịch vụ:</h3> <p>{dataService[0]?.Services[ids].service}</p></div>
                                    <div className='service-content'><h3>Mô tả:</h3> <p>{dataService[0]?.Services[ids].description}</p></div>
                                </div>
                                <div className="number-level-rule">
                                    <h2>Quy tắc cấp số</h2>
                                    <Form name="basic">
                                        <Form.Item><label htmlFor="">Tăng tự động: </label> <Input type='number' placeholder='0001' className='boots' /> <span>đến</span> <Input type='number' placeholder='9999' /> </Form.Item>
                                        <Form.Item><label htmlFor="">Prefix: </label> <Input type='number' placeholder='0001' className='prefix' /></Form.Item>
                                        <Form.Item className='reset-everyday'><label htmlFor="">Reset mỗi ngày</label></Form.Item>
                                        <Form.Item className='for-example'>Ví dụ: 201-2001</Form.Item>
                                    </Form>
                                </div>
                            </div>
                            <div className="right-details">
                                <div className="number-create-link">
                                    <IconUpdate />
                                    <Link to="/service-create">Cập nhật <br /> danh sách</Link>
                                </div>
                                <div className="menu-service">
                                    <div className='two-services'>
                                        <div className="services status-service">
                                            <label htmlFor="service-item">Trạng thái hoạt động</label>
                                            <Select
                                                suffixIcon={<CaretDownOutlined />}
                                                style={{ width: '93.03%' }}
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
                                            <Input type='text' placeholder="Nhập từ khóa" style={{ width: 206 }} suffix={<IconSearch />} />
                                        </Space>
                                    </div>
                                </div>
                                <div className="number-create-link">
                                    <IconBack />
                                    <Link to="/service-create">Quay lại</Link>
                                </div>
                                <div className="number-details" style={{ height: "441px !important" }}>
                                    <Table rowClassName={(record, index) => index % 2 === 0 ? 'table-row-light' : 'table-row-dark'} columns={columns} dataSource={DataNumber} pagination={{ pageSize: 8, prevIcon: <CaretLeftOutlined />, nextIcon: <CaretRightOutlined /> }} bordered />
                                </div>
                            </div>
                        </div>
                    </Content>
                </Layout>
            </Layout>
        </div>
    );
};

export default ServiceDetailsComponent;