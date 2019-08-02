import React, { Component } from "react";
import { Keyboard, ScrollView, View, TextInput, Text } from "react-native";

export default class TextInputCus extends Component {
  constructor(props) {
    super(props);
    this.state = {
      typePassword: "Please input password",
      typeText: ""
    };
  }
  // When component attach
  componentWillMount() {
    this.keyboardShowListenner = Keyboard.addListener(
      "keyboardDidShow",
      () => {
        this.setState(() => {
          return { typePassword: "keyboardDidShow" };
        });
      }
    );
    this.keyboardDidHideListenner = Keyboard.addListener(
      "keyboardDidHide",
      () => {
        this.setState(() => {
          return { typePassword: "keyboardDidHide" };
        });
      }
    );
  }

  // when component detach
  componentWillUnmount() {
    this.keyboardShowListenner.remove();
    this.keyboardDidHideListenner.remove();
  }

  render() {
    return (
      <ScrollView>
        <TextInput
          style={{ padding: 10, margin: 10, borderWidth: 1 }}
          placeholder="Enter type password"
          keyboardType="default"
          secureTextEntry={true}
          placeholderTextColor="red"
          onChangeText={text => {
            this.setState(() => {
              return { typePassword: text };
            });
          }}
        />
        <Text> {this.state.typePassword}</Text>
        <TextInput
          style={{ padding: 10, margin: 10, borderWidth: 1 }}
          placeholder="Enter type Text"
          keyboardType="default"
          placeholderTextColor="red"
          onChangeText={text => {
            this.setState(() => {
              return { typeText: text };
            });
          }}
        />
        <Text> {this.state.typeText}</Text>

        <TextInput
          style={{ padding: 10, margin: 10, borderWidth: 1, height: 100 }}
          placeholder="Enter type Text"
          keyboardType="default"
          placeholderTextColor="red"
          multiline={true}
          borderBottomColor="green"
          borderBottomWidth={3}
          borderRightColor="red"
          borderRightWidth={3}
          editable={true}
          returnKeyType="google"
          onSubmitEditing={Keyboard.dismiss}
        />
      </ScrollView>
    );
  }
}
