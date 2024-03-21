import React from 'react'; 
import "./style.scss";
import courses from '../../constants/users';

const UsersList = () => {
  return (
    <div className="">
      {users.map((user, index) => (
        <Card
          key={index}
          userName={user.nome}
          email={user.email}
          password={user.senha}
          telefone={user.telefone}
        />
      ))}
    </div>
  );
};

export default UsersList;