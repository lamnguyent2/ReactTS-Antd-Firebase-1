import { Form, Button, Image, Input } from 'antd';
import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './style.scss';
import { dbrealtime } from '../../../../config/config';
import { onValue, ref } from '@firebase/database';
import { IconError } from './icon/icon-error';

export interface ILoginProps { }

const LoginComponent: React.FC<ILoginProps> = () => {
    const navigate = useNavigate();
    const [dataLogin, setDataLogin] = useState<any[]>([]);
    const [dataLogincheck, setDataLogincheck] = useState<any>("");

    useEffect(() => {
        onValue(ref(dbrealtime), (snapshot: any) => {
            const data = snapshot.val();
            if (data !== null) {
                Object.values(data).map((todo: any) => (
                    setDataLogin((oldArray) => [...oldArray, todo])
                ))
            }
        })
    }, [])

    const onFinish = (values: any) => {
        const sss = dataLogin[0]?.Accounts.filter(function (o: any) { return o.username === values.username })
        console.log(sss);

        if (sss[0]?.Id) {
            if(sss[0]?.password.toString() === values.password){
                localStorage.setItem('dataUser', JSON.stringify(sss[0]))
                navigate(`/profile/${sss[0].Id}`)
            }else{
                setDataLogincheck("error")
            }
        } else {
            setDataLogincheck("error")
        }
    };

    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <div className='Login-Component'>
            <div className="signin">
                <div className="signin-classic">
                    <div className="img-logo">
                        <Image src="images/User/Login/logo.png" alt="" />
                    </div>
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
                        onFinish={onFinish}
                        onFinishFailed={onFinishFailed}
                        autoComplete="off"
                    >
                        <Form.Item
                            label="Tên đăng nhập"
                            name="username"
                            rules={[
                                {
                                    required: true,
                                    message: 'Vui lòng nhập tên đăng nhập',
                                },
                            ]}
                        >
                            <Input />
                        </Form.Item>
                        <Form.Item
                            label="Mật khẩu"
                            name="password"
                            rules={[
                                {
                                    required: true,
                                    message: 'Vui lòng nhập mật khẩu',
                                },
                            ]}
                            className="password"
                        >
                            <Input.Password />
                        </Form.Item>
                        <Form.Item>
                            {
                                (dataLogincheck) === "error" ? (
                                    <span className='span-error-check-login'><IconError /> Sai mật khẩu hoặc tên đăng nhập</span>
                                ) : (
                                    <Link to="/check-email">Quên mật khẩu?</Link>
                                )
                            }
                        </Form.Item>
                        <Form.Item
                            wrapperCol={{
                                span: 16,
                            }}
                            className="submitbutton"
                        >
                            <Button type="primary" htmlType="submit" >
                                Submit
                            </Button>
                            {
                                (dataLogincheck) === "error" ? (
                                    <Link to="/check-email">Quên mật khẩu?</Link>
                                ) : ("")
                            }
                        </Form.Item>
                    </Form>
                </div>
                <div className="signin-connect">
                    <div className="img-backbround">
                        <Image src="images/User/Login/imglogin.png" alt="" />
                    </div>
                    <div className="content">
                        <p>Hệ thống <br /> <h2>quản lý xếp hàng</h2></p>
                    </div>
                </div>
            </div>
        </div >
    );
};

export { LoginComponent };