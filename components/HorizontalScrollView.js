import React, { Component } from "react";
import { Dimensions, ScrollView, Text, View } from "react-native";

export default class HorizontalScrollView extends Component {
  render() {
    let screenWidth = Dimensions.get("window").width;
    let sceenHeight = Dimensions.get("window").height;
    return (
      <ScrollView
        horizontal={true}
        pagingEnabled={true} // scrooll by one page
        scrollIndicatorInsets={{ top: 10, left: 10, right: 10, bottom: 10 }} // ios
        // onMomentumScrollBegin={() => {
        //   alert("Begin Scroll");
        // }}
        // onMomentumScrollEnd={() => {
        //   alert("End Scroll");
        // }}
        onScroll={(event)=>{
            // concact string `${}`
            var date = new Date().getDate(); //Current Date
            var month = new Date().getMonth() + 1; //Current Month
            var year = new Date().getFullYear(); //Current Year
            var hours = new Date().getHours(); //Current Hours
            var min = new Date().getMinutes(); //Current Minutes
            var sec = new Date().getSeconds(); //Current Seconds
            let logData= ` ${date + '/' + month + '/' + year + ' ' + hours + ':' + min + ':' + sec} Scroll to x =${event.nativeEvent.contentOffset.x}, y =${event.nativeEvent.contentOffset.y}`;
            console.log(logData);
        }}
        scrollEventThrottle={1000} // return data after ranger milisecond
      >
        <View
          style={{
            backgroundColor: "red",
            flex: 1,
            marginTop: 20,
            width: screenWidth,
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <Text
            style={{
              fontSize: 20,
              padding: 15,
              color: "white"
            }}
          >
            {" "}
            Screen 1
          </Text>
        </View>
        <View
          style={{
            backgroundColor: "yellow",
            flex: 1,
            marginTop: 20,
            width: screenWidth,
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <Text
            style={{
              fontSize: 20,
              padding: 15,
              color: "white"
            }}
          >
            {" "}
            Screen 2
          </Text>
        </View>
        <View
          style={{
            backgroundColor: "blue",
            flex: 1,
            marginTop: 20,
            width: screenWidth,
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <Text
            style={{
              fontSize: 20,
              padding: 15,
              color: "white"
            }}
          >
            {" "}
            Screen 3
          </Text>
        </View>
      </ScrollView>
    );
  }
}
