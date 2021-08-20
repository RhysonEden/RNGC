import React from "react";
import { FlatList } from "react-native";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

const Card = ({ message, setMessage }) => {
  return (
    <View>
      {message.map((mess, index) => (
        <View style={styles.container} key={index}>
          <Text style={styles.text}>{mess.gvrid}</Text>
          {mess.prov == true ? (
            <Text style={styles.text}>Active with Guardian Connect</Text>
          ) : (
            <Text style={styles.text}>Provisioned, but not Active</Text>
          )}
        </View>
      ))}
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  text: {
    fontSize: 25,
    textAlign: "center",
    marginTop: 20,
  },
  container: {
    flex: 1,
    justifyContent: "space-between",
    backgroundColor: "#03e8fc",
    padding: 20,
    margin: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 4,
  },
});
