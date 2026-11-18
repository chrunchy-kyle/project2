import {
    StyleProp,
    StyleSheet,
    Text,
    TextInput,
    TextInputProps,
    View,
    ViewStyle,
} from "react-native";

type InputProps = TextInputProps & {
  label?: string;
  containerStyle?: StyleProp<ViewStyle>;
};

export default function CustomInput({
  label,
  containerStyle,
  ...inputProps
}: InputProps) {
  return (
    <View style={[styles.container, containerStyle]}>
      {label ? <Text style={styles.label}>{label}</Text> : null}

      <TextInput
        placeholderTextColor="#858894"
        style={styles.input}
        {...inputProps}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    marginBottom: 18,
  },
  label: {
    color: "#c4c4cc",
    fontSize: 14,
    fontWeight: "600",
    marginBottom: 10,
  },
  input: {
    height: 56,
    borderWidth: 1.5,
    borderColor: "#414249",
    borderRadius: 15,
    paddingHorizontal: 16,
    color: "#fff",
    fontSize: 15,
    backgroundColor: "#202126",
  },
});
