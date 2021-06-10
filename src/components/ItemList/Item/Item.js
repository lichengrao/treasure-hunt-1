import { Card, Col, List, Row } from 'antd';
import React from 'react';
import { useHistory } from 'react-router';

import { PICTURE_URL_PREFIX } from 'constants/constants';
import { formatPrice } from 'utils';

const { Meta } = Card;

const Item = (props) => {
  const { Products, changeData } = props;

  const getPictureUrl = (picture_urls) => {
    const values = Object.values(picture_urls);
    return `${PICTURE_URL_PREFIX}${values[values.length - 1]}`;
  };

  const history = useHistory();
  return (
    <List
      grid={{
        gutter: 48,
        xs: 1,
        sm: 1,
        md: 2,
        lg: 2,
        xl: 3,
        xxl: 4,
      }}
      dataSource={Products}
      renderItem={(item) => (
        <List.Item
          key={item.listing_id}
          onClick={() => history.push(`/listing-detail/${item.listing_id}`)}
          onMouseEnter={() => changeData(item)}
          // onMouseLeave={() => changeData(undefined)}
        >
          <Card
            hoverable
            style={{
              height: '100%',
              width: '100%',
            }}
            cover={
              <div
                style={{
                  height: '200px',
                  overflow: 'hidden',
                  width: '100%',
                  position: 'relative',
                }}
              >
                <img
                  style={{
                    padding: '1px',
                    position: 'absolute',
                    objectFit: 'cover',
                    width: '100%',
                    height: '100%',
                    top: '-9999px',
                    bottom: '-9999px',
                    left: '-9999px',
                    right: '-9999px',
                    margin: 'auto',
                  }}
                  alt="pic"
                  src={getPictureUrl(item.picture_urls)}
                />
              </div>
            }
          >
            <Meta title={item.title} className="listing-info" />
            <Row gutter={[16, 24]} className="listing-info">
              <Col>
                <div className="saved-listing-info-text">
                  {item.description}
                </div>
              </Col>
            </Row>
            <Row
              gutter={[16, 24]}
              justify="space-between"
              className="listing-info"
            >
              <Col>
                <div className="saved-listing-info-sub-text">
                  {formatPrice(item.price)}
                </div>
              </Col>
              <Col>
                <div className="saved-listing-info-sub-text">
                  {item.city_and_state}
                </div>
              </Col>
            </Row>
          </Card>
        </List.Item>
      )}
    />
  );
};

export default Item;
