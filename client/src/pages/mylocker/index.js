import React from "react";
import { NavBar } from "antd-mobile";
import { WhiteSpace } from "antd-mobile";
import { Card } from "antd";
import facultyOfEngineering from "../../assets/facultyOfEngineeringSign.jpeg";

const MyLocker = () => {
  return (
    <div className="bg-primary">
      <NavBar mode="dark"> My Locker </NavBar>
      <WhiteSpace size="lg" />
      <Card
        style={{ width: "88vw", marginLeft: "6vw", marginRight: "6vw" }}
        cover={<img alt="example" src={facultyOfEngineering} />}
        actions={[
          <button className="button default bg-danger"> Return </button>,
          <button className="button default bg-success">Share</button>
        ]}
      >
        <Card.Meta
          title="Building 2, Faculty of Engineering"
          description="Deposited since February 14, 9:20"
        />
      </Card>
      <WhiteSpace size="lg" />
      <Card
        style={{ width: "88vw", marginLeft: "6vw", marginRight: "6vw" }}
        cover={<img alt="example" src={facultyOfEngineering} />}
        actions={[
          <button className="button default bg-danger"> Return </button>,
          <button className="button default bg-success">Share</button>
        ]}
      >
        <Card.Meta
          title="100 years Building, Faculty of Engineering"
          description="Deposited since February 14, 14:30"
        />
      </Card>
      <WhiteSpace size="lg" />
    </div>
  );
};

export default MyLocker;
