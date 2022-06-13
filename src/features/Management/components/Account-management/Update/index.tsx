import React, { useState, useEffect } from 'react';
import { Avatar, Image, Layout, Form, Input, Button, Select, Drawer, notification, Alert, Tooltip } from 'antd';
import './style.scss';
import LeftMenu from '../../../../../components/Left-menu';
import { CaretDownOutlined } from '@ant-design/icons';
import { dbrealtime } from '../../../../../config/config';
import { onValue, ref, update } from '@firebase/database';
import { useParams } from 'react-router-dom';

const { Content } = Layout;

export interface IAccountUpdateProps { }

const AccountUpdateComponent: React.FC<IAccountUpdateProps> = () => {
    const { id } = useParams();
    const ids:any = id 

    const ServiceOptions = [{ value: 'Tất cả' }, { value: 'Kế toán' }, { value: 'Quản lý' }, { value: 'Admin' }];
    const ActionOptions = [{ value: 'Tất cả' }, { value: 'Ngưng hoạt động' }, { value: 'Hoạt động' }];
    const [visible, setVisible] = useState(false);

    const showDrawer = () => {
        setVisible(true);
    };

    const onClose = () => {
        setVisible(false);
    };

    const [details, setDetails] = useState({
        email: "",
        name: "",
        password: "",
        phonenumber: "",
        role: "",
        status: { name: 'Hoạt động', classstatus: 'hoat-dong' },
        updatelink: "",
        username: ""
    });

    const [ValidateCheck, setValidateCheck] = useState("");
    const [ValidateInfo, setValidateInfo] = useState("");

    useEffect(() => {
        onValue(ref(dbrealtime), (snapshot: any) => {
            const data = snapshot.val().datareact.Accounts[ids];
            if (data !== null) {
                setDetails(data)
            }
        })
    }, [ids])    

    const {email, name, password, phonenumber, role, username } = details
    
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
            update(ref(dbrealtime, `datareact/Accounts/${ids}`), {
                Id: ids,
                email: details.email,
                name: details.name,
                password: details.password,
                phonenumber: details.phonenumber,
                role: details.role,
                status: { name: details.status.name, classstatus: details.status.classstatus },
                updatelink: details.updatelink,
                username: details.username
            }).then(() => {
                notification.open({
                    message: <Alert message="Cập nhật thành công!" type="success" showIcon />,
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
        <div className='AccountUpdate-Component'>
            <Layout>
                <LeftMenu KeysMenu="8" />
                <Layout>
                    <Content style={{ margin: '24px 16px 0' }}>
                        <div className="site-layout-background" style={{ padding: 24, minHeight: 104 }}>
                            <div className="left-title">
                                <h2>Cài đặt hệ thống &nbsp; <i className="fa-solid fa-angle-right"></i> &nbsp; Quản lý tài khoản &nbsp; <i className="fa-solid fa-angle-right"></i> &nbsp; <span>Cập nhật tài khoản</span></h2>
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
                                            <Input onChange={(e: any) => setDetails({ ...details, name: e.target.value })} value={name || ""} />
                                        </Form.Item>
                                        <Form.Item name="role-code" className='role-code'>
                                            <label htmlFor="role-code">Số điện thoại </label>
                                            <Input type='number' onChange={(e: any) => setDetails({ ...details, phonenumber: e.target.value })} value={phonenumber || ""}/>
                                        </Form.Item>
                                        <Form.Item name="role-code" className='role-code'>
                                            <label htmlFor="role-code">Email </label>
                                            <Input type='email' onChange={(e: any) => setDetails({ ...details, email: e.target.value })} value={email || ""}/>
                                        </Form.Item>
                                        <Form.Item name="role-code" className='role-code'>
                                            <label htmlFor="role-code">Tên vai trò </label>
                                            <Select
                                                suffixIcon={<CaretDownOutlined />}
                                                style={{ width: '100%' }}
                                                placeholder="Chọn vai trò"
                                                options={ServiceOptions}
                                                className="service-item"
                                                value={role || ""}
                                                onChange={(e: any) => setDetails({ ...details, role: e })}
                                            />
                                        </Form.Item>
                                        <Form.Item label='Là trường thông tin bắt buộc' className='final' name="s" rules={[{ required: true }]}></Form.Item>
                                    </div>
                                    <div className="right-form">
                                        <Form.Item name="role-code" className='role-code'>
                                            <label htmlFor="role-code">Tên đăng nhập </label>
                                            <Input onChange={(e: any) => setDetails({ ...details, username: e.target.value })} value={username || ""} />
                                        </Form.Item>
                                        <Form.Item name="role-code" className='role-code'>
                                            <label htmlFor="role-code">Mật khẩu </label>
                                            <Input.Password onChange={(e: any) => setDetails({ ...details, password: e.target.value })} value={password || ""} />
                                        </Form.Item>
                                        <Form.Item name="role-code" className='role-code'>
                                            <label htmlFor="role-code">Nhập lại mật khẩu </label>
                                            <Input.Password value={password || ""} />
                                        </Form.Item>
                                        <Form.Item name="role-code" className='role-code'>
                                            <label htmlFor="role-code">Tình trạng </label>
                                            <Select
                                                suffixIcon={<CaretDownOutlined />}
                                                style={{ width: '100%' }}
                                                placeholder="Hoạt động"
                                                options={ActionOptions}
                                                className="service-item"
                                                value={details.status.name || ""}
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
                            <Button className="btn continue-button" onClick={handleSubmit}>Cập nhật</Button>
                        </div>
                    </Content>
                </Layout>
            </Layout>
        </div>
    );
};

export default AccountUpdateComponent;