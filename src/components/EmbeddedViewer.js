import React from "react";
import { useParams } from "react-router";
import { useEffect } from "react";
import { useState } from "react";

const EmbeddedViewer = () =>{

  
  
  const { volumeId } = useParams()
  useEffect(()=> {      
    const scriptTag = document.createElement('script')   
    scriptTag.type='text/javascript'
    scriptTag.async=true      
   
    scriptTag.src= 'https://www.google.com/books/jsapi.js'        
    document.body.appendChild(scriptTag);
   
  }, []); 

  useEffect(()=> {      
 
    const scriptJs = document.createElement('script')                
  scriptJs.type='text/javascript'  
  scriptJs.async=true 
   
  scriptJs.innerHTML = `
  google.books.load();
  function initialize() {
    var viewer = new google.books.DefaultViewer(document.getElementById('viewerCanvas'));
    viewer.load(${volumeId});
  
  }

  google.books.setOnLoadCallback(initialize);`
    document.body.appendChild(scriptJs);
  
  }, []); 
 
  return(
    <div>
    <div id="viewerCanvas"></div>
    </div>
  )

;}

export default EmbeddedViewer;