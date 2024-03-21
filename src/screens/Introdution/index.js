import React from 'react';
import "./style.scss"
import { IntrodutionMessages } from "../../constants/header";
import Illustration from '../../assets/images/illustration.svg'
import Layout from "../../layout";
import courses from "../../constants/cursos";
import ListaCursos from "../../data/ListaCursos";

const Introdution = () => (
    <Layout>
        <div className='introdution-container'>
            <div className='introdution-text'>
                <label>{IntrodutionMessages.title}</label>
                <p>{IntrodutionMessages.description}</p>
            </div>
            <img src={Illustration} alt='illustration' />
        </div>

        <div className='course-container'>
          <div className="course-text">
              <label>{IntrodutionMessages.cursos}</label>
          </div>
          <div className='courses'>
              <ListaCursos courses={courses} />
          </div>
        </div>


    </Layout>
);

export default Introdution;
