// eslint-disable-next-line no-unused-vars
import React from "react"

export default {
  default: true,

  apply: (flex, manager) => {
    const functionsV2Domain = manager.configuration.functionsV2Domain;

    fetch(`http://${functionsV2Domain}/helloWorld`)
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.err(error);
    });
  }
}
