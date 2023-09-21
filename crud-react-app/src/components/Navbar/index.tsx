import React from 'react';

interface NavbarProps {
    name: string;
}

const Navbar: React.FC<NavbarProps> = ({ name }) => {
    return <div>
        Hello, {name}! 
        </div>
        ;
};

export default Navbar