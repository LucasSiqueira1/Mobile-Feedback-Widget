import React, { useRef, useState } from 'react';
import { View, TouchableOpacity } from 'react-native';
import { ChatTeardropDots } from 'phosphor-react-native';
import BottomSheet from '@gorhom/bottom-sheet';


import { styles } from './styles';
import { theme } from '../../theme';
import { Options } from '../Options';
import { feedbackTypes } from '../../utils/feedbackTypes';
import { FeedbackForm } from '../FeedbackForm';
import { SucessFeedback } from '../SucessFeedback';

export type FeedbackType = keyof typeof feedbackTypes;

export function Widget() {
  const [feedbackType, setFeedbackType] = useState<FeedbackType | null>(null);
  const [feedbackSend, setFeedbackSend] = useState(false);

  const bottomSheetRef = useRef<BottomSheet>(null);

  const handleOpen = () => {
    bottomSheetRef.current?.expand();
  }

  const handleReturnFeedbkack = () => {
    setFeedbackType(null);
    setFeedbackSend(false);
  }

  const handleFeedbackSend = () => {
    setFeedbackSend(true);
  }


  return (
    <>
      <TouchableOpacity style={styles.button} onPress={handleOpen}>
        <ChatTeardropDots size={24} weight="bold" color={theme.colors.text_on_brand_color} />
      </TouchableOpacity>

      <BottomSheet ref={bottomSheetRef} snapPoints={[1, 280]} backgroundStyle={styles.modal} handleIndicatorStyle={styles.indicator}>
        {/* <Options /> */}
        {/* <FeedbackForm feedbackType='BUG'/>
        <SucessFeedback/> */}
        {feedbackSend ? <SucessFeedback />
          :
          <>
            {
              feedbackType ? <FeedbackForm feedbackType={feedbackType} returnFeedback={() => { handleReturnFeedbkack() }} isFeedbackSend={() => { handleFeedbackSend()}} />
                :
                <Options onFeedbackTypeChanged={setFeedbackType} />
            }
          </>
        }
      </BottomSheet>
    </>
  );
}