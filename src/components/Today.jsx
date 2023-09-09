import React, { useEffect, useState } from 'react'
import { BiWind, BiWorld } from "react-icons/bi"
import { AiOutlineCloud } from "react-icons/ai"
import './today.css'
import { useSelector } from 'react-redux'

const TodayHighlight = () => {

  const { isLoading, getResponse, successData } = useSelector(state => state)

  return (
    <div className='todayHighlight'>
      <h1>Today's Highlights</h1>
      <div className="box-container">
        {isLoading ? <p>Undefinde</p> :
          <>
          {successData ? <>
            <>

<div className="box">
  <span>Wind Status</span>
  <h1><BiWind fontSize={"30px"} color='#54BBFF' /> {getResponse?.current.wind.speed} m/h</h1>
</div>
<div className="box">
  <span>TimeZone</span>
  <h1><BiWorld fontSize={"20px"} color='#54BBFF' /> <span style={{ fontSize: "20px" }}>{getResponse?.timezone}</span> </h1>
</div>
<div className="box">
  <span>Cloud</span>
  <h1><AiOutlineCloud fontSize={"30px"} color='#54BBFF' /> {getResponse?.current.cloud_cover}%</h1>
</div></>
          </> : ""}
          </>
        }
      </div>
    </div>
  )
}

export default TodayHighlight