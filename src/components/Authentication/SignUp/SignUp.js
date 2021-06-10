import { Button, Col, Form, Input, message, Row } from 'antd';
import React from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';

import SignUpPhoto from 'assets/images/signup_img.jpg';
import Logo from 'assets/logos/th_logo.svg';
import { useSignup } from 'hooks';

import SplitLayout from '../SplitLayout/SplitLayout';

const SignUp = () => {
  const { isSigningup, signup } = useSignup();
  const history = useHistory();
  const location = useLocation();

  const onFinish = async (userData) => {
    const response = await signup(userData);

    if (response === 201) {
      message.success('Successfully signed up, please login');
      history.replace({
        pathname: '/login',
        from: location.from || '/',
      });
    } else if (response === 409) {
      message.error(`Username ${userData.username} already taken`);
    } else {
      message.error('Failed to create new account, please try again');
    }
  };

  const onFinishFailed = () => {
    console.log('failed');
  };

  const goToHome = () => {
    history.push('/');
  };

  return (
    <div id="signup-view">
      <img id="logo" src={Logo} onClick={goToHome} />
      <SplitLayout src={SignUpPhoto} content="right">
        <Row className="su_form-container" justify="center" align="middle">
          <div className="su_form">
            <div className="su_form-header"> Sign Up </div>

            <Form
              name="signup-form"
              layout="vertical"
              initialValues={{ remember: true }}
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
              requiredMark={false}
            >
              <Form.Item
                className="su_form-item"
                name="username"
                label="Username"
                rules={[
                  {
                    required: true,
                    message: 'Username is required',
                  },
                ]}
                hasFeedback
              >
                <Input placeholder="Username" />
              </Form.Item>

              <Form.Item
                className="su_form-item"
                name="email"
                label="Student Email"
                rules={[
                  {
                    type: 'email',
                    message: 'The inputted value is not a valid student email',
                  },
                  {
                    required: true,
                    message: 'Student email is required',
                  },
                ]}
              >
                <Input placeholder="Student Email" />
              </Form.Item>

              <Form.Item
                className="su_form-item"
                name="password"
                label="Password"
                rules={[
                  {
                    required: true,
                    message: 'Password is required',
                  },
                ]}
                hasFeedback
              >
                <Input.Password />
              </Form.Item>

              <Form.Item
                className="su_form-item"
                name="confirm"
                label="Confirm Password"
                dependencies={['password']}
                hasFeedback
                rules={[
                  {
                    required: true,
                    message: 'Please confirm your password!',
                  },
                  ({ getFieldValue }) => ({
                    validator(_, value) {
                      if (!value || getFieldValue('password') === value) {
                        return Promise.resolve();
                      }
                      return Promise.reject(
                        new Error('Passwords do not match')
                      );
                    },
                  }),
                ]}
              >
                <Input.Password />
              </Form.Item>

              <Row>
                <Col span={11}>
                  <Form.Item
                    className="su_form-item"
                    label="First Name"
                    name="first_name"
                    rules={[
                      { required: true, message: 'First Name is required' },
                    ]}
                  >
                    <Input placeholder="First Name" />
                  </Form.Item>
                </Col>
                <Col span={11} offset={2}>
                  <Form.Item
                    className="su_form-item"
                    label="Last Name"
                    name="last_name"
                    rules={[
                      { required: true, message: 'Last Name is required' },
                    ]}
                  >
                    <Input placeholder="Last Name" />
                  </Form.Item>
                </Col>
              </Row>

              <Form.Item
                className="su_form-item"
                label="Address Line"
                name="address_line_1"
                rules={[{ required: true, message: 'Address is required' }]}
              >
                <Input placeholder="Address Line" />
              </Form.Item>

              <Row>
                <Col span={10}>
                  <Form.Item
                    className="su_form-item"
                    label="City"
                    name="city"
                    rules={[{ required: true, message: 'City is required' }]}
                  >
                    <Input placeholder="City" />
                  </Form.Item>
                </Col>
                <Col span={4} offset={2}>
                  <Form.Item
                    className="su_form-item"
                    label="State"
                    name="state"
                    rules={[{ required: true, message: 'State is required' }]}
                  >
                    <Input placeholder="State" />
                  </Form.Item>
                </Col>
                <Col span={6} offset={2}>
                  <Form.Item
                    className="su_form-item"
                    label="Zip Code"
                    name="zipcode"
                    rules={[
                      { required: true, message: 'Zip Code is required' },
                    ]}
                  >
                    <Input placeholder="Zip Code" />
                  </Form.Item>
                </Col>
              </Row>

              <Form.Item>
                <Button
                  loading={isSigningup}
                  id="signup-button"
                  block
                  htmlType="submit"
                >
                  {!isSigningup && 'Sign Up'}
                </Button>
              </Form.Item>

              <div>
                <span>Already have an Account? </span>
                <Link to={{ pathname: '/login', from: location.from }} replace>
                  Login
                </Link>
              </div>
            </Form>
          </div>
        </Row>
      </SplitLayout>
    </div>
  );
};

export default SignUp;
