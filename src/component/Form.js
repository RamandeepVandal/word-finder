import React, { useState } from 'react';

export const Form = ({ getData }) => {
    // USER INPUT
    const [userIn, setUserIn] = useState('');

    const onSubmit = (e) => {
        e.preventDefault();

        getData(userIn);

        // reset the state
        setUserIn('');
    }

    return (
        <form className='form-section' onSubmit={onSubmit}>
            <input type="text" placeholder='Enter description Here' value={userIn} onChange={(e) => setUserIn(e.target.value)} />

            <input className='btn-input' type="submit" value='Search' />
        </form>
    )
}
