import React, { useState, useEffect } from 'react';
import { Avatar, Button, Image, Layout, Select, Modal, Drawer } from 'antd';
import './style.scss';
import LeftMenu from '../../../../../components/Left-menu';
import { CaretDownOutlined } from '@ant-design/icons';
import { dbrealtime } from '../../../../../config/config';
import { onValue, ref, set } from '@firebase/database';

const { Content } = Layout;

export interface INumberLevelCreateNoLoginRequiredProps { }

const NumberLevelCreateNoLoginRequiredComponent: React.FC<INumberLevelCreateNoLoginRequiredProps> = () => {
    const options = [{ value: 'Khám tổng quát' }, { value: 'Khám hô hấp' }, { value: 'Khám tim mạch' }, { value: 'Khám sản - Phụ khoa' }, { value: 'Khám răng hàm mặt' }, { value: 'Khám tai mũi họng' }, { value: 'Xét nghiệm' }, { value: 'Khám Mắt' }, { value: 'Cấp giấy bảo hiểm định kỳ' }];

    const [isModalVisible, setIsModalVisible] = useState(false);

    const handleOk = () => {
        setIsModalVisible(false);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };

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

    const ss = (Math.max.apply(Math, dataNumber[0]?.NumberLevels.map(function (o: any) { return o.Id; }))) + 1; 
    const sttauto = (Math.max.apply(Math, dataNumber[0]?.NumberLevels.map(function (o: any) { return o.STT; }))) + 1; 
    const dd =ss;

    const [details, setDetails] = useState({
        name: 'Lê Huỳnh Ái Vân',
        service: '',
        granttime: '14:35 - 07/11/2021',
        expiry: '14:35 - 12/11/2021',
        status: {name: 'Đang chờ', classstatus: 'dang-cho'},
        powersupply: 'Kiosk',
        details: ''
    });

    const handleSubmit = (e: any) => {
        e.preventDefault();
        setIsModalVisible(true);
        
        set(ref(dbrealtime, `datareact/NumberLevels/${ss}`), {
            Id: ss,
            STT: sttauto,
            service: details.service,
            name: details.name,
            granttime: details.granttime,
            status: { name: details.status.name, classstatus: details.status.classstatus },
            expiry: details.expiry,
            details: "/number-level-details/" + dd,
            powersupply: details.powersupply
        }).then(() => {
            console.log(details);
        })
            .catch((error) => {
                alert(error);
            });
    };

    return (
        <div className='NumberLevelCreateNoLoginRequired-Component'>
            <Layout>
                <LeftMenu KeysMenu="4" />
                <Layout>
                    <Content style={{ margin: '24px 16px 0' }}>
                        <div className="site-layout-background" style={{ padding: 24, minHeight: 104 }}>
                            <div className="left-title">
                                <h2>Cấp số &nbsp; <i className="fa-solid fa-angle-right"></i> &nbsp; Danh sách cấp số &nbsp; <i className="fa-solid fa-angle-right"></i> &nbsp; <span>Cấp số mới</span></h2>
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
                        <div className="number-details">
                            <h2 className='titleS'>cấp số mới</h2>
                            <label htmlFor="service-item">Dịch vụ khách hàng lựa chọn</label>
                            <Select
                                suffixIcon={<CaretDownOutlined />}
                                style={{ width: '100%' }}
                                placeholder="Chọn dịch vụ"
                                options={options}
                                className="service-item"
                                onChange={(e: any) => setDetails({ ...details, service: e })}
                            />
                            <div className="submit-button">
                                <Button className="btn destroy-button">Hủy bỏ</Button>
                                <Button className="btn continue-button" onClick={handleSubmit}>In số</Button>
                            </div>
                        </div>
                    </Content>
                </Layout>
            </Layout>
            <Modal title="Basic Modal" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
                <div className='Pop-Up'>
                    <div className="information">
                        <h3>Số thứ tự được cấp</h3>
                        <h1>2001201</h1>
                        <p>DV: Khám răng hàm mặt <span>(tại quầy số 1)</span></p>
                    </div>
                    <div className="time-over">
                        <p className='time-one'>Thời gian cấp: 09:30 11/10/2021</p>
                        <p className='time-two'>Hạn sử dụng: 17:30 11/10/2021</p>
                    </div>
                </div>
            </Modal>
        </div>
    );
};

export default NumberLevelCreateNoLoginRequiredComponent;