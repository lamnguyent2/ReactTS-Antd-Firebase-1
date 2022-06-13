import React, { useState, useEffect } from 'react';
import { Avatar, Image, Layout, Form, Input, Checkbox, Button, Drawer, notification, Alert, Tooltip } from 'antd';
import './style.scss';
import LeftMenu from '../../../../components/Left-menu';
import { dbrealtime } from '../../../../config/config';
import { onValue, ref, update } from '@firebase/database';
import { useParams } from 'react-router-dom';

const { Content } = Layout;

export interface IServiceUpdateProps { }

const ServiceUpdateComponent: React.FC<IServiceUpdateProps> = () => {
    const { id } = useParams();
    const ids: any = id

    const [visible, setVisible] = useState(false);

    const showDrawer = () => {
        setVisible(true);
    };

    const onClose = () => {
        setVisible(false);
    };

    const [details, setDetails] = useState({
        STT: '',
        name: 'Lê Huỳnh Ái Vân',
        service: '',
        description: '',
        status: { name: 'Hoạt động', classstatus: 'hoat-dong' },
        details: '',
        updatelink: '',
        reset: '',
        prefix: '',
        surfix: '',
        autoincrements: { start: '', final: '' }
    });

    const [ValidateCheck, setValidateCheck] = useState("");
    const [ValidateInfo, setValidateInfo] = useState("");

    useEffect(() => {
        onValue(ref(dbrealtime), (snapshot: any) => {
            const data = snapshot.val().datareact.Services[ids];
            if (data !== null) {
                setDetails(data)
            }
        })
    }, [ids])

    const { STT, service, description } = details

    const handleSubmit = (e: any) => {
        e.preventDefault();
        if (details.STT === "") {
            setValidateCheck("check")
            setValidateInfo("Mã dịch vụ")
        } else if (details.service === "") {
            setValidateCheck("check")
            setValidateInfo("Tên dịch vụ")
        } else if (details.description === "") {
            setValidateCheck("check")
            setValidateInfo("Mô tả")
        } else {
            update(ref(dbrealtime, `datareact/Services/${ids}`), {
                Id: ids,
                STT: details.STT,
                name: details.name,
                service: details.service,
                description: details.description,
                status: { name: details.status.name, classstatus: details.status.classstatus },
                details: details.details,
                updatelink: details.updatelink,
                reset: details.reset,
                prefix: details.prefix,
                surfix: details.surfix,
                autoincrements: { start: details.autoincrements.start, final: details.autoincrements.final }
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
        <div className='ServiceUpdate-Component'>
            <Layout>
                <LeftMenu KeysMenu="3" />
                <Layout>
                    <Content style={{ margin: '24px 16px 0' }}>
                        <div className="site-layout-background" style={{ padding: 24, minHeight: 104 }}>
                            <div className="left-title">
                                <h2>Dịch vụ &nbsp; <i className="fa-solid fa-angle-right"></i> &nbsp; Danh sách dịch vụ &nbsp; <i className="fa-solid fa-angle-right"></i> &nbsp; Chi tiết &nbsp; <i className="fa-solid fa-angle-right"></i> &nbsp; <span>Cập nhật</span></h2>
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
                        <h2 className='Title-Number'>Quản lý Dịch vụ</h2>
                        <div className="number-details">
                            <div className="service-information">
                                <h2 className='titleS'>Thông tin dịch vụ</h2>
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
                                            name="service-code"
                                            rules={[
                                                {
                                                    required: true,
                                                    message: '201',
                                                },
                                            ]}
                                            className='service-code'
                                        >
                                            <label htmlFor="service-code">Mã dịch vụ: </label>
                                            <Input onChange={(e: any) => setDetails({ ...details, STT: e.target.value })} value={STT || ""} />
                                        </Form.Item>

                                        <Form.Item
                                            name="service-name"
                                            rules={[
                                                {
                                                    required: true,
                                                    message: 'Khám tim mạch',
                                                },
                                            ]}
                                            className='service-name'
                                        >
                                            <label htmlFor="service-name">Tên dịch vụ: </label>
                                            <Input onChange={(e: any) => setDetails({ ...details, service: e.target.value })} value={service || ""} />
                                        </Form.Item>
                                    </div>
                                    <div className="right-form">
                                        <Form.Item name={['user', 'description']}>
                                            <label htmlFor="description">Mô tả</label>
                                            <Input.TextArea placeholder='Mô tả dịch vụ' onChange={(e: any) => setDetails({ ...details, description: e.target.value })} value={description || ""} />
                                        </Form.Item>
                                    </div>
                                </Form>
                            </div>
                            <div className="number-level-rule">
                                <h2>Quy tắc cấp số</h2>
                                <Form name="basic">
                                    <Form.Item><Checkbox >Tăng tự động từ: <Input type='number' placeholder='0001' /> đến <Input type='number' placeholder='9999' /> </Checkbox></Form.Item>
                                    <Form.Item><Checkbox >Prefix: <Input type='number' placeholder='0001' className='prefix' /></Checkbox></Form.Item>
                                    <Form.Item><Checkbox >Surfix: <Input type='number' placeholder='0001' className='surfix' /></Checkbox></Form.Item>
                                    <Form.Item><Checkbox >Reset mỗi ngày</Checkbox></Form.Item>
                                    <Form.Item label='Là trường thông tin bắt buộc' name="s" rules={[{ required: true }]}></Form.Item>
                                    {
                                        (ValidateCheck) === "check" ? (
                                            <Tooltip title={ValidateInfo}>
                                                <span style={{ color: "red" }}>Vùi lòng điều đủ thông tin.</span>
                                            </Tooltip>
                                        ) : ("")
                                    }
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

export default ServiceUpdateComponent;