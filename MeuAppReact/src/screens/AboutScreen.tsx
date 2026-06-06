import React from 'react';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';

export default function AboutScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Sobre o Aplicativo</Text>
      <Text style={styles.text}>
      </Text>
      
      <Text style={styles.subtitle}>Integrantes do Grupo:</Text>
      <View style={styles.list}>
        <Text style={styles.listItem}>- Luiz Miguel</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#fff', alignItems: 'center' },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 15 },
  subtitle: { fontSize: 18, fontWeight: 'bold', marginTop: 20, marginBottom: 10 },
  text: { fontSize: 16, textAlign: 'center', color: '#555' },
  list: { alignSelf: 'flex-start', marginLeft: 20 },
  listItem: { fontSize: 16, marginTop: 5 }
});