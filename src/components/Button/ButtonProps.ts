import { TouchableOpacityProps } from 'react-native';

export type ButtonTypesStyleProps = 'PRIMARY' | 'SECONDARY';

export interface Props {
  type: ButtonTypesStyleProps;
}

export interface ButtonProps extends TouchableOpacityProps {
  title: string;
  type?: ButtonTypesStyleProps;
}
