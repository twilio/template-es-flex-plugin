import React from 'react';

import PhoneNumber from "./Components/PhoneNumber";
export { PhoneNumber };

const Mods = {
  addPhoneNumber: {
    default: true,
    function: (flex, manager) => {
      flex.MainHeader.Content.add(<PhoneNumber key="phoneNumber" token={manager.user.token}/>, {
        sortOrder: -1, 
        align: "end"
      });
    }
  },
  addWindowLog: {
    default: true,
    function: (flex, manager) => {
      if (!window.log || !window.err || !window.logStartTime) {
        window.logStartTime = (new Date()).getTime()
        window.log = (...args) => {
          let diff = (new Date()).getTime() - window.logStartTime;
          console.log('%c▶︎▶︎▶︎▶︎▶︎▶︎▶︎▶︎▶︎▶︎ DEVLOG ◀︎◀︎◀︎◀︎◀︎◀︎◀︎◀︎◀︎◀︎\n%c' + diff + 'ms\n', 'text-decoration: underline; background: #222; color: #00ff00', 'background: #222; color: #00ff00', ...args);
        }
        window.err = (...args) => {
          let diff = (new Date()).getTime() - window.logStartTime;
          console.log('%c▶︎▶︎▶︎▶︎▶︎▶︎▶︎▶︎▶︎▶︎ DEVLOG ◀︎◀︎◀︎◀︎◀︎◀︎◀︎◀︎◀︎◀︎\n%c' + diff + 'ms\n', 'text-decoration: underline; background: #222; color: #ff0000', 'background: #222; color: #ff0000', ...args);
        }
      }

      window.log("Flex Version: " + flex.VERSION + "\nReact Version: " + React.version);
    }
  }
}

export const configure = (flex, manager, config = {}) => {
  for (let key in Mods) {
    let mod = Mods[key];
    if (mod.default || config[key]) {
      if (mod.function) {
        try {
          mod.function(flex, manager);
        } catch(e) {
          console.error(`Mod ${key} is misconfigured: ${e.message}`, e)
        }
      } else {
        console.error(`Mod ${key} is misconfigured: "function" key does not exist.`)
      }
    }
  }
}
