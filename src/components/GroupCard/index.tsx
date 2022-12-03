import { GroupCardProps } from './GroupCardProps';
import * as Styled from './styles';

export const GroupCard = ({ title, ...rest }: GroupCardProps) => {
  return (
    <Styled.Container {...rest}>
      <Styled.Icon />
      <Styled.Title>{title}</Styled.Title>
    </Styled.Container>
  );
};
