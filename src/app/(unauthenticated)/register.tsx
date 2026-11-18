import { router } from "expo-router";
import {
  Pressable,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomButton from "../../components/button";

export default function Register() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar hidden />

      <View style={styles.backgroundShape1} />
      <View style={styles.backgroundShape3} />

      <Pressable onPress={() => router.replace("/login")}>
        <Text style={styles.back}>‹</Text>
      </Pressable>

      <Text style={styles.title}>Enter phone or email</Text>

      <View style={styles.tabs}>
        <View style={styles.activeTab}>
          <Text style={styles.activeTabText}>Phone</Text>
        </View>

        <View style={styles.inactiveTab}>
          <Text style={styles.inactiveTabText}>Email</Text>
        </View>
      </View>

      <Text style={styles.label}>Phone Number</Text>

      <View style={styles.phoneInput}>
        <Text style={styles.country}>PH +63</Text>
        <View style={styles.separator} />
        <TextInput
          placeholder="Phone Number"
          placeholderTextColor="#929298"
          keyboardType="phone-pad"
          style={styles.input}
        />
      </View>

      <CustomButton title="Next" onPress={() => {}} style={styles.nextButton} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#202024",
    paddingHorizontal: 22,
  },
  backgroundShape1: {
    position: "absolute",
    top: 100,
    left: -45,
    width: 180,
    height: 180,
    backgroundColor: "#242429",
    transform: [{ rotate: "45deg" }],
  },
  backgroundShape3: {
    position: "absolute",
    top: 650,
    right: -70,
    width: 180,
    height: 180,
    borderRadius: 100,
    backgroundColor: "#25252A",
  },
  back: {
    color: "#FFFFFF",
    fontSize: 55,
    marginTop: 8,
    height: 85,
  },
  title: {
    color: "#FFFFFF",
    fontSize: 29,
    fontWeight: "800",
    textAlign: "center",
    marginTop: 10,
    marginBottom: 55,
  },
  tabs: {
    height: 64,
    borderRadius: 22,
    backgroundColor: "#303034",
    flexDirection: "row",
    padding: 5,
    marginBottom: 55,
  },
  activeTab: {
    flex: 1,
    backgroundColor: "#45454A",
    borderRadius: 17,
    alignItems: "center",
    justifyContent: "center",
  },
  inactiveTab: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  activeTabText: {
    color: "#FFFFFF",
    fontSize: 17,
    fontWeight: "600",
  },
  inactiveTabText: {
    color: "#929298",
    fontSize: 17,
    fontWeight: "600",
  },
  label: {
    color: "#B7B7BD",
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 13,
  },
  phoneInput: {
    height: 68,
    borderWidth: 1,
    borderColor: "#414147",
    borderRadius: 19,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 48,
  },
  country: {
    color: "#FFFFFF",
    fontSize: 17,
    paddingHorizontal: 18,
  },
  separator: {
    height: 48,
    width: 1,
    backgroundColor: "#66666C",
  },
  input: {
    flex: 1,
    color: "#FFFFFF",
    fontSize: 17,
    paddingHorizontal: 18,
  },
  nextButton: {
    height: 66,
    borderRadius: 18,
  },
});
