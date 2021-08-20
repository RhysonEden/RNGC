import React, { useState } from "react";
import { fetchGVR } from "./api";
import Card from "./Card";
import { SearchBar as Search } from "react-native-elements";
import {
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
  Linking,
} from "react-native";
import { ScrollView } from "react-native";
import Footer from "../Footer";

const HomeScreen = (props) => {
  const goTo = props.navigation;
  const [message, setMessage] = useState("");
  const [id, searchID] = useState("");

  const clearMessage = () => {
    setMessage("");
    searchID("");
  };

  const books = () => {
    goTo.navigate("Guides");
  };

  const searchGVR = () => {
    if (id) {
      fetchGVR(id)
        .then((response) => {
          setMessage(response);
        })
        .catch((error) => {
          setMessage(error.message);
        });
    } else {
      return;
    }
  };

  return (
    <View style={styles.container}>
      <Search
        lightTheme
        placeholder="Search GVR ID"
        onChangeText={searchID}
        value={id}
      />
      {message.length == 0 ? (
        <View>
          <TouchableOpacity
            style={styles.button}
            onPress={() => searchGVR()}
            style={styles.search}
          >
            <Text style={styles.text}>Search</Text>
          </TouchableOpacity>
          <Text style={styles.searchtextmargin}>
            Welcome to the Guardian Connect App!
          </Text>
          <Text style={styles.searchtext}>Search Above</Text>
          <Text style={styles.searchtext}>or</Text>
          <Text style={styles.searchtext}>Contact the Support Center!</Text>
        </View>
      ) : (
        <ScrollView>
          <Card message={message} setMessage={setMessage} />
          <TouchableOpacity
            onPress={() => clearMessage()}
            style={styles.button}
          >
            <Text style={styles.text}>Clear</Text>
          </TouchableOpacity>
        </ScrollView>
      )}
      <View>
        <Footer books={books} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    flex: 1,
    fontSize: 30,
    textAlign: "center",
    // marginTop: 10,
  },
  searchtext: {
    position: "relative",
    bottom: 310,
    fontSize: 30,
    textAlign: "center",
    color: "white",
    paddingTop: 10,
  },
  searchtextmargin: {
    position: "relative",
    bottom: 310,
    fontSize: 30,
    textAlign: "center",
    color: "white",
    padding: 20,
  },
  container: {
    flex: 1,
    justifyContent: "space-between",
    // backgroundColor: "#03e8fc",
    backgroundColor: "#319ac2",
    paddingBottom: 20,
    margin: 10,
  },
  button: {
    margin: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#81cb2f",
    borderRadius: 50,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 4,
  },
  search: {
    position: "relative",
    top: 0,
    marginBottom: 320,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#81cb2f",
    borderRadius: 50,
    width: 250,
    marginLeft: 80,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 4,
    marginTop: 10,
  },
});

export default HomeScreen;
