import React from 'react'
import Button from './Button'

// Props type
import PropTypes from 'prop-types'


const Header = ({ title }) => {
    const onClick = () => {
        console.log('click');
    }
    return (
        <div>
            <header className="header">
                <h1>{title}</h1>
                <Button color='green' text='Add' onClick={onClick} />
            </header>
        </div>
    )
}

// Default props
Header.defaultProps = {
    title: 'Task Tracker'
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
}

// CSS in JS

// const headingStyle = {
//     color: 'red', 
//     backgroundColor: 'black'
// }

export default Header

