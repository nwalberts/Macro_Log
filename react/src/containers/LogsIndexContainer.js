import React, { Component }  from 'react';
import LogTile from '../components/LogTile';

class LogsIndexContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      logs: []
    }
  }

  componentDidMount() {
    fetch('/api/v1/logs.json')
      .then((response) => response.json())
      .then((responseData) => {
        this.setState({logs: responseData})
      })
  }

  render() {
    let logs = this.state.logs.map(log => {
      return(
        <LogTile
          key={log.id}
          id={log.id}
          title={log.title}
          body={log.body}
        />
      )
    })
    return(
      <div className="logs">
        <h2> I am the Logs Index Container </h2>
        {logs}
        {this.props.children}
      </div>
    )
  }
}

export default LogsIndexContainer;
