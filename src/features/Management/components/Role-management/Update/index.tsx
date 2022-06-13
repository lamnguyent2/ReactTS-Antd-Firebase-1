import React, { useState, useEffect } from 'react';
import { Avatar, Image, Layout, Form, Input, Checkbox, Button, Drawer, notification, Alert, Tooltip } from 'antd';
import './style.scss';
import LeftMenu from '../../../../../components/Left-menu';
import { dbrealtime } from '../../../../../config/config';
import { onValue, ref, update } from '@firebase/database';
import { useParams } from 'react-router-dom';

const { Content } = Layout;

export interface IRoleUpdateProps { }

const RoleUpdateComponent: React.FC<IRoleUpdateProps> = () => {
    const { id } = useParams();
    const ids:any = id 

    const [visible, setVisible] = useState(false);

    const showDrawer = () => {
        setVisible(true);
    };

    const onClose = () => {
        setVisible(false);
    };

    const [details, setDetails] = useState({
        name: '',
        numberofuser: 6,
        description: '',
        updatelink: '',
        checkted: ''
    });

    const [ValidateCheck, setValidateCheck] = useState("");
    const [ValidateInfo, setValidateInfo] = useState("");

    useEffect(() => {
        onValue(ref(dbrealtime), (snapshot: any) => {
            const data = snapshot.val().datareact.Roles[ids];
            if (data !== null) {
                setDetails(data)
            }
        })
    }, [ids])    

    const {name, description } = details
    
    const handleSubmit = (e: any) => {
        e.preventDefault();
        if (details.name === "") {
            setValidateCheck("check")
            setValidateInfo("Tên vai trò")
        } else if (details.description === "") {
            setValidateCheck("check")
            setValidateInfo("Mô tả")
        } else {
            update(ref(dbrealtime, `datareact/Roles/${ids}`), {
                Id: ids,
                name: details.name,
                numberofuser: details.numberofuser,
                description: details.description,
                updatelink: details.updatelink
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
        <div className='RoleUpdate-Component'>
            <Layout>
                <LeftMenu KeysMenu="7" />
                <Layout>
                    <Content style={{ margin: '24px 16px 0' }}>
                        <div className="site-layout-background" style={{ padding: 24, minHeight: 104 }}>
                            <div className="left-title">
                                <h2>Cài đặt hệ thống &nbsp; <i className="fa-solid fa-angle-right"></i> &nbsp; Quản lý vai trò &nbsp; <i className="fa-solid fa-angle-right"></i> &nbsp; <span>Cập nhật vai trò</span></h2>
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
                        <h2 className='Title-Number'>Danh sách vai trò</h2>
                        <div className="number-details">
                            <h2 className='titleS'>Thông tin dịch vụ</h2>
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
                                        <Form.Item
                                            name="role-code"
                                            rules={[
                                                {
                                                    required: true,
                                                    message: '201',
                                                },
                                            ]}
                                            className='role-code'
                                        >
                                            <label htmlFor="role-code">Tên vai trò: </label>
                                            <Input onChange={(e: any) => setDetails({ ...details, name: e.target.value })} value={name || ""}/>
                                        </Form.Item>
                                        <Form.Item name={['user', 'description']} className='description-role'>
                                            <label htmlFor="description">Mô tả:</label>
                                            <Input.TextArea onChange={(e: any) => setDetails({ ...details, description: e.target.value })} value={description || ""} />
                                        </Form.Item>
                                        <Form.Item label='Là trường thông tin bắt buộc' name="s" rules={[{ required: true }]}></Form.Item>
                                        {
                                            (ValidateCheck) === "check" ? (
                                                <Tooltip title={ValidateInfo}>
                                                    <span style={{ color: "red" }}>Vùi lòng điều đủ thông tin.</span>
                                                </Tooltip>
                                            ) : ("")
                                        }
                                    </div>
                                    <div className="right-form">
                                        <Form.Item label='Phân quyền chức năng' name="role" rules={[{ required: true }]} className='roles'></Form.Item>
                                        <div className="functional-group">
                                            <h2>Nhóm chức năng A</h2>
                                            <Form.Item><Checkbox defaultChecked>Tất cả</Checkbox></Form.Item>
                                            <Form.Item><Checkbox defaultChecked>Chức năng x</Checkbox></Form.Item>
                                            <Form.Item><Checkbox defaultChecked>Chức năng y</Checkbox></Form.Item>
                                            <Form.Item><Checkbox defaultChecked>Chức năng z</Checkbox></Form.Item>
                                            <h2 className='not-first'>Nhóm chức năng B</h2>
                                            <Form.Item><Checkbox >Tất cả</Checkbox></Form.Item>
                                            <Form.Item><Checkbox >Chức năng x</Checkbox></Form.Item>
                                            <Form.Item><Checkbox >Chức năng y</Checkbox></Form.Item>
                                            <Form.Item><Checkbox >Chức năng z</Checkbox></Form.Item>
                                            <h2 className='not-first'>Nhóm chức năng C</h2>
                                            <Form.Item><Checkbox >Tất cả</Checkbox></Form.Item>
                                            <Form.Item><Checkbox >Chức năng x</Checkbox></Form.Item>
                                            <Form.Item><Checkbox >Chức năng y</Checkbox></Form.Item>
                                            <Form.Item><Checkbox >Chức năng z</Checkbox></Form.Item>
                                            <h2 className='not-first'>Nhóm chức năng D</h2>
                                            <Form.Item><Checkbox >Tất cả</Checkbox></Form.Item>
                                            <Form.Item><Checkbox >Chức năng x</Checkbox></Form.Item>
                                            <Form.Item><Checkbox >Chức năng y</Checkbox></Form.Item>
                                            <Form.Item><Checkbox >Chức năng z</Checkbox></Form.Item>
                                        </div>
                                    </div>
                                </Form>
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

export default RoleUpdateComponent;