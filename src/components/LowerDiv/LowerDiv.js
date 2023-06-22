import React from "react"
import { LoweDivStyled, LowerDivContentStyled} from "./style.js"
import { Card } from "../Card/Card.js"
export const LowerDiv=(props)=>{
    const {employeeList, removeEmployee} = props

    return(
        <LoweDivStyled> 

            <LowerDivContentStyled>
            <span>
                Current Employees
            </span>
            <div>
            {
                employeeList.map((employee,index)=>
                <Card employee={employee} 
                removeEmployee={removeEmployee
                }
                index={index} 
                />
                )}
                </div>
                </LowerDivContentStyled>
        </LoweDivStyled>
    )
}