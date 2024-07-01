import React, { useState, useEffect } from "react";
import fetchApiData from "../Api";

export default function Patients() {
  const [patientList, setPetientList] = useState([]);
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [filterdata, setFilterData] = useState([])
  const [query, setQuery] = useState('')

  const toggleMenu = () => {
    setIsMenuVisible(!isMenuVisible);
  };

  const toggleSearch = () => {
    setIsExpanded(!isExpanded);
  };

  useEffect(() => {
    fetchApiData()
      .then((data) => {
        // console.warn("All data:", data);
        setPetientList(data.slice(0, 12));
      })
      .catch((error) => {
        console.warn("Fetch error:", error);
      });
  }, []);

  const handleSearch = (event) => {
  const getSearch = event.target.value;
  setQuery(getSearch);
//   console.log(getSearch)
  if(getSearch.length > 0){
    const searchdata = patientList.filter((item)=>item.name.toLowerCase().includes(getSearch))
    setPetientList(searchdata)
  }
  else{
   setPetientList(filterdata)
  }

  }
  
  return (
    <>
      <div class="flex flex-col overflow-auto p-5 w-[350px] h-[1054px] mt-8 text-center text-gray-900 bg-white rounded-lg border border-gray-100 shadow dark:border-gray-600 dark:bg-gray-800 dark:text-white">
        <div className="flex justify-between items-center">
          <p className="text-2xl font-semibold">Patients</p>
        
          
          {isExpanded ? (
          <>
            <input
              type="text"
              value={query}
              onChange={(e)=>handleSearch(e)}
              className="border border-gray-300 rounded-full py-1 ms-4 w-1/2 outline-none flex-1"
              placeholder="Search..."
            />
            <span onClick={toggleSearch} className="ms-2 cursor-pointer bg-green-500 p-2 rounded-full">
               <svg
               xmlns="http://www.w3.org/2000/svg"
               
               width="17.995"
               height="18"
               viewBox="0 0 17.995 18"
               >
               <path
                  id="search_FILL0_wght300_GRAD0_opsz24"
                  d="M142.675-811.574a6.293,6.293,0,0,1-4.626-1.895,6.293,6.293,0,0,1-1.895-4.626,6.293,6.293,0,0,1,1.895-4.626,6.293,6.293,0,0,1,4.626-1.895,6.293,6.293,0,0,1,4.626,1.895,6.293,6.293,0,0,1,1.895,4.626,6.254,6.254,0,0,1-.383,2.182,6.1,6.1,0,0,1-1.023,1.808l6.135,6.135a.773.773,0,0,1,.227.557.754.754,0,0,1-.227.567.765.765,0,0,1-.562.232.765.765,0,0,1-.562-.232l-6.135-6.135a6.1,6.1,0,0,1-1.839,1.033,6.318,6.318,0,0,1-2.151.373Zm0-1.6a4.749,4.749,0,0,0,3.491-1.43,4.749,4.749,0,0,0,1.43-3.491,4.749,4.749,0,0,0-1.43-3.491,4.749,4.749,0,0,0-3.491-1.43,4.749,4.749,0,0,0-3.491,1.43,4.749,4.749,0,0,0-1.43,3.491,4.749,4.749,0,0,0,1.43,3.491A4.749,4.749,0,0,0,142.675-813.173Z"
                  transform="translate(-136.155 824.614)"
                  fill="#072635"
               />
               </svg>
            </span>
           
          </>
        ):(
         <span onClick={toggleSearch} className="cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              
              width="17.995"
              height="18"
              viewBox="0 0 17.995 18"
            >
              <path
                id="search_FILL0_wght300_GRAD0_opsz24"
                d="M142.675-811.574a6.293,6.293,0,0,1-4.626-1.895,6.293,6.293,0,0,1-1.895-4.626,6.293,6.293,0,0,1,1.895-4.626,6.293,6.293,0,0,1,4.626-1.895,6.293,6.293,0,0,1,4.626,1.895,6.293,6.293,0,0,1,1.895,4.626,6.254,6.254,0,0,1-.383,2.182,6.1,6.1,0,0,1-1.023,1.808l6.135,6.135a.773.773,0,0,1,.227.557.754.754,0,0,1-.227.567.765.765,0,0,1-.562.232.765.765,0,0,1-.562-.232l-6.135-6.135a6.1,6.1,0,0,1-1.839,1.033,6.318,6.318,0,0,1-2.151.373Zm0-1.6a4.749,4.749,0,0,0,3.491-1.43,4.749,4.749,0,0,0,1.43-3.491,4.749,4.749,0,0,0-1.43-3.491,4.749,4.749,0,0,0-3.491-1.43,4.749,4.749,0,0,0-3.491,1.43,4.749,4.749,0,0,0-1.43,3.491,4.749,4.749,0,0,0,1.43,3.491A4.749,4.749,0,0,0,142.675-813.173Z"
                transform="translate(-136.155 824.614)"
                fill="#072635"
              />
            </svg>
          </span>
        )}
        </div>
        <ul role="list" class="mb-8 pt-8 space-y-5 text-left">
          {patientList.map((items, i) => (
            <li
              class={`flex items-center ${
                i === 3 ? "bg-[#D8FCF7] & py-2" : ""
              }`}
              key={i}
            >
              <div>
                <img
                  src={items.profile_picture}
                  alt=""
                  style={{ height: 48 }}
                />
              </div>
              <div className="flex-1 text-sm ms-3">
                <div className="flex flex-col">
                  <span className="font-bold">{items.name}</span>
                  <span className="text-[#707070]">
                    {items.gender}, {items.age}
                  </span>
                </div>
              </div>
              <div className="cursor-pointer" onClick={toggleMenu}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="3.714"
                  viewBox="0 0 18 3.714"
                >
                  <path
                    id="more_horiz_FILL0_wght300_GRAD0_opsz24"
                    d="M191.09-536.285a1.788,1.788,0,0,1-1.312-.546,1.788,1.788,0,0,1-.546-1.312,1.788,1.788,0,0,1,.546-1.312A1.788,1.788,0,0,1,191.09-540a1.788,1.788,0,0,1,1.312.546,1.788,1.788,0,0,1,.546,1.312,1.788,1.788,0,0,1-.546,1.312A1.788,1.788,0,0,1,191.09-536.285Zm7.143,0a1.788,1.788,0,0,1-1.312-.546,1.788,1.788,0,0,1-.546-1.312,1.788,1.788,0,0,1,.546-1.312,1.788,1.788,0,0,1,1.312-.546,1.788,1.788,0,0,1,1.312.546,1.788,1.788,0,0,1,.546,1.312,1.788,1.788,0,0,1-.546,1.312A1.788,1.788,0,0,1,198.233-536.285Zm7.143,0a1.788,1.788,0,0,1-1.312-.546,1.788,1.788,0,0,1-.546-1.312,1.788,1.788,0,0,1,.546-1.312,1.788,1.788,0,0,1,1.312-.546,1.788,1.788,0,0,1,1.312.546,1.788,1.788,0,0,1,.546,1.312,1.788,1.788,0,0,1-.546,1.312,1.788,1.788,0,0,1-1.312.546Z"
                    transform="translate(-189.233 539.999)"
                    fill="#072635"
                  />
                </svg>
              </div>
            </li>
          ))}
        </ul>
        {isMenuVisible && (
          <div className="menu absolute left-[14rem] mt-20 bg-white divide-y divide-gray-100 rounded-lg shadow z-10">
            <ul className="py-2 text-sm">
              <li>
                <a
                  href="#"
                  class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  View
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  Settings
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  Reports
                </a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </>
  );
}
