import React from 'react';
import { TextInputProps, TextInput } from 'react-native';

export interface InputProps extends TextInputProps {
  inputRef?: React.RefObject<TextInput>;
}
