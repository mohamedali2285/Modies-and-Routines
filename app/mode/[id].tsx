import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { useLocalSearchParams, Stack } from 'expo-router';
import { Clock, MapPin, Bell, Volume2, Wifi, Bluetooth, Edit, Trash2 } from 'lucide-react-native';

// Placeholder data for a single mode (in a real app, fetch this by ID)
const modeDetails = {
  id: '1',
  name: 'Sleep Mode',
  description: 'Quiet time, no notifications',
  conditions: [
    { id: 1, type: 'Time', description: 'From 10:00 PM to 7:00 AM' },
    { id: 2, type: 'Location', description: 'When at Home (Placeholder)' },
  ],
  actions: [
    { id: 1, type: 'Notifications', description: 'Silence all notifications' },
    { id: 2, type: 'Sound', description: 'Set volume to 0' },
    { id: 3, type: 'WiFi', description: 'Turn WiFi off (Limited)' },
  ],
};

export default function ModeDetailScreen() {
  const { id } = useLocalSearchParams();
  // In a real app, fetch mode data based on 'id'

  // Using placeholder data for now
  const mode = modeDetails; // Assume modeDetails is fetched based on id

  if (!mode) {
    return (
      <View style={styles.container}>
        <Text style={styles.header}>Mode Not Found</Text>
      </View>
    );
  }

  const renderConditionItem = ({ item }) => (
    <View style={styles.item}>
      {item.type === 'Time' && <Clock size={20} color="#333" />}
      {item.type === 'Location' && <MapPin size={20} color="#333" />}
      <Text style={styles.itemText}>{item.description}</Text>
    </View>
  );

   const renderActionItem = ({ item }) => (
    <View style={styles.item}>
      {item.type === 'Notifications' && <Bell size={20} color="#333" />}
      {item.type === 'Sound' && <Volume2 size={20} color="#333" />}
      {item.type === 'WiFi' && <Wifi size={20} color="#333" />}
      {item.type === 'Bluetooth' && <Bluetooth size={20} color="#333" />}
      <Text style={styles.itemText}>{item.description}</Text>
    </View>
  );


  return (
    <ScrollView style={styles.container}>
      <Stack.Screen options={{ title: mode.name }} />

      <Text style={styles.header}>{mode.name}</Text>
      <Text style={styles.description}>{mode.description}</Text>

      <Text style={styles.sectionHeader}>Conditions</Text>
      {mode.conditions.map((condition) => (
         <View key={condition.id} style={styles.itemContainer}>
            {renderConditionItem({ item: condition })}
         </View>
      ))}

      <Text style={styles.sectionHeader}>Actions</Text>
       {mode.actions.map((action) => (
         <View key={action.id} style={styles.itemContainer}>
            {renderActionItem({ item: action })}
         </View>
      ))}

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={[styles.button, styles.editButton]}>
          <Edit size={20} color="#fff" style={{ marginRight: 5 }} />
          <Text style={styles.buttonText}>Edit Mode</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, styles.deleteButton]}>
           <Trash2 size={20} color="#fff" style={{ marginRight: 5 }} />
          <Text style={styles.buttonText}>Delete Mode</Text>
        </TouchableOpacity>
      </View>

       <View style={{ height: 50 }} /> {/* Spacer */}
    </ScrollView>
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
    marginBottom: 10,
    color: '#333',
  },
  description: {
    fontSize: 16,
    color: '#666',
    marginBottom: 20,
  },
  sectionHeader: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 10,
    color: '#333',
  },
   itemContainer: {
    backgroundColor: '#fff',
    padding: 12,
    borderRadius: 8,
    marginBottom: 8,
    flexDirection: 'row',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
   item: {
     flexDirection: 'row',
     alignItems: 'center',
  },
  itemText: {
    fontSize: 16,
    marginLeft: 10,
    color: '#333',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 30,
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
  },
  editButton: {
    backgroundColor: '#6200EE',
  },
  deleteButton: {
    backgroundColor: '#d32f2f', // Example error color
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
