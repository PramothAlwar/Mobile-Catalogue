import React from 'react'
import { useQuery } from 'react-query'
import { useNavigate } from 'react-router-dom';
import { create } from 'zustand';

export const useStore = create(set => ({
        currentPhone: '',
        currentImage: '',
        currentPrice: 0,
        currentOS: '',
        current: '',
      }));

const Dummy = () => {

    const mobilecatalogue = useQuery('mobilecatalogue', async () => {
        const response = await fetch('https://pcat.mobile.xfinity.com/products?category=DEVICE&limit=23');
        return response.json();
    });

    const navigate = useNavigate()



    if(mobilecatalogue.isLoading){
        return <h1>Loading...</h1>
      }

    const phone = mobilecatalogue.data
    console.log(phone.products)

    function handleClick(detail:any){
        console.log(detail)
        navigate(`/${detail.name.replace(/ /g, '_')}`);
        useStore.setState({
            currentBrand: detail.brand,
            currentPhone: detail.name,
            currentImage: detail.image.url,
            currentPrice: detail.prices[0].originalPrice,
            currentOS: detail.deviceOS,
            current: phone.products
        })}


    return (
        <>
        <h1 className=' text-4xl text-center pb-10 font-mono pt-10'>Mobile catalogue</h1>
        <div className='flex flex-row flex-wrap justify-evenly'>
        {Array.from({ length: phone.products.length }).map((_, i) => {
            return (
                <div key={i} className=' bg-slate-white border-2 border-red-200 rounded-xl p-6 w-fit m-4 hover:border-blue-700 text-center' onClick={()=>handleClick(phone.products[i])}>
                    <img src={phone.products[i].image.url} width="250" height="250" alt={phone.products[i].name} />
                    <h3 className=' font-bold'>{phone.products[i].brand}</h3>
                    <h3>{phone.products[i].name}</h3>
                    <h3>{phone.products[i].prices[0].originalPrice}</h3>
                </div>
            );
        })}
        </div>  
        </>
    )
}

export default Dummy


/*

const phones = mobilecatalogue.data.products

<div className='flex flex-row flex-wrap'>
        {phones.map((phone:any, i :number) => {
            useStore.setState({
                currentPhone: phone.name,
                currentImage: phone.image.url,
                currentPrice: phone.prices[0].originalPrice,
  });

                return (
                    <div key={i} className=' bg-slate-white border-2 border-red-200 rounded-xl p-6 w-fit m-4 hover:border-blue-700 text-center' onClick={() => navigate(`/${phone.name.replace(/ /g, '_')}`)}>
                        <img src={phone.image.url} width="250" height="250" alt={phone.name} />
                        <h3>{phone.name}</h3>
                        <h3>{phone.prices[0].originalPrice}</h3>
                    </div>
                );
            })}
        </div> 

*/ 