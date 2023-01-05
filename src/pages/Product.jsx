import { Add, Remove } from "@material-ui/icons"
import styled from "styled-components"
import Announcement from "../components/Announcement"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import Newsletter from "../components/Newsletter"
import { mobile } from "../responsive"

const Container = styled.div``
const Wrapper = styled.div`
padding: 50px;
display: flex;
${mobile({padding:"10px",flexDirection :"column"})}

`

const ImgContainer = styled.div`
flex: 1

`;

const Image = styled.img`
width: 100%;
height: 90vh;
object-fit: cover;
${mobile({height:"40vh"})}

`
const InfoContainer = styled.div`
flex: 1;
padding: 0px 50px;
/* ${mobile({width:"10px"})} */

`
const Title= styled.h1`
font-weight: 300;
`
const Desc = styled.p`
margin: 30px 0px;
${mobile({margin:"0px"})}

`
const Price = styled.span`
font-weight: 100;
font-size: 35px
`
const FilterContainer = styled.div`
width: 50%;
margin: 30px 0px;
display: flex;
justify-content: space-between;
 ${mobile({width:"100%"})}


`
const Filter = styled.div`
display: flex;
align-items: center;
`
const FilterTitle = styled.span`
font-size: 20px;
font-weight: 200;
`



const FilterColor = styled.div`
width: 20px;
height: 20px;
border-radius: 50%;
background-color: ${props=>props.color};
margin: 0px 5px;
`
const FilterSize = styled.select`
margin-left: 10px;
padding: 5px;
`
const FilterSizeOption = styled.option``;

const AddContainer = styled.div`
width: 50%;
display: flex;
align-items: center;
justify-content: space-between;
${mobile({width:"100%"})}


`;
const AmountContainer = styled.div`
display: flex;
align-items: center;
font-weight: 700;
`;
const Amount= styled.span`
width: 30px;
height: 30px;
border-radius: 10px;
border: 1px solid teal;
display: flex;
align-items: center;
justify-content: center;
margin: 0px 5px;
`;
const Button= styled.button`
padding: 15px;
border: 1px solid teal;
background-color: white;
cursor: pointer;
font-weight: 500;

&:hover{
  background-color: #6994b9;
}

`;


const Product = () => {
  return (
    <Container>
      <Navbar/>
      <Announcement/>
      <Wrapper>
        <ImgContainer>
        <Image src="https://cdn.shopify.com/s/files/1/1431/0846/products/MAN0003_2400x.jpg?v=1591016125"/>
        </ImgContainer>
        <InfoContainer>
            <Title>MARVEL NOTEBOOK</Title>
            <Desc> Ashoka Paper Converts Private Limited can provide these services for schools, colleges & other educational institutions. Furthermore, we can use center stapling or perfect binding for school note books, school guide, school magazines as per the client requirements</Desc>
            <Price>120 Rs.</Price>
            <FilterContainer>
            <Filter>
            <FilterTitle>Quantity</FilterTitle>
            
            <FilterColor quantity = "6"/>
            <FilterColor quantity = "12"/>
            <FilterColor quantity = "18"/>
            <FilterColor quantity = "24"/>
            <FilterColor quantity = "30"/>
            <FilterColor quantity = "Bulk"/>
            
            </Filter>

            <Filter>
            <FilterTitle>pages</FilterTitle>
            <FilterSize>
            <FilterSizeOption>120</FilterSizeOption> 
            <FilterSizeOption>180</FilterSizeOption> 
            <FilterSizeOption>220</FilterSizeOption> 
            <FilterSizeOption>240</FilterSizeOption> 
            <FilterSizeOption>280</FilterSizeOption> 
            <FilterSizeOption>300</FilterSizeOption> 
            </FilterSize>
            </Filter>
            </FilterContainer>
           <AddContainer>
           <AmountContainer>
           <Remove/>
           <Amount>1</Amount>
           <Add/>
           </AmountContainer>
           <Button>ADD TO CART</Button>
           </AddContainer>

        </InfoContainer>
      </Wrapper>
      <Newsletter/>
      <Footer/>
    </Container>
  )
}

export default Product
