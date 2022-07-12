import React from 'react'
//component
import UserComponent from "./UserComponent";

//custom hook
import useSearchUser from '../../ViewModel/useSearchUser';

//css
import '../../Styles/UserComponent.css'

function FromData() {
  let { setSearch, searchAll } = useSearchUser();

  return ( 
    <div className="container">
      <h1>Read JSON file</h1>
       <input
        type="text"
        placeholder="serach"
        onChange={(e) => setSearch(e.target.value)}
      />
      <div className="container">
        {searchAll().length !== 0? searchAll().map((user) => {
          return (
              <div key={user.id}>
               <UserComponent user = {user}/>
              </div>
          );
        }) :<h3 >No data !</h3>}

      </div>
    </div>
  )
}

export default FromData