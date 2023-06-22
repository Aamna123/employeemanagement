import {Header} from "./components/Header/Header.js"
import React from "react";
import { UpperDiv } from "./components/UpperDiv/UpperDiv.js";
import { LowerDiv } from "./components/LowerDiv/LowerDiv.js";
import './App.css';
import { AppStyled, BodyStyled } from "./style.js";
import { useState } from "react";

function App() {
  const [employeeList, setEmployeeList]= useState([])
 
  function appendList (employee){
setEmployeeList([...employeeList,employee])
  }
  function removeEmployee (index){
    setEmployeeList((employeeList) => {
      const newemployeeList = [...employeeList];
      newemployeeList.splice(index, 1);
      setEmployeeList(newemployeeList)
    });
  }
  return (
    
    <AppStyled >
      <Header/>
    <BodyStyled>
      <UpperDiv appendList={appendList}/>
      <LowerDiv employeeList={employeeList} 
      removeEmployee={removeEmployee}
      />
    </BodyStyled>
    </AppStyled>
    
  );
}

export default App;
