import React, {useState, useEffect} from 'react';
import respiratoryrate from '../assets/svg/respiratoryrate.svg';
import ArrowDown from '../assets/svg/ArrowDown.svg';
import temperature from '../assets/svg/temperature.svg';
import HeartBPM from '../assets/svg/HeartBPM.svg';
import DiagosisList from './DiagosisList';
import Chart from './Chart';
import fetchApiData from '../Api';


export default function Diagnosis() {
    const [petientData, setPetientData] = useState([])
    useEffect(()=>{
        fetchApiData().then((data) => {
            const jessicaData = data.find((patient) => patient.name === 'Jessica Taylor')
            if(jessicaData) {
                const recentHistory = jessicaData.diagnosis_history
                // console.log("recenthistory", recentHistory)
                setPetientData(recentHistory)
            }
            else {
                console.log("No Data found for jessica Taylor")
            }
        }).catch((error)=>{
            console.warn("Fetch error:", error);
        })
    }, [])

    const currentMonth = new Date().toLocaleString("en-US", { month: "long" });
    let respiratoryValues = petientData.find((item) => item.month === currentMonth)?.respiratory_rate?.value ?? 0;
    let respiratoryLevel = petientData.find((item) => item.month === currentMonth)?.respiratory_rate?.levels ?? 0;
    let tempValues = petientData.find((item) => item.month === currentMonth)?.temperature?.value ?? 0;
    let tempLevel = petientData.find((item) => item.month === currentMonth)?.temperature?.levels ?? 0;
    let heatrateValues = petientData.find((item) => item.month === currentMonth)?.heart_rate?.value ?? 0;
    let heatrateLevel = petientData.find((item) => item.month === currentMonth)?.heart_rate?.levels ?? 0;



  return (
    <>
        <div class="p-5 w-[766px] h-[673px] mt-8 text-gray-900 bg-white rounded-lg shadow dark:border-gray-600  dark:bg-gray-800 dark:text-white">
            <div className="items-center">
                <p className='text-2xl font-semibold'>Diagnosis History</p>
            </div>
              <Chart />
              {/* cards */}
              <div className="flex justify-between mt-5">
                 <div className="bpm bg-[#E0F3FA] w-[228px] h-[242px] py-4 ps-4 rounded-xl">
                    <img src={respiratoryrate} alt="" />
                    <div className='pt-4'>
                        <p className='font-medium text-[16px]'>Respiratory Rate</p>
                        <span className='font-bold text-3xl'>{respiratoryValues} bpm</span>
                    </div>
                    <p className='mt-4 text-sm'>{respiratoryLevel}</p>

                 </div>
                 <div className="temp bg-[#FFE6E9] w-[228px] h-[242px] py-4 ps-4 rounded-xl">
                    <img src={temperature} alt="" />
                    <div className='pt-4'>
                        <p className='font-medium text-[16px]'>Temperature</p>
                        <span className='font-bold text-3xl'>{tempValues}&deg;F</span>
                    </div>
                    <p className='mt-4 text-sm'>{tempLevel}</p>

                 </div>
                 <div className="temp bg-[#FFE6F1] w-[228px] h-[242px] py-4 ps-4 rounded-xl">
                    <img src={HeartBPM} alt="" />
                    <div className='pt-4'>
                        <p className='font-medium text-[16px]'>Heart Rate</p>
                        <span className='font-bold text-3xl'>{heatrateValues} bpm</span>
                    </div>
                    <p className='mt-4 text-sm'>{heatrateLevel}</p>

                 </div>
              </div>
        </div>
        <DiagosisList />
    </>
  )
}
