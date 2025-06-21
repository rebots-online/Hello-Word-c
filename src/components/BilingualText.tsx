import React from 'react';
import { Text, View } from 'react-native';
import { BilingualText as BText } from '../core/types/liturgical';

export default function BilingualText({ item }: { item: BText }) {
  const style = item.isRubric ? 'italic text-red-600' : '';
  return (
    <View className="mb-2">
      <Text className={`text-lg ${style}`}>{item.latin}</Text>
      <Text className={`text-sm text-gray-600 ${style}`}>{item.english}</Text>
    </View>
  );
}
