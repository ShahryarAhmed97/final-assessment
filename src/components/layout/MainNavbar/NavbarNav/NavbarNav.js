import React from "react";
import { Nav } from "shards-react";

import Notifications from "./Notifications";
import UserActions from "./UserActions";

export default ({current}) => (
  <Nav navbar className="border-left flex-row">
    {/* <Notifications /> */}
    <UserActions current={current} />
  </Nav>
);
