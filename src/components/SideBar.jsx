import React, { useState } from 'react'
import { RiH1, RiSearchLine } from "react-icons/ri"
import { SlLocationPin } from "react-icons/sl"
import { CgSun } from "react-icons/cg"
import './sidebar.css'
import { useDispatch, useSelector } from 'react-redux'
import { getDataStart, getDataSuccess } from '../slice/data'
import DataService from '../service/data'

const SideBar = () => {

  const date = new Date();

  const currentDay = String(date.getDate()).padStart(2, '0');

  const currentMonth = String(date.getMonth() + 1).padStart(2, "0");

  const currentYear = date.getFullYear();

  // we will display the date as DD-MM-YYYY 

  const currentDate = `${currentDay}-${currentMonth}-${currentYear}`;

  //   let date = new Date().toLocaleDateString();

  const dispatch = useDispatch()
  const { isLoading, successData, getResponse } = useSelector(state => state)

  // console.log(state)

  const [search, setSearch] = useState("")

  // const handleInp = (e) => {
  //   setSearch(e.target.value)
  // }

  const handleForm = async (e) => {
    e.preventDefault()
    dispatch(getDataStart())
    const place_id = search
    try {
      const data = await DataService.getTodayData(place_id)
      dispatch(getDataSuccess(data))
      console.log(data)
    } catch (error) {

    }
    // // setSearch(e.target.value)
    // if(search.length<3){
    //   alert("Please submit place name!")
    // }else{
    //   // onSubmit(search)
    //   alert("good")
    // }


  }
  return (
    <div className='sideBar'>
      <form className="inputGroup">
        <input type="text" placeholder='Search for places ...' onChange={(e) => setSearch(e.target.value)} />
        <button type="submit" className='btn' onClick={handleForm}><RiSearchLine fontSize={"24px"} color='#fff' fontWeight={"800"} /></button>
      </form>
      {isLoading ? <h1>Undefinde</h1> :
        <>
          {successData ?
            <>
              <p><SlLocationPin color='#FFC307' fontSize={"20px"} fontWeight={"700"} /> <span>{getResponse?.timezone}</span></p>

              <h3><CgSun color='#FFC307' fontSize={"35px"} fontWeight={"1700"} /> {getResponse?.current.temperature}°</h3>

              <div className="update">
                <span>Weather for: {getResponse?.timezone}, {currentDate}</span>
              </div>

              <p>{getResponse?.current.summary}</p>
              <p>Cloud - {getResponse?.current.cloud_cover}%</p>

              <div className="imgBox">
                <h3>{getResponse?.timezone}</h3>
              </div>
            </> : <h1>Pleace enter city name</h1>
          }
        </>
      }
    </div>
  )
}

export default SideBar