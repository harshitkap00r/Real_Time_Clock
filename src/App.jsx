import React, {useState} from "react";

const App = () => {
    let newtime=new Date().toLocaleTimeString();
    const [ctime,setCtime]=useState(newtime);
    const UpdateTime=()=>{
        newtime=new Date().toLocaleTimeString();
        setCtime(newtime);
    };
    setInterval(UpdateTime,1000);
    return (
        <>
        <h1>{ctime}</h1>
        </>
    );
}

export default App;