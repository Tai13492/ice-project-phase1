import React from "react";
import { WhiteSpace, List, NavBar, Icon } from "antd-mobile";
import { Card } from "antd";
import facultyOfEngineering from "../../assets/facultyOfEngineeringSign.jpeg";

const LockersInFaculty = ({ history }) => {
  return (
    <div>
      <NavBar
        mode="dark"
        icon={<Icon type="left" onClick={() => history.push("/lockers")} />}
      >
        {" "}
        Faculty of Engineering{" "}
      </NavBar>
      <WhiteSpace size="lg" />
      <Card
        style={{ width: "100vw" }}
        cover={<img alt="example" src={facultyOfEngineering} />}
      >
        <Card.Meta title="Faculty of Engineering" />
      </Card>
      <List>
        <List.Item
          extra="2"
          arrow="horizontal"
          onClick={() => history.push("/lockers/1/1")}
        >
          <span style={{ marginLeft: 16 }}> Building 2</span>
        </List.Item>
        <List.Item
          extra="4"
          arrow="horizontal"
          onClick={() => history.push("/lockers/1/1")}
        >
          <span style={{ marginLeft: 16 }}> Building 3</span>
        </List.Item>
        <List.Item
          extra="4"
          arrow="horizontal"
          onClick={() => history.push("/lockers/1/1")}
        >
          <span style={{ marginLeft: 16 }}> Building 100</span>
        </List.Item>
      </List>
    </div>
  );
};

export default LockersInFaculty;
