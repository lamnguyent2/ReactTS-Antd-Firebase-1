import { Button, Image, Input, Form } from 'antd';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './style.scss';

export interface IForgotPasswordProps { }

const ForgotPasswordComponent: React.FC<IForgotPasswordProps> = () => {
    const datacheckmail: any = localStorage.getItem("datacheckmail")
    const datacheckmails = JSON.parse(datacheckmail)
    const navigate = useNavigate()

    const onFinish = (values: any) => {
        console.log('Success:', values);
        localStorage.removeItem("datacheckmail")
        navigate('/login')
    };

    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };

    const checks = ()=>{
        navigate('/check-email')
    }

    return (
        <div className='ForgotPass-Component'>
            <div className="ForgotPass">
                <div className="ForgotPass-classic">
                    <div className="img-logo">
                        <Image src="images/User/Check-email/logos.png" alt="" />
                    </div>
                    {
                        (datacheckmails) ? (
                            <Form className="form" onFinish={onFinish} onFinishFailed={onFinishFailed} autoComplete="off">
                                <h2>Đặt lại mật khẩu</h2>
                                <fieldset className="password">
                                    <label htmlFor="password">Mật khẩu</label>
                                    <Form.Item
                                        name="password"
                                        rules={[
                                            {
                                                required: true,
                                                message: 'Mật khẩu không được để trống',
                                            },
                                        ]}
                                    >
                                        <Input.Password type="password" placeholder="password" name='password' />
                                    </Form.Item>
                                </fieldset>
                                <fieldset className="confirm-password">
                                    <label htmlFor="password">Nhập lại mật khẩu</label>
                                    <Form.Item
                                        name="confirm password"
                                        rules={[
                                            {
                                                required: true,
                                                message: 'Xác nhận mật khẩu không được để trống',
                                            },
                                        ]}
                                    >
                                        <Input.Password type="password" placeholder="confirm password" name='confirm-password' />
                                    </Form.Item>
                                </fieldset>
                                <div className="submit-button">
                                    <Form.Item className="submitbutton">
                                        <Button className="btn" htmlType="submit">Xác nhận</Button>
                                    </Form.Item>
                                </div>
                            </Form>
                        ) : (
                            <Form className="form" onFinish={onFinish} onFinishFailed={onFinishFailed} autoComplete="off">
                                <div className="submit-button">
                                    <Form.Item className="submitbutton">
                                        <Button onClick={checks}>Xác thực email</Button>
                                    </Form.Item>
                                </div>
                            </Form>
                        )
                    }
                </div>
                <div className="ForgotPass-connect">
                    <div className="img-backbround">
                        <Image src="images/User/Forgot-password/imgForgotPass.png" alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ForgotPasswordComponent;