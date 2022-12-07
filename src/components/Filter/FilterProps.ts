import { TouchableOpacityProps } from 'react-native';

export type FilterStyleProps = {
  isActive?: boolean;
};

export interface FilterProps extends TouchableOpacityProps {
  isActive?: boolean;
  text: string;
}
