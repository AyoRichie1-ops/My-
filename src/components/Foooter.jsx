import React from 'react'
const date = new Date().getFullYear()

const Foooter = () => {
    return (
        <div className='footer'>
            &copy; {date}
            <span >Onanusi Abdul-lateef</span>
        </div>
    )
}

export default Foooter