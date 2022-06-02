// import React,{useState} from 'react';
// const EditItem=(id)=>{

//     const[inputData, setInputData] = useState('');
//     const[items,setItems] = useState([]);

//     const addItem =()=>{
//         if(!inputData) {

//         }else{
//         setItems([...items,inputData]);
//         setInputData('');
//         }

//     }
    
//         let newEditItem = items.find((element,id)=>{
//             // const newEditItem = items.filter((element)=>{
//             return element.id === id
//         });
//         console.log(newEditItem);
//         addItem(false);
//         setInputData(newEditItem);


        
//         // setInputData(Event.target.value);
        
    

//     return(

//         <>
//             {
//                 items.map((element,index)=>{
//                     return(
//                         <>
//                        <h3>{element}</h3> 
                       
//                     <button onClick={()=>EditItem(index)}>Edit</button>
//                     {/* <button onClick={()=>DeleteItem(index)}>Delete</button> */}
//                     {/* key={index} */}
                    
    
//                         </>
//                     )
    
//                 })
                
//             }

// </>
//     )
//         }


// export default EditItem;