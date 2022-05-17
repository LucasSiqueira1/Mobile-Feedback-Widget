import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';

import { styles } from './styles';
import successImg from '../../assets/success.png';
import { CopyrightRodape } from '../CopyrightRodape';

interface SucessFeedbackProps {
  otherFeedback: () => void;
}


export function SucessFeedback({ otherFeedback }: SucessFeedbackProps) {
  return (
    <View style={styles.container}>
      <Image source={successImg} style={styles.image} />
      <Text style={styles.title}>Agradeçemos o feedback</Text>

      <TouchableOpacity style={styles.touch} onPress={() => otherFeedback()}>
        <Text style={styles.buttonTitle}>Quero enviar outro</Text>
      </TouchableOpacity>

      <CopyrightRodape />
    </View>
  );
}