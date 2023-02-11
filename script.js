let mains=document.getElementsByTagName("main");
let major=document.getElementById("apidata");
let tb=document.getElementById("row");
let bd=document.getElementsByTagName("body");//fetchimg data from given url
fetch('https://dummyjson.com/products').then((apidata)=>{
console.log(apidata);

return apidata.json();

}).then((actualdata)=>{

    console.log(actualdata);

      //using for so that we can traverse every array elements
      for(let k=0;k<30;k++)
      {
       //creating division for each element ,we can also use map method instead of for
         const mr=document.createElement("div");
        const mydata=actualdata.products[k];
      
         
   const cr=document.createElement("div");
       //accessing one image out of 5 image of every object ,rendering, rating ,description, stocks & prices
      cr.innerHTML=`
     
      <img src=${mydata.images[0]} height="200" width="200" alt="photo" border="1px solid black" box-sizing="border-box"  justifyContent="space-between" />    
     <br>
      Title  ${mydata.category}
      <br>
      Brand:${mydata.brand} 
      <br>
      Price  ${mydata.price}
      <br>
      Discount Percentage ${mydata.discountPercentage}
      <br>
      Stock ${mydata.stock}
     
       Rating -${mydata.rating}
       <br>
       Description -${mydata.description}
      <br>
      id is ${mydata.id} 
      



      
      `
    //  cr.style.display="flex";
     ///cr.style.flexDirection="row";
      cr.style.height="500px";
      cr.style.width="200px";
      cr.style.borderStyle="solid";
    //cr.style.boxSizing="border-box";
    cr.style.borderRadius="5px";
    cr.style.borderColor="black"
    cr.style.display="block";
    
     // cr.style.box-sizing="border-box";
     

       
    //mains.append(cr);
    //appending created division to another division so that every element can print
    major.append(cr);
    //giving styles related with flexwrap and its direction height and weidth
    major.style.display="flex";
   major.style.flexWrap="wrap";
    major.style.flexDirection="column";
  major.style.justifyContent="space-between";
  major.style.margin="5px";
  major.style.padding="5px";
  major.style.width="400px";
 major.style.height="1000px"
   
    //SVGTextContentElement.
  //content.style.flexDirection="";
    
    
  

 // mr.append(content);
  //mr.style.display="flex";
  //mr.style.flexDirection="column";*/
  
  //bd.append(content);
  //bd.style.display="flex";
  //bd.style.flexDirection="column";
  //mains.append(content);
  //mains.display*/
  //.style.display="flex"; 
  //mains.style.flexDirection="row";

}
     

}).catch((error)=>{


    console.log(`The Error: ${error}`);
});