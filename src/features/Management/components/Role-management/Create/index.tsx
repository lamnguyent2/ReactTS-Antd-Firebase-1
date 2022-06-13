import React, { useEffect, useState } from 'react';
import { Avatar, Image, Layout, Form, Input, Checkbox, Button, Drawer, notification, Alert, Tooltip } from 'antd';
import './style.scss';
import LeftMenu from '../../../../../components/Left-menu';
import { dbrealtime } from '../../../../../config/config';
import { onValue, ref, set } from '@firebase/database';

const { Content } = Layout;

export interface IRoleCreateProps { }

const RoleCreateComponent: React.FC<IRoleCreateProps> = () => {
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

    const [details, setDetails] = useState({
        name: '',
        numberofuser: 6,
        description: '',
        updatelink: '/role-update/',
        checkted: ''
    });
    const [ValidateCheck, setValidateCheck] = useState("");
    const [ValidateInfo, setValidateInfo] = useState("");

    const ss = (Math.max.apply(Math, dataRule[0]?.Roles.map(function (o: any) { return o.Id; }))) + 1;

    const ggg = (e: any) => {
        if (details.name === "") {
            setValidateCheck("check")
            setValidateInfo("Tên vai trò")
        } else if (details.description === "") {
            setValidateCheck("check")
            setValidateInfo("Mô tả")
        } else {
            set(ref(dbrealtime, `datareact/Roles/${ss}`), {
                Id: ss,
                name: details.name,
                numberofuser: details.numberofuser,
                description: details.description,
                updatelink: details.updatelink + ss
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
    }

    const [checktedx, setChecktedx] = useState<any>("");
    const autocheck = (e: any) => {
        if (checktedx === "") {
            setChecktedx("ant-checkbox-checked");
        } else if (checktedx === "ant-checkbox-checked") {
            setChecktedx("");
        }
    }

    const [checktedx1, setChecktedx1] = useState<any>("");
    const autocheck1 = (e: any) => {
        if (checktedx1 === "") {
            setChecktedx1("ant-checkbox-checked");
        } else if (checktedx1 === "ant-checkbox-checked") {
            setChecktedx1("");
        }
    }

    const [checktedx2, setChecktedx2] = useState<any>("");
    const autocheck2 = (e: any) => {
        if (checktedx2 === "") {
            setChecktedx2("ant-checkbox-checked");
        } else if (checktedx2 === "ant-checkbox-checked") {
            setChecktedx2("");
        }
    }

    const [checktedx3, setChecktedx3] = useState<any>("");
    const autocheck3 = (e: any) => {
        if (checktedx3 === "") {
            setChecktedx3("ant-checkbox-checked");
        } else if (checktedx3 === "ant-checkbox-checked") {
            setChecktedx3("");
        }
    }

    return (
        <div className='RoleCreate-Component'>
            <Layout>
                <LeftMenu KeysMenu="7" />
                <Layout>
                    <Content style={{ margin: '24px 16px 0' }}>
                        <div className="site-layout-background" style={{ padding: 24, minHeight: 104 }}>
                            <div className="left-title">
                                <h2>Cài đặt hệ thống &nbsp; <i className="fa-solid fa-angle-right"></i> &nbsp; Quản lý vai trò &nbsp; <i className="fa-solid fa-angle-right"></i> &nbsp; <span>Thêm vai trò</span></h2>
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
                                            <Input placeholder='Nhập tên vai trò' onChange={(e: any) => setDetails({ ...details, name: e.target.value })} value={details.name} />
                                        </Form.Item>
                                        <Form.Item name={['user', 'description']} className='description-role'>
                                            <label htmlFor="description">Mô tả:</label>
                                            <Input.TextArea placeholder='Mô tả dịch vụ' onChange={(e: any) => setDetails({ ...details, description: e.target.value })} value={details.description} />
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
                                            <Form.Item >
                                                <Checkbox onClick={autocheck} name="x,y,z">Tất cả</Checkbox>
                                                <Checkbox className={checktedx} name="x">Chức năng x</Checkbox>
                                                <Checkbox className={checktedx} name="y">Chức năng y</Checkbox>
                                                <Checkbox className={checktedx} name="z">Chức năng z</Checkbox>
                                            </Form.Item>
                                            <h2 className='not-first'>Nhóm chức năng B</h2>
                                            <Form.Item>
                                                <Checkbox onClick={autocheck1} name="x,y,z">Tất cả</Checkbox>
                                                <Checkbox className={checktedx1} name="x">Chức năng x</Checkbox>
                                                <Checkbox className={checktedx1} name="y">Chức năng y</Checkbox>
                                                <Checkbox className={checktedx1} name="z">Chức năng z</Checkbox>
                                            </Form.Item>
                                            <h2 className='not-first'>Nhóm chức năng C</h2>
                                            <Form.Item>
                                                <Checkbox onClick={autocheck2} name="x,y,z">Tất cả</Checkbox>
                                                <Checkbox className={checktedx2} name="x">Chức năng x</Checkbox>
                                                <Checkbox className={checktedx2} name="y">Chức năng y</Checkbox>
                                                <Checkbox className={checktedx2} name="z">Chức năng z</Checkbox>
                                            </Form.Item>
                                            <h2 className='not-first'>Nhóm chức năng D</h2>
                                            <Form.Item>
                                                <Checkbox onClick={autocheck3} name="x,y,z">Tất cả</Checkbox>
                                                <Checkbox className={checktedx3} name="x">Chức năng x</Checkbox>
                                                <Checkbox className={checktedx3} name="y">Chức năng y</Checkbox>
                                                <Checkbox className={checktedx3} name="z">Chức năng z</Checkbox>
                                            </Form.Item>
                                        </div>
                                    </div>
                                </Form>
                            </div>
                        </div>
                        <div className="submit-button">
                            <Button className="btn destroy-button">Hủy bỏ</Button>
                            <Button className="btn continue-button" onClick={ggg}>Thêm</Button>
                        </div>
                    </Content>
                </Layout>
            </Layout>
        </div>
    );
};

export default RoleCreateComponent;