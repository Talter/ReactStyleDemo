import { Button, StyleSheet, Text, View } from "react-native";
import React from "react";
import { router } from "expo-router";

const index = () => {
  return (
    <View>
      <Button onPress={() => router.push("basic")} title="Basic"></Button>
      <Button
        onPress={() => router.push("component")}
        title="Component"
      ></Button>
      <Button onPress={() => router.push("flex")} title="Flex"></Button>
      <Button onPress={() => router.push("flex2")} title="Flex2"></Button>
    </View>
  );
};

export default index;

const styles = StyleSheet.create({});
