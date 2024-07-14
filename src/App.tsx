import React, { useEffect, useState } from 'react';
// import dpsLogo from './assets/DPS.svg';
import SearchBar from './components/SearchBar';
import DropDown from './components/DropDown';
import HighlightCheckbox from './components/HighlightCheckbox';
import UserTable from './components/UserTable';
import './App.css';

//  Define the User Interface
interface User {
	id: number;
	name: string;
	city: string;
	birthday: string;
}

//   Array for dummy Purpose

// // Create an array of users
// const users: User[] = [
// 	{ name: 'Aletta Fudge', city: 'New York', birthday: '13.2.1986' },
// 	{ name: 'Anita Bath', city: 'Jacksonville', birthday: '7.5.1980' },
// 	{ name: 'Paige Turner', city: 'Washington', birthday: '13.2.1975' },
// 	{ name: 'Stan Still', city: 'Dallas', birthday: '31.10.1952' },
// 	{ name: 'Terry Aki', city: 'Columbus', birthday: '5.11.1960' },
// ];


const App: React.FC = () => {

	const [users, setUsers] = useState<User[]>([]);

	const [filteredUsers, setFilteredUsers] = useState<User[]>([]);

	const [searchTerm, setSearchTerm] = useState('');

	const [selectedCity, setSelectedCity] = useState('');

	const [highlightOldest, setHighlightOldest] = useState(false);

	useEffect(() => {
		fetch('https://dummyjson.com/users')
		  .then(response => response.json())
		  .then(data => {
			const formattedUsers = data.users.map((user: any) => ({
			  id: user.id,
			  name: `${user.firstName} ${user.lastName}`,
			  city: user.address.city,
			  birthday: user.birthDate.split('-').reverse().join('.'),
			}));
			setUsers(formattedUsers);
			setFilteredUsers(formattedUsers);
		  });
	  }, []);

	useEffect(() => {
	const filtered = users.filter(user => 
		user.name.toLowerCase().includes(searchTerm.toLowerCase()) && 
		(selectedCity ? user.city === selectedCity : true)
	  );
	  setFilteredUsers(filtered);
	}, [searchTerm, selectedCity, users]);

return (
		<>
				<div className='App'>
					<div className='mainContainer'>
					
						<div className='container1'>

						{/* Create  Components for searchbar, Dropdown, Checkbox */}
						
		
						<SearchBar onSearch={setSearchTerm} />
						<DropDown onSelect={setSelectedCity} />
						<HighlightCheckbox onChange={setHighlightOldest} />
						</div>
						
						<div className='container2'>
						<UserTable users={filteredUsers} highlightOldest={highlightOldest} />	
						</div>
					</div>			
				</div>
		</>
			
			
			//  <div>
			//  	 <a href="https://www.digitalproductschool.io/" target="_blank"> 
			//  		 <img src={dpsLogo} className="logo" alt="DPS logo" /> 
			//  	 </a> 
			//  </div>
			//  <div className="home-card">
			//  <p>Your solution for the challenge goes here 😊</p> 
			//  </div> 
	);
}

export default App;
