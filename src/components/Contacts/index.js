import {useState , useEffect} from 'react'

import List from './List'
import Form from './Form'
import './styles.css'

function Contacts() {
  const[contacts, setContact] = useState([
    {
      fullname:"ilyas",
      phone_number:"123123"
    },
    {
      fullname:"sinem",
      phone_number:"789789"
    },
    {
      fullname:"paşa",
      phone_number:"456456"
    }
  ]);

  useEffect(()=>{
    console.log(contacts);
  },[contacts])


  return (
    <div id='container'>
        <h1>Contants App</h1>
        <List contacts={contacts}/>
        <Form addContact={setContact} contacts={contacts} />
    </div>
  )
}

export default Contacts