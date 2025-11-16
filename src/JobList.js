const JobList = ({jobs, title, HandleDelete}) => { {/* now i recieve props as an argument to access the data i passed from home.js*/}
// const jobs = props.jobs; 
{/* this way i can access the jobs array from props using props.jobs and assign it to a variable called jobs, i'll have to do this
    or else react will throw an error. but to simplify it. i can add them directly up there by having them between {}*/}    
    return ( 
   // reminder that .map will go through each item (job in this case) in the array (jobs in this case) and return some info for each item
<div className="jobList">
    <h1>{title}</h1> {/* now i use that prop that we got from home.js and sent here through props to display the data from there here */}
    {jobs.map((job) => ( 
        <div className="Job-preview" key={job.id}> {/* i need to add id as a key to help react identify each item uniquely in case i have any changes in the future, like adding more or sum idk*/}
    <h2>{job.title}</h2> {/* i access the title of each job item using job.title */}
    <p>work hours: {job.workHours} hours/week</p> {/* i access the workHours of each job item using job.workHours */}
    <p>salary: ${job.salary}/year</p>  {/* i access the salary of each job item using job.salary */}
    <button onClick={() => HandleDelete(job.id)}> Delete Job </button> {/* i added a delete button for each job that will call the HandleDelete function when clicked and pass the id of the job to be GONE! deleted ofc */}
    </div> 
    ))};
</div>
    
        
     );
}
export default JobList;