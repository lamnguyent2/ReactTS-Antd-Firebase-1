import { Form, Button, Image, Input, Alert } from 'antd';
import React, { useEffect, useState } from 'react';
import { onValue, ref } from '@firebase/database';
import { dbrealtime } from '../../../../config/config';
import './style.scss';
import emailjs from '@emailjs/browser';
import { useNavigate } from 'react-router-dom';

export interface ICheckEmailProps { }

const CheckEmailComponent: React.FC<ICheckEmailProps> = () => {
    const navigate = useNavigate();
    const [dataLogin, setDataLogin] = useState<any[]>([]);
    const [datacheck, setDatacheck] = useState<any>(false);

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
        const sss = dataLogin[0]?.Accounts.filter(function (o: any) { return o.email === values.email });
        localStorage.setItem('datacheckmail', JSON.stringify(sss[0]))

        if (sss[0]?.email) {
            navigate("/forgot-password");
        } else {
            setDatacheck(true)
        }

        emailjs.sendForm('service_9hrni8l', 'template_spcihof', values.email, 'user_BKMH9aTOVomuE3oKClpvB')
            .then((result) => {
                console.log("success", result.text);
            }, (error) => {
                console.log("error", error.text);
            });
    };

    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };

    const backs = () => {
        navigate("/login");
    }

    return (
        <div className='CheckEmail-Component'>
            <div className="CheckEmail">
                <div className="CheckEmail-classic">
                    <div className="img-logo">
                        <Image src="images/User/Check-email/logos.png" alt="" />
                    </div>
                    <Form className="form" onFinish={onFinish} onFinishFailed={onFinishFailed} autoComplete="off">
                        {
                            (datacheck) === true ? (
                                <Alert message="Email kh??ng t???n t???i" type="error" showIcon />
                            ) : ("")
                        }
                        <fieldset className="email">
                            <h2>?????t l???i m???t kh???u</h2>
                            <label htmlFor="email">Vui l??ng nh???p email ????? ?????t l???i m???t kh???u c???a b???n *</label>
                            <Form.Item
                                name="email"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Email: lamnguyenxyzt2@gmail.com',
                                    },
                                ]}
                            >
                                <Input type="email" placeholder="email" name='email' className='emails' />
                            </Form.Item>
                        </fieldset>
                        <div className="submit-button">
                            <Form.Item
                                wrapperCol={{
                                    span: 16,
                                }}
                                className="submitbutton"
                            >
                                <Button className="btn destroy-button" onClick={backs}>H???y</Button>
                                <Button className="btn continue-button" htmlType="submit">Ti???p t???c</Button>
                            </Form.Item>

                        </div>
                    </Form>
                </div>
                <div className="CheckEmail-connect">
                    <div className="img-backbround">
                        <Image src="images/User/Check-email/imgcheckemail.png" alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export { CheckEmailComponent };