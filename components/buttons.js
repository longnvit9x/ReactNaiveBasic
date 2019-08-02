import React, { Component } from "react";
import {
  TouchableHighlight,
  Image,
  Alert,
  Button,
  StyleSheet,
  Text,
  View,
  TouchableNativeFeedback,
  TouchableOpacity,
  TouchableWithoutFeedback
} from "react-native";

export default class ButtonCus extends Component {
  render() {
    return (
      <View style={styles.container}>
          <Button
          style={{
            color:'black',
            borderRadius:16
          }}
          title="Button"
          onPress={() => {
            Alert.alert("This is the button");
          }}
          color="red"
        />
        <TouchableHighlight
          underlayColor="red"
          style={{
            borderRadius: 16,
            shadowRadius: 20,
            padding: 10,
            marginTop: 5,
            backgroundColor: "green"
          }}
          onPress={() => {
            Alert.alert("This is TouchableHighlight onPress");
          }}
          onPressIn={() => {
            Alert.alert("This is TouchableHighlight onPressIn");
          }}
          onPressOut={() => {
            Alert.alert("This is TouchableHighlight onPressOut");
          }}
          onLongPress={() => {
            Alert.alert("This is TouchableHighlight onLongPress");
          }}
          disabled={false}
        >
          <View>
            {/* <Image style={{ width: 100, height: 100 }} 
             source={require('./assets/icon.png')}
           /> */}
            <Text style={{ color: "white" }}>TouchableHighLight</Text>
          </View>
        </TouchableHighlight>

        <TouchableNativeFeedback
          useForeground={true}
          onPress={() => {
            Alert.alert("This is TouchableNativeFeedback");
          }}
        >
          <View
            style={{
              borderRadius: 16,
              shadowRadius: 20,
              padding: 10,
              marginTop: 5,
              backgroundColor: "green"
            }}
          >
            <Text style={{ color: "white" }}>TouchableNativeFeedback</Text>
          </View>
        </TouchableNativeFeedback>

        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => {
            Alert.alert("This is TouchableOpacity");
          }}
        >
          <View
            style={{
              borderRadius: 16,
              shadowRadius: 20,
              padding: 10,
              marginTop: 5,
              backgroundColor: "green"
            }}
          >
            <Text style={{ color: "white" }}>TouchableOpacity</Text>
          </View>
        </TouchableOpacity>

        <TouchableWithoutFeedback
          onPress={() => {
            Alert.alert("This is TouchableOpacity");
          }}
        >
          <View
            style={{
              borderRadius: 16,
              shadowRadius: 20,
              padding: 10,
              marginTop: 5,
              backgroundColor: "green"
            }}
          >
            <Text style={{ color: "white" }}>TouchableOpacity</Text>
          </View>
        </TouchableWithoutFeedback>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    color: "red",
    backgroundColor: "red",
    padding: 10,
    borderRadius: 16,
    shadowRadius: 20,
    shadowOpacity: 0.5
  },

  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});
