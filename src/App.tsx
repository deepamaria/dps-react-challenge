import React from 'react';
// import dpsLogo from './assets/DPS.svg';
import SearchBar from './components/SearchBar';
import './App.css';

//  Define the User Interface
interface User {
	name: string;
	city: string;
	birthday: string;
}
  
// Create an array of users
const users: User[] = [
	{ name: 'Aletta Fudge', city: 'New York', birthday: '13.2.1986' },
	{ name: 'Anita Bath', city: 'Jacksonville', birthday: '7.5.1980' },
	{ name: 'Paige Turner', city: 'Washington', birthday: '13.2.1975' },
	{ name: 'Stan Still', city: 'Dallas', birthday: '31.10.1952' },
	{ name: 'Terry Aki', city: 'Columbus', birthday: '5.11.1960' },
];


const App: React.FC = () => {

return (
		<>
				<div className='App'>

					{/* Create  Components for searchbar, Dropdown checkbos */}
					<SearchBar />
					<Dropdown />
					<HighlightCheckbox />
					<UserTable />	
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
