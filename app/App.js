import React from 'react';
import { StyleSheet, Text, View, Dimensions, Animated, Image } from 'react-native';

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
  render(){
    return (
      <View style={{flex: 1}}>
        <View style = {{height: 60}}>
          
        </View>

        <View style = {{flex: 1}}>
          <Animated.View
            style={[
              {
                height: SCREEN_HEIGHT -120,
                width: SCREEN_WIDTH,
                padding: 10
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
              source = {Profile[0].uri}
            />
          </Animated.View>
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
