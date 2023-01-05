
import styled from "styled-components"
import { mobile } from "../responsive"

const Container = styled.div`
flex: 1;
margin:3px;
height: 70vh;
position: relative;

`
const Image = styled.img`
width: 100%;
height: 100%;
object-fit: cover
${mobile({height:"20vh"})}

`
const Info = styled.div`
position: absolute;
top: 0;
left: 0;
width: 100%;
height: 100%;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`
const Title = styled.h1`
 color: #eeeded;
 border: 1px solid pink;
 padding: 8px;
 background-color: #e4b0b8;
 opacity: 2px;
 border-radius: 2px;
 margin-top:240px
`
const Button = styled.button`
 border: 1px solid pink;
 padding: 8px;
 background-color: white;
 color: #ec9aa7;
 font-weight: 60px;
 margin-top:30px;
 border-radius: 2px;
 font-weight:600px
`


const CategoryItem = ({item}) => {
  return (
    <Container>
      <Image src = {item?.img}/>
      <Info>
        <Title> {item?.title}</Title>
        <Button>SHOP NOW</Button>
      </Info>
    </Container>
  )
}

export default CategoryItem
