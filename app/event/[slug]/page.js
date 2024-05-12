"use client"
import classRoom from "@/assets/rooms.jpg";
// import { faCircle } from '@fortawesome/free-solid-svg-icons';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import "./style.css"; // Import CSS file
import Detail from '@/components/EventDetailCard';
import { useEffect, useState } from "react";

const EventDetailPage = ({ params }) => {
  const [data,setData] = useState({});
  useEffect(()=>{
    async function getData(){
      try{
        const response = await fetch(`/api/event/get/${params.slug}`)
        const responseJson = await response.json();
        setData(responseJson);
        console.log(responseJson)
       } catch(e){
        console.log(e)
       }
    }
    getData()
  },[])
  return (
    <div className='event-main'>
      <article className="class-section-2">
        <section className="details">
          <div className="heartdetailsgrid">
            <div className="font">
              <b><h2>{data?.name} </h2></b>
              <h3>{data.organization}</h3>
              <div className="class-type">
                {/* <FontAwesomeIcon icon={faCircle} style={{ width: '15px' }} /> Hackum Render FontAwesomeIcon */}
              </div>
            </div>
          </div>
          <div className="row">
              <Image src={classRoom} className="img" alt="Classroom"  /> 
            <Detail className="details" data={data} />
          </div>
        </section>
      </article>
      <div className="desc">
       <i>{data.description} </i>
      </div>
    </div>
  );
};

export default EventDetailPage;
