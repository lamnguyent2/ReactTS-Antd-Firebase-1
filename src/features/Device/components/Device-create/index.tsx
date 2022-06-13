import React, { useState, useEffect } from 'react';
import { Avatar, Image, Layout, Form, Input, Button, Select, Drawer, notification, Alert, Tooltip } from 'antd';
import './style.scss';
import LeftMenu from '../../../../components/Left-menu';
import { CaretDownOutlined } from '@ant-design/icons';
import { dbrealtime } from '../../../../config/config';
import { onValue, ref, set } from '@firebase/database';

const { Content } = Layout;

export interface IDeviceCreateProps { }

const DeviceCreateComponent: React.FC<IDeviceCreateProps> = () => {
    const ActionOptions = [{ value: 'Kiosk' }, { value: 'Display counter' }];
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

    const ss = (Math.max.apply(Math, dataDevice[0]?.Devices.map(function (o: any) { return o.Id; }))) + 1;
    const dd = ss;

    const [details, setDetails] = useState({
        STT: '',
        service: '',
        typeofservice: '',
        ipaddress: '',
        status: { name: 'Ngưng hoạt động', classstatus: 'ngung-hoat-dong' },
        connect: { name: 'Mất kết nối', classconnect: 'mat-ket-noi' },
        usedservice: '',
        detailss: '',
        updatelink: ''
    });

    const [ValidateCheck, setValidateCheck] = useState("");
    const [ValidateInfo, setValidateInfo] = useState("");

    const handleSubmit = (e: any) => {
        e.preventDefault();
        if (details.STT === "") {
            setValidateCheck("check")
            setValidateInfo("Mã thiết bị")
        } else if (details.service === "") {
            setValidateCheck("check")
            setValidateInfo("Tên thiết bị")
        } else if (details.ipaddress === "") {
            setValidateCheck("check")
            setValidateInfo("Địa chỉ IP")
        } else if (details.usedservice === "") {
            setValidateCheck("check")
            setValidateInfo("Dịch vụ sử dụng")
        } else if (details.typeofservice === "") {
            setValidateCheck("check")
            setValidateInfo("Loại thiết bị")
        } else {
            if (details.status.name === "Hoạt động") {
                details.status.classstatus = "hoat-dong"
            } else if (details.status.name === "Ngưng hoạt động") {
                details.status.classstatus = "ngung-hoat-dong"
            } else {
                details.status.classstatus = "no"
            }
            set(ref(dbrealtime, `datareact/Devices/${ss}`), {
                Id: ss,
                STT: details.STT,
                service: details.service,
                typeofservice: details.typeofservice,
                ipaddress: details.ipaddress,
                status: { name: details.status.name, classstatus: details.status.classstatus },
                connect: { name: details.connect.name, classconnect: details.connect.classconnect },
                usedservice: details.usedservice,
                details: "/device-details/" + dd,
                updatelink: "/device-update/" + dd
            }).then(() => {
                notification.open({
                    message: <Alert message="Thêm thành công!" type="success" showIcon />,
                    onClick: () => {
                        console.log('Notification Clicked!');
                    },
                });
            })
                .catch((error) => {
                    alert(error);
                });
        }
    };

    return (
        <div className='DeviceCreate-Component'>
            <Layout>
                <LeftMenu KeysMenu="2" />
                <Layout>
                    <Content style={{ margin: '24px 16px 0' }}>
                        <div className="site-layout-background" style={{ padding: 24, minHeight: 104 }}>
                            <div className="left-title">
                                <h2>Thiết bị &nbsp; <i className="fa-solid fa-angle-right"></i> &nbsp; Danh sách thiết bị &nbsp; <i className="fa-solid fa-angle-right"></i> &nbsp; <span>Thêm thiết bị</span></h2>
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
                        <div className="number-details">
                            <h2 className='titleS'>Thông tin thiết bị</h2>
                            <div className="role-information">
                                <Form
                                    name="basic"
                                    labelCol={{
                                        span: 8,
                                    }}
                                    wrapperCol={{
                                        span: 16,
                                    }}
                                    initialValues={{
                                        remember: true,
                                    }}
                                    autoComplete="off"
                                >
                                    <div className="left-form">
                                        <Form.Item name="role-code" className='role-code'>
                                            <label htmlFor="role-code">Mã thiết bị </label>
                                            <Input placeholder='Nhập mã thiết bị' onChange={(e: any) => setDetails({ ...details, STT: e.target.value })} value={details.STT} />
                                        </Form.Item>
                                        <Form.Item name="role-code" className='role-code'>
                                            <label htmlFor="role-code">Tên thiết bị </label>
                                            <Input placeholder='Nhập tên thiết bị' onChange={(e: any) => setDetails({ ...details, service: e.target.value })} value={details.service} />
                                        </Form.Item>
                                        <Form.Item name="role-code" className='role-code'>
                                            <label htmlFor="role-code">Địa chỉ IP </label>
                                            <Input placeholder='Nhập địa chỉ IP' onChange={(e: any) => setDetails({ ...details, ipaddress: e.target.value })} value={details.ipaddress} />
                                        </Form.Item>
                                    </div>
                                    <div className="right-form">
                                        <Form.Item name="role-code" className='role-code'>
                                            <label htmlFor="role-code">Loại thiết bị </label>
                                            <Select
                                                suffixIcon={<CaretDownOutlined />}
                                                style={{ width: '100%' }}
                                                placeholder="Chọn loại thiết bị"
                                                options={ActionOptions}
                                                className="service-item"
                                                onChange={(e: any) => setDetails({ ...details, typeofservice: e || "Kiosk" })}
                                            />
                                        </Form.Item>
                                        <Form.Item name="role-code" className='role-code'>
                                            <label htmlFor="role-code">Tên đăng nhập </label>
                                            <Input placeholder='Nhập tài khoản' />
                                        </Form.Item>
                                        <Form.Item name="role-code" className='role-code'>
                                            <label htmlFor="role-code">Mật khẩu</label>
                                            <Input placeholder='Nhập mật khẩu' />
                                        </Form.Item>
                                    </div>
                                </Form>
                            </div>
                            <div className="role-information">
                                <Form
                                    name="basic"
                                    labelCol={{
                                        span: 8,
                                    }}
                                    wrapperCol={{
                                        span: 16,
                                    }}
                                    initialValues={{
                                        remember: true,
                                    }}
                                    autoComplete="off"
                                >
                                    <div className="once-form">
                                        <Form.Item name="role-code" className='role-code'>
                                            <label htmlFor="role-code">Dịch vụ sử dụng: </label>
                                            <Input placeholder='Nhập dịch vụ sử dụng' onChange={(e: any) => setDetails({ ...details, usedservice: e.target.value })} value={details.usedservice} />
                                        </Form.Item>
                                        <Form.Item label='Là trường thông tin bắt buộc' className='final' name="s" rules={[{ required: true }]}></Form.Item>
                                    </div>
                                </Form>
                                {
                                    (ValidateCheck) === "check" ? (
                                        <Tooltip title={ValidateInfo}>
                                            <span style={{ color: "red" }}>Vùi lòng điều đủ thông tin.</span>
                                        </Tooltip>
                                    ) : ("")
                                }
                            </div>
                        </div>
                        <div className="submit-button">
                            <Button className="btn destroy-button">Hủy bỏ</Button>
                            <Button className="btn continue-button" onClick={handleSubmit}>Thêm thiết bị</Button>
                        </div>
                    </Content>
                </Layout>
            </Layout>
        </div>
    );
};

export default DeviceCreateComponent;