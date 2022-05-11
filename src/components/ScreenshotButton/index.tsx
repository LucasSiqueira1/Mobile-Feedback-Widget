import React from 'react';
import { View, TouchableOpacity, Image } from 'react-native';

import { styles } from './styles';

interface ScreenshotButtonProps {
  screenshot: string | null;
  onTakenShot: () => void;
  onRemoveShot: () => void;
}

export function ScreenshotButton({ screenshot }: ScreenshotButtonProps) {
  return (
    <TouchableOpacity style={styles.container}>

    </TouchableOpacity>
  );
}