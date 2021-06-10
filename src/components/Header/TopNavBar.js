import { Col, Layout, Row } from 'antd';
import React from 'react';

import LeftMenu from './LeftMenu';
import RightMenu from './RightMenu';

const { Header } = Layout;

const TopNavBar = () => {
  return (
    <Header className="Top-nav-bar">
      <Row align="bottom">
        <Col xs={22} sm={20} md={18} lg={16} xl={14}>
          <LeftMenu />
        </Col>
        <Col xs={2} sm={4} md={6} lg={8} xl={10}>
          <RightMenu />
        </Col>
      </Row>
    </Header>
  );
};

export default TopNavBar;
