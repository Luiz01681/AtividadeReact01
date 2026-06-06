import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Movie } from '../types';

interface MovieCardProps {
  movie: Movie;
  onPressDetails: (movie: Movie) => void;
  onToggleStatus: (id: string) => void;
}

export default function MovieCard({ movie, onPressDetails, onToggleStatus }: MovieCardProps) {
  return (
    <View style={styles.card}>
      <View style={styles.infoContainer}>
        <Text style={styles.title}>{movie.title}</Text>
        <Text style={[styles.status, movie.watched ? styles.watched : styles.notWatched]}>
          {movie.watched ? '✅ Assistido' : '❌ Não assistido'}
        </Text>
      </View>

      <View style={styles.actions}>
        <TouchableOpacity style={styles.buttonAction} onPress={() => onToggleStatus(movie.id)}>
          <Text style={styles.buttonText}>Status</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.buttonDetails} onPress={() => onPressDetails(movie)}>
          <Text style={styles.buttonText}>Detalhes</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    padding: 15,
    marginVertical: 8,
    borderRadius: 8,
    elevation: 3,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  infoContainer: { flex: 1 },
  title: { fontSize: 18, fontWeight: 'bold' },
  status: { marginTop: 5, fontWeight: '600' },
  watched: { color: 'green' },
  notWatched: { color: 'red' },
  actions: { gap: 10 },
  buttonAction: { backgroundColor: '#FF8C00', padding: 8, borderRadius: 5, alignItems: 'center' },
  buttonDetails: { backgroundColor: '#007BFF', padding: 8, borderRadius: 5, alignItems: 'center' },
  buttonText: { color: '#fff', fontSize: 12, fontWeight: 'bold' }
});