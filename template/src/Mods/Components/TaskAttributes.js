import React from 'react';

export default class TaskAttributes extends React.Component {
  monoStyle = {
    fontFamily: '"monaco", "Courier New", monospace',
    whiteSpace: "pre",
  }

  chatChannelAttributes() {
    if (this.props.chatChannel && this.props.chatChannel.source) {
      return <div class="Twilio">
        <hr />
        <h1>Chat Channel Attributes</h1>
        <div style={this.monoStyle}>{JSON.stringify(this.props.chatChannel.source.attributes, null, 2)}</div>
      </div>
    } else {
      return null
    }
  }

  render() {
    return <div>

      <div class="Twilio">
        <hr />
        <h1>Task Attributes</h1>
        <div style={this.monoStyle}>{JSON.stringify(this.props.task.attributes, null, 2)}</div>
      </div>

      {this.chatChannelAttributes()}

    </div>
  }
}
