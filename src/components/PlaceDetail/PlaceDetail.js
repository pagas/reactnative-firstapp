import React, {Component} from 'react';
import {Modal, View, Image, Text, Button, StyleSheet} from 'react-native';

class PlaceDetail extends Component {
    render() {
        let modalContent = null;
        if (this.props.selectedPlace) {
            modalContent = <View>
                <Image style={styles.placeImage} source={this.props.selectedPlace.image}/>
                <Text style={styles.placeName}>{this.props.selectedPlace.name}</Text>
            </View>;
        }

        return <Modal visible={this.props.selectedPlace !== null}
                      onRequestClose={this.props.onModalClose}
                      animationType="slide">
            <View style={styles.modalContainer}>
                {modalContent}
                <View>
                    <Button onPress={this.props.onItemDeleted} color="red" title="Delete"/>
                    <Button onPress={this.props.onModalClose} title="Close"/>
                </View>
            </View>
        </Modal>
    }
}

const styles = StyleSheet.create({
    modalContainer: {
        margin: 20
    },
    placeImage: {
        width: "100%",
        height: 200
    },
    placeName: {
        fontWeight: "bold",
        textAlign: "center",
        fontSize: 28
    }
});

export default PlaceDetail;