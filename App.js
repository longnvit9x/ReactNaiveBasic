import React, { Component } from "react";
import {Text, StyleSheet, View } from "react-native";
import { ButtonCus } from "./components";

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Day la  App</Text>
      <ButtonCus/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});
