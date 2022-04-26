import React from "react";
import HemisferioDisplay from "./HemisferioDisplay";


var texto = 'You are at parallel zero !'

export default class Hemisferio extends React.Component {

  state = { latitude: null, errorAlgo: "" };

  componentDidMount() {
    //console.log('componentDidMount')
    window.navigator.geolocation.getCurrentPosition(
      // (position) => console.log(position),
      (position) => {
        this.setState({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        });
      },
      //(error) => console.log(error)
      (error) => {
        this.setState({ errorAlgo: error.message });
      }
    );
  }

  componentDidUpdate() {
    console.log("componentDidUpdate");
  }


  

  render() {
    if (this.state.errorAlgo && !this.state.latitude) {
      return <div>{this.state.errorAlgo}</div>;
    }
    if (!this.state.errorAlgo && this.state.latitude) {

      return <HemisferioDisplay latitude={this.state.latitude} longitude={this.state.longitude} />;
    } else {
      if (this.state.latitude === 0) {

        return (

      <div className="ui raised text container segment">
        <div className="image">

        <img 
      src="https://th.bing.com/th/id/OIP.QCFqFiV4EnPvxrKBlLtRSwHaD0?pid=ImgDet&rs=1" alt="new" />
  </div>
        <div className="ui teal bottom attached label">
          <h3>{texto} {this.state.latitude} {this.state.longitude}</h3>
        </div>
      </div>

        )


      }

      return <div>Loading ....</div>;
    }
  }
}
