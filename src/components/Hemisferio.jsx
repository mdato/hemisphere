import React from "react";
import HemisferioDisplay from "./HemisferioDisplay";

var texto = 'You are at parallel zero !'

export default class Hemisferio extends React.Component {
  /*constructor(props) {
    super(props);
    this.state = { latitude: null, errorAlgo: "" };     
  }*/
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
      /*
        if(this.state.latitude < 0){
            return (<div>Estas en hemisferio sur !
                {this.state.latitude}
            </div>)
        } else if(this.state.latitude > 0){
            return (<div>Estas en hemisferio norte ! 
                {this.state.latitude}
            </div>)
        } 
        */
      return <HemisferioDisplay latitude={this.state.latitude} longitude={this.state.longitude} />;
    } else {
      if (this.state.latitude === 0) {

        return (

      <div className="ui raised text container segment">
        <div className="image">

        <img 
      src="https://th.bing.com/th/id/OIP.QCFqFiV4EnPvxrKBlLtRSwHaD0?pid=ImgDet&rs=1" alt="new" />

          {/*<img src={ecuador} alt="ecuador ecuador" />*/}
        </div>
        <div className="ui teal bottom attached label">
          <h3>{texto} {this.state.latitude} {this.state.longitude}</h3>
        </div>
      </div>

        )


        //return <div> You are at parallel zero ! {this.state.latitude} {this.state.longitude}</div>;
      }

      return <div>Loading ....</div>;
    }
  }
}
