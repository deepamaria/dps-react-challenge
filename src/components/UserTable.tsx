import React from 'react';

interface User {
    name: string;
    city: string;
    birthday: string;
  }

  interface UserTableProps {
    users: User[];
    highlightOldest: boolean;
  } 

const UserTable: React.FC<UserTableProps> = ({ users, highlightOldest }) => {
  
    const getOldestUserPerCity = () => {  
 
    const oldestUsers: { [key: string]: User } = {};

    users.forEach(user => {
        const userBirthday = new Date(user.birthday.split('.').reverse().join('-'));
        if (!oldestUsers[user.city] || new Date(oldestUsers[user.city].birthday.split('.').reverse().join('-')) > userBirthday) {
            oldestUsers[user.city] = user;
          }
        });
        return oldestUsers;
      };

      const oldestUsers = highlightOldest ? getOldestUserPerCity() : {};
  
    return (
    <div>
    
    <table>
    <thead>
      <tr>
        <th>Name</th>
        <th>City</th>
        <th>Birthday</th>
      </tr>
    </thead>

    <tbody>
    {users.map(user => (
          <tr key={user.name} style={{ backgroundColor: oldestUsers[user.city]?.name === user.name ? 'lightblue' : 'transparent' }}>
            <td>{user.name}</td>
            <td>{user.city}</td>
            <td>{user.birthday}</td>
          </tr>
        ))}
    </tbody>

    </table>
    </div>
  );
}

export default UserTable;