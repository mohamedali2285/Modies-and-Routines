import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { PlusCircle, Clock, MapPin, Bell, Volume2, Wifi, Bluetooth } from 'lucide-react-native';

export default function CreateModeScreen() {
  const [modeName, setModeName] = useState('');
  const [conditions, setConditions] = useState([]);
  const [actions, setActions] = useState([]);

  const addCondition = (type) => {
    // In a real app, this would open a modal/screen to configure the condition
    setConditions([...conditions, { id: Date.now(), type, description: `Configure ${type}` }]);
  };

  const addAction = (type) => {
     // In a real app, this would open a modal/screen to configure the action
    setActions([...actions, { id: Date.now(), type, description: `Configure ${type}` }]);
  };

  const saveMode = () => {
    // Logic to save the mode
    console.log('Saving Mode:', { modeName, conditions, actions });
    // In a real app, navigate back or show success message
  };

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
      <Text style={styles.header}>Create New Mode</Text>

      <Text style={styles.label}>Mode Name</Text>
      <TextInput
        style={styles.input}
        value={modeName}
        onChangeText={setModeName}
        placeholder="e.g., Sleep Mode, Work Mode"
      />

      <Text style={styles.label}>Conditions (When to activate)</Text>
      {conditions.map((condition) => (
        <View key={condition.id} style={styles.itemContainer}>
           {renderConditionItem({ item: condition })}
        </View>
      ))}
      <TouchableOpacity style={styles.addButton} onPress={() => addCondition('Time')}>
        <PlusCircle size={20} color="#6200EE" />
        <Text style={styles.addButtonText}>Add Time Condition</Text>
      </TouchableOpacity>
       <TouchableOpacity style={styles.addButton} onPress={() => addCondition('Location')}>
        <PlusCircle size={20} color="#6200EE" />
        <Text style={styles.addButtonText}>Add Location Condition</Text>
      </TouchableOpacity>
       {/* Add more condition types here */}


      <Text style={styles.label}>Actions (What to do)</Text>
       {actions.map((action) => (
        <View key={action.id} style={styles.itemContainer}>
           {renderActionItem({ item: action })}
        </View>
      ))}
      <TouchableOpacity style={styles.addButton} onPress={() => addAction('Notifications')}>
        <PlusCircle size={20} color="#6200EE" />
        <Text style={styles.addButtonText}>Add Notification Action</Text>
      </TouchableOpacity>
       <TouchableOpacity style={styles.addButton} onPress={() => addAction('Sound')}>
        <PlusCircle size={20} color="#6200EE" />
        <Text style={styles.addButtonText}>Add Sound Action</Text>
      </TouchableOpacity>
       <TouchableOpacity style={styles.addButton} onPress={() => addAction('WiFi')}>
        <PlusCircle size={20} color="#6200EE" />
        <Text style={styles.addButtonText}>Add WiFi Action (Limited)</Text>
      </TouchableOpacity>
       <TouchableOpacity style={styles.addButton} onPress={() => addAction('Bluetooth')}>
        <PlusCircle size={20} color="#6200EE" />
        <Text style={styles.addButtonText}>Add Bluetooth Action (Limited)</Text>
      </TouchableOpacity>
      {/* Add more action types here */}
       <Text style={styles.limitationText}>
        Note: Direct control over system settings like WiFi/Bluetooth is limited for third-party apps.
      </Text>


      <TouchableOpacity style={styles.saveButton} onPress={saveMode}>
        <Text style={styles.saveButtonText}>Save Mode</Text>
      </TouchableOpacity>

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
    marginBottom: 20,
    color: '#333',
  },
  label: {
    fontSize: 18,
    fontWeight: '600',
    marginTop: 15,
    marginBottom: 8,
    color: '#333',
  },
  input: {
    backgroundColor: '#fff',
    padding: 12,
    borderRadius: 8,
    fontSize: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
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
  addButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#e0e0e0',
    padding: 12,
    borderRadius: 8,
    marginTop: 8,
  },
  addButtonText: {
    fontSize: 16,
    marginLeft: 10,
    color: '#333',
  },
  saveButton: {
    backgroundColor: '#6200EE',
    paddingVertical: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 30,
  },
  saveButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  limitationText: {
    fontSize: 12,
    color: '#888',
    marginTop: 5,
    textAlign: 'center',
  }
});
