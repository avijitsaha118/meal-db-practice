import React from 'react';

const Navbar = () => {
    return (
        <div>
            <div>
                  <h3>MealDB</h3>
            </div>
           
            <div>
                   <a href='/home'>Home</a>
                   <a href='/food'>Food</a>
                   <a href='/about'>About</a>
            </div>
        </div>
    );
};

export default Navbar;