import React, {useState, useEffect} from 'react';
import FemaleIcon from '../assets/svg/FemaleIcon.svg';
import PhoneIcon from '../assets/svg/PhoneIcon.svg';
import calender from '../assets/svg/calender.svg';
import fetchApiData from '../Api';
import moment from 'moment';
import Lapreport from './Labreport';


export default function Profile() {

   const [profile, setProfile] = useState([])
    useEffect(()=>{
        fetchApiData().then((data) => {
            const jessicaData = data.find((patient) => patient.name === 'Jessica Taylor')
            if(jessicaData) {
                const profileData = jessicaData
               //  console.log("profiledata", profileData)
                setProfile(profileData)
            }
            else {
                console.log("No Data found for jessica Taylor")
            }
        }).catch((error)=>{
            console.warn("Fetch error:", error);
        })
    }, [])

    
  return (
    <>
          <div class="flex flex-col p-5 w-[340px] h-[740px] mt-8 text-center text-gray-900 bg-white rounded-lg shadow dark:border-gray-600  dark:bg-gray-800 dark:text-white">
            <div className='mx-auto'>
                 <img src={profile.profile_picture} alt="" height={200} width={200}/>
            </div>
              <h3 class="mb-4 text-2xl font-extrabold pt-6">{profile.name}</h3>
                <ul role="list" class="mb-8 pt-8 space-y-6 text-left">
                  
                  <li class="flex items-center ">
                     <div className='bg-[#F6F7F8] items-center justify-center flex w-10 h-10 text-center rounded-full'>
                        <img src={calender} alt="" />
                     </div>
                     <div className='flex flex-col text-sm ms-3'>
                        <span class="mr-2 font-medium text-sm">Date Of Birth</span>
                        <span class="text-sm font-bold">{moment(profile.date_of_birth, 'MM/DD/YYYY').format('MMMM D, YYYY')}</span>
                     </div>
                  </li>
                  <li class="flex items-center">
                     <div className='bg-[#F6F7F8] items-center justify-center flex w-10 h-10 text-center rounded-full'>
                        <img src={FemaleIcon} alt="" />
                     </div>
                     <div className='flex flex-col text-sm ms-3'>
                        <span class="mr-2 font-medium text-sm">Gender</span>
                        <span class="text-sm font-bold">{profile.gender}</span>
                     </div>
                  </li>
                  <li class="flex items-center">
                     <div className='bg-[#F6F7F8] items-center justify-center flex w-10 h-10 text-center rounded-full'>
                        <img src={PhoneIcon} alt="" />
                     </div>
                     <div className='flex flex-col text-sm ms-3'>
                        <span class="mr-2 font-medium text-sm">Contact Info.</span>
                        <span class="text-sm font-bold">{profile.phone_number}</span>
                     </div>
                  </li>
                  <li class="flex items-center">
                     <div className='bg-[#F6F7F8] items-center justify-center flex w-10 h-10 text-center rounded-full'>
                        <img src={PhoneIcon} alt="" />
                     </div>
                     <div className='flex flex-col text-sm ms-3'>
                        <span class="mr-2 font-medium text-sm">Emergency Contacts</span>
                        <span class="text-sm font-bold">{profile.emergency_contact}</span>
                     </div>
                  </li>
                  <li class="flex items-center">
                     <div className='bg-[#F6F7F8] items-center justify-center flex w-10 h-10 text-center rounded-full'>
                        <img src={PhoneIcon} alt="" />
                     </div>
                     <div className='flex flex-col text-sm ms-3'>
                        <span class="mr-2 font-medium text-sm">Insurance Provider</span>
                        <span class="text-sm font-bold">{profile.insurance_type}</span>
                     </div>
                  </li>
                </ul>
                <div className='mt-4'>
                    <button type="button" class="bg-[#01F0D0] rounded-full w-56 text-sm px-4 py-2 text-center h-10 font-bold">Show All Information</button>
                </div>
          </div>
     <Lapreport />

          
    </>
  )
}
