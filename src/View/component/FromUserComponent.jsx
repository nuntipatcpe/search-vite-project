import React from 'react'
//component
import UserComponent from "./UserComponent";

//custom hook
import useSearchUser from '../../ViewModel/useSearchUser';

function FromData() {
    let { setSearch, searchAll } = useSearchUser();

  return ( 
    <div className="app">
      <h1>Read JSON file</h1>
       <input
        type="text"
        placeholder="serach"
        onChange={(e) => setSearch(e.target.value)}
      />
      <div className="container">
        {searchAll().map((user) => {
          return (
              <div key={user.id}>
               <UserComponent user = {user}/>
              </div>
          );
        })}
      </div>
    </div>
  )
}

export default FromData