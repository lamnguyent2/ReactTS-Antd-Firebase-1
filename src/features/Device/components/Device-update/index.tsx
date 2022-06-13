import React, { useState, useEffect } from 'react';
import { Avatar, Image, Layout, Form, Input, Button, Select, TreeSelect, Drawer, notification, Alert, Tooltip } from 'antd';
import './style.scss';
import LeftMenu from '../../../../components/Left-menu';
import { CaretDownOutlined } from '@ant-design/icons';
import { dbrealtime } from '../../../../config/config';
import { onValue, ref, update } from '@firebase/database';
import { useParams } from 'react-router-dom';

const { Content } = Layout;

const { SHOW_PARENT } = TreeSelect;

const treeData = [
    {
        title: 'Khám tim mạch',
        value: '0-0',
        key: '0-0',

    },
    {
        title: 'Khám sản phụ khoa',
        value: '0-1',
        key: '0-1'
    },
    {
        title: 'Khám răng hàm mặt',
        value: '0-2',
        key: '0-2'
    },
    {
        title: 'Khám tai mũi họng',
        value: '0-3',
        key: '0-3'
    },
    {
        title: 'Khám hô hấp',
        value: '0-4',
        key: '0-4'
    },
    {
        title: 'Khám tổng quát',
        value: '0-5',
        key: '0-5'
    },
];

export interface IDeviceUpdateProps { }

const DeviceUpdateComponent: React.FC<IDeviceUpdateProps> = () => {
    const { id } = useParams();
    const ids:any = id 

    const ActionOptions = [{ value: 'Kiosk' }, { value: 'Display counter' }];

    const tProps = {
        treeData,
        treeCheckable: true,
        showCheckedStrategy: SHOW_PARENT,
        placeholder: 'Please select',
        style: {
            width: '100%',
        },
    };

    const [visible, setVisible] = useState(false);

    const showDrawer = () => {
        setVisible(true);
    };

    const onClose = () => {
        setVisible(false);
    };     

    const [details, setDetails] = useState({
        Id: "",
        STT: "",
        service: "",
        typeofservice:"",
        ipaddress: "",
        status: {name: 'Ngưng hoạt động', classstatus: 'ngung-hoat-dong'},
        connect: {name: 'Mất kết nối', classconnect: 'mat-ket-noi'},
        usedservice: "",
        details: "",
        updatelink: ""
    });
    const [ValidateCheck, setValidateCheck] = useState("");
    const [ValidateInfo, setValidateInfo] = useState("");

    useEffect(() => {
        onValue(ref(dbrealtime), (snapshot: any) => {
            const data = snapshot.val().datareact.Devices[ids];
            if (data !== null) {
                setDetails(data)
            }
        })
    }, [ids])    

    const {STT, service, typeofservice, ipaddress} = details
    
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
            update(ref(dbrealtime, `datareact/Devices/${ids}`), {
                Id: details.Id,
                STT: details.STT,
                service: details.service,
                typeofservice: details.typeofservice,
                ipaddress: details.ipaddress,
                status: { name: details.status.name, classstatus: details.status.classstatus },
                connect: { name: details.connect.name, classconnect: details.connect.classconnect },
                usedservice: details.usedservice,
                details: details.details,
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
        <div className='DeviceUpdate-Component'>
            <Layout>
                <LeftMenu KeysMenu="2" />
                <Layout>
                    <Content style={{ margin: '24px 16px 0' }}>
                        <div className="site-layout-background" style={{ padding: 24, minHeight: 104 }}>
                            <div className="left-title">
                                <h2>Thiết bị &nbsp; <i className="fa-solid fa-angle-right"></i> &nbsp; Danh sách thiết bị &nbsp; <i className="fa-solid fa-angle-right"></i> &nbsp; <span>Cập nhật thiết bị</span></h2>
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
                                            <Input onChange={(e: any) => setDetails({ ...details, STT: e.target.value })} value={STT || "" } />
                                        </Form.Item>
                                        <Form.Item name="role-code" className='role-code'>
                                            <label htmlFor="role-code">Tên thiết bị </label>
                                            <Input onChange={(e: any) => setDetails({ ...details, service: e.target.value })} value={service || "" } />
                                        </Form.Item>
                                        <Form.Item name="role-code" className='role-code'>
                                            <label htmlFor="role-code">Địa chỉ IP </label>
                                            <Input onChange={(e: any) => setDetails({ ...details, ipaddress: e.target.value })} value={ipaddress || ""}/>
                                        </Form.Item>
                                    </div>
                                    <div className="right-form">
                                        <Form.Item name="role-code" className='role-code'>
                                            <label htmlFor="role-code">Loại thiết bị </label>
                                            <Select
                                                suffixIcon={<CaretDownOutlined />}
                                                style={{ width: '100%' }}
                                                placeholder="Chọn vai trò"
                                                options={ActionOptions}
                                                className="service-item"
                                                value={typeofservice || ""}
                                                onChange={(e: any) => setDetails({ ...details, typeofservice: e })}
                                            />
                                        </Form.Item>
                                        <Form.Item name="role-code" className='role-code'>
                                            <label htmlFor="role-code">Tên đăng nhập </label>
                                            <Input value='Linhkyo011' />
                                        </Form.Item>
                                        <Form.Item name="role-code" className='role-code'>
                                            <label htmlFor="role-code">Mật khẩu</label>
                                            <Input value='CMS' />
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
                                            <TreeSelect {...tProps} />
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
                            <Button className="btn continue-button" onClick={handleSubmit}>Cập nhật</Button>
                        </div>
                    </Content>
                </Layout>
            </Layout>
        </div>
    );
};

export default DeviceUpdateComponent;