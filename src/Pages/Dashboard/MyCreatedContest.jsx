import React from 'react';

const MyCreatedContest = () => {
    return (
        <div>
            <h1 className='text-7xl font-bold'>all posts created by creator Get api by email</h1>
            <div className="overflow-x-auto w-10/11 mx-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Status</th>
        <th>See Submission</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      <tr>
        <th>1</th>
        <td>Cy Ganderton</td>
        <td>C Programming Contest</td>
        <td>Submission</td>
        <td> <button className="btn bg-green-300 btn-sm">Edit</button> <button className="btn bg-red-300 btn-sm">Delete</button></td>
      </tr>
      
    </tbody>
  </table>
</div>
        </div>
    );
};

export default MyCreatedContest;