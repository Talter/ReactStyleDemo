import { TouchableOpacity, Text, StyleSheet, Animated } from "react-native";
import React, { useRef } from "react";

const CustomButton = ({
  title,
  handlePress,
  containerStyles,
  textStyles,
  isLoading,
}) => {
  const scaleAnim = useRef(new Animated.Value(1)).current;

  const handlePressIn = () => {
    Animated.spring(scaleAnim, {
      toValue: 0.95,
      useNativeDriver: true,
    }).start();
  };

  const handlePressOut = () => {
    Animated.spring(scaleAnim, {
      toValue: 1,
      useNativeDriver: true,
    }).start();
  };

  return (
    <Animated.View style={{ transform: [{ scale: scaleAnim }] }}>
      <TouchableOpacity
        onPress={handlePress}
        activeOpacity={0.7}
        style={[
          styles.container,
          containerStyles,
          isLoading && styles.loadingContainer,
        ]}
        disabled={isLoading}
        onPressIn={handlePressIn}
        onPressOut={handlePressOut}
      >
        <Text style={[styles.text, textStyles]}>{title}</Text>
      </TouchableOpacity>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#6200EE",
    borderRadius: 12,
    minHeight: 62,
    justifyContent: "center",
    alignItems: "center",
  },
  loadingContainer: {
    opacity: 0.5,
  },
  text: {
    color: "#FFFFFF",
    fontFamily: "Roboto",
    fontSize: 18,
  },
});

export default CustomButton;
