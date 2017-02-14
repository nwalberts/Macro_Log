import React, { Component }  from 'react';
import LogShow from '../components/LogShow';

class LogShowContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        reviews: []
      }
    }
  }

  componentDidMount() {
    let logId = this.props.params.id;
    fetch(`/api/v1/logs/${logId}`)
      .then((response) => response.json())
      .then((responseData) => {
        this.setState({data: responseData.log})
      })
  }
  render() {
    return(
      <div className="logs">
      <h3> I am the show container! </h3>
        <LogShow
          key={this.state.data.id}
          id={this.state.data.id}
          title={this.state.data.title}
          averageRating={this.state.data.average_rating}
          reviews={this.state.data.reviews}
        />
      </div>
    )
  }
}

export default LogShowContainer;
