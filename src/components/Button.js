import { Text, TouchableOpacity,StyleSheet } from "react-native";

export default function Button({ title, onPress, customStyles }) {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.button, customStyles]}>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
    button:{
        borderRadius: 30,
        width: 165,
        height: 45, 
        backgroundColor: "#FFE600",
        justifyContent: 'center',
        alignItems: 'center'
    },
    title : {
        fontSize: 16
    }
})