const Home = () => {

let number = '0';
let name = 'possibility a dev';

    const handleClick = () => {
        number++;
        console.log('you clicked me ' + number + ' times on this session');
    }
    const handleClickTwo = (name) => {
        name = 'developer';
        console.log('thanks for hiring me, im now a ' + name);
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
        </div>

    );
}
 
export default Home;