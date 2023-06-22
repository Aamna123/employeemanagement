import styled from "styled-components";

export const UpperDivStyled= styled.div`
height:65%;
align-items:center;
justify-content:center;
display:flex;`

export const FormStyled=styled.div`
height:75%;
width:38%;
border: 2px solid #379DFB;
border-radius:3%;
@media(max-width: 800px){
    width:70%;
    
}
`

export const FormHeaderStyled= styled.div`
background-color:#379DFB;
height:5%;
border-top-left-radius: 7px;
border-top-right-radius: 7px;
padding: 3%;
align-items: center;
display: flex;
span{
    color: white;
    font-weight: 600;
    font-size: 75%;
}`
export const FormFieldsStyled=styled.div`

height: 60%;
width: 100%;
display:flex;
justify-content: center;
align-items: center;`
export const FieldStyled= styled.div`
display: flex;
gap:10%;
height: 70%;
flex-direction:column;
justify-content: start;

`

export const FieldTitleStyled = styled.div`
align-self:self-end;
span{
    color: red;
}
`
export const FieldInputStyled= styled.div`
 justify-content: right;
 display: flex;
 margin-top: 1%;
 flex-direction: column;
 margin-left: 5%;
 width: 60%;
 height: 70%;
 gap:7%;
input{
height: 37%;
border-radius:3px;
border: 1px solid #379DFB ;
outline: none;

};
`
export const FormButtonsStyled=styled.div`
display:flex;
justify-content:end ;
height: 100%;
width: 90%;
gap:2%;
`

export const AddButtonStyled=styled.div`
border-radius: 100px;
background: #379DFB;
width:15%;
height:10% ;
font-size: small;
justify-content: center;
display: flex;
align-items: center;
color: white;
cursor: pointer;
`
export const ClearButtonStyled=styled.div`
color:#00000040;
font-size:85%;
height: 10%;
display: flex;
align-items: center;
cursor: pointer;
`