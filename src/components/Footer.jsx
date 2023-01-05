
import { AddLocation, Email, Facebook, Instagram, LinkedIn, Phone, Pinterest } from '@material-ui/icons'
import styled from 'styled-components'
import { mobile } from '../responsive';

const Container = styled.div`
display: flex;
background-color: #1ea1a1;
${mobile({flexDirection:"column"})}



`;
const Left = styled.div`
flex: 1;
display: flex;
flex-direction: column;
padding: 20px;

`;
const Logo = styled.h1``
const Desc = styled.p`
margin: 20px 0px;
`
const SocialContainer = styled.div`
display: flex;

`
const SocialIcon = styled.h1`
width: 40px;
height: 40px;
border-radius: 50%;
color: #f7f5f5;
background-color: #${props=>props.color};
display: flex;
align-items: center;
justify-content: center;
margin-right: 20px;
`

const Center = styled.div`
flex: 1;
padding: 20px;
${mobile({display:"none"})}

`;

const Title = styled.h3`
margin-top: 25px;
    margin-bottom: 10px;
    font-size: 30px

`

const List = styled.ul`
 margin: 0;
 padding: 0 ;
 list-style: none;
 display: flex;
 flex-wrap: wrap;
`;


const ListItem = styled.li`
width: 50%;
/* padding: 2px; */
`


const Right = styled.div`
flex: 1;
padding: 20px;
${mobile({backgroundColor:"lightgray"})}


`;
const ContactItem = styled.div`
margin-bottom: 20px;
display: flex;
align-items: center;

`;

const Payment = styled.img`
 width: 500%;
`

const Footer = () => {
  return (
    <Container>
      <Left>

        <Logo>APC.</Logo>
        <Desc>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt, obcaecati maiores? Sed ipsa error nisi repellendus quis illo quam harum esse! Quaerat corrupti maiores, velit a blanditiis harum dolorem, ad quidem repellat, itaque et.
        </Desc>

    <SocialContainer>
        <SocialIcon  color= "385999">
            <Facebook/>
        </SocialIcon>
        <SocialIcon  color= "E4405F">
            <Instagram/>
        </SocialIcon>
        <SocialIcon   color = "385999 ">
            <LinkedIn/>
        </SocialIcon>
        <SocialIcon   color = "E60023">
            <Pinterest/>
        </SocialIcon>
       
    </SocialContainer>
      </Left>
      <Center>
        <Title>Useful Links</Title>
        <List>
            <ListItem>Home</ListItem>
            <ListItem>Cart</ListItem>
            <ListItem>Products</ListItem>
            <ListItem>Order Tracking</ListItem>
            <ListItem>Wishlist</ListItem>
            <ListItem>My Account</ListItem>
        </List>
      </Center>
      <Right>
        <Title>Contact </Title>
        <ContactItem>
          <AddLocation style={{marginRight:"10px"}}/>118 ext east , Subhash Nagar Choti Pulia
        </ContactItem>
        <ContactItem>
          <Phone style={{marginRight:"10px"}}/>+9414114479
        </ContactItem>
        <ContactItem>
          <Email style={{marginRight:"10px"}}/>contact@ashokapaperconverts.com
        </ContactItem>
        <Payment src = ""/>

      </Right>
    </Container>
  )
}

export default Footer
