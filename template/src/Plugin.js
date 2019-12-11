import { FlexPlugin } from 'flex-plugin';
import React from 'react';
import * as Template from './Template'

const PLUGIN_NAME = '{{pluginClassName}}';

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
    Template.configure(flex, manager);
  }

}