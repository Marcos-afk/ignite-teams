import { FilterProps } from './FilterProps';
import * as Styled from './styles';

export const Filter = ({ text, isActive = false, ...rest }: FilterProps) => {
  return (
    <Styled.Container isActive={isActive} {...rest}>
      <Styled.Title>{text}</Styled.Title>
    </Styled.Container>
  );
};
