import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Linking,
} from "react-native";

const GuideScreen = (props) => {
  const goTo = props.navigation;
  const linkDoc = () => {
    Linking.openURL(
      "https://drive.google.com/file/d/1GHFLPiND2ggRGleALID1eZXy_oSYhOMu/view?usp=sharing"
    );
  };
  const linkTrouble = () => {
    Linking.openURL(
      "https:drive.google.com/file/d/1z3EFoIjVx26gHbCdz9kDZnQRqhYl7jSb/view?usp=sharing"
    );
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => linkDoc()} style={styles.button}>
        <Text style={styles.text}>Insite 360 MDE-5314</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => linkTrouble()} style={styles.button}>
        <Text style={styles.text}>Insite 360 Network Troubleshooting</Text>
      </TouchableOpacity>
    </View>
  );
};

export default GuideScreen;

const styles = StyleSheet.create({
  button: {
    margin: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#81cb2f",
    borderRadius: 50,
    height: 75,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 4,
  },
  container: {
    flex: 1,
    backgroundColor: "#319ac2",
    paddingBottom: 20,
    margin: 10,
    fontSize: 30,
    textAlign: "center",
  },
  text: {
    fontSize: 30,
    textAlign: "center",
  },
});
