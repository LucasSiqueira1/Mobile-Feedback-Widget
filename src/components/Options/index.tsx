import React from 'react';
import { View, Text } from 'react-native';

import { CopyrightRodape } from '../CopyrightRodape';
import { FeedbackOption } from '../FeedbackOption';
import { feedbackTypes } from '../../utils/feedbackTypes';
import { FeedbackType } from '../../components/Widget';
import { styles } from './styles';

interface OptionsProps {
  onFeedbackTypeChanged: (feedbackType: FeedbackType) => void;
}


export function Options({ onFeedbackTypeChanged }: OptionsProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Deixe seu feedback</Text>

      <View style={styles.options}>
        {
          Object.entries(feedbackTypes).map(([key, value]) => (
            <FeedbackOption key={key} title={value.title} image={value.image} onPress={() => {onFeedbackTypeChanged(key as FeedbackType)}}/>
          ))
        }
      </View>
      <CopyrightRodape />
    </View>
  );
}