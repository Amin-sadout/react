import { useState } from "react";
import JobList from "./JobList";

// using useState hooks to re render the the new values on the screen
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

const HandleDelete = (id) => {
    const newJobs = jobs.filter(job => job.id !== id); // this will create a new array without the job with id 2 without altering the original array that i got. // i use the setJobs function to update the jobs state with the new array
    setjobs(newJobs);
}

    const handleClick = () => {
        //number++ instead of using this iam going for the setNumber 
        setNumber(number+ 1); //guess i can't use number++ so we'll have to add  + 1
        console.log('you clicked me ' + number + ' times on this session');
    }
    const handleClickTwo = (name) => {
        //name = 'developer' instead of this now i'am going for
        setName('developer');
        console.log('thanks for hiring me, im now a ' + setName);
    }
    return (
        <div className="home">
            <h1>Welcome to my new journey</h1>
            <p>i have been clicked this {number} many times</p>
            <p>i'am {name} right now</p>
            <button onClick={handleClick}> add up </button> {/*i made a dynamic value up there and added it between {} here to make this work.
          i also don't invoke the function ( adding () at the end) because it will invoke it automatically without clicking on it*/}
            <button onClick={() => handleClickTwo('param')}> hiring button</button>
            {/* since i can't add a () in za function due to the previous reason, for me to pass in a name i'll
            have to put the whole dynamic function inside an anonymous function that will only be activated if i click it */}
    <JobList jobs={jobs} title= 'All Available Jobs oppourtunities' HandleDelete={HandleDelete} /> {/* i copied everything from here to JobList component
    i also added props(data that i input, in this case the jobs and title i got from the dynamic value(array)) and use it */}
     <JobList jobs={jobs.filter(job => job.salary >= 40000)} title='what i want'  HandleDelete={HandleDelete} />
    
        </div>
        

    );
}
 
export default Home;