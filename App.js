import React from 'react';
import { StyleSheet, Text, TextInput, View, Button, WebView } from 'react-native';

import PlaceInput from './src/components/PlaceInput/PlaceInput';
import PlaceList from './src/components/PlaceList/PlaceList';

export default class App extends React.Component {
  state = {
    places: [],
  };

  placeAddedHandler = (value) => {
    this.setState((prevState) => {
        return {
            places: prevState.places.concat(value),
        };
    });
  };

  placeDeletedHandler = (key) => {
    this.setState((prevState) => {
      return {
        places: prevState.places.filter((place, index) => {
          return key != index;
        })
      }
    })
  }
  
  render() {
    return (
      <WebView
        source={{uri: 'http://jeromeetienne.github.io/AR.js/three.js/examples/mobile-performance.html'}}
        style={{marginTop: 20}}
      />
      /*<View style={styles.container}>
        <PlaceInput onPlaceAdded={this.placeAddedHandler}/>
        <PlaceList onItemDeleted={this.placeDeletedHandler} places={this.state.places}/>
      </View>*/
    );
  }
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    padding: 20,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
