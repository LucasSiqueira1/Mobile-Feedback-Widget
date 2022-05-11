import { Camera, Trash } from 'phosphor-react-native';
import React from 'react';
import { View, TouchableOpacity, Image } from 'react-native';
import { theme } from '../../theme';

import { styles } from './styles';

interface ScreenshotButtonProps {
  screenshot: string | null;
  onTakenShot: () => void;
  onRemoveShot: () => void;
}

export function ScreenshotButton({ screenshot, onTakenShot, onRemoveShot }: ScreenshotButtonProps) {
  return (
    <TouchableOpacity style={styles.container} onPress={screenshot ? onRemoveShot : onTakenShot}>
      {
        screenshot ? <Trash size={22} weight="fill" color={theme.colors.text_secondary} style={styles.removeIcon} /> 
        :
          <Camera size={24} weight="bold" color={theme.colors.text_secondary} />
      }
    </TouchableOpacity>
  );
}