import React, { useState } from 'react';

const UserGreed = () => {

    const[isLogged, setLog] = useState(false)

    // if(isLogged){
    //     return (
    //         <div>
    //             <h1>Welcome, Kani</h1>
    //         </div>
    //     );
    // }else{
    //     return(

    //     <div>
    //         <h1>Welcome, User</h1>
    //     </div>
    //     )
    // }

    //or 
    // let welcome
    // if(isLogged){
    //     welcome = <h1>Welcome, Kani</h1>
    // }else{
    //     welcome = <h1>Welcome, User</h1>

    // }
    // return(
    //     <div>{welcome}</div>
    // )

    //or

    // return(
    //     <div>
    //         {
    //             isLogged ? <h1>Welcome, Kani</h1> : <h1>Welcome, User</h1>
    //         }
    //     </div>
    // )

    //or сработает только если true

    return(
        <div>
            {
                isLogged && <h1>Welcome, Kani</h1>
            }
        </div>
    )

};

export default UserGreed;