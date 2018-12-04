import React from 'react';
import {
  AppRegistry,
  VrButton,
  Sound,
  NativeModules,
  asset,
  Pano,
  Text,
  View,
} from 'react-vr';
//const {AudioModule} = NativeModules;
export default class tour extends React.Component {
  constructor() {
    super();
    this.state = {selectedState: ""};
  }
  stateClicked (selection) {
    let newState;
    switch(selection) {
      case 1:
        newState = "MAISON";
        break;
      case 2:
        newState = "GOREE";
        break;
      case 3:
        newState = "CANON";
        break;
      case 4:
        newState = "status";
        break;
      case 5:
        newState = "mariamaba";
        break;
    }
    console.log(newState);
    this.setState({ selectedState: newState});
  }
  componentDidMount() {
    const random = Math.floor((Math.random() * 5) + 1);
    let randState;
    switch(random) {
      case 1:
        randState = "STATU";
        break;
      case 2:
        randState = "GOREE";
        break;
      case 3:
        randState = "CANON DE GOREE";
        break;
      case 4:
        randState = "OBJETS D'ART";
        break;
      case 5:
        randState = "ECOLE MARIAMA BA";
        break;
    }
    this.setState({ selectedState: randState});
  }
  render() {
    const states = {
      GOREE: "MAISON ESCLAVES",
      MONUMENT: "MONUMENT GOREE",
      SONATEL: "CANON DE GOREE",
      SALOUM: "STATUS LIBERTE",
      NGOR: "ECOLE MARIAMA BA"
   }

    return (
      <View>
      <Pano source={asset(this.state.selectedState + '.jpg')}>
      <Sound

    source={{wav: asset('gor.wav')}}
    loop={true}
  />
  </Pano>
      <View
        style={{
          flex: 1,
          width: 2,
          flexDirection: 'column',
          alignItems: 'stretch',
          layoutOrigin: [0.5, 0.5],
          transform: [{translate: [0, 0, -5]}]
        }}
      >
        <Title/>
        <TextBoxes stateClicked={this.stateClicked.bind(this)} states={states}/>
      </View>
    </View>
    );
  }
};
class TextBoxes extends React.Component {

  render() {
    return (
      <View>
        <VrButton onClick={() => this.props.stateClicked(1)}>
          <View style={{ margin: 0.1, height: 0.3, backgroundColor: 'orange'}}>
            <Text style={{fontSize: 0.2, textAlign: 'center'}}>{this.props.states.GOREE}</Text>
          </View>
        </VrButton>
        <VrButton onClick={() => this.props.stateClicked(2)}>
          <View style={{ margin: 0.1, height: 0.3, backgroundColor: 'orange'}}>
            <Text style={{fontSize: 0.2, textAlign: 'center'}}>{this.props.states.MONUMENT}</Text>
          </View>
        </VrButton>
        <VrButton onClick={() => this.props.stateClicked(3)}>
          <View style={{ margin: 0.1, height: 0.3, backgroundColor: 'orange'}}>
            <Text style={{fontSize: 0.2, textAlign: 'center'}}>{this.props.states.SONATEL}</Text>
          </View>
        </VrButton>
        <VrButton onClick={() => this.props.stateClicked(4)}>
          <View style={{ margin: 0.1, height: 0.3, backgroundColor: 'orange'}}>
            <Text style={{fontSize: 0.2, textAlign: 'center'}}>{this.props.states.SALOUM}</Text>
          </View>
        </VrButton>
        <VrButton onClick={() => this.props.stateClicked(5)}>
          <View style={{ margin: 0.1, height: 0.3, backgroundColor: 'orange'}}>
            <Text style={{fontSize: 0.2, textAlign: 'center'}}>{this.props.states.NGOR}</Text>
          </View>
        </VrButton>
      </View>
    )
  }
}
class Title extends React.Component {
  constructor() {
    super();
    this.state = {title: "SONATEL VOUS PRESENTE GOREE EN 360"};
  }
  render() {
    return (
      <View>
        <Text style={{fontSize: 0.2, textAlign: 'center', color: "orange"}}>
        {this.state.title}
        </Text>
      </View>
    )
  }
}

AppRegistry.registerComponent('tour', () => tour);
