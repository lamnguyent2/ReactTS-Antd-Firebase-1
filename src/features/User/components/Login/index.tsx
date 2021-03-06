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
                        <Image src="images/User/Login/logos.png" alt="" />
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
                            label="T??n ????ng nh???p"
                            name="username"
                            rules={[
                                {
                                    required: true,
                                    message: 'Vui l??ng nh???p t??n ????ng nh???p: lamnguyent2',
                                },
                            ]}
                        >
                            <Input />
                        </Form.Item>
                        <Form.Item
                            label="M???t kh???u"
                            name="password"
                            rules={[
                                {
                                    required: true,
                                    message: 'Vui l??ng nh???p m???t kh???u: 111111',
                                },
                            ]}
                            className="password"
                        >
                            <Input.Password />
                        </Form.Item>
                        <Form.Item>
                            {
                                (dataLogincheck) === "error" ? (
                                    <span className='span-error-check-login'><IconError /> Sai m???t kh???u ho???c t??n ????ng nh???p (tk: lamnguyent2 mk: 111111)</span>
                                ) : (
                                    <Link to="/check-email">Qu??n m???t kh???u?</Link>
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
                                    <Link to="/check-email">Qu??n m???t kh???u?</Link>
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
                        <p>H??? th???ng <br /> <h2>qu???n l?? x???p h??ng</h2></p>
                    </div>
                </div>
            </div>
        </div >
    );
};

export { LoginComponent };