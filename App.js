import React, { Component } from "react";
import { View, Text, TouchableHighlight } from "react-native";
import { LoginManager } from "react-native-fbsdk";

class App extends Component {
  onFacebookClick = () => {
    console.log(LoginManager);
    LoginManager.logInWithPermissions(["public_profile"]).then(
      function(result) {
        if (result.isCancelled) {
          console.log("Login cancelled");
        } else {
          console.log(
            "Login success with permissions: " +
              result.grantedPermissions.toString()
          );
        }
      },
      function(error) {
        console.log("Login fail with error: " + error);
      }
    );
  };
  render() {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignSelf: "center" }}>
        <TouchableHighlight onPress={this.onFacebookClick}>
          <Text>Click Here</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

export default App;
