import React from 'react';
import DeleteData from './component/DeleteData';
import ShowAllUserData from './component/ShowAllUserData';
function App() {
  return (
    <div>
      <h1 style={{textAlign:"center",color:"black"}}>curd application</h1>
      <ShowAllUserData/>
      <DeleteData/>
    </div>
  );
}

export default App;
