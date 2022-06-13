import React, { useState } from 'react';
import { Avatar, Image, Layout, Progress, Statistic, Select, Drawer } from 'antd';
import './style.scss';
import LeftMenu from '../../../../components/Left-menu';
import { IconPc } from './icon/icon-pc';
import { IconDot } from './icon/icon-dot';
import { IconService } from './icon/icon-service';
import { IconNumber } from './icon/icon-number';
import DatePicker from 'sassy-datepicker';
import { IconNumberDashboard } from './icon/icon-number-dashboard';
import { ArrowUpOutlined, ArrowDownOutlined } from '@ant-design/icons';
import { IconUsedDashboard } from './icon/icon-used-dashboard';
import { IconWaitingDashboard } from './icon/icon-waiting-dashboard';
import { IconSkippedDashboard } from './icon/icon-skipped-dashboard';
import DashboardByDateComponent from '../Dashboard-by-date';
import { CaretDownOutlined } from '@ant-design/icons';
import DashboardByMonthComponent from '../Dashboard-by-month';
import DashboardByWeekComponent from '../Dashboard-by-week';
import { useNavigate } from 'react-router-dom';

const { Content } = Layout;

const { Option } = Select;

export interface IDashboardProps { }

const DashboardComponent: React.FC<IDashboardProps> = () => {
    const navigate = useNavigate();
    
    const [state, setstate] = useState("ngày");
    
    function handleChange(value: any) {
        setstate(value);
    }

    const [visible, setVisible] = useState(false);

    const showDrawer = () => {
        setVisible(true);
    };

    const onClose = () => {
        setVisible(false);
    };

    const LinkDevice = () =>{
        navigate("/device-management");
    }

    const LinkService = () =>{
        navigate("/service-list");
    }

    const LinkNumber = () =>{
        navigate("/number-level-management");
    }

    return (
        <div className='Dashboard-Component'>
            <Layout>
                <LeftMenu KeysMenu="1" />
                <Layout>
                    <Content style={{ margin: '24px 16px 0' }}>
                        <div className="site-layout-background">
                            <div className="left-title">
                                <h1>Dashboard</h1>
                                <div className="table-chart">
                                    <h2>Biểu đồ cấp số</h2>
                                    <div className="chart">
                                        <div className="level-chart">
                                            <div className="ordinal-number">
                                                <div className="details-ordinal-number">
                                                    <Avatar size={48} icon={<IconNumberDashboard />} className="icon-ordinal-number" />
                                                    <p>Số thứ tự <br /> đã cấp</p>
                                                </div>
                                                <div className="view-ordinal-number">
                                                    <p>4.221</p>
                                                    <Statistic
                                                        value={32.41}
                                                        precision={2}
                                                        valueStyle={{ color: '#FF9138' }}
                                                        prefix={<ArrowUpOutlined />}
                                                        suffix="%"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="used-level-chart">
                                            <div className="ordinal-number">
                                                <div className="details-ordinal-number">
                                                    <Avatar size={48} icon={<IconUsedDashboard />} className="icon-ordinal-number" />
                                                    <p>Số thứ tự <br /> đã sử dụng</p>
                                                </div>
                                                <div className="view-ordinal-number">
                                                    <p>3.721</p>
                                                    <Statistic
                                                        value={32.41}
                                                        precision={2}
                                                        valueStyle={{ color: '#E73F3F' }}
                                                        prefix={<ArrowDownOutlined />}
                                                        suffix="%"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="waiting-level-chart">
                                            <div className="ordinal-number">
                                                <div className="details-ordinal-number">
                                                    <Avatar size={48} icon={<IconWaitingDashboard />} className="icon-ordinal-number" />
                                                    <p>Số thứ tự <br /> đang chờ</p>
                                                </div>
                                                <div className="view-ordinal-number">
                                                    <p>468</p>
                                                    <Statistic
                                                        value={56.41}
                                                        precision={2}
                                                        valueStyle={{ color: '#ff9138' }}
                                                        prefix={<ArrowUpOutlined />}
                                                        suffix="%"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="skipped-level-chart">
                                            <div className="ordinal-number">
                                                <div className="details-ordinal-number">
                                                    <Avatar size={48} icon={<IconSkippedDashboard />} className="icon-ordinal-number" />
                                                    <p>Số thứ tự <br /> đã bỏ qua</p>
                                                </div>
                                                <div className="view-ordinal-number">
                                                    <p>32</p>
                                                    <Statistic
                                                        value={22.41}
                                                        precision={2}
                                                        valueStyle={{ color: '#E73F3F' }}
                                                        prefix={<ArrowDownOutlined />}
                                                        suffix="%"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='statistical-tables'>
                                        <div className="content">
                                            <div className="left-content">
                                                <h3>Bảng thống kê theo {state}</h3>
                                                <p>Tháng 11/2021</p>
                                            </div>
                                            <div className="right-content">
                                                <p>Xem theo</p>
                                                <Select defaultValue={state} style={{ width: 106 }} onChange={handleChange} suffixIcon={<CaretDownOutlined />}>
                                                    <Option value="ngày">Ngày</Option>
                                                    <Option value="tuần">Tuần</Option>
                                                    <Option value="tháng">Tháng</Option>
                                                </Select>
                                            </div>
                                        </div>
                                        {state === "ngày" ? (
                                            <DashboardByDateComponent />
                                        ) : state === "tháng" ? (
                                            <DashboardByMonthComponent />
                                        ) : state === "tuần" ? (
                                            <DashboardByWeekComponent />
                                        ) : ("")}
                                    </div>
                                </div>
                            </div>
                            <div className="right-mini-profile">
                                <div className="profile-informagtion">
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
                                <div className="overview-dashboard">
                                    <h3>Tổng quan</h3>
                                    <div className="device-progress" onClick={LinkDevice}>
                                        <div className="details-progress">
                                            <Progress type="circle" percent={90} strokeColor='#FF7506' />
                                            <div className="title-progress">
                                                <div className="number">4221</div>
                                                <p className='device'><IconPc /> Thiết bị</p>
                                            </div>
                                        </div>
                                        <div className="work-progress">
                                            <div className="active-stop">
                                                <div className="active">
                                                    <IconDot />
                                                    <p className='content'>Đang hoạt động</p>
                                                    <p>3.799</p>
                                                </div>
                                                <div className="stop-active">
                                                    <IconDot />
                                                    <p className='content'>Ngưng hoạt động</p>
                                                    <p>422</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="device-progress" onClick={LinkService}>
                                        <div className="details-progress">
                                            <Progress type="circle" percent={76} strokeColor='#4277FF' />
                                            <div className="title-progress">
                                                <div className="number">276</div>
                                                <p className='service'><IconService /> Dịch vụ</p>
                                            </div>
                                        </div>
                                        <div className="work-progress">
                                            <div className="active-stop">
                                                <div className="active active-column-two">
                                                    <IconDot />
                                                    <p className='content'>Đang hoạt động</p>
                                                    <p className='column-two'>3.799</p>
                                                </div>
                                                <div className="stop-active">
                                                    <IconDot />
                                                    <p className='content'>Ngưng hoạt động</p>
                                                    <p className='column-two'>422</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="device-progress" onClick={LinkNumber}>
                                        <div className="details-progress">
                                            <Progress type="circle" percent={86} strokeColor='#35C75A' />
                                            <div className="title-progress">
                                                <div className="number">4221</div>
                                                <p className='number-level'><IconNumber /> Cấp số</p>
                                            </div>
                                        </div>
                                        <div className="work-progress">
                                            <div className="active-stop">
                                                <div className="active active-column-three">
                                                    <IconDot />
                                                    <p className='content content-column-three'>Đã sử dụng</p>
                                                    <p className='column-three'>3.721</p>
                                                </div>
                                                <div className="stop-active no-margin">
                                                    <IconDot />
                                                    <p className='content content-column-three'>Đang chờ</p>
                                                    <p className='column-three'>486</p>
                                                </div>
                                                <div className="stop-active no-margin">
                                                    <IconDot />
                                                    <p className='content contents-column-three'>Bỏ qua</p>
                                                    <p className='column-three'>32</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <DatePicker />
                                </div>
                            </div>
                        </div>
                    </Content>
                </Layout>
            </Layout>
        </div>
    );
};

export default DashboardComponent;