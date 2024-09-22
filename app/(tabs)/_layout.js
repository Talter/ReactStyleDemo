import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Tabs } from "expo-router";

const CustomTabBarButton = ({ title, onPress, isFocused }) => (
  <TouchableOpacity style={styles.tabButton} onPress={onPress}>
    <Text style={[styles.tabText, isFocused && styles.activeText]}>
      {title}
    </Text>
  </TouchableOpacity>
);

const Tabslayout = () => {
  const tabs = [
    { name: "basic", title: "Basic" },
    { name: "component", title: "Com" },
    { name: "flex", title: "Flex" },
    { name: "flex2", title: "Flex2" },
    { name: "svg", title: "SVG" },
  ];

  return (
    <Tabs>
      {tabs.map((tab) => (
        <Tabs.Screen
          key={tab.name}
          name={tab.name}
          options={{
            headerShown: false,
            tabBarButton: (props) => (
              <CustomTabBarButton
                {...props}
                title={tab.title}
                isFocused={props.accessibilityState.selected}
              />
            ),
          }}
        />
      ))}
    </Tabs>
  );
};

const styles = StyleSheet.create({
  tabButton: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  tabText: {
    fontSize: 16,
    color: "black",
  },
  activeText: {
    fontWeight: "bold",
    color: "blue",
  },
});

export default Tabslayout;
