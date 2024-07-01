import React from 'react';
import { LineElement, CategoryScale, Chart as Chartsjs, LinearScale, PointElement } from 'chart.js';
import { Line } from 'react-chartjs-2';
import { useEffect, useState } from 'react';
import fetchApiData from '../Api';

Chartsjs.register(
    CategoryScale,
    LinearScale,
    LineElement,
    PointElement
);


export default function Chart() {
    const [linedata, setLineData] = useState([]);
  
    useEffect(() => {
        fetchApiData().then((data) => {
          const jessicaData = data.find((patient) => patient.name === 'Jessica Taylor');
          if (jessicaData) {
            const recentHistory = jessicaData.diagnosis_history.slice(-6);
            setLineData(recentHistory);
          } else {
            console.warn("No data found for Jessica Taylor");
          }
        }).catch((error) => {
          console.warn("Fetch error:", error);
        });
      }, []);

    if (!linedata.length) {
        return <div>Loading...</div>;
    }
    let months = linedata.map(item => `${item.month.split(" ")[0].slice(0, 3)} ${item.year}`);
    let systolicValues = linedata.map(item => item.blood_pressure?.systolic?.value ?? 0);
    let diastolicValues = linedata.map(item => item.blood_pressure?.diastolic?.value ?? 0);


    const data = {
        labels: months,
        datasets: [{
            label: 'Systolic',
            data: systolicValues,
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            borderColor: 'rgb(255, 99, 132)',
            borderWidth: 1
        },
        {
            label: 'Diastolic',
            data: diastolicValues,
            backgroundColor: 'rgba(54, 162, 235, 0.2)',
            borderColor: 'rgba(54, 162, 235, 1)',
            borderWidth: 1
        }]
    };

    const options = {
        maintainAspectRatio: false,
        scales: {
            y: {
                beginAtZero: false,
                min: 60,
                max: 180
            }
        },
        plugins: {
            legend: {
                labels: {
                    fontSize: 14
                }
            }
        }
    };

    return (
        <div className='flex bg-[#F4F0FE] rounded-xl ps-4 pt-4 mt-10'>
            <div style={{ height: '278px', width: '502px' }}>
                <div className="flex items-center justify-between mb-5">
                    <p className='font-bold text-lg'>Blood Pressure</p>
                    <div className='flex items-center text-center me-8'>
                        <p className='text-sm me-4'>Last 6 months</p>
                        <svg xmlns="http://www.w3.org/2000/svg" width="10.646" height="6" viewBox="0 0 10.646 6">
                            <path id="expand_more_FILL0_wght300_GRAD0_opsz24" d="M271.741-608.384a.958.958,0,0,1-.335-.057.827.827,0,0,1-.3-.2l-4.478-4.479a.722.722,0,0,1-.212-.52.7.7,0,0,1,.212-.53.715.715,0,0,1,.525-.217.715.715,0,0,1,.525.217l4.059,4.059,4.059-4.059a.722.722,0,0,1,.52-.212.7.7,0,0,1,.53.212.715.715,0,0,1,.217.525.715.715,0,0,1-.217.525l-4.478,4.479a.826.826,0,0,1-.3.2A.958.958,0,0,1,271.741-608.384Z" transform="translate(-266.42 614.384)"/>
                        </svg>

                    </div>
                </div>
                <Line 
                    
                    data={data}
                    options={options}
                />
                
            </div>
            <div>
                <div className='systolic'>
                    <div className='flex text-center items-center pb-2'>
                        <span className='bg-[#E66FD2] h-[14px] me-2 w-[14px] inline-block rounded-full'></span>
                        <p className='font-bold text-sm'>Systolic</p>
                    </div>
                    <span className='font-bold text-xl'>{Math.max(...systolicValues)}</span>
                    <div className='flex items-center py-2'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="10" height="5.479" viewBox="0 0 10 5.479">
                         <path id="ArrowUp" d="M4.364,5.2.186,1.024A.673.673,0,0,1,.05.832.532.532,0,0,1,0,.6.606.606,0,0,1,.165.18.56.56,0,0,1,.6,0H9.4a.56.56,0,0,1,.434.181A.611.611,0,0,1,10,.6a1.85,1.85,0,0,1-.186.421L5.636,5.2a.962.962,0,0,1-.3.21.9.9,0,0,1-.677,0A.963.963,0,0,1,4.364,5.2Z" transform="translate(10 5.479) rotate(180)" fill="#072635"/>
                        </svg>
                        <p className='text-sm ms-2'>Higher than Average</p>
                    </div>
                </div>
                <hr className='bg-[#CBC8D4] my-4'/>
                <div className='Diastolic'>
                    <div className='flex text-center items-center pb-2'>
                        <span className='bg-[#E66FD2] h-[14px] me-2 w-[14px] inline-block rounded-full'></span>
                        <p className='font-bold text-sm'>Diastolic</p>
                    </div>
                    <span className='font-bold text-xl'>{Math.min(...diastolicValues)}</span>
                    <div className='flex items-center py-2'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="9.999" height="5.479" viewBox="0 0 9.999 5.479">
                         <path id="ArrowDown" d="M333.518-544.8l-4.177-4.178a.673.673,0,0,1-.136-.193.532.532,0,0,1-.05-.228.606.606,0,0,1,.165-.424.56.56,0,0,1,.434-.18h8.8a.56.56,0,0,1,.434.181.611.611,0,0,1,.165.423,1.85,1.85,0,0,1-.186.421l-4.177,4.177a.962.962,0,0,1-.3.21.851.851,0,0,1-.338.066.851.851,0,0,1-.339-.066A.963.963,0,0,1,333.518-544.8Z" transform="translate(-329.155 549.999)" fill="#072635"/>
                        </svg>
                        <p className='text-sm ms-2'>Lower than Average</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
