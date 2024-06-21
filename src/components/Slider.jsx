import React from '../assets/images/react.png'
import Js from '../assets/images/js.png'
import Firebase from '../assets/images/firebase.png'
import Tailwind from '../assets/images/tailwind.png'
import Node from '../assets/images/node.png'
import Supabase from '../assets/images/supabase.png'
import Python from '../assets/images/python.png'
import Mongodb from '../assets/images/mongodb.png'
import Database from '../assets/images/database.png'
export default function Slider() {
    return (
        <div className="carousel rounded-box">
            <div className="carousel-item ">
                <img src={React} alt="" />
            </div>
            <div className="carousel-item ">
                <img src={Js} alt="" />
            </div>
            <div className="carousel-item ">
                <img src={Firebase} alt="" />
            </div>
            <div className="carousel-item ">
                <img src={Tailwind} alt="" />
            </div>
            <div className="carousel-item ">
                <img src={Node} alt="" />
            </div>
            <div className="carousel-item ">
                <img src={Supabase} alt="" />
            </div>
            <div className="carousel-item ">
                <img src={Python} alt="" />
            </div>
            <div className="carousel-item ">
                <img src={Mongodb} alt="" />
            </div>
            <div className="carousel-item ">
                <img src={Database} alt="" />
            </div >
        </div >
    )
}
