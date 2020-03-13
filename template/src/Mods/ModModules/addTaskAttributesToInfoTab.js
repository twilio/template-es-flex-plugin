// eslint-disable-next-line no-unused-vars
import React from "react"

import PhoneNumber from "../Components/PhoneNumber";

export default {
  default: true,

  apply: (flex, manager) => {
    flex.TaskInfoPanel.Content.add(<TaskAttributes key="task-attributes" />);
  }
}