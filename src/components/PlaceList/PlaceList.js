import React, {Component} from 'react';
import ListItem from '../ListItem/ListItem';
import {StyleSheet, FlatList} from 'react-native';


class PlaceList extends Component {
    render() {
        return <FlatList data={this.props.places}
                         renderItem={(info) => (
                             <ListItem
                                 placeName={info.item.name}
                                 placeImage={info.item.image}
                                 onItemPressed={
                                     () => this.props.onItemSelected(info.item.key)
                                 }/>
                         )}
                         style={styles.listContainer}>
        </FlatList>
    }
}

const styles = StyleSheet.create({
    listContainer: {
        width: "100%"
    }
});

export default PlaceList;