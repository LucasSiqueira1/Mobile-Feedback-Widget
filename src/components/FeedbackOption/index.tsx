import React from 'react';
import { View, TouchableOpacity, TouchableOpacityProps, Image, ImageProps, Text } from 'react-native';

import { styles } from './styles';

interface FeedbackOptionProps extends TouchableOpacityProps {
  title: string;
  image: ImageProps;
}

export function FeedbackOption({ title, image, ...rest }: FeedbackOptionProps) {
  return (
    <TouchableOpacity style={styles.container} {...rest}>
      <Image source={image} style={styles.image} />
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
}