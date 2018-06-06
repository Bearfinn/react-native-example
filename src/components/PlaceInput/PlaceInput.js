import React, { Component } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

class PlaceInput extends Component {
    state = {
        placeName: '',
    }
    placeNameChangedHandler = (value) => {
        this.setState({
          placeName: value,
        });
    };
    placeSubmitHandler = (value) => {
        if (this.state.placeName.trim() === '') {return;}
        this.props.onPlaceAdded(this.state.placeName); //Call method in parent component, passing arguments
        this.setState({
            placeName: '',
        });
    };
    render() {
        return (
            <View>
                <TextInput
                    style={styles.textInput}
                    placeholder='Fill something here'
                    value={this.state.placeName}
                    onChangeText={this.placeNameChangedHandler}/>
                <Button
                    title='Add'
                    style={styles.placeButton}
                    onPress={this.placeSubmitHandler}/>
            </View>
        );
    }
};

const styles = StyleSheet.create({
    textInput: {
        width: 300,
    },
    placeButton: {
        width: '30%',
    }
});

export default PlaceInput;