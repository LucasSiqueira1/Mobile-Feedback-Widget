import React, { useState } from 'react';
import { View, TextInput, Image, Text, TouchableOpacity } from 'react-native';
import { ArrowLeft } from 'phosphor-react-native';
import { captureScreen } from 'react-native-view-shot';

import { styles } from './styles';
import { theme } from '../../theme';
import { FeedbackType } from '../../components/Widget'
import { feedbackTypes } from '../../utils/feedbackTypes';
import { ScreenshotButton } from '../ScreenshotButton';
import { ButtonSendFeedback } from '../ButtonSendFeedback';
import { api } from '../../utils/api';


interface FeedbackFormProps {
  feedbackType: FeedbackType;
  returnFeedback: () => void;
  isFeedbackSend: () => void;
}

export function FeedbackForm({ feedbackType, returnFeedback, isFeedbackSend }: FeedbackFormProps) {
  const [screenShot, setScreenShot] = useState<string | null>(null);
  const [comment, setComment] = useState<string>('');
  const [feedbackSendButton, setFeedbackSendButton] = useState(false);

  const handleScreenshot = () => {
    captureScreen({
      format: 'jpg',
      quality: 0.8,

    })
      .then(uri => setScreenShot(uri))
      .catch(err => console.error('Oops, erro no screenshot', err));
  }

  const removeScreenShot = () => {
    setScreenShot(null);
  }

  const handleSendFeedback = async () => {
    if (feedbackSendButton) {
      return;
    } 
      setFeedbackSendButton(true);
    
      try {
        await api.post('/feedbacks', {
          type: feedbackType,
          screenShot,
          comment,
        })
      } catch (error) {
        console.log(error);
        setFeedbackSendButton(false);
      }
  }


  const feedbackInfo = feedbackTypes[feedbackType];
  return (
    <View style={styles.container}>

      <View style={styles.header}>
        <TouchableOpacity onPress={returnFeedback}>
          <ArrowLeft size={24} weight="bold" color={theme.colors.text_secondary} />
        </TouchableOpacity>

        <View style={styles.titleContainer}>
          <Image source={feedbackInfo.image} style={styles.image} />

          <Text style={styles.titleText}>
            {feedbackInfo.title}
          </Text>
        </View>
      </View>

      <TextInput onChangeText={setComment} multiline style={styles.input} placeholder="Algo não está funcionando bem? Queremos corrigir. Conte com detalhes o que está acontecendo..." placeholderTextColor={theme.colors.text_secondary}></TextInput>

      <View style={styles.footer}>
        <ScreenshotButton onTakenShot={() => { handleScreenshot() }} onRemoveShot={() => { removeScreenShot() }} screenshot={screenShot} />
        <ButtonSendFeedback isLoading={feedbackSendButton} onPress={() => { handleSendFeedback() }} />
      </View>
    </View>
  );
}