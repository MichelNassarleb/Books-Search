import React from 'react'
import ClipLoader from "react-spinners/ClipLoader";
import { css } from "@emotion/react";


const Loading = ({loading}) =>{
    const override = css`
  display: block;
margin:auto auto;
  border-color: blue;
  
`;
let color = "#ffffff"
    return(
        <main className='main-sec'>
            <h1>Loading</h1>
            <div className='spinner-container'>
               
              <ClipLoader  loading={loading} css={override} className='spinner' color={color} size={50} />
              </div>
        </main>
    )
}


export default Loading;