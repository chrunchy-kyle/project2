import { router } from "expo-router";
import {
  Pressable,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomButton from "../../components/button";

export default function Login() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar hidden />

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        <View style={styles.shape1} />
        <View style={styles.shape3} />

        <Pressable onPress={() => router.replace("/register")}>
          <Text style={styles.back}>‹</Text>
        </Pressable>

        <Text style={styles.title}>Welcome back!</Text>
        <Text style={styles.subtitle}>We're so excited to see you again!</Text>

        <Text style={styles.label}>Email or Phone Number</Text>
        <TextInput
          style={styles.input}
          placeholder="Email or Phone Number"
          placeholderTextColor="#929298"
        />

        <Text style={[styles.label, { marginTop: 48 }]}>Password</Text>

        <View style={styles.passwordInput}>
          <TextInput
            style={styles.passwordText}
            secureTextEntry
            placeholder="Password"
            placeholderTextColor="#929298"
          />
          <Text style={styles.eye}>◉</Text>
        </View>

        <Text style={styles.link}>Forgot your password?</Text>
        <Text style={styles.link}>Use a password manager?</Text>

        <CustomButton
          title="Log In"
          onPress={() => router.replace("/home")}
          style={styles.loginButton}
        />

        <View style={styles.orRow}>
          <View style={styles.line} />
          <Text style={styles.orText}>OR</Text>
          <View style={styles.line} />
        </View>

        <CustomButton
          title="⚿ Log in with Passkey"
          variant="secondary"
          onPress={() => {}}
        />

        <CustomButton
          title="Register"
          variant="secondary"
          onPress={() => router.push("/register")}
          style={styles.registerButton}
        />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#202024",
    paddingHorizontal: 22,
  },
  scrollContent: {
    flexGrow: 1,
    paddingBottom: 30,
  },
  shape1: {
    position: "absolute",
    top: 110,
    left: -45,
    width: 180,
    height: 180,
    backgroundColor: "#242429",
    transform: [{ rotate: "45deg" }],
  },
  shape3: {
    position: "absolute",
    top: 630,
    right: -60,
    width: 170,
    height: 170,
    borderRadius: 100,
    backgroundColor: "#25252A",
  },
  back: {
    color: "#FFFFFF",
    fontSize: 55,
    height: 105,
    marginTop: 5,
  },
  title: {
    color: "#FFFFFF",
    fontSize: 29,
    fontWeight: "800",
    textAlign: "center",
    marginTop: 5,
  },
  subtitle: {
    color: "#F0F0F3",
    fontSize: 17,
    textAlign: "center",
    marginTop: 15,
    marginBottom: 65,
  },
  label: {
    color: "#B7B7BD",
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 14,
  },
  input: {
    height: 67,
    borderWidth: 1,
    borderColor: "#414147",
    borderRadius: 18,
    color: "#FFFFFF",
    paddingHorizontal: 15,
  },
  passwordInput: {
    height: 67,
    borderWidth: 1,
    borderColor: "#414147",
    borderRadius: 18,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
  },
  passwordText: {
    flex: 1,
    color: "#FFFFFF",
  },
  eye: {
    color: "#B7B7BD",
    fontSize: 23,
  },
  link: {
    color: "#65A9E8",
    fontSize: 15,
    marginTop: 18,
  },
  loginButton: {
    height: 68,
    borderRadius: 18,
    marginTop: 43,
  },
  orRow: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 25,
    gap: 12,
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: "#39393F",
  },
  orText: {
    color: "#B7B7BD",
    fontSize: 17,
  },
  registerButton: {
    height: 60,
    borderRadius: 18,
    marginTop: 18,
  },
});
