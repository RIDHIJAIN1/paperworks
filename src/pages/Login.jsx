import styled from "styled-components"
import { mobile } from "../responsive";

const Container = styled.div`
width: 100vw;
height: 100vh;
background: linear-gradient(
    rgba(255,255,255,0.5),
    rgba(255,255,255,0.5)),
    url(https://cdn.shopify.com/s/files/1/0544/5705/collections/Standard-Notebook-06_2_1350x698.jpg?v=1604888639) center no-repeat ;
display: flex;
align-items: center;
justify-content: center;



`;

const Wrapper = styled.div`
width: 25%;
padding: 20px;
background-color: #d4bcb3;
border: 1px solid brown;
border-radius: 4px;
${mobile({width:"75%"})}

`;
const Form = styled.form`
display: flex;
flex-direction: column;
`;
const Title = styled.h1`
font-size: 24px;
font-weight: 300;
`;

const Input = styled.input`
flex: 1;
min-width: 40%;
margin:  10px 0px;
padding: 10px;
`

const Button = styled.button`
width: 40%;
border: none;
padding: 15px 20px;
background-color: teal;
color: white;
cursor: pointer;
margin-bottom: 10px;
`;

const Link = styled.a`
margin    : 5px 0px;
font-size: 12px;
text-decoration: underline;
cursor: pointer;

`


const Login = () => {
  return (
    <Container>
        <Wrapper>
            <Title>Sign In</Title>
            <Form>
                <Input placeholder = "username"/>
                <Input placeholder = "password"/>
                
              
                <Button>LOGIN</Button>
                <Link>Do you remember the password?</Link>
                <Link>Create a new Account</Link>
            </Form>
        </Wrapper>
      
    </Container>
  )
}

export default Login
