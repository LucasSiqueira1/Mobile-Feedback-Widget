import React from 'react';
import { View, TextInput, Image, Text, TouchableOpacity } from 'react-native';
import { ArrowLeft } from 'phosphor-react-native';

import { styles } from './styles';
import { FeedbackType } from '../../components/Widget'
import { feedbackTypes } from '../../utils/feedbackTypes';
import { theme } from '../../theme';


interface FeedbackFormProps {
  feedbackType: FeedbackType;
}

export function FeedbackForm({feedbackType}: FeedbackFormProps) {
  const feedbackInfo = feedbackTypes[feedbackType];
  return (
    <View style={styles.container}>

      <View style={styles.header}>
        <TouchableOpacity>
          <ArrowLeft size={24} weight="bold" color={theme.colors.text_secondary} />
        </TouchableOpacity>

        <View style={styles.titleContainer}>
          <Image source={feedbackInfo.image} style={styles.image}/>
          <Text style={styles.titleText}>
            {feedbackInfo.title}
          </Text>
        </View>
      </View>
    </View>
  );
}