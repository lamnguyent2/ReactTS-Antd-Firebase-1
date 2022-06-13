import React, { useState, useEffect } from 'react';
import { Avatar, Image, Layout, Drawer } from 'antd';
import './style.scss';
import LeftMenu from '../../../../components/Left-menu';
import { Link, useParams } from 'react-router-dom';
import { IconUpdate } from './icon/icon-update';
import { onValue, ref} from '@firebase/database';
import { dbrealtime } from '../../../../config/config';


const { Content } = Layout;

export interface IDeviceDetailsProps { }

const DeviceDetailsComponent: React.FC<IDeviceDetailsProps> = () => {
    const { id } = useParams();
    const ids:any = id  
    
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
        <div className='DeviceDetails-Component'>
            <Layout>
                <LeftMenu KeysMenu="2" />
                <Layout>
                    <Content style={{ margin: '24px 16px 0' }}>
                        <div className="site-layout-background" style={{ padding: 24, minHeight: 104 }}>
                            <div className="left-title">
                                <h2>Thiết bị &nbsp; <i className="fa-solid fa-angle-right"></i> &nbsp; Danh sách thiết bị &nbsp; <i className="fa-solid fa-angle-right"></i> &nbsp; <span>Chi tiết thiết bị</span></h2>
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
                        <h2 className='Title-Number'>Quản lý thiết bị</h2>
                        <div className="number-create-link">
                            <IconUpdate />
                            <Link to="/device-update">Cập nhật<br /> thiết bị</Link>
                        </div>
                        <div className="number-details">
                            <h2>Thông tin thiết bị</h2>
                            <div className="information">
                                <div className="left-form">
                                    <div className="info">
                                        <h3>Mã thiết bị: </h3>
                                        <p>{dataDevice[0]?.Devices[ids].STT}</p>
                                    </div>
                                    <div className="info">
                                        <h3>Tên thiết bị: </h3>
                                        <p>{dataDevice[0]?.Devices[ids].service}</p>
                                    </div>
                                    <div className="info">
                                        <h3>Địa chỉ IP: </h3>
                                        <p>{dataDevice[0]?.Devices[ids].ipaddress}</p>
                                    </div>
                                </div>
                                <div className="right-form">
                                    <div className="info">
                                        <h3>Loại thiết bị: </h3>
                                        <p>{dataDevice[0]?.Devices[ids].service}</p>
                                    </div>
                                    <div className="info">
                                        <h3>Tên đăng nhập: </h3>
                                        <p>Linhkyo011</p>
                                    </div>
                                    <div className="info">
                                        <h3>Mật khẩu: </h3>
                                        <p>CMS</p>
                                    </div>
                                </div>
                            </div>
                            <div className="service-used">
                                <h3>Dịch vụ sử dụng: </h3>
                                <p>{dataDevice[0]?.Devices[ids].usedservice}.</p>
                            </div>
                        </div>
                    </Content>
                </Layout>
            </Layout>
        </div>
    );
};

export default DeviceDetailsComponent;