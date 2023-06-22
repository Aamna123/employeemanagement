import React from "react"
import { useState } from "react"
import {UpperDivStyled, FormStyled, FormHeaderStyled, FormFieldsStyled, FieldStyled, FieldTitleStyled, FieldInputStyled, FormButtonsStyled, AddButtonStyled, ClearButtonStyled} from "./style.js"
export const UpperDiv=(props)=>{
    const {appendList} =props
    const [firstName, setFirstName]= useState("")
    const [lastName, setLastName]= useState("")
    const [email, setEmail]= useState("")
    const [phone, setPhone]= useState("")
    return(
        <UpperDivStyled>
            <FormStyled>
                <FormHeaderStyled>
                    <span>
                        New Employee
                    </span>
                </FormHeaderStyled>
                <FormFieldsStyled>
                    <FieldStyled>
                        <FieldTitleStyled>
                            <text>
                            First Name{" "}
                            </text>
                            <span>
                               *
                            </span>
                        </FieldTitleStyled>

                        <FieldTitleStyled>
                            <text>
                            Last Name{" "}
                            </text>
                            <span>
                               *
                            </span>
                        </FieldTitleStyled>

                   
                        <FieldTitleStyled>
                            <text>
                            Email{" "}
                            </text>
                            <span>
                               *
                            </span>
                        </FieldTitleStyled>

                   
                        <FieldTitleStyled>
                            <text>
                            Phone{" "}
                            </text>
                            <span>
                               *
                            </span>
                        </FieldTitleStyled>

                    </FieldStyled>
                        <FieldInputStyled>
            

                            <input value={firstName} onChange={(e)=>{setFirstName(e.target.value)}}
                            />
                            <input value={lastName} onChange={(e)=>{setLastName(e.target.value)}}/>
                            <input type="email" value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
                            <input type="tel" value={phone} onChange={(e)=>{setPhone(e.target.value)}}/>

                        </FieldInputStyled>
                </FormFieldsStyled>
                <FormButtonsStyled>
                    <ClearButtonStyled>
                        <span onClick={()=>{setFirstName("");setLastName("");setEmail("");setPhone("");}}>
                            Clear All
                        </span>

                    </ClearButtonStyled>
                    <AddButtonStyled>
                        <span onClick={()=>{ const employeeobject= { firstName: firstName, lastName: lastName, email: email, phone:phone}
                    appendList(employeeobject)}}>
                            Add
                        </span>

                    </AddButtonStyled>
                </FormButtonsStyled>

            </FormStyled>
        </UpperDivStyled>
    )
}