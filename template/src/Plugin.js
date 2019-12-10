import { FlexPlugin } from 'flex-plugin';
import { VERSION, MainHeader } from '@twilio/flex-ui';
import { parsePhoneNumberFromString } from 'libphonenumber-js'
import Axios from 'axios';
import React from 'react';

const PLUGIN_NAME = '{{pluginClassName}}';

class PhoneNumber extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      number: null
    }
    this.getPhoneNumber()
  }

  async getPhoneNumber() {
    try {
      let axiosOptions = {
        headers: 
        {
          "X-Flex-JWE": this.props.token,
        }
      }
      let response = await Axios.get("https://flex.twilio.com/sessions", axiosOptions);
      if (response.data && response.data.demoPhoneNumber) {
        this.setState({number: response.data.demoPhoneNumber});
      } else {
        window.err("Error: couldn't parse phone number from", response)
      }
    } catch(e) {
      window.err("Error fetching phone number: ", e)
    }

  }

  render() {
    let style = {
      fontSize: "2.5em"
    }
    let parsedNumber = parsePhoneNumberFromString(this.state.number);
    return <div style={style}>{parsedNumber.formatInternational()}</div>
  }
}

export default class Plugin extends FlexPlugin {
  constructor() {
    super(PLUGIN_NAME);
  }

  /**
   * This code is run when your plugin is being started
   * Use this to modify any UI components or attach to the actions framework
   *
   * @param flex { typeof import('@twilio/flex-ui') }
   * @param manager { import('@twilio/flex-ui').Manager }
   */
  init(flex, manager) {
    this.populateWindowLog();

    window.log("React Version: " + React.version);
    
    MainHeader.Content.add(<PhoneNumber key="phoneNumber" token={manager.user.token}/>, {
      sortOrder: -1, 
      align: "end"
    });

  }


  populateWindowLog() {
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
  }
}