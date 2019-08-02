import React, { Component } from "react";
import {
  Text,
  TextInput,
  TouchableHighlight,
  Image,
  ScrollView,
  View,
  Dimensions
} from "react-native";

export default class VerticalScrollView extends Component {
  constructor(props) {
    super(props);
   
  }
  render() {
    let screenWidth = Dimensions.get("window").width;
    return (
      <ScrollView
        // chi dung voi ios
        //   maximumZoomScale={3}
        //   minimumZoomScale={0.2}
        keyboardDismissMode="on-drag"
      >
        <Image
          style={{ width: screenWidth, height: screenWidth, marginTop: 20 }}
          source={require("../assets/icon.png")}
        />
        <Image
          style={{ width: screenWidth, height: screenWidth, marginTop: 20 }}
          source={require("../assets/icon.png")}
        />
        <Image
          style={{ width: screenWidth, height: screenWidth, marginTop: 20 }}
          source={require("../assets/icon.png")}
        />
       
        <TouchableHighlight
          underlayColor="red"
          style={{
            flexDirection: "row", // chon truc chinh
            backgroundColor: "blue",
            padding: 10,
            margin: 10,
            justifyContent: "center", //bo tri theo truc chinh
            alignItems: "center", // bo tri theo truc phu
            borderRadius: 16,
            shadowRadius: 20,
            shadowColor: "red"
          }}
          onPress={() => {}}
        >
          <Text style={{ color: "white" }}>Complete</Text>
        </TouchableHighlight>
      </ScrollView>
    );
  }
}
