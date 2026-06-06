import React from 'react';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types';

type Props = NativeStackScreenProps<RootStackParamList, 'Details'>;

export default function DetailsScreen({ route }: Props) {
  const { movie } = route.params;

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>{movie.title}</Text>
      
      <View style={styles.statusContainer}>
        <Text style={styles.label}>Status Atual: </Text>
        <Text style={[styles.statusText, movie.watched ? styles.watched : styles.notWatched]}>
          {movie.watched ? 'Assistido' : 'Não assistido'}
        </Text>
      </View>

      <Text style={styles.label}>Sinopse:</Text>
      <Text style={styles.description}>{movie.description}</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#f9f9f9' },
  title: { fontSize: 26, fontWeight: 'bold', textAlign: 'center', marginBottom: 20 },
  statusContainer: { flexDirection: 'row', alignItems: 'center', marginBottom: 20 },
  label: { fontSize: 18, fontWeight: 'bold' },
  statusText: { fontSize: 18, fontWeight: 'bold' },
  watched: { color: 'green' },
  notWatched: { color: 'red' },
  description: { fontSize: 16, lineHeight: 24, marginTop: 10 }
});