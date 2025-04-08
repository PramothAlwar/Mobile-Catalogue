import React, { useState } from 'react'
import { useStore } from './dummy'
import { Link, useNavigate } from 'react-router-dom';

const Description = () => {

    const navigate = useNavigate()
    const [cart, setCart] = useState<string>()
    const [brand, setBrand] = useState<string>()
    const [model, setModel] = useState<string>()
    const [condition, setCondition] = useState<string>()

    const currentBrand = useStore((state:any) => state.currentBrand)
    const currentImage = useStore((state:any) => state.currentImage)
    const currentPhone = useStore((state:any) => state.currentPhone)
    const currentPrice = useStore((state:any) => state.currentPrice)
    const currentOS = useStore((state:any) => state.currentOS)
    const current = useStore((state:any) => state.current)

    function yes(){
        const element = document.getElementById('oldmobiledetails');
        if (element) {
            element.style.display = 'block';
        }
    }

    function no(){
        const element = document.getElementById('oldmobiledetails');
        if (element) {
            element.style.display = 'none';
        }
    }

    function handleBrand(e:any){
        setBrand(e.target.value)
        if(brand!==''){
            const element = document.getElementById('model');
            if (element) {
                element.style.display = 'block';
            }
        }
    }

    function handleCondition(e:any){
        setModel(e.target.value)
        if(model!==''){
            const element = document.getElementById('condition');
            if (element) {
                element.style.display = 'block';
            }
        }
    }

    function handlePrice(e:any){
        setCondition(e.target.value)
        if(condition!==''){
            const element = document.getElementById('price');
            if (element) {
                element.style.display = 'block';
            }
        }
        const acc = document.getElementById('acccreate')
        if(acc){
            acc.style.display = 'block';
        }
    }


return (
    <div className='flex flex-col   w-fit lg:w-screen'>
    <div className='m-10 border-2 border-red-200 p-10 w-auto h-auto justify-evenly md:flex md:flex-row md:justify-evenly md:m-10 flow-root'>
        <img className='md:w-4/12 h-3/6 w-50%' src={currentImage}></img>
        <div>
            <div className='border-2 w-fit md:h-20% md:text-2xl p-10 md:p-24 border-blue-700 m-5 flex flex-col'>
                <h3 className=' font-bold'>{currentBrand}</h3>
                <h3 className=''>{currentPhone}</h3>
                <br></br>
                <h3>OS: {currentOS}</h3>
                <br></br>
                <h3>Price: {currentPrice}</h3>
            </div>
            <div className='flex flex-col  md:flex-none '>
                <button className='bg-blue-400 text-white p-2 rounded-xl mt-4 hover:bg-blue-700 w-fit' onClick={()=>navigate('/')}>Back</button>
                <button className='bg-blue-400 text-white p-2 rounded-xl mt-4  hover:bg-blue-700 w-fit' onClick={()=>setCart("✅ Phone added to cart")}>Add to cart</button>
                <br/>
                <h2 className={` p-2 ${cart ? 'bg-green-400' : ''} text-white w-fit rounded-xl`}>{cart}</h2>
                <h3>Do You have a phone to trade in ?</h3>
                <Link to='/tradein' className=' text-blue-700'>How the trade-in process works</Link>
                <div>
                    <button className='bg-slate-400 text-white p-4 w-16 rounded-xl mt-4 m-6 hover:bg-slate-700' onClick={()=>yes()}>Yes</button>
                    <button className='bg-slate-400 text-white p-4 w-16 rounded-xl mt-4 m-6 hover:bg-slate-700' onClick={()=>no()}>No</button>
                </div>
                <div id='oldmobiledetails' className='hidden '>
                    <h3>Enter mobile details</h3>
                    <select value={brand} onChange={handleBrand} className='border-4  p-3 hover:border-blue-900 rounded-full'>
                        <option value=''>Select Brand</option>
                        <option value='Samsung'>Samsung</option>
                        <option value='Apple'>Apple</option>
                        <option value='Motorola'>Motorola</option>
                        <option value='Google'>Google</option>
                    </select>
                    <br></br>
                    <br></br>
                    <div className=''>
                    <select id="model" value={model} className='border-4 p-3  hidden  hover:border-blue-900 rounded-full' onChange={handleCondition}>
                        <option value=''>Select Model</option>
                        {
                            current.map((phone:any, i:number) => {
                                if(phone.brand === brand){
                                    return(
                                        <option key={i} value={phone.name}>{phone.name}</option>
                                    )
                                }
                            })
                        }
                    </select>
                    <br></br>
                    <select id="condition" className='border-4 p-3  hidden  hover:border-blue-900 rounded-full' value={condition} onChange={handlePrice}>
                        <option>Select Condition</option>
                        <option value='Mint'>Mint</option>
                        <option value='Good'>Good</option>
                    </select>
                    </div>
                    <br></br>
                    <div id='price' className=' text-emerald-600 bg-lime-200 rounded-2xl  hidden w-fit p-2'>
                        <h3>{condition === 'Mint'? <h2>New Price : {currentPrice-100}</h2> : condition==='Good'? <h2>New Price : {currentPrice-50}</h2>:<h2>Price : {currentPrice}</h2> }</h3>
                    </div>
                </div>
                <br></br>
                <Link to="/IDCreationPage" id='acccreate' className='hidden border-2 border-slate-800 rounded-full p-2 bg-green-300 hover:bg-green-800 hover:text-neutral-50 w-fit p-2'>Proceed on creating an account</Link>
            </div>
        </div>
    </div>
</div>
)
}

export default Description