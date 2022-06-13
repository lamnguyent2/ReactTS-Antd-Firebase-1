import React, { useState } from 'react';
import { Avatar, Image, Layout, Upload, message, Form, Input, Drawer } from 'antd';
import './style.scss';
import LeftMenu from '../../../../components/Left-menu';

const props = {
    name: 'file',
    action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
    headers: {
        authorization: 'authorization-text',
    },
    onChange(info: any) {
        if (info.file.status !== 'uploading') {
            console.log(info.file, info.fileList);
        }
        if (info.file.status === 'done') {
            message.success(`${info.file.name} file uploaded successfully`);
        } else if (info.file.status === 'error') {
            message.error(`${info.file.name} file upload failed.`);
        }
    },
};

const { Content } = Layout;

export interface IProfileComponentProps { }

const ProfileComponent: React.FC<IProfileComponentProps> = () => {
    const dataUser: any = localStorage.getItem("dataUser")
    const dataUsers = JSON.parse(dataUser)
    const [visible, setVisible] = useState(false);

    const showDrawer = () => {
        setVisible(true);
    };

    const onClose = () => {
        setVisible(false);
    };

    return (
        <div className='Profile-Component'>
            <Layout>
                <LeftMenu KeysMenu="" />
                <Layout>
                    <Content style={{ margin: '24px 16px 0' }}>
                        <div className="site-layout-background" style={{ padding: 24, minHeight: 168 }}>
                            <div className="left-title">
                                <h2>Thông tin cá nhân</h2>
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
                        {
                            (dataUsers) ? (
                                <div className="profile-details">
                                    <div className="avatar-upload">
                                        <Avatar src={<Image src="../images/User/Profile/avatar.png" />} />
                                        <Upload {...props} className="Upload-file">
                                            <img src="../images/User/Profile/camera.png" alt='' />
                                        </Upload>
                                        <h2>Lê Quỳnh Ái Vân</h2>
                                    </div>
                                    <div className="form-information">
                                        <Form className='form-one'>
                                            <label htmlFor="Fullname"> Tên người dùng</label> <br />
                                            <Form.Item >
                                                <Input type="text" name="Fullname" value={dataUsers.name} disabled />
                                            </Form.Item>
                                            <label htmlFor="Phone"> Số điện thoại </label> <br />
                                            <Form.Item >
                                                <Input type="text" name="Phone" value={dataUsers.phonenumber} disabled />
                                            </Form.Item>
                                            <label htmlFor="Email"> Email: </label> <br />
                                            <Form.Item >
                                                <Input type="text" name="Email" value={dataUsers.email} disabled />
                                            </Form.Item>
                                        </Form>
                                        <Form>
                                            <label htmlFor="username"> Username</label> <br />
                                            <Form.Item >
                                                <Input type="text" name="username" value={dataUsers.username} disabled />
                                            </Form.Item>
                                            <label htmlFor="password"> Password</label> <br />
                                            <Form.Item >
                                                <Input type="number" name="Password" value={dataUsers.password} disabled />
                                            </Form.Item>
                                            <label htmlFor="role"> Vai trò:</label> <br />
                                            <Form.Item >
                                                <Input type="text" name="role" value={dataUsers.role} disabled />
                                            </Form.Item>
                                        </Form>
                                    </div>
                                </div>
                            ) : ("")
                        }
                    </Content>
                </Layout>
            </Layout>
        </div>
    );
};

export default ProfileComponent;