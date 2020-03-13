import React from 'react';

export default class TaskAttributes extends React.Component {
  render() {
    let style = {
      fontFamily: '"monaco", "Courier New", monospace',
      whiteSpace: "pre",
    }
    return <div class="Twilio">
      <hr />
      <h1>Task Attributes</h1>
      <div style={style}>{JSON.stringify(this.props.task.attributes, null, 2)}</div>
    </div>
  }
}