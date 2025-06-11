import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { ChevronRight, Settings } from 'lucide-react-native';
import { Link } from 'expo-router';

// Placeholder data for modes
const modes = [
  { id: '1', name: 'Sleep Mode', description: 'Quiet time, no notifications' },
  { id: '2', name: 'Work Mode', description: 'Focus time, silent notifications' },
  { id: '3', name: 'Driving Mode', description: 'Read messages aloud' },
  { id: '4', name: 'Exercise Mode', description: 'Play music, track activity' },
  { id: '5', name: 'Home Mode', description: 'Normal notifications, smart home control' },
];

export default function ModesScreen() {
  const renderModeItem = ({ item }) => (
    <Link href={{ pathname: '/mode/[id]', params: { id: item.id } }} asChild>
      <TouchableOpacity style={styles.modeItem}>
        <View style={styles.modeInfo}>
          <Text style={styles.modeName}>{item.name}</Text>
          <Text style={styles.modeDescription}>{item.description}</Text>
        </View>
        <ChevronRight size={20} color="#888" />
      </TouchableOpacity>
    </Link>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Your Modes</Text>
      {modes.length === 0 ? (
        <View style={styles.emptyState}>
          <Text style={styles.emptyText}>No modes created yet.</Text>
          <Link href="/create" asChild>
             <TouchableOpacity style={styles.createButton}>
                <Text style={styles.createButtonText}>Create New Mode</Text>
             </TouchableOpacity>
          </Link>
        </View>
      ) : (
        <FlatList
          data={modes}
          renderItem={renderModeItem}
          keyExtractor={(item) => item.id}
          contentContainerStyle={styles.listContent}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f4f4',
    padding: 16,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
  },
  listContent: {
    paddingBottom: 20,
  },
  modeItem: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 8,
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  modeInfo: {
    flex: 1,
    marginRight: 10,
  },
  modeName: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
  },
  modeDescription: {
    fontSize: 14,
    color: '#666',
    marginTop: 4,
  },
  emptyState: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyText: {
    fontSize: 18,
    color: '#666',
    marginBottom: 20,
  },
   createButton: {
    backgroundColor: '#6200EE',
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 25,
  },
  createButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
