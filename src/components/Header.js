import React from 'react'
import { useLocation } from 'react-router-dom'
import Button from './Button'

// Props type
import PropTypes from 'prop-types'


const Header = ({ title, onAdd, showAdd, showUpdate, onUpdate }) => {

    const location = useLocation()

    return (
        <div>
            <header className="header">
                <h1>{title}</h1>
                { location.pathname === '/' && <Button color={(showAdd || showUpdate) ? 'red' : 'green'} text={(showAdd || showUpdate) ? 'Close' : 'Add'} onClick={showUpdate ? onUpdate : onAdd} /> }
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

