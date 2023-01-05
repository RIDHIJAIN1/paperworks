
import { Add, Remove } from '@material-ui/icons'
import styled from 'styled-components'
import Announcement from '../components/Announcement'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import { mobile } from '../responsive'

const Container = styled.div``
const Wrapper = styled.div`
padding: 20px;
`
const Title = styled.h1`
font-weight: 300;
text-align: center;

`
const Top = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
padding: 20px;
`;

const TopButton = styled.button`
  padding: 10px;
  font-weight: 600;
  cursor: pointer;
  border: ${props=>props.type ==="filled" && "none"};
  background-color: ${props=>props.type ==="filled" ? "black":"transparent"};
  color: ${props=>props.type ==="filled" && "white"};
`

const TopTexts = styled.div`
 ${mobile({display:"none"})}

`;

const TopText = styled.span`
 text-decoration: underline;
cursor: pointer;
margin: 0px 10px;


 `


const Bottom = styled.div`
display: flex;
justify-content: space-between;
${mobile({flexDirection:"column"})}

`
const Info = styled.div`
flex: 3;

`
const Product = styled.div`
display: flex;
justify-content: space-between;
${mobile({flexDirection:"column"})}



`;
const ProductDetail = styled.div`
flex: 2;
display: flex;

`
const Image = styled.img`
width: 250px;
${mobile({width:"200px"})}


`
const Details = styled.div`
padding: 20px;
display: flex;
flex-direction: column;
justify-content: space-around;
`
const ProductName = styled.span``
const ProductId = styled.span``
const ProductColor = styled.div`
width: 20px;
height: 20px;
border-radius: 50%;
background-color: ${props=>props.color};
`
const ProductPages = styled.span``
const PriceDetail = styled.span`
flex: 1;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`;

const ProductAmountContainer = styled.div`
display: flex;
align-items: center;
`;
const ProductAmount = styled.div`
font-size: 24px;
margin: 5px;
${mobile({margin:"5px 15px"})}

`;
const ProductPrice = styled.div`
font-size: 30px;
font-weight: 200;
${mobile({marginBottom:"20px",fontSize :"25px"})}

`;
const Hr = styled.hr`
/* background-color: #eee;
border: none; */
`

const Summary = styled.div`
flex: 1;
border: 0.5px solid lightgray;
border-radius: 10px;
padding: 20px;
height: 50vh;
`;

const SummaryTitle = styled.h1`
font-weight: 200;
`
const SummaryItem = styled.div`
margin: 30px 0px;
display: flex;
justify-content: space-between;
font-weight: ${props=>props.type === "total"&& "500"};
font-size: ${props=>props.type === "total"&& "10px"};


`
const SummaryItemText = styled.span``
const SummaryItemPrice = styled.span``
const Button = styled.button`
width: 100%;
padding: 10px;
background-color: black;
color: white;
font-weight: 500;
`


const Cart = () => {
  return (
    <Container>
        <Navbar/>
        <Announcement/>
        <Wrapper>
<Title>YOUR BAG</Title>
<Top>
<TopButton>CONTINUE SHOPPING</TopButton>
<TopTexts>
    <TopText>Shopping Bag(2)</TopText>
    <TopText>Your Wishlist(0)</TopText>
</TopTexts>
<TopButton type = "filled">CHECKOUT NOW</TopButton>

</Top>
<Bottom>
<Info>
  <Product>
    <ProductDetail>
<Image src="https://rlv.zcache.com/modern_stylish_teal_agate_gold_ribbon_on_white_notebook-r72ac0b9356df41f7905641947360ee5e_ev6wb_307.jpg?rlvnet=1"/>
<Details>
  <ProductName><b>Product: </b>PREMIUM NOTEBOOKS</ProductName>
  <ProductId><b>ID: </b>9381371829</ProductId>
  <ProductColor color = "teal"/>
  <ProductPages><b>Pages: </b>240</ProductPages>
</Details>
    </ProductDetail>
    <PriceDetail>
      <ProductAmountContainer>
        <Add/>
          <ProductAmount>2</ProductAmount>
        <Remove/>
      </ProductAmountContainer>
      <ProductPrice>Rs. 180</ProductPrice>
    </PriceDetail>
  </Product>
  <Hr/>
  <Product>
    <ProductDetail>
<Image src="https://i.pinimg.com/474x/71/37/10/713710b881092eb433918ed3cf070fae.jpg"/>
<Details>
  <ProductName><b>Product: </b>PREMIUM NOTEBOOKS</ProductName>
  <ProductId><b>ID: </b>9381371852</ProductId>
  <ProductColor color = "black"/>
  <ProductPages><b>Pages: </b>240</ProductPages>
</Details>
    </ProductDetail>
    <PriceDetail>
      <ProductAmountContainer>
        <Add/>
          <ProductAmount>2</ProductAmount>
        <Remove/>
      </ProductAmountContainer>
      <ProductPrice>Rs. 180</ProductPrice>
    </PriceDetail>
  </Product>
</Info>
<Summary>
  <SummaryTitle>ORDER SUMMARY</SummaryTitle>
  <SummaryItem>
    <SummaryItemText>Subtotal</SummaryItemText>
    <SummaryItemPrice>Rs.360</SummaryItemPrice>
  </SummaryItem>
  <SummaryItem>
    <SummaryItemText>Estimated Shipping</SummaryItemText>
    <SummaryItemPrice>Rs.50</SummaryItemPrice>
  </SummaryItem>
  <SummaryItem>
    <SummaryItemText>Shipping Discount</SummaryItemText>
    <SummaryItemPrice>Rs.-50</SummaryItemPrice>
  </SummaryItem>
  <SummaryItem>
    <SummaryItemText type= "total">Total</SummaryItemText>
    <SummaryItemPrice>Rs.360</SummaryItemPrice>
  </SummaryItem>
  <Button>CHECKOUT NOW</Button>
</Summary>
</Bottom>
        </Wrapper>
        <Footer/>
      
    </Container>
  )
}

export default Cart
