import React from 'react'; 
import "./style.scss";
import courses from '../../constants/cursos';
import { Card, Link } from '../../components';

//PEDRO! acho q deveriamos por essa pasta em components e deixar o db em data. mais organizado e faz mais sentido...

const ListaCursos = () => {
  return (
    <div className="course-list">
      {courses.map((course, index) => (
        <Link key={index} href={`/curso/${course.id}`}>
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