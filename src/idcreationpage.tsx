import React, { useRef, useState} from 'react'

const Idcreationpage = () => {

    const labelStyle = "font-mono text-2xl"
    const inputStyle = "rounded-full p-1 font-mono"

    const [name, setName] = useState('')
    const [telno, setTelno] = useState('')
    const [email, setEmail] = useState('')
    const [date, setDate] = useState('')
    const [title, setTitle] = useState('')
    const [check, setCheck] = useState('')
    

    const formEl = useRef<HTMLFormElement>(null);

    function handleSubmit(e: React.FormEvent<HTMLFormElement>){
        e.preventDefault();
        const data = new FormData(formEl.current || undefined);
        console.log(data);
        setName(data.get('username')?.toString() || '');
        setTelno(data.get('telno')?.toString() || '');
        setEmail(data.get('email')?.toString() || '');
        setDate(data.get('bday')?.toString() || '');
        setTitle(data.get('title')?.toString() || '');
        setCheck(data.get('checkbox')?.toString() || '');

        const element = document.getElementById('dis')
        if(element){
          element.style.display = "block"
        }
    }

    function reset(){
      const element = document.getElementById('dis')
        if(element){
          element.style.display = "none"
        }
    }

    function Result(){

      return(
        <>
          <h3>name:{name} </h3>
          <h3>telno:{telno} </h3>
          <h3>email:{email} </h3>
          <h3>Birthdate:{date} </h3>
          <h3>Title:{title} </h3>
          <h3>Check:{check} </h3>
        </>
      )
    }
    

  return (
    <>
    <div className='border-2 border-orange-500 rounded-lg p-10 m-10 flex justify-center'>
        <form ref={formEl} onSubmit={handleSubmit} method='POST' encType='multipart/form-data'>
                <label className={`${labelStyle}`} htmlFor="username">Username: </label>
                <input className={`${inputStyle}`} type="text" id='username' name="username" placeholder='Enter username' required></input><br></br><br></br>

                <label className={`${labelStyle}`} htmlFor="telno">Phone number: </label>
                <input className={`${inputStyle}`} type="tel" id="telno" name="telno" placeholder="123-456-7890" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" required/><br></br><br></br>

                <label className={`${labelStyle}`} htmlFor="email">email: </label>
                <input className={`${inputStyle}`}type="email" id="email" name="email" placeholder="name@email.com" required/><br></br><br></br>

                <label className={`${labelStyle}`} htmlFor="bday">Birthdate: </label>
                <input className={`${inputStyle}`} type="date" id="bday"name="bday" required/><br></br><br></br>

                <label className={`${labelStyle}`}>title: </label>
                <label className={`${labelStyle}`}>Mr</label>
                <input value="Mr" onChange={(e)=>(console.log(e.target.value))} className="m-4 w-5 h-5 border-gray-300 rounded" type="radio" name="title" required/>
                <label className={`${labelStyle}`}>Mrs </label>
                <input value="Mrs" className="w-5 h-5 border-gray-300 rounded" type="radio" name="title" required/><br></br><br></br>

                <input value="Agree to all Terms and conditions" className='w-5 h-5 border-gray-300 rounded' type="checkbox" name="checkbox" required/>
                <label className={`pl-5 ${labelStyle}`} htmlFor='checkbox'>Agree to all Terms and conditions</label><br></br><br></br>

                <input className='border-2 py-1 px-3 rounded-full mr-3 bg-lime-500 hover:bg-cyan-500' type="submit"/>
                <input onClick={()=>reset()} className='border-2 py-1 px-3 rounded-full mr-3  bg-lime-500 hover:bg-cyan-500' type="reset"></input>
        </form>
    </div>
    <div id="dis" className='hidden border-2 border-blue-500 rounded-lg p-10 m-10 text-center font-mono'>
          <Result/>
    </div>
    </>
  )
}

export default Idcreationpage