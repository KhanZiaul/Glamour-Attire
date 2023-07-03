// import { Link } from "react-router-dom";
import useManageUsers from "../../../../CustomHook/useManageUsers/useManageUsers";
import useAxiosSecure from "../../../../CustomHook/useAxiosSecure/useAxiosSecure";
import Swal from "sweetalert2";

import {BsFillTrashFill} from 'react-icons/bs'


const ManageUsers = () => {
    const [axiosSecure] = useAxiosSecure()

    const [manageUsers, refetch] = useManageUsers()

    function removeUser(id) {
        console.log(id)
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.delete(`/removeUser/${id}`)
                    .then(data => {
                        if (data.data.deletedCount > 0) {
                            refetch()
                            Swal.fire(
                                'Deleted!',
                                'User has been deleted.',
                                'success'
                            )
                        }
                        console.log(data.data)
                    })
            }
        })
    }

    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table bg-white">
                    {/* head */}
                    <thead>
                        <tr className="uppercase bg-[#1B6B93] text-white">
                            <th>#</th>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Make Seller</th>
                            <th>Make Admin</th>
                            <th>Remove User</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            manageUsers?.map((allUser, index) => {
                                return (
                                    <tr  key={allUser._id}>
                                        <th>{index + 1}</th>
                                        <td>
                                            <img className="w-10 h-10 rounded-full" src={allUser.image} alt="user" />
                                        </td>
                                        <td>{allUser.name}</td>
                                        <td>{allUser.email}</td>
                                        <td className="font-bold">{allUser.role}</td>
                                        <td>
                                            <button  className="btn btn-outline btn-info btn-xs" disabled={allUser.updatedRole === "true"}>Seller</button>
                                        </td>
                                        <td>
                                            <button disabled={allUser.updatedRole === "true"} className="btn btn-outline btn-success btn-xs" >Admin</button>
                                        </td>
                                        <td>
                                            <BsFillTrashFill onClick={()=>removeUser(allUser._id)} className="w-6 h-6 cursor-pointer text-[#FF6464]"></BsFillTrashFill>
                                        </td>

                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default ManageUsers;

// onClick={() => deleteClass(selectClass._id)}

// onClick={() => makeAdminHandler(allUser._id)} 

// onClick={() => makeInstructorHandler(allUser._id)}