import PhoneNumber from "../Components/PhoneNumber";
import React from "react"

export default {
  default: true,

  apply: (flex, manager) => {
    flex.MainHeader.Content.add(<PhoneNumber key="phoneNumber" token={manager.user.token}/>, {
      sortOrder: -1, 
      align: "end"
    });
  }
}