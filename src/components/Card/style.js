import styled from "styled-components"
export const CardOutterDiv =styled.div`

padding-top:3%;
width: 100%;
background-color: #379DFB;

`
export const CardStyled= styled.div`
border-radius:10px;

display: flex;
width:80%;
align-items: center;
background-color: #00000030;
@media(max-width: 800px){
    width:70%;
    
}`
export const IconStyled=styled.div`
cursor: pointer;
img{
    height: 4vh;
}
`
export const NameStyled= styled.div`
span{
    color: white;
    font-weight: 600;
    font-size: 110%;
    
}
`
export const DetailsStyled= styled.div`
padding:2%;
margin-left:3%;
display:flex;
flex-direction: column;
align-self:center;
gap:1%;
width: 80%;
text{
   font-size: 75%;
    color: white;
} `