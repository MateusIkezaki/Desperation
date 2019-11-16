///////////////////////////////
////CONINUAR DO VIDEO 6.11////
//////////////////////////////

import React from 'react';
import { StyleSheet, Text, View, Dimensions, Animated, Image, PanResponder } from 'react-native';

const SCREEN_HEIGHT = Dimensions.get('window').height
const SCREEN_WIDTH = Dimensions.get('window').width

const Profile = [
  {id: "1", name:"CPP", uri: require('./assets/cpp.png')},
  {id: "2", name:"JS", uri: require('./assets/js.png')},
  {id: "3", name:"Python", uri: require('./assets/python.png')},
  {id: "4", name:"Ruby", uri: require('./assets/ruby.png')},
  {id: "5", name:"Java", uri: require('./assets/java.png')}
]

export default class App extends React.Component{

  constructor(){
    super();
    this.position = new Animated.ValueXY();
    this.state = {
      currentIndex: 0
    }
    this.rotate = this.position.x.interpolate({
      inputRange: [-SCREEN_WIDTH/2, 0, SCREEN_WIDTH/2],
      outputRange: ['-10deg', '0deg', '10deg'],
      extrapolate: 'clamp'
    })
    this.rotateAndTranslate = {
      transform: [{
        rotate: this.rotate
      },
      ...this.position.getTranslateTransform()
    ]
    }

    this.likeOpacity = this.position.x.interpolate({
      inputRange:[-SCREEN_WIDTH/2,0,SCREEN_WIDTH / 2],
      outputRange: [0,0,1],
      extrapolate:'clamp'
    })

    this.nopeOpacity = this.position.x.interpolate({
      inputRange:[-SCREEN_WIDTH/2,0,SCREEN_WIDTH / 2],
      outputRange: [1,0,0],
      extrapolate:'clamp'
    })

    this.nextCardOpacity = this.position.x.interpolate({
      inputRange:[-SCREEN_WIDTH/2,0,SCREEN_WIDTH / 2],
      outputRange: [1,0,1],
      extrapolate:'clamp'
    })

    this.nextCardScale = this.position.x.interpolate({
      inputRange:[-SCREEN_WIDTH/2,0,SCREEN_WIDTH / 2],
      outputRange: [1,0.8,1],
      extrapolate:'clamp'
    })
  }



 

  componentWillMount(){
    this.PanResponder = PanResponder.create({
      onStartShouldSetPanResponder:(evt, gestureState) => true,
      onPanResponderMove:(evt, gestureState) => {
        this.position.setValue({x: gestureState.dx, y:gestureState.dy})
      },
      onPanResponderRelease: (evt, gestureState) =>{

      }
    })
  }

  renderProfile = () => {
    return Profile.map((item, i) => {

      if(i  < this.state.currentIndex){
        
        return null;
      }
      else if(i == this.state.currentIndex){

      return(
        <Animated.View
          {...this.PanResponder.panHandlers}
          key={item.id}
          style={[
           this.rotateAndTranslate,
            {
              height: SCREEN_HEIGHT -120,
              width: SCREEN_WIDTH,
              padding: 10,
              position: 'absolute'
            }
        ]}
        >

          <Animated.View
            style={{
              opacity: this.likeOpacity,
              transform:[{rotate: "-30deg"}],
              position:"absolute",
              top: 50,
              left: 40,
              zIndex: 1000
            }}
          >
            <Text
              style={{
                borderWidth: 4,
                borderColor: "green",
                color: "green",
                fontSize: 32,
                fontWeight: "800",
                padding: 10
              }}
            >LIKE</Text>
          </Animated.View>

          <Animated.View
            style={{
              opacity: this.nopeOpacity,
              transform:[{rotate: "30deg"}],
              position:"absolute",
              top: 50,
              right: 40,
              zIndex: 1000
            }}
            >
            <Text
            style={{
              borderWidth: 4,
              borderColor: "red",
              color: "red",
              fontSize: 32,
              fontWeight: "800",
              padding: 10}}
            >
            NOPE</Text>
          </Animated.View>

          <Image
            style = {{
              flex: 1,
              height: null,
              width: null,
              resizeMode: "cover",
              borderRadius: 20
            }}
            source = {item.uri}
          />
        </Animated.View>
      )
    }
    else{
      return(
        <Animated.View
          key={item.id}
          style={[
            
            {
              opacity:this.nextCardOpacity,
              transform: [{scale: this.nextCardScale}],
              height: SCREEN_HEIGHT -120,
              width: SCREEN_WIDTH,
              padding: 10,
              position: 'absolute'
            }
        ]}
        >
          <Image
            style = {{
              flex: 1,
              height: null,
              width: null,
              resizeMode: "cover",
              borderRadius: 20
            }}
            source = {item.uri}
          />
        </Animated.View>
      )
    }
    }).reverse()
  }
  
  render(){
    return (
      <View style={{flex: 1}}>
        <View style = {{height: 60}}>
          
        </View>

        <View style = {{flex: 1}}>
          {this.renderProfile()}
        </View>

        <View style = {{height: 60}}>
          
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
