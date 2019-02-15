import React from "react";
import { NavBar, Icon, Picker, List, WhiteSpace } from "antd-mobile";

const Locker = ({ history }) => {
  return (
    <div>
      <NavBar
        mode="dark"
        icon={<Icon type="left" onClick={() => history.push("/lockers/1")} />}
      />
      <WhiteSpace size="lg" />
      <List>
        <Picker
          extra="select"
          data={[
            {
              value: "location",
              label: "Location",
              children: [
                { value: "2nd floor", label: "2nd floor" },
                { value: "3nd floor", label: "3rd floor" }
              ]
            }
          ]}
          label="Select location"
          title="Locations"
          okText="Confirm"
          dismissText="Cancel"
        >
          <List.Item arrow="down"> Select Location </List.Item>
        </Picker>
      </List>
    </div>
  );
};

export default Locker;

// "children": [{
//     "value": "820100",
//     "label": "澳门半岛",
//     "children": []
// }, {
//     "value": "820200",
//     "label": "离岛",
//     "children": []
// }]
