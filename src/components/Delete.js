import React from 'react'

const Delete = () => {
    return (
        <div className='ui main'>
            <h2>Are you sure you want to delete this todo item?</h2>
            <form className='ui form'>
                <div className='field'>
                    <button>Yes</button>
                </div>
                <div className='field'>
                    <button>No</button>
                </div>
            </form>
        </div>
    )
}

export default Delete;
