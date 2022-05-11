import React from 'react';
import { View, Text, TouchableOpacity, TouchableOpacityProps, ActivityIndicator } from 'react-native';
import { theme } from '../../theme';

import { styles } from './styles';

interface ButtonSendFeedbackprops extends TouchableOpacityProps {
  isLoading: boolean;
}


export function ButtonSendFeedback({ isLoading, ...rest }: ButtonSendFeedbackprops) {
  return (
    <TouchableOpacity style={styles.container}>
      {
        isLoading ?
          <ActivityIndicator color={theme.colors.text_on_brand_color} />
          :
          <Text style={styles.title}>Enviar Feedback</Text>
      }
    </TouchableOpacity>
  );
}