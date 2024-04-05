import React from 'react'
import { useContext } from 'react'
import AuthContext from '../context/AuthContext'
function Profile() {
    const {user,village} = useContext(AuthContext);
    console.log(village)
  return (
    
    <>
     <div class="flex flex-col justify-center items-center w-[100vw] h-[100vh] bg-slate-200">
            <div class="relative flex flex-col items-center rounded-[20px] w-[700px] max-w-[95%] mx-auto bg-white bg-clip-border shadow-3xl shadow-shadow-500 dark:!bg-navy-800 dark:text-white dark:!shadow-none p-3">
                
            <img class="w-32 h-32 rounded-full" src={user.data.avatar} alt="Rounded avatar"></img>

                <div class="grid grid-cols-2 gap-4 px-2 w-full border border-gray-200 rounded-lg mt-10">
                    <div class="flex flex-col items-start justify-center rounded-2xl bg-white bg-clip-border px-3 py-4 shadow-3xl shadow-shadow-500 dark:!bg-navy-700 dark:shadow-none">
                    <p class="text-sm text-gray-600">Email</p>
                    <p class="text-base font-medium text-navy-700 dark:text-white">
                    {user.data.email}
                    </p>
                    </div>

                    <div class="flex flex-col justify-center rounded-2xl bg-white bg-clip-border px-3 py-4 shadow-3xl shadow-shadow-500 dark:!bg-navy-700 dark:shadow-none">
                    <p class="text-sm text-gray-600">Username</p>
                    <p class="text-base font-medium text-navy-700 dark:text-white">
                    {user.data.username}
                    </p>
                    </div>

                    <div class="flex flex-col items-start justify-center rounded-2xl bg-white bg-clip-border px-3 py-4 shadow-3xl shadow-shadow-500 dark:!bg-navy-700 dark:shadow-none">
                    <p class="text-sm text-gray-600">Name</p>
                    <p class="text-base font-medium text-navy-700 dark:text-white">
                    {user.data.fullName}
                    </p>
                    </div>

                    <div class="flex flex-col justify-center rounded-2xl bg-white bg-clip-border px-3 py-4 shadow-3xl shadow-shadow-500 dark:!bg-navy-700 dark:shadow-none">
                    <p class="text-sm text-gray-600">Id</p>
                    <p class="text-base font-medium text-navy-700 dark:text-white">
                    {user.data._id}
                    </p>
                    </div>

                    <div class="flex flex-col items-start justify-center rounded-2xl bg-white bg-clip-border px-3 py-4 shadow-3xl shadow-shadow-500 dark:!bg-navy-700 dark:shadow-none">
                    <p class="text-sm text-gray-600">Village</p>
                    <p class="text-base font-medium text-navy-700 dark:text-white">
                    {village[0].name}
                    </p>
                    </div>

                    <div class="flex flex-col justify-center rounded-2xl bg-white bg-clip-border px-3 py-4 shadow-3xl shadow-shadow-500 dark:!bg-navy-700 dark:shadow-none">
                    <p class="text-sm text-gray-600">Id</p>
                    <p class="text-base font-medium text-navy-700 dark:text-white">
                    {village[0].Tehsil}
                    </p>
                    </div>


                </div>
            </div>  
                 </div>
    </>
  )
}

export default Profile