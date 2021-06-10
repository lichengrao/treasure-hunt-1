import { Avatar, Card, Col, List, Row, Typography } from 'antd';
import React, { Component } from 'react';

import find_it from 'assets/icons/find_it.svg';
import flaunt_it from 'assets/icons/flaunt_it.svg';
import set_it_free from 'assets/icons/set_it_free.svg';
import homepage_people from 'assets/images/homepage_people.jpg';

const { Meta } = Card;
const { Title } = Typography;

const data = [
  {
    title: 'Find It',
    description:
      'Feel thrilled discovering items that bring you joy, from trustworthy sellers who loved the items as much as you would',
    content:
      'Feel thrilled discovering items that bring you joy, from trustworthy sellers who loved the items as much as you would',
    alt: 'find it',
    src: find_it,
  },
  {
    title: 'Flaunt It',
    description:
      'Feel proud showing off your new and vintage items and connecting with like-minded folks who saved wallets and trees',
    content:
      'Feel proud showing off your new and vintage items and connecting with like-minded folks who saved wallets and trees',
    alt: 'flaunt it',
    src: flaunt_it,
  },
  {
    title: 'Set It Free',
    description:
      'Feel good about sending off your pre-loved items to a new loving and trustworthy home',
    content:
      'Feel good about sending off your pre-loved items to a new loving and trustworthy home',
    alt: 'set it free',
    src: set_it_free,
  },
];

const haveMoreWasteLessStyle = {
  paddingRight: '24px',
  paddingLeft: '24px',
};

const haveMoreWasteLessHeadStyle = {
  textAlign: 'left',
  borderBottom: '0px',
};

class HomeFlaunt extends Component {
  render() {
    return (
      <Row align="middle">
        <Col span={16} className="Home-page-flaunt">
          {/*TODO: smaller / better resolution "have more waste less"*/}
          <Card
            headStyle={haveMoreWasteLessHeadStyle}
            // title={
            //     <Title level={2} style={{ color: '#142264' }}>
            //         HAVE MORE
            //     </Title>
            // }
            bordered={false}
            // cover={<img alt={"waste_less"} src={waste_less} style={haveMoreWasteLessStyle}/>}
          >
            <Title level={1} style={{ color: '#142264' }}>
              HAVE MORE
            </Title>
            <Title
              level={1}
              style={{
                fontFamily: 'Bungee',
                fontSize: '500%',
                margin: '0px',
                color: '#142264',
              }}
            >
              {' '}
              SAVE MORE{' '}
            </Title>
          </Card>

          {/*TODO: what page does "flaunt it" direct to? direct "find it" to /items; direct "set it free" to "/sell"?*/}
          <List
            grid={{
              gutter: 8,
              xs: 1,
              sm: 2,
              md: 2,
              lg: 2,
              xl: 2,
              xxl: 3,
            }}
            dataSource={data}
            renderItem={(item) => (
              <List.Item>
                <Card style={{ textAlign: 'left' }} bordered={false} hoverable>
                  <Meta
                    title={item.title}
                    avatar={
                      <Avatar size="medium" shape="square" src={item.src} />
                    }
                  />
                  {item.description}
                </Card>
              </List.Item>
            )}
          />
        </Col>

        <Col span={8} className="Home-page-flaunt-col">
          <Card
            bordered={false}
            cover={<img alt={'homepage_people'} src={homepage_people} />}
          ></Card>
        </Col>
      </Row>
    );
  }
}

export default HomeFlaunt;

// const listData = [];
// for (let i = 0; i < 1; i++) {
//     listData.push({
//         href: 'https://ant.design',
//         title: `HAVE MORE`,
//         avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
//         description:
//             'Waste Less',
//         content:
//             'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
//     });
// }
//
// const IconText = ({ icon, text }) => (
//     <Space>
//         {React.createElement(icon)}
//         {text}
//     </Space>
// );

{
  /*<Card*/
}
{
  /*    bordered={false}*/
}
{
  /*>*/
}
{
  /*    <div style={{textAlign:'left'}}>*/
}
{
  /*    <p id="have-more">HAVE MORE</p>*/
}
{
  /*    <h1 id="waste-less">WASTE LESS</h1>*/
}
{
  /*    </div>*/
}
{
  /*    <Avatar size="medium" shape="square" src={find_it} />*/
}
{
  /*</Card>*/
}

{
  /*<h2 className="Have-more">HAVE MORE</h2>*/
}
{
  /*<h1 className="Waste-less">WASTE LESS</h1>*/
}
{
  /*<List*/
}
{
  /*    itemLayout="vertical"*/
}
{
  /*    size="large"*/
}
{
  /*    dataSource={data}*/
}
{
  /*    renderItem={item => (*/
}
{
  /*        <List.Item*/
}
{
  /*            key={item.title}*/
}
{
  /*            // extra={*/
}
{
  /*            //     <img*/
}
{
  /*            //         width={600}*/
}
{
  /*            //         alt="logo"*/
}
{
  /*            //         src={homepage_people}*/
}
{
  /*            //     />*/
}
{
  /*            // }*/
}
{
  /*        >*/
}
{
  /*            {<Avatar size="large" shape="square" src={item.src} />}*/
}
{
  /*            <List.Item.Meta className={"Home-page-flaunt-text"}*/
}
{
  /*                title={<a href={item.href}>{item.title}</a>}*/
}
{
  /*                description={item.description}*/
}
{
  /*            />*/
}

{
  /*        </List.Item>*/
}
{
  /*    )}*/
}
{
  /*/>*/
}
