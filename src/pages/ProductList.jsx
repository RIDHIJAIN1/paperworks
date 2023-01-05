
import styled from 'styled-components'
import Navbar from "../components/Navbar"
import Announcement from "../components/Announcement"
import Products from "../components/Products"
import Newsletter from "../components/Newsletter"
import Footer from "../components/Footer"
import { mobile } from '../responsive'


const Container = styled.div``;
const Title = styled.h1`
margin:20px;
`;


const FilterContainer = styled.div`
display:flex;
 justify-content:space-between;
 `;

const Filter = styled.div`
margin: 20px;
${mobile({width:"0px 20px", display:"flex",flexDirection: "column"})}

`; 

const FilterText = styled.span`
    font-size: 20px;
    font-weight: 600;
    margin-right:20px;
 ${mobile({marginRight:"0px"})}

`;

const Select = styled.select`
padding: 10px;
margin-right: 20px;
${mobile({margin:"10px 0px"})}

`
const Option = styled.option``

const ProductList = () => {
  return (
    <Container>
      <Navbar/>
      <Announcement/>
      <Title>NOTEBOOKS</Title>
      <FilterContainer>
        <Filter><FilterText>Filter Products</FilterText>
        <Select>
            <Option disabled selected>
                Products
            </Option>
            <Option>Notebooks</Option>
            <Option>Files</Option>
            <Option>Registers</Option>
            <Option>Diaries</Option>
            <Option>Science Notebooks</Option>
            <Option>Maths Notebooks</Option>
            <Option>Project Papers</Option>
            <Option>Mini Diaries</Option>
            <Option>Mini Notebooks</Option>
            <Option>Charts</Option>
        </Select>
       
        <Select>
        <Option selected>Newest
            </Option>
            <Option>price(high to low)</Option>
            <Option>price(low to high)</Option>
          
           
            </Select>
            </Filter>
        <Filter><FilterText>Sort Products</FilterText>
        <Select>
        <Option disabled selected>
                Quantity
            </Option>
            <Option>6</Option>
            <Option>12</Option>
            <Option>18</Option>
            <Option>24</Option>
            <Option>30</Option>
            <Option>Bulk Order</Option>
            </Select>
            </Filter>
         
            </FilterContainer>
      <Products/>

      <Newsletter/>
      <Footer/>
    </Container>
  )
}

export default ProductList
