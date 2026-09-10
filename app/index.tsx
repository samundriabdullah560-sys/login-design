import {
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export default function index() {
  return (
    <View>
      <View style={styles.container}></View>
      
            <View style={styles.container4}>
              <View
                style={{
                  width: 17,
                  height: 15,
                  borderRadius: 3,
                  borderColor: "black",
                  borderWidth: 0.5,
                  alignSelf: "center",
                }}
              ></View>

              <TouchableOpacity>
                <Text style={styles.heading4}>Remember me</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.button}>
                <Text style={styles.heading3}>Forget Password?</Text>
              </TouchableOpacity>
            </View>
            <TouchableOpacity>
              <View style={styles.container5}>
                <Text style={styles.heading5}>Login</Text>
              </View>
            </TouchableOpacity>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                gap: 13,
              }}
            >
              <View
                style={{
                  width: "35%",
                  height: 2,
                  justifyContent: "center",
                  backgroundColor: "white",
                }}
              ></View>
              <Text
                style={{
                  color: "grey",
                  fontSize: 10,
                  justifyContent: "center",
                }}
              >
                Or Login with
              </Text>
              <View
                style={{
                  width: "35%",
                  height: 2,
                  justifyContent: "center",
                  backgroundColor: "white",
                }}
              ></View>
            </View>
            <View style={{ flexDirection: "row", gap: 15 }}>
              <TouchableOpacity>
                <View
                  style={{
                    width: 62,
                    height: 50,
                    backgroundColor: "white",
                    borderRadius: 10,
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Image source={require("../assets/images/google.png")} />
                </View>
              </TouchableOpacity>
              <TouchableOpacity>
                <View
                  style={{
                    width: 62,
                    height: 50,
                    backgroundColor: "white",
                    borderRadius: 10,
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Image source={require("../assets/images/facebook1.png")} />
                </View>
              </TouchableOpacity>
              <TouchableOpacity>
                <View
                  style={{
                    width: 62,
                    height: 50,
                    backgroundColor: "white",
                    borderRadius: 10,
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Image source={require("../assets/images/apple.png")} />
                </View>
              </TouchableOpacity>
              <TouchableOpacity>
                <View
                  style={{
                    width: 62,
                    height: 50,
                    backgroundColor: "white",
                    borderRadius: 10,
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Image source={require("../assets/images/mobile.png")} />
                </View>
              </TouchableOpacity>
            </View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "center",
                gap: 10,
              }}
            >
              <Text>Don’t have an account?</Text>
              <TouchableOpacity>
                <Text style={{ color: "blue" }}>Sign up</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  container2: {
    width: 350,
    height: 600,
    backgroundColor: "rgba(255, 255, 255, 0.6)",

    alignItems: "center",
    borderRadius: 20,
    gap: 20,
  },
  heading: {
    fontSize: 32,
    fontWeight: "bold",
    color: "black",
  },
  heading2: {
    color: "grey",
  },
  container3: {
    width: 300,
    height: 50,
    backgroundColor: "white",
    borderRadius: 10,
    gap: 20,
  },
  input: {
    alignContent: "center",
    padding: 15,
  },
  heading3: {
    color: "rgba(77, 129, 231, 1)",
  },
  button: {
    flexDirection: "row",
  },
  heading4: {
    alignItems: "center",
    paddingRight: 55,
    color: "grey",
  },
  container4: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  container5: {
    width: 300,
    height: 50,
    backgroundColor: "rgba(29, 97, 231, 1)",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  heading5: {
    fontSize: 20,
    color: "white",
  },
});
