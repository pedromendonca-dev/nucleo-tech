import React from 'react';
import "./style.scss";
import star from './../../assets/icons/star.svg'






const Card = ({ Icon, tutorName, courseName, describe, rate}) => {
  return (
      <section className="card-container">
        <img src={Icon} alt="Course Icon" />
        <div className="tutor-name">Prof.: {tutorName}</div>
        <div className='description-container'>
          <div className="courseName">{courseName}</div>
          <div className="courseDescription">{describe}</div>
          <div className="courseRate"> <img src={star} alt='#'/> {rate} </div>
        </div>
      </section>
 
  );
};

export default Card;