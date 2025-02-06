import { useState } from "react";

export default function LoginForm(){
  const [login, setLogin] = useState(false)
    return (
        <form action="" className="bg-red-600 md:bg-amber-500 lg:bg-red-500 " onSubmit={(e)=>{
          
            e.preventDefault();
            const form = e.target as HTMLFormElement;
            const value = form.test.value;
            console.log(value);
            setLogin(true)
          }}>
            <input type="text" id='test' name='tests' />
            {login ? <p></p> : ""}
          </form>
    )
}