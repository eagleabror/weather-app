import React, { useState } from 'react'
import "./weak.css"
import { useSelector } from 'react-redux'
import data from "./data"

const WeakData = () => {

    const { isLoading, getResponse, successData } = useSelector(state => state)

    // console.log(respons, "asdadad");
    // console.log(failed,  "ssdfsdfs")
    return (
        <div className='weekData'>
            <h1>Hourly</h1>
            <div className="box-container">
                {isLoading ? <p>Undefinde</p> :
                    <>
                        {successData ? <>
                        {getResponse?.hourly?.data.slice(0,6).map(res => {
                            return(
                                <div className="box">
                                    <h3>{res.temperature}°</h3>
                                    {data.map(index => {
                                        return(
                                            <>
                                                {res.icon == index.id ? <img key={index.id} src={index.imageUrl}/> : ""}
                                            </>
                                        )
                                    })}
                                    <h3>{res.date.slice(11,16)}</h3>
                                </div>
                            )
                        })}
                    </> : ""}
                    </>
                }
            </div>
        </div>
    )
}

export default WeakData