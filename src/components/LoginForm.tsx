import { useState } from 'react';

export default function LoginForm() {
  const [login, setLogin] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  return (
    <div className="p-4 w-lg max-w-full min-w-sm">
      <form
        action=""
        className=" w-full flex-grow p-4 mt-4 lg:pt-11 lg:px-11"
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
          <h1 className="text-3xl md:text-5xl text-sky-100  font-extrabold">
            Logg deg på
          </h1>
          <p className="text-xl text-sky-100  mt-4 mb-4">
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
              'border-1  focus:outline-sky-300  border-white rounded-full text-white placeholder:text-white px-6 w-full mt-4 ' +
              (password ? 'pt-5 pb-2' : 'py-3.5')
            }
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <span
            id="password"
            className={
              'text-white focus:text-sky-300 absolute bottom-5 left-6 text-sm ' +
              (password ? '' : 'hidden')
            }
          >
            Passord (minst 6 tegn)
          </span>
        </label>
        <div className="flex justify-end">
          <button
            type="button"
            className=" text-sky-200 hover:text-sky-100 cursor-pointer mt-2"
          >
            Glemt passord?
          </button>
        </div>
        <div className="mt-5 mb-2.5">
          <button
            type="submit"
            className="border-30p font-bold text-lg hover:bg-blue-800  bg-blue-600  text-sky-100   py-2 px-4 rounded-4xl w-full cursor-pointer "
            onClick={() => {}}
          >
            Logg på
          </button>
        </div>
        <div className="flex flex-row mt-5">
          <p className="text-white pr-2">Har du ikke NRK-profil?</p>{' '}
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
