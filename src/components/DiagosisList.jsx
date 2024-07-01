import React, {useState, useEffect} from 'react';
import fetchApiData from '../Api';

export default function DiagosisList() {
    const [listData, setListData] = useState([])

    useEffect(()=>{
        fetchApiData().then((data) => {
            const jessicaData = data.find((patient) => patient.name === 'Jessica Taylor')
            if(jessicaData) {
                const diagnosticList = jessicaData.diagnostic_list
                // console.log("diagnosticList", diagnosticList)
                setListData(diagnosticList)
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
        <div class="flex flex-col p-5 w-[766px] h-[349px] mt-8 text-gray-900 bg-white rounded-lg shadow dark:border-gray-600  dark:bg-gray-800 dark:text-white">
            <div className="flex justify-between items-center">
                <p className='text-2xl font-semibold'>Diagnostic List</p>
            </div>
            
           
            <div class="overflow-x-auto mt-10">
                <table class="min-w-full bg-white rounded-lg shadow-md">
                    <thead class="bg-[#F6F7F8] rounded-full h-12">
                        <tr>
                            <th class="rounded-tl-custom py-2 px-4 text-left text-sm font-bold text-gray-700">Problem/Diagnosis</th>
                            <th class="py-2 px-4 text-left text-sm font-bold text-gray-700">Description</th>
                            <th class="py-2 px-4 text-left rounded-tr-custom text-sm font-bold text-gray-700">Status</th>
                        </tr>
                    </thead>
                    <tbody className=''>
                        {listData.map((item, i)=> (
                            <tr key={i}>
                                <td class="px-5 py-4 text-sm text-gray-700">{item.name}</td>
                                <td class="px-5 py-4 text-sm text-gray-700">{item.description}</td>
                                <td class="px-5 py-4 text-sm text-gray-700">{item.status}</td>
                            </tr>
                        ))}
                        
                    </tbody>
                </table>
            </div>

        </div>
    </>
  )
}
