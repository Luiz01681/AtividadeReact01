import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, SafeAreaView, Alert } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList, Movie } from '../types';

type Props = NativeStackScreenProps<RootStackParamList, 'Add'>;

export default function AddScreen({ navigation }: Props) {
  const [title, setTitle] = useState<string>('');
  const [description, setDescription] = useState<string>('');

  const handleSave = () => {
    if (title.trim() === '' || description.trim() === '') {
      Alert.alert('Erro', 'Preencha todos os campos!');
      return;
    }

    const newMovie: Movie = {
      id: Math.random().toString(),
      title,
      description,
      watched: false,
    };

    navigation.navigate('Home', { newMovie });
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.label}>Título do Filme/Série:</Text>
      <TextInput
        style={styles.input}
        placeholder="Ex: Vingadores"
        value={title}
        onChangeText={setTitle}
      />

      <Text style={styles.label}>Descrição/Sinopse:</Text>
      <TextInput
        style={[styles.input, styles.textArea]}
        placeholder="Do que se trata?"
        value={description}
        onChangeText={setDescription}
        multiline
      />

      <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
        <Text style={styles.saveButtonText}>Salvar na Lista</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#fff' },
  label: { fontSize: 16, fontWeight: 'bold', marginBottom: 5 },
  input: { borderWidth: 1, borderColor: '#ccc', borderRadius: 8, padding: 10, marginBottom: 20, fontSize: 16 },
  textArea: { height: 100, textAlignVertical: 'top' },
  saveButton: { backgroundColor: '#007BFF', padding: 15, borderRadius: 8, alignItems: 'center' },
  saveButtonText: { color: '#fff', fontSize: 16, fontWeight: 'bold' }
});