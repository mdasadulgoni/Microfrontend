import React from "react";
// 1. Import Area 

const name = 'Md Asadul Goni'; // This is a global variable
// 2. Function Define Area 
function Home() {
  //2.1 Hooks Area

  // 2.2 Function Define Area
  const company = 'ovoserve.com'; // This is a global variable 

  // 2.3 Return Somthing 
  return (
    <>
      <h1>Testing {name}{company}</h1>    
    </>
  )
}
// 3. Export Area 
// 3.1 Default Export
export default Home;
// 3.2 Named Export Area 
