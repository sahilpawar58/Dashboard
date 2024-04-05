import React from 'react'
import { useContext } from 'react'
import AuthContext from '../context/AuthContext'
function VillageInfo() {
    const {user,village} = useContext(AuthContext);
    console.log(village)
  return (
    
    <>
     <div class="flex flex-col justify-center items-center w-[100vw] h-[100vh] bg-slate-200">
            <div class="relative flex flex-col items-center rounded-[20px] w-[700px] max-w-[95%] mx-auto bg-white bg-clip-border shadow-3xl shadow-shadow-500 dark:!bg-navy-800 dark:text-white dark:!shadow-none p-3">
                
                <div class="grid grid-cols-2 gap-4 px-2 w-full border border-gray-200 rounded-lg mt-10">

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

                    

                    <div class="flex flex-col items-start justify-center rounded-2xl bg-white bg-clip-border px-3 py-4 shadow-3xl shadow-shadow-500 dark:!bg-navy-700 dark:shadow-none">
                    <p class="text-sm text-gray-600">Total household</p>
                    <p class="text-base font-medium text-navy-700 dark:text-white">
                    {village[0].totalhouseholds}
                    </p>
                    </div>

                    <div class="flex flex-col justify-center rounded-2xl bg-white bg-clip-border px-3 py-4 shadow-3xl shadow-shadow-500 dark:!bg-navy-700 dark:shadow-none">
                    <p class="text-sm text-gray-600">Tap Connections</p>
                    <p class="text-base font-medium text-navy-700 dark:text-white">
                    {village[0].tap}
                    </p>
                    </div>

                    


                </div>
                

<div class="relative overflow-x-auto w-[700px] border border-gray-200 rounded-lg mt-5 p-3">
<p class="text-sm text-gray-600">Goverment Faculty</p>
    <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 ">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" class="px-6 py-3">
                    Name
                </th>
                <th scope="col" class="px-6 py-3">
                    Designation
                </th>
                <th scope="col" class="px-6 py-3">
                    Gender
                </th>
                <th scope="col" class="px-6 py-3">
                    Phone
                </th>
            </tr>
        </thead>
        <tbody>

            {village[0].Panchayat.map((member, index) => (
            <tr key={index} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                {member.Name}
              </th>
              <td className="px-6 py-4">
                {member.Designation}
              </td>
              <td className="px-6 py-4">
                {member.Gender}
              </td>
              <td className="px-6 py-4">
                {member.phone}
              </td>
            </tr>
          ))}

        </tbody>
    </table>
</div>

            </div>  
    </div>
    </>
  )
}

export default VillageInfo