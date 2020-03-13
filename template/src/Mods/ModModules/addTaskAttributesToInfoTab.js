// eslint-disable-next-line no-unused-vars
import React from "react"

import TaskAttributes from "../Components/TaskAttributes";

export default {
  default: true,

  apply: (flex, manager) => {
    flex.TaskInfoPanel.Content.add(<TaskAttributes key="task-attributes" />);
  }
}