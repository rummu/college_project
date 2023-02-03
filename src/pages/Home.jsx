import React,{useEffect} from 'react';
import '../css/Home.css'
import Form from './Form.jsx'
import axios from 'axios'
import { useState } from 'react';





const Home = () => {
    const [movies,setMovies]=useState({})

    useEffect(()=>{
        getMovies()
    },[])
    
    const getMovies=async ()=>{
        const {data}=await axios.get('https://www.omdbapi.com/?i=tt3896198&apikey=11991464')
        setMovies(data)
    }

    return (<div className='bck'>
           <section id='sec'>
            <div className="image">
               <img src="https://cdn.pixabay.com/photo/2017/08/26/23/37/business-2684758__340.png"/>
            </div>
            {/* <div className='space'></div> */}
            
            <div className="content">
                <Form/> 
                <br /><br /><br /> 
            </div>
            <div>
                <img src={movies.Poster}/>
                <p>Title: {movies.Title}</p>
                
            </div>
        </section>
    </div>
    );
}

export default Home;