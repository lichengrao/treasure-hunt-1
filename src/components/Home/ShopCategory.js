import { Card, List, Typography } from 'antd';
import React from 'react';
import { useHistory } from 'react-router-dom';

import apparels from 'assets/images/apparels.jpg';
import book from 'assets/images/book.jpg';
import car1 from 'assets/images/car1.jpg';
import electronics1 from 'assets/images/electronics1.jpg';
import exercise_equipments from 'assets/images/exercise_equipment.jpg';
import furniture1 from 'assets/images/furniture1.jpg';

const { Meta } = Card;
const { Title } = Typography;

const data = [
  {
    title: 'Furniture',
    alt: 'furniture',
    src: furniture1,
  },
  {
    title: 'Electronics',
    alt: 'electronics',
    src: electronics1,
  },
  {
    title: 'Apparels',
    alt: 'apparels',
    src: apparels,
  },
  {
    title: 'Cars',
    alt: 'cars',
    src: car1,
  },
  {
    title: 'Books',
    alt: 'books',
    src: book,
  },
  {
    title: 'Exercise Equipments',
    alt: 'exercise-equipments',
    src: exercise_equipments,
  },
];

const shopCategoryHeadStyle = {
  textAlign: 'left',
  borderBottom: '0px',
};


const ShopCategory = () => {
  const history = useHistory();

  return (
    <Card
      headStyle={shopCategoryHeadStyle}
      title={
        <Title level={2} style={{ color: '#142264' }}>
          SHOP CATEGORY
        </Title>
      }
      bordered={false}
    >
      <List
        grid={{
          gutter: 16,
          xs: 1,
          sm: 2,
          md: 3,
          lg: 4,
          xl: 6,
          xxl: 6,
        }}
        dataSource={data}
        renderItem={(item, id) => (
          <List.Item>
            <Card
              bordered={false}
              hoverable
              onClick={() =>
                history.push({
                  pathname: 'items',
                  search: `?category=${item.title}`,
                })
              }
              cover={<img alt={item.alt} src={item.src} />}
            >
              <Meta title={item.title} />
            </Card>
          </List.Item>
        )}
      />
    </Card>
  );
};

export default ShopCategory;
