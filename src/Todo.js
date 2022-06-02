import React, {useState} from "react";

const Todo= () =>{
    const[inputData, setInputData] = useState('');
    const[items,setItems] = useState([]);
    
    
    const addItem =()=>{
        if(!inputData) {

        }else{
        setItems([...items,inputData]);
        setInputData('');
        }

    };
    
   const DeleteItem = (id) => {
        
        console.log(id);
        const updateditems = items.filter((element,index)=>{
        return index!==id;
    });
    setItems(updateditems);
   }

    const editItem=()=>{
    let newEditItem = items.find((element,id)=>{
                    // const newEditItem = items.filter((element)=>{
                    return element.id === id;
                });
                console.log(newEditItem);
                addItem(false);
                setInputData(newEditItem);
};

    return(
        <>
        <label >Name : </label>
        <input type="text" placeholder="Enter Name"
        value={inputData}
        onChange={(e) => setInputData(e.target.value)}

        />

        {/* <input type="number" placeholder="Enter Age" /> */}
        <br></br>
        <button onClick={addItem}>Add</button>

        {
            items.map((element,index)=>{
                return(
                    <>
                   <h3>{element}</h3> 
                <button onClick={()=>editItem()}>Edit</button>
                <button onClick={()=>DeleteItem(index)}>Delete</button>
                {/* key={index} */}
                

                    </>
                )

            })
        }
        

        </>
    )
}

export default Todo;