import bedroom from './assets/image 56.png'
import studyroom from './assets/image 57.png'
import washroom from './assets/image 55.png'
import bathroom from './assets/image 54.png'
import diningroom from './assets/image 53.png'
import kitchen from './assets/image 52.png'
import guestroom from './assets/image 51.png'
import bathroom2 from './assets/image 50.png'
import others from './assets/image-48.png'
import arrow from './assets/arrow.png'

 const rooms = [

   {
     type:bedroom,
     name:'Bedroom'
   },
   {
      type:studyroom,
      name:'Studyroom'
   },
   {
     type:washroom,
     name:'Washroom'
   },
   {
     type:bathroom,
     name:'Bathroom'
   },
   {
     type:diningroom,
     name:'Dining room'
   },
   {
     type:kitchen,
     name:'Kitchen'
   },
   {
     type:guestroom,
     name:'Guestroom'
   },
   {
     type:bathroom2,
     name:'Bathroom'
   },
   {
     type:others,
     name:'others'
   }


 ]

function App(): JSX.Element {





  return (
    <>
       <div className='parent-container'>
          <div className='category-intro'>
            <h1>Explore your future home</h1>
            <p>Explore base on rooms</p>
            <img src={arrow} alt="arrow" style={{width:'40px' , height:'40px' , objectFit:'cover'}}/>
            <button className='product-button' style={{fontWeight:'700'}}>Product List</button>
          </div>
         {rooms.map(room => <div className='room-category'>
           <img src={room.type} alt={room.name} className='room-image'/>
           <button className='category-button '>{room.name}</button>
           <div className='onhover-room'>
             <div style={{padding: '6px'}}>
               <h4>200+</h4>
               <h3>{room.name}</h3>
             </div>
             <img src={arrow} alt="arrow" style={{width: '40px', height: '40px', objectFit: 'cover'}}/>
           </div>
         </div>)}

       </div>
    </>
  )
}

export default App
