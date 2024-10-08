import React from "react";
import { View } from "react-native";
import Svg, { Circle } from "react-native-svg";
import MySvg from "../../assets/svgs/image2";
import MineSvg from "../../assets/svgs/image3.svg";

const App = () => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <MineSvg />
      <Svg height="100" width="100">
        <Circle
          cx="50"
          cy="50"
          r="40"
          stroke="blue"
          strokeWidth="2.5"
          fill="green"
        />
      </Svg>
    </View>
  );
};

export default App;
