const Navbar = () => {
    return ( 
    <nav className='navbar'>
        <h1>casual navbar </h1>
        <div className="links">
            <a href="/">Home</a>
            <a href="/about">About</a>
            <a href="/contact">Contact</a>
            <a href='/uselessLink' style={{color: 'white',
            backgroundColor: '#f1356d',
            borderRadius: '8px',
            padding: '10px',
            }}>learninglink</a>
            {/* reminder if you want a dynamic value you need to add it between {} */}
            {/*the {} inside the {} is used to call in objects and yes you need to do it that way*/ }

        </div>

    </nav> 
    )};

export default Navbar;