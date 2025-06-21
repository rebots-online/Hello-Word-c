import React from 'react';
import { View, Text, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function HomeScreen() {
  const nav = useNavigation();
  const date = new Date().toDateString();
  return (
    <View className="p-4">
      <Text className="text-xl mb-4">{date}</Text>
      <Button title="Mass of the Day" onPress={() => nav.navigate('Mass' as never)} />
      <Button title="Lauds" onPress={() => nav.navigate('Office' as never)} />
    </View>
  );
}
