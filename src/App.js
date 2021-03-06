import { useEffect, useState } from 'react'
import Card from './Card'
import axios from 'axios'

function App() {
  const [users, setUsers] = useState([])
 

  const getData = async () => {
    const { data } = await axios.get('https://shanifirst.herokuapp.com/api/users')
    setUsers(data);
  }
  useEffect(() => {
    getData()
  }, [])


  return (
    <div className="App">
      hello you all
      {users.map((user) => (
        <Card key={user.id} user={user} />
      ))}
    </div>
  );
}

export default App;

// https://shaniApp.com
// https://shaniServer.come