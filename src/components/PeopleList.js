import React, { Component, component } from "react";
import { View, StyleSheet, FlatList } from "react-native";
import { Connect, connect } from "react-redux";
import PeopleItem from "./PeopleItem";
import PeopleDetail from "./PeopleDetail";
import { loadInitialContacts } from "../actions";

const styles = StyleSheet.create({
    container: {
        paddingTop: 80,
    }
});

class PeopleList extends Component {
    componentDidMount() {
        this.props.loadInitialContacts();
    }
    render() {
        return (
            <FlatList 
            data={this.props.people}
            renderItem={({ item }) => <PeopleItem people={item} keyExtractor={(item, index) => index.toString()} />}
            />
        );
    }
}

const mapStateToProps = (state) => ({
    people: state.people,
    detailView: state.detailView,
});

export default connect(mapStateToProps, { loadInitialContacts })(PeopleList);