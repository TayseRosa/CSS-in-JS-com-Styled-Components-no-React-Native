import {
  Container,
  Avatar,
  Name,
  Specialist,
  DoctorProps
} from './style';

export function Doctor({type}: DoctorProps){
  return(
    <Container type={type}>
      <Avatar 
        source={{uri:"https://github.com/tayserosa.png"}} 
      />

      <Name>
        Tayse Rosa
      </Name>

      <Specialist>
        Developer React Native
      </Specialist>
    </Container>
  )
}