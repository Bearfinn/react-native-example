import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';

import ListItem from '../ListItem/ListItem';

class PlaceList extends Component {
    
    render() {
        const placesOutput = this.props.places.map((place, key) => {
            return (
                <ListItem
                    key={key}
                    placeName={place}
                    onItemPressed={() => this.props.onItemDeleted(key)}/>
            );
        });
        return (
            <View style={styles.listContainer}>
                {placesOutput}
            </View>
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
    listContainer: {
      width: '100%',
    }
  });

export default PlaceList;