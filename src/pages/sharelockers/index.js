import React from "react";
import { NavBar } from "antd-mobile";
import { WhiteSpace } from "antd-mobile";
import { Card, Button } from "antd";
import facultyOfEngineering from "../../assets/facultyOfEngineeringSign.jpeg";

const ShareLockers = () => {
  return (
    <div>
      <NavBar mode="dark"> Share Lockers </NavBar>
      <WhiteSpace size="lg" />
      <Card
        style={{ width: "84vw", marginLeft: "8vw", marginRight: "8vw" }}
        cover={<img alt="example" src={facultyOfEngineering} />}
        actions={[
          <Button type="primary" size="large" icon="team">
            {" "}
            Share{" "}
          </Button>
        ]}
      >
        <Card.Meta
          title="Building 2, Faculty of Engineering"
          description="Deposited since February 14, 9:20"
        />
      </Card>
      <WhiteSpace size="lg" />
      <Card
        style={{ width: "84vw", marginLeft: "8vw", marginRight: "8vw" }}
        cover={<img alt="example" src={facultyOfEngineering} />}
        actions={[
          <Button type="primary" size="large" icon="team">
            {" "}
            Share{" "}
          </Button>
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

export default ShareLockers;

//https://upload.wikimedia.org/wikipedia/commons/0/03/Chula_eng1bldg.jpg
