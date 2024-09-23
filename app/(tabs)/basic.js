import { Button, StyleSheet, Text, View } from "react-native";
import React from "react";
// import { useState } from "react";
// import stylesLight from "../../theme/light/style";
// import stylesDark from "../../theme/dark/style";
import { router } from "expo-router";
import styled from "styled-components/native";

const StyledText = styled.Text`
  font-size: 20px;
  color: blue;
  ${({ title, value }) => title && `${title}: ${value};`}
`;

const basic = () => {
  //   const [theme, setTheme] = useState(stylesLight);
  //   const handleChangeTheme = () => {
  //     if (theme === stylesLight) {
  //       setTheme(stylesDark);
  //     } else {
  //       setTheme(stylesLight);
  //     }
  //     return;
  //   };
  return (
    <View>
      <View>
        <Text style={styles.text}>basic</Text>
      </View>

      {/* <View>
        <Button
          title="Change"
          onPress={() => {
            handleChangeTheme();
          }}
        />
      </View> */}
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-evenly",
          paddingTop: 100,
        }}
      >
        <Text>A</Text>
        <Text>B</Text>
        <Text>C</Text>
      </View>
      <View>
        <Text>ABC</Text>
      </View>
    </View>
  );
};

export default basic;

const styles = StyleSheet.create({
  text: {
    color: "red",
    fontSize: 40,
    textAlign: "center",
    fontFamily: "Ubuntu-Bold",
  },
  textBlue: {
    color: "blue",
  },
  textOrange: {
    color: "orange",
  },
  background: {
    backgroundColor: "#fee2e2",
  },
});
