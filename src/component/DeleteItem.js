// import React, { useState } from "react";

//     const DeleteItem=(id)=>{

//         const[items,setItems] = useState([]);
//         console.log(id);
//         const updateditems = items.filter((element,index)=>{
//             return index!==id;
//         });
//         setItems(updateditems);
//         return(
//             <>
//             {
//                 items.map((element,index)=>{
//                     return(
//                         <>
//                        {/* <h3>{element}</h3>  */}
                       
//                     {/* <button onClick={()=>EditItem()}>Edit</button> */}
//                     <button onClick={()=>DeleteItem(index)}>Delete</button>
//                     {/* key={index} */}
                    
    
//                         </>
//                     )
    
//                 })
                
//             }

// </>
//         )
//     }




// export default DeleteItem;