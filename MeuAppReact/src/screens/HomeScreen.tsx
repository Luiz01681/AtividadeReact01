import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, SafeAreaView } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList, Movie } from '../types';
import MovieCard from '../components/MovieCard';

type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;

export default function HomeScreen({ navigation, route }: Props) {
  const [movies, setMovies] = useState<Movie[]>([
    { id: '1', title: 'Breaking Bad', description: 'Professor de química vira produtor...', watched: true },
    { id: '2', title: 'Interstellar', description: 'Viagem pelo espaço e tempo...', watched: false },
  ]);

  useEffect(() => {
    if (route.params?.newMovie) {
      setMovies((prevMovies) => [...prevMovies, route.params!.newMovie!]);
      navigation.setParams({ newMovie: undefined });
    }
  }, [route.params?.newMovie]);

  const toggleStatus = (id: string) => {
    setMovies(movies.map(movie => 
      movie.id === id ? { ...movie, watched: !movie.watched } : movie
    ));
  };

  return (
    <SafeAreaView style={styles.container}>
      {movies.length === 0 ? (
        <Text style={styles.emptyText}>Nenhum filme ou série cadastrado ainda.</Text>
      ) : (
        <FlatList
          data={movies}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <MovieCard 
              movie={item} 
              onToggleStatus={toggleStatus}
              onPressDetails={(movieSelected) => navigation.navigate('Details', { movie: movieSelected })}
            />
          )}
        />
      )}

      <View style={styles.footer}>
        <TouchableOpacity style={styles.addButton} onPress={() => navigation.navigate('Add')}>
          <Text style={styles.buttonText}>+ Adicionar Novo</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.aboutButton} onPress={() => navigation.navigate('About')}>
          <Text style={styles.buttonText}>Sobre o App</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f5f5f5', padding: 15 },
  emptyText: { textAlign: 'center', fontSize: 16, marginTop: 50, color: '#555' },
  footer: { marginTop: 15, gap: 10 },
  addButton: { backgroundColor: '#28A745', padding: 15, borderRadius: 8, alignItems: 'center' },
  aboutButton: { backgroundColor: '#6c757d', padding: 15, borderRadius: 8, alignItems: 'center' },
  buttonText: { color: '#fff', fontSize: 16, fontWeight: 'bold' }
});