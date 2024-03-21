import React from 'react'; 
import "./style.scss";
import courses from '../../constants/cursos';
import { Card, Link } from '../../components';



const ListaCursos = () => {
  return (
    <div className="course-list">
      {courses.map((course, index) => (
        <Link key={index} href={course.url}>
          <Card
            key={index}
            Icon={course.icon} 
            tutorName={course.author} 
            courseName={course.nome}
            describe={course.describe}
            rate={course.rate}
          />
        </Link>
      ))}
    </div>
  );
};

export default ListaCursos;