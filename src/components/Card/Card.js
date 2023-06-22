import React from "react";
import { CardStyled, CardOutterDiv, NameStyled, DetailsStyled, IconStyled } from "./style";
import Icon from "../../assets/icon.png"
export const Card=(props)=>{
    const employee = props.employee
    const removeEmployee = props.removeEmployee
    const index = props.index
    return(
        <CardOutterDiv>

        <CardStyled> 
            <DetailsStyled>
            <NameStyled>
                <span>
                    {employee.firstName+" "+employee.lastName}
                </span>
            </NameStyled>
            <text>
                {employee.email}
            </text>
            <text>
                {employee.phone}
            </text>
            </DetailsStyled>
            <IconStyled>
                <img src={Icon} 
                onClick={()=>{removeEmployee(index)}}
                 />
            </IconStyled>
             </CardStyled>
        </CardOutterDiv>
    )
}