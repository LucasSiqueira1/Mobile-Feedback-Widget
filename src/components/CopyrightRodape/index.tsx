import React from 'react';
import { View, Text } from 'react-native';

import { styles } from './styles';

export function CopyrightRodape() {
  return (
    <View>
      <Text style={styles.text}>Todos os direitos reservados</Text>
    </View>
  );
}