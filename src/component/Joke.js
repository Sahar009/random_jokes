import {useState, useEffect} from 'react'
import spinner from '../asset/Book.gif'

const Joke = () => {
    const [joke,setJoke] = useState({});
    const [isLoading,setIsLoading] = useState(true);
    const url = 'https://api.chucknorris.io/jokes/random';
    // http://api.icndb.com/jokes/random

    const getJoke = () =>{
        setIsLoading(true)
        fetch(url)
        .then((response) => {
          return response.json()
        })
        .then((data) => {
          console.log(data);
          setJoke(data);
          setIsLoading(false)
        });
    }

    useEffect(() => {
     getJoke();
    }, [])
    
  return (
    <div className='--flex-center  --100vh'>
        <div className='container'>
            <h1>Jokes Generator</h1>
            <div className='--line'></div>
            {isLoading ? ( 
            <div className='--center-all'> <img src={spinner} alt='loading' width={100}/></div>) : (
                <>
            <h4> Joke id: {joke.id}</h4>
            <p> {joke.value}</p>
            </>
            )}
           
            
            <button className='--btn --btn-primary' onClick={getJoke}> hGenerate Joke</button>
           
           
            </div>
        </div>
  )
}

export default Joke