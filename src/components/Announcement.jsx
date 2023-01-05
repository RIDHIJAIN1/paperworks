import styled from "styled-components";

const Container = styled.div`
 height:40px;
 background-color: #bb96ad;
 color: white;
 display: flex;
 justify-content: center;
 align-items: center;
 font-size: 16px;
 font-weight: 500;
`

const Announcement = () => {
  return (
    <Container>
       Super Deal ! Free Shipping on orders over 500Rs Hello.
    </Container>
  )
}

export default Announcement;

export const Ridhi = () => {
  return (
    <Container>
       Super Deal ! Free Shipping on orders over 500Rs.
    </Container>
  )
}


