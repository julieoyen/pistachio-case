import { useState } from 'react';

export default function LoginForm() {
  const [login, setLogin] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  return (
    <div className="lg:p-4">
      <form
        action=""
        className=" w-full lg:max-w-96 flex-grow outline-1 outline-white lg:pt-11 lg:px-11"
        onSubmit={(e) => {
          e.preventDefault();
          const form = e.target as HTMLFormElement;
          const value = form.test.value;
          console.log(value);
          console.log(login);
          setLogin(true);
        }}
      >
        <div className=" pb-6 ">
          <h1 className="text-4xl text-white font-bold">Logg deg på</h1>
          <p className="text-xl text-white mt-4 mb-4">
            Få en bedre opplevelse i alle våre tjenester.
          </p>
        </div>
        <label className="relative">
          <input
            type="email"
            id="email"
            name="email"
            placeholder="E-post"
            className={
              'border-1 focus:outline-sky-300 border-white rounded-full text-white placeholder:text-white px-6 w-full ' +
              (email ? 'pt-5 pb-2' : 'py-3.5')
            }
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          ></input>
          <span
            id="e-post"
            className={
              'text-white absolute left-6 text-sm bottom-5 ' +
              (email ? '' : 'hidden')
            }
          >
            E-post
          </span>
        </label>
        <label className="relative">
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Passord (minst 6 tegn)"
            className={
              'border-1  focus:outline-sky-300 border-white rounded-full text-white placeholder:text-white px-6 w-full mt-4 ' +
              (password ? 'pt-5 pb-2' : 'py-3.5')
            }
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <span
            id="password"
            className={
              'text-white absolute bottom-5 left-6 text-sm ' +
              (password ? '' : 'hidden')
            }
          >
            Password
          </span>
        </label>
        <button
          type="button"
          className=" hover:text-sky-200 text-white cursor-pointer"
        >
          Glemt passord?
        </button>
        <div className="mt-5 mb-2.5">
          <button
            type="submit"
            className="border-30p font-medium text-base hover:bg-blue-800  bg-blue-500  text-white py-3 px-5 rounded-4xl w-full cursor-pointer "
            onClick={() => {}}
          >
            Logg på
          </button>
        </div>
        <div>
          <p className="text-white">Har du ikke NRK-profil?</p>{' '}
          <button className="text text-sky-200 cursor-pointer" type="button">
            Registrer deg
          </button>
        </div>
      </form>
    </div>
  );
}

// <label htmlFor="password"></label>
// <input type="text" id="test" name="tests" />
// {login ? <p></p> : ''}
