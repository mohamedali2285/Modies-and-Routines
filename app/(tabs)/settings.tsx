import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Bell, Info, Shield, Code } from 'lucide-react-native';

export default function SettingsScreen() {
  const settingsOptions = [
    { id: '1', name: 'Notification Settings', icon: <Bell size={20} color="#333" />, description: 'Manage app notifications' },
    { id: '2', name: 'Permissions', icon: <Shield size={20} color="#333" />, description: 'Review app permissions' },
    { id: '3', name: 'About', icon: <Info size={20} color="#333" />, description: 'App version and information' },
    { id: '4', name: 'Developer Options', icon: <Code size={20} color="#333" />, description: 'Advanced settings (placeholder)' },
  ];

  const handleSettingPress = (settingId) => {
    console.log(`Setting pressed: ${settingId}`);
    // In a real app, navigate to a specific settings screen
  };

  const renderSettingItem = ({ item }) => (
    <TouchableOpacity style={styles.settingItem} onPress={() => handleSettingPress(item.id)}>
      <View style={styles.settingIcon}>{item.icon}</View>
      <View style={styles.settingInfo}>
        <Text style={styles.settingName}>{item.name}</Text>
        <Text style={styles.settingDescription}>{item.description}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>App Settings</Text>
      {settingsOptions.map(item => (
         <View key={item.id} style={styles.itemContainer}>
            {renderSettingItem({ item })}
         </View>
      ))}
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
   itemContainer: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 8,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  settingItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  settingIcon: {
    marginRight: 15,
  },
  settingInfo: {
    flex: 1,
  },
  settingName: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
  },
  settingDescription: {
    fontSize: 14,
    color: '#666',
    marginTop: 4,
  },
});
