import axios from "axios"
import { useState } from "react"


const Home = () => {
   const apikey = 'wYrPclNJj6095hjG4VAN7wd6kh9pC0xP'
   const citysearch = 'http://dataservice.accuweather.com/locations/v1/cities/search'
  
   const [city, setCity] = useState('')
   const [cityName, setcityName] = useState('')
   const [citykey, setcitykey] = useState('')
   const [cell, setCell] = useState('')
   const [fern, setFern] = useState('')

  const handleSearchCity = async() =>{
     try {
      const response = await axios(`${citysearch}?apikey=${apikey}&q=${city}`)
        const data = response.data[0]
        const citykey = data.Key;
        const cityName = data.LocalizedName;
        setcityName(cityName)
        setcitykey(citykey)
        handleHeat(citykey)
      } catch (error) {
      console.error(error);
     }
  }

  const handleHeat =async(citykey)=>{
    const currentConditions = `http://dataservice.accuweather.com/currentconditions/v1/`
    try {
      const response = await axios(`${currentConditions}${citykey}?apikey=${apikey}`)
      console.log(response.data)
      const cell = response.data[0].Temperature.Metric.Value
      const fern = response.data[0].Temperature.Imperial
      .Value
      setCell(cell)
      setFern(fern)
      console.log(cell)
    } catch (error) {
      console.error(error);
    }
  }

  const handleInputChange = (event:any)=>{
    try {
      
     setCity(event.target.value) 
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <main className="">

      <div className="flex justify-center py-14">
        <input type="text"
         placeholder="search city"
         onChange={handleInputChange} 
         value={city}
         className=" px-10 border-2 border-sky-300" />

        <button className="border px-2 mx-2"
         onClick={handleSearchCity}
        >Search</button>
      </div>

      <div className="">
        <div className="flex justify-around py-12 border bg-slate-400">

        <div className="border w-40 h-48">
          <div> <h1 className="text-center py-4 text-2xl font-bold text-zinc-50">{cityName}</h1></div>

           <div>
            <h2 className="">{}</h2>
           </div>
            <div>
               <h3 className="px-4 py-4 text-slate-100">Celsius: {cell}</h3>
            <h3 className="px-4 py-4 text-slate-100"> Fahrenheit: {fern}</h3>
            </div>
          </div>

          <div>
            <button>favorite</button>
            <img src="" alt="" />
          </div>
         </div>
        {/* <div className="flex justify-center py-8">
          <h1>some name</h1>
        </div>
        <div>
          <div>
            <h2>day</h2>
            <br />
            <h3>38*c</h3>
          </div>
        </div> */}
      </div>

    </main>
  )
}

export default Home