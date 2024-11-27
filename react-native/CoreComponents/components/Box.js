import { View, Text, StyleSheet, StatusBar } from 'react-native';

export default function Box() {
    return (
        <View style={[styles.box, style]}>
            <Text style={styles.text}>{children}</Text>
        </View>
    );
}
    const styles = StyleSheet.create({
        box: {
            backgroundColor: "#fff",
            padding: 20,
        },
        text: {
            fontSize: 24,
            fontWeight: "bold",
            textAlign: "center",
        },
    });
