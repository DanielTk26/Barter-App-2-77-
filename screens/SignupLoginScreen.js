import * as React from "react";
import {StyleSheet,View,Text,TextInput,TouchableOpacity,Keyboard,KeyboardAvoidingView,Platform,Alert,TouchableWithoutFeedback} from "react-native";

import firebase from "firebase";
import db from "../config";
import SharingIcon from "../components/SharingIcon";

export default class SignupLoginScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
    };
  }

        userLogin = async (email, password) => {
          if (email && password) {
            firebase
              .auth()
              .signInWithEmailAndPassword(email, password)
              .then(() => {
          return Alert.alert("User Login Successful!");
        })
        .catch((error) => {
          var errorCode = error.code;
          var errorMessage = error.message;
          return Alert.alert(errorCode + " - " + errorMessage);
        });
    } else {
      Alert.alert("Please enter a valid EmailId and password");
    }
  };

  userSignUp = async (email, password) => {
    if (email && password) {
      firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .then(() => {
          return Alert.alert("Account successfully Signed Up!");
        })
        .catch((error) => {
          var errorCode = error.code;
          var errorMessage = error.message;
          return Alert.alert(errorCode + " - " + errorMessage);
        });
    } else {
      Alert.alert("Please enter email id and password!");
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.profileContainer}>
          <SharingIcon />
          <Text style={styles.title}>Barter System</Text>
        </View>
        <TouchableWithoutFeedback
          onPress={() => {
            Keyboard.dismiss();
          }}
        >
          <KeyboardAvoidingView
            style={{ justifyContent: "center", alignItems: "center" }}
            behavior={Platform.OS === "ios" ? "padding" : "height"}
          >
            <TextInput
              style={styles.loginBox}
              keyboardType="email-address"
              placeholder="abc@example.com"
              onChangeText={(text) => {
                this.setState({ email: text });
              }}
            />
            <TextInput
              style={styles.loginBox}
              secureTextEntry={true}
              placeholder="enter password"
              onChangeText={(text) => {
                this.setState({ password: text });
              }}
            />
            <TouchableOpacity
              style={styles.buttonContainer}
              onPress={() => {
                this.userLogin(this.state.email, this.state.password);
              }}
            >
              <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.buttonContainer}
              onPress={() => {
                this.userSignUp(this.state.email, this.state.password);
              }}
            >
              <Text style={styles.buttonText}>Sign Up</Text>
            </TouchableOpacity>
          </KeyboardAvoidingView>
        </TouchableWithoutFeedback>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "lightblue",
  },
  profileContainer: {
    marginTop: 30,
    justifyContent: "center",
    alignItems: "center",
        },
        title: {
          margin: 10,
          textAlign: "center",
          fontSize: 38,
          fontWeight: "bold",
          color: "purple",
        },
        loginBox: {
          width: 300,
          height: 50,
          borderWidth: 2.5,
          margin: 10,
          paddingLeft: 10,
        },
        buttonContainer: {
          marginTop: 10,
          width: 100,
          height: 50,
          justifyContent: "center",
          alignItems: "center",
          borderRadius: 15,
          borderWidth: 2.5,
          backgroundColor: "red",
        },
        buttonText: {
          textAlign: "center",
          fontSize: 20,
          color: "white",
          fontWeight: "bold",
        },
      });
