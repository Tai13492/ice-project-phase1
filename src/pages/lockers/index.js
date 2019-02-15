import React from "react";
import { NavBar, Card, WingBlank, WhiteSpace } from "antd-mobile";
const lockers = [
  {
    faculty: "Faculty of Engineering",
    imgSrc:
      "https://gw.alipayobjects.com/zos/rmsportal/MRhHctKOineMbKAZslML.jpg",
    available: 12
  },
  {
    faculty: "Faculty of Arts",
    imgSrc:
      "https://gw.alipayobjects.com/zos/rmsportal/MRhHctKOineMbKAZslML.jpg",
    available: 8
  },
  {
    faculty: "Faculty of Architecture",
    imgSrc:
      "https://gw.alipayobjects.com/zos/rmsportal/MRhHctKOineMbKAZslML.jpg",
    available: 4
  },
  {
    faculty: "Faculty of Economy",
    imgSrc:
      "https://gw.alipayobjects.com/zos/rmsportal/MRhHctKOineMbKAZslML.jpg",
    available: 24
  },
  {
    faculty: "Faculty of Arts",
    imgSrc:
      "https://gw.alipayobjects.com/zos/rmsportal/MRhHctKOineMbKAZslML.jpg",
    available: 8
  },
  {
    faculty: "Faculty of Architecture",
    imgSrc:
      "https://gw.alipayobjects.com/zos/rmsportal/MRhHctKOineMbKAZslML.jpg",
    available: 4
  },
  {
    faculty: "Faculty of Economy",
    imgSrc:
      "https://gw.alipayobjects.com/zos/rmsportal/MRhHctKOineMbKAZslML.jpg",
    available: 24
  }
];

// TODO: Fetch data from server, add onClick

const Lockers = ({ history }) => {
  return (
    <div>
      <NavBar mode="dark"> Find Lockers </NavBar>
      <WingBlank size="lg">
        <WhiteSpace size="lg" />
        {lockers.map(({ faculty, imgSrc, available }) => {
          return (
            <React.Fragment>
              <Card onClick={() => history.push("/lockers/1")}>
                <Card.Header title={faculty} thumb={imgSrc} />
                <Card.Body>
                  <div> Available: {available}</div>
                </Card.Body>
              </Card>
              <WhiteSpace size="lg" />
            </React.Fragment>
          );
        })}
      </WingBlank>
    </div>
  );
};

export default Lockers;
