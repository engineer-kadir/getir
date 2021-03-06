import React,{useState,useEffect} from "react";
import cardsItem from 'api/cards.json';
const Cards = () =>{
    const [cards,setCards]=useState([]);

    useEffect(()=>{
setCards(cardsItem);
    },[])
  return <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-4 '>
      {cardsItem.length && cards.map(card=>(
          <div className="bg-white p-14  rounded-lg shadow-lg flex flex-col items-center justify-center text-center">
              <img className="w-[150px] h-[150px] mb-6" src={card.image}/>
              <h6 className='font-semibold text-lg text-primary-brand-color'>{card.title}</h6>
              <p className="mt-2 text-sm text-gray-700">{card.description}</p>
          </div>
      ))}
      </div>;
};

export default Cards;
