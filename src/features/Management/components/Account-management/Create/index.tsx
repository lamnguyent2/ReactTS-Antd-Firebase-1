import React, { useState, useEffect } from 'react';
import { Avatar, Image, Layout, Form, Input, Button, Select, Drawer, notification, Alert, Tooltip } from 'antd';
import './style.scss';
import LeftMenu from '../../../../../components/Left-menu';
import { CaretDownOutlined } from '@ant-design/icons';
import { dbrealtime } from '../../../../../config/config';
import { onValue, ref, set } from '@firebase/database';

const { Content } = Layout;

export interface IAccountCreateProps { }

const AccountCreateComponent: React.FC<IAccountCreateProps> = () => {
    const ServiceOptions = [{ value: 'Tất cả' }, { value: 'Kế toán' }, { value: 'Quản lý' }, { value: 'Admin' }];
    const ActionOptions = [{ value: 'Tất cả', classaction: "all" }, { value: 'Ngưng hoạt động', classaction: "ngung-hoat-dong" }, { value: 'Hoạt động', classaction: "hoat-dong" }];
    const [visible, setVisible] = useState(false);

    const showDrawer = () => {
        setVisible(true);
    };

    const onClose = () => {
        setVisible(false);
    };

    const [dataRule, setDataRule] = useState<any[]>([]);
    useEffect(() => {
        onValue(ref(dbrealtime), (snapshot: any) => {
            const data = snapshot.val();
            if (data !== null) {
                Object.values(data).map((todo: any) => (
                    setDataRule((oldArray) => [...oldArray, todo])
                ))
            }
        })
    }, [])

    const ss = (Math.max.apply(Math, dataRule[0]?.Accounts.map(function (o: any) { return o.Id; }))) + 1;

    const [details, setDetails] = useState({
        email: "",
        name: "",
        password: "",
        phonenumber: "",
        role: "",
        status: { name: 'Hoạt động', classstatus: 'hoat-dong' },
        updatelink: 'http://localhost:3000/account-update',
        username: ""
    });

    const [ValidateCheck, setValidateCheck] = useState("");
    const [ValidateInfo, setValidateInfo] = useState("");

    const handleSubmit = (e: any) => {
        e.preventDefault();
        if (details.status.name === "Hoạt động") {
            details.status.classstatus = "hoat-dong"
        } else if (details.status.name === "Ngưng hoạt động") {
            details.status.classstatus = "ngung-hoat-dong"
        } else {
            details.status.classstatus = "no"
        }
        if (details.name === "") {
            setValidateCheck("check")
            setValidateInfo("Họ tên")
        } else if (details.phonenumber === "") {
            setValidateCheck("check")
            setValidateInfo("Số điện thoại")
        } else if (details.email === "") {
            setValidateCheck("check")
            setValidateInfo("Email")
        } else if (details.role === "") {
            setValidateCheck("check")
            setValidateInfo("Tên vai trò")
        } else if (details.username === "") {
            setValidateCheck("check")
            setValidateInfo("Tên đăng nhập")
        } else if (details.password === "") {
            setValidateCheck("check")
            setValidateInfo("Mật khẩu")
        } else {
            set(ref(dbrealtime, `datareact/Accounts/${ss}`), {
                Id: ss,
                email: details.email,
                name: details.name,
                password: details.password,
                phonenumber: details.phonenumber,
                role: details.role,
                status: { name: details.status.name, classstatus: details.status.classstatus },
                updatelink: "/account-update/" + ss,
                username: details.username
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
        <div className='AccountCreate-Component'>
            <Layout>
                <LeftMenu KeysMenu="8" />
                <Layout>
                    <Content style={{ margin: '24px 16px 0' }}>
                        <div className="site-layout-background" style={{ padding: 24, minHeight: 104 }}>
                            <div className="left-title">
                                <h2>Cài đặt hệ thống &nbsp; <i className="fa-solid fa-angle-right"></i> &nbsp; Quản lý tài khoản &nbsp; <i className="fa-solid fa-angle-right"></i> &nbsp; <span>Thêm tài khoản</span></h2>
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
                        <h2 className='Title-Number'>Quản lý tài khoản</h2>
                        <div className="number-details">
                            <h2 className='titleS'>Thông tin tài khoản</h2>
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
                                            <label htmlFor="role-code">Họ tên </label>
                                            <Input placeholder='Nhập họ tên' onChange={(e: any) => setDetails({ ...details, name: e.target.value })} value={details.name} />
                                        </Form.Item>
                                        <Form.Item name="role-code" className='role-code'>
                                            <label htmlFor="role-code">Số điện thoại </label>
                                            <Input placeholder='Nhập số điện thoại' type='number' onChange={(e: any) => setDetails({ ...details, phonenumber: e.target.value })} value={details.phonenumber} />
                                        </Form.Item>
                                        <Form.Item name="role-code" className='role-code'>
                                            <label htmlFor="role-code">Email </label>
                                            <Input placeholder='Nhập email' type='email' onChange={(e: any) => setDetails({ ...details, email: e.target.value })} value={details.email} />
                                        </Form.Item>
                                        <Form.Item name="role-code" className='role-code'>
                                            <label htmlFor="role-code">Tên vai trò </label>
                                            <Select
                                                suffixIcon={<CaretDownOutlined />}
                                                style={{ width: '100%' }}
                                                placeholder="Chọn vai trò"
                                                options={ServiceOptions}
                                                className="service-item"
                                                onChange={(e: any) => setDetails({ ...details, role: e || "Kế toán" })}
                                            />
                                        </Form.Item>
                                        <Form.Item label='Là trường thông tin bắt buộc' className='final' name="s" rules={[{ required: true }]}></Form.Item>
                                    </div>
                                    <div className="right-form">
                                        <Form.Item name="role-code" className='role-code'>
                                            <label htmlFor="role-code">Tên đăng nhập </label>
                                            <Input placeholder='Nhập tên đăng nhập' onChange={(e: any) => setDetails({ ...details, username: e.target.value })} value={details.username} />
                                        </Form.Item>
                                        <Form.Item name="role-code" className='role-code'>
                                            <label htmlFor="role-code">Mật khẩu </label>
                                            <Input.Password placeholder="input password" onChange={(e: any) => setDetails({ ...details, password: e.target.value })} value={details.password} />
                                        </Form.Item>
                                        <Form.Item name="role-code" className='role-code'>
                                            <label htmlFor="role-code">Nhập lại mật khẩu </label>
                                            <Input.Password placeholder="input password" />
                                        </Form.Item>
                                        <Form.Item name="role-code" className='role-code'>
                                            <label htmlFor="role-code">Tình trạng </label>
                                            <Select
                                                suffixIcon={<CaretDownOutlined />}
                                                style={{ width: '100%' }}
                                                placeholder="Hoạt động"
                                                options={ActionOptions}
                                                className="service-item"
                                                onChange={(e: any) => setDetails({ ...details, status: { name: e || "Hoạt động", classstatus: 'hoat-dong' } })}
                                            />
                                        </Form.Item>
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
                            <Button className="btn continue-button" onClick={handleSubmit}>Thêm</Button>
                        </div>
                    </Content>
                </Layout>
            </Layout>
        </div>
    );
};

export default AccountCreateComponent;