import React, {Component} from 'react';
import {View, Button, TextInput, StyleSheet} from 'react-native';

class PlaceInput extends Component {
    state = {
        placeName: ''
    }
    placeNameChangeHandler = (text) => {
        this.setState({placeName: text});
    }
    render() {
        return <View style={styles.inputContainer}>
            <TextInput
                onChangeText={this.placeNameChangeHandler}
                placeholder={'Awesome place'}
                style={styles.placeInput}/>

            <Button style={styles.placeButton} title='Add' onPress={() => {
                this.props.onChangePlace(this.state.placeName);
            }}/>
        </View>
    }

}

const styles = StyleSheet.create({
    inputContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%'
    },
    placeInput: {
        width: '70%'
    },
    placeButton: {
        width: '30%'
    },
});

export default PlaceInput;