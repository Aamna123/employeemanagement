import React from "react"
import { HeaderStyled, LogoStyled, HeaderHeadingStyled } from "./style"
import Logo from "../../assets/Logo.png"

export const Header = ()=>{

    return(
        <HeaderStyled>
            <LogoStyled>
                <img src={Logo} alt="Header" />
            </LogoStyled>
            <HeaderHeadingStyled>
            <span>
                Employee Management
            </span>
            </HeaderHeadingStyled>
        </HeaderStyled>
    )
}