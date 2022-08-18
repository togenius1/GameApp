import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

import Colors from '../../constants/colors';

type Props = {
  children: React.ReactNode;
};

function InstructionText({children, style}: Props) {
  return <Text style={[styles.instructionText, style]}>{children}</Text>;
}

export default InstructionText;

const styles = StyleSheet.create({
  instructionText: {
    fontFamily: 'OpenSans-Regular',
    color: Colors.accent500,
    fontSize: 24,
  },
});
