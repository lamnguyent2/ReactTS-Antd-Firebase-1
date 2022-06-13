import React, { useEffect, useState } from 'react';
import { Avatar, Image, Layout, Drawer } from 'antd';
import './style.scss';
import LeftMenu from '../../../../components/Left-menu';
import { Link, useParams } from 'react-router-dom';
import { IconBack } from './icon/icon-back';
import { IconDot } from './icon/icon-dot';
import { onValue, ref} from '@firebase/database';
import { dbrealtime } from '../../../../config/config';

const { Content } = Layout;

export interface INumberLevelDetailsProps { }

const NumberLevelDetailsComponent: React.FC<INumberLevelDetailsProps> = () => {
    const { id } = useParams();
    const ids:any = id ;
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
                    setDataNumber((oldArray) => [...oldArray, todo])
                ))
            }
        })
    }, [])

    return (
        <div className='NumberLevelDetails-Component'>
            <Layout>
                <LeftMenu KeysMenu="4" />
                <Layout>
                    <Content style={{ margin: '24px 16px 0' }}>
                        <div className="site-layout-background" style={{ padding: 24, minHeight: 104 }}>
                            <div className="left-title">
                                <h2>Cấp số &nbsp; <i className="fa-solid fa-angle-right"></i> &nbsp; Danh sách cấp số &nbsp; <i className="fa-solid fa-angle-right"></i> &nbsp; <span>Chi tiết</span></h2>
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
                        <h2 className='Title-Number'>Quản lý cấp số</h2>
                        <div className="number-create-link">
                            <IconBack />
                            <Link to="/number-level-management">Quay lại</Link>
                        </div>
                        <div className="number-details">
                            <h2>Thông tin cấp số</h2>
                            <div className="information">
                                <div className="left-form">
                                    <div className="info">
                                        <h3>Họ và tên: </h3>
                                        <p>{dataNumber[0]?.NumberLevels[ids].name}</p>
                                    </div>
                                    <div className="info">
                                        <h3>Tên dịch vụ: </h3>
                                        <p>{dataNumber[0]?.NumberLevels[ids].service}</p>
                                    </div>
                                    <div className="info">
                                        <h3>Số thứ tự: </h3>
                                        <p>{dataNumber[0]?.NumberLevels[ids].STT}</p>
                                    </div>
                                    <div className="info">
                                        <h3>thời gian cấp: </h3>
                                        <p>{dataNumber[0]?.NumberLevels[ids].granttime}</p>
                                    </div>
                                    <div className="info">
                                        <h3>Hạn sử dụng: </h3>
                                        <p>{dataNumber[0]?.NumberLevels[ids].expiry}</p>
                                    </div>
                                </div>
                                <div className="right-form">
                                    <div className="info">
                                        <h3>Nguồn cấp: </h3>
                                        <p>{dataNumber[0]?.NumberLevels[ids].powersupply}</p>
                                    </div>
                                    <div className="info">
                                        <h3>Trạng thái: </h3>
                                        <p className={`${dataNumber[0]?.NumberLevels[ids].status.classstatus}`}><IconDot /> {dataNumber[0]?.NumberLevels[ids].status.name}</p>
                                    </div>
                                    <div className="info">
                                        <h3>Số điện thoại: </h3>
                                        <p>0948523623</p>
                                    </div>
                                    <div className="info">
                                        <h3>Địa chỉ Email: </h3>
                                        <p>nguyendung@gmail.com</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Content>
                </Layout>
            </Layout>
        </div>
    );
};

export default NumberLevelDetailsComponent;