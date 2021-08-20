import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Linking,
} from "react-native";
import { MaterialIcons, FontAwesome } from "@expo/vector-icons";
const Footer = ({ books }) => {
  const makeCall = () => {
    Linking.openURL(`tel:${9044957480}`);
  };
  const sendEmail = () => {
    Linking.openURL(`mailto:guardianconnect@guardianfueltech.com`);
  };
  return (
    <>
      <View>
        <TouchableOpacity onPress={() => sendEmail()} style={styles.email}>
          <MaterialIcons name="email" size={50} color="white" />
          <Text style={styles.color}>Email</Text>
          <Text style={styles.color}>Guardian Connect</Text>
        </TouchableOpacity>
      </View>
      <View>
        <TouchableOpacity onPress={() => makeCall()} style={styles.phone}>
          <FontAwesome name="phone" size={50} color="white" />
          <Text style={styles.color}>Call</Text>
          <Text style={styles.color}>Guardian Connect</Text>
        </TouchableOpacity>
      </View>
      <View>
        <TouchableOpacity style={styles.book}>
          <FontAwesome
            onPress={() => books()}
            name="book"
            size={50}
            color="white"
          />
          <Text style={styles.color}>Support</Text>
          <Text style={styles.color}>Documents</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default Footer;

const styles = StyleSheet.create({
  color: {
    color: "white",
  },
  email: {
    alignItems: "center",
    position: "absolute",
    right: 5,
    bottom: 5,
  },
  phone: {
    alignItems: "center",
    position: "absolute",
    left: 5,
    bottom: 5,
  },
  book: {
    alignItems: "center",
    position: "absolute",
    left: 140,
    bottom: 5,
  },
  //   phone: {
  //     position: "relative",
  //     top: -10,
  //     left: 135,
  //     right: 0,
  //     bottom: 0,
  //     // justifyContent: "center",
  //     // alignItems: "center",
  //   },
  //   book: {
  //     position: "relative",
  //     top: -94,
  //     left: -135,
  //     right: 0,
  //     bottom: 0,
  //     // justifyContent: "center",
  //     // alignItems: "center",
  //   },
});
