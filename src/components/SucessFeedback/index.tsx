import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';

import { styles } from './styles';
import sucessImg from '../../assets/sucess.png';
import { CopyrightRodape } from '../CopyrightRodape';

export function SucessFeedback() {
  return (
    <View style={styles.container}>
      <Image source={sucessImg} style={styles.image}/>
      <Text style={styles.title}>Agradeçemos o feedback</Text>
      
      <TouchableOpacity style={styles.touch}>
        <Text style={styles.buttonTitle}>Quero enviar outro</Text>
      </TouchableOpacity>

      <CopyrightRodape />
    </View>
  );
}