import React from 'react';
import {Link} from 'react-router-dom';

const EmailSent = () => {
  return (
    <div className='text-center py-5'>
        <div className="py-5">

        <h3>Email sent successfully</h3>
        </div>
        <Link to='/' className='btn btn-success'>Back To Home</Link>
    </div>
  )
}

export default EmailSent