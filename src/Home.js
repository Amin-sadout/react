import { use, useState } from "react";

// using useState hooks to re render the our new values on the screen
const Home = () => {
const [number, setNumber] = useState(0);
const [name, setName] = useState('possibility a dev');
const [jobs, setjobs] = useState([
{title: 'baker', workHours: 37.5, salary: 40000, id: 1},
{title: 'developer', workHours: 40, salary: 80000, id: 2},
{title: 'designer', workHours: 35, salary: 60000, id: 3},  
{title: 'tesco colleague', workHours: 30, salary: 21000, id: 4},]);


// i know now that i cant use regular variables if i want to re render the component when they change
// let number = '0'
// let name = 'possibility a dev'

    const handleClick = () => {
        //number++ instead of using this we goinf for the setNumber 
        setNumber(number+ 1); //guess i can't use number++ so we'll have to add  + 1
        console.log('you clicked me ' + number + ' times on this session');
    }
    const handleClickTwo = (name) => {
        //name = 'developer' instead of this now we going for
        setName('developer');
        console.log('thanks for hiring me, im now a ' + setName);
    }
    return (
        <div className="home">
            <h1>Welcome to my new journey</h1>
            <p>i have been clicked this {number} many times</p>
            <p>i'am {name} right now</p>
            <button onClick={handleClick}> add up </button> {/*we made a dynamic value up there and added it between {} here to make this work.
            we also don't invoke the function ( adding () at the end) because it will invoke it automatically with us clicking on it*/}
            <button onClick={() => handleClickTwo('param')}> hiring button</button>
            {/* since we can't add a () in our function due to the previous reason, for us to pass in a name we'll
            have to put the whole dynamic function inside an anonymous function that will only be activated if clicked */}
            {jobs.map((job) => ( // reminder that .map will go through each item (job in this case) in the array (jobs in this case) and return some info for each item
<div className="jobList" key={job.id}> {/* we need to add id as a key to help react identify each item uniquely in case we have any changes in the future, like adding more or sum idk*/}
    <h2>{job.title}</h2>
    <p>work hours: {job.workHours} hours/week</p>
    <p>salary: ${job.salary}/year</p>
</div>
            ))};
        </div>
        

    );
}
 
export default Home;