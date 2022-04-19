import styled from "styled-components/native";

export type DoctorProps = {
  type: 'primary' | 'secondary';
}

export const Container = styled.TouchableOpacity.attrs({
  activeOpacity:0.5
})<DoctorProps>`
  width: 200px;

  padding:22px;
  border-radius:7px;
  background-color: ${({theme, type})=> type ===  'primary' ? 'red' : 'green'};

  align-items: center;
  justify-content: center;
`;

export const Avatar = styled.Image`
  height:80px;
  width:80px;
`;

export const Name = styled.Text`
  margin-top: 7px;
  font-size: 16px;
  color: ${({theme})=>theme.COLORS.TEXT_PRIMARY};
`;

export const Specialist = styled.Text`
  font-size: 12px;
  color: ${({theme})=>theme.COLORS.TEXT_PRIMARY};
`;