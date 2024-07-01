import React, {useState} from 'react'
import logo from '../assets/svg/logo.svg';
import user from '../assets/img/user.png';

export default function Navbar() {
  const [isMenuVisible, setIsMenuVisible] = useState(false)
  const toggleMenu = () => {
    setIsMenuVisible(!isMenuVisible);
  };
  return (
    <>
      <nav className="h-[72px]">
        <div className="max-w-screen-2xl h-[72px] flex flex-wrap text-center items-center px-10 justify-between mx-4 bg-white rounded-full">
          <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
              <img src={logo} className="h-8" alt="Logo" />
          </a>
          <div className="flex items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse"> 
              <button type="button" className="flex text-sm bg-gray-800 rounded-full md:me-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600" id="user-menu-button" aria-expanded="false" data-dropdown-toggle="user-dropdown" data-dropdown-placement="bottom">
                <span className="sr-only">Open user menu</span>
                <img className="w-11 h-11 rounded-full" src={user} alt="user photo" />
              </button>
              <div className='text-sm pl-3 pr-4'>
                <span className='font-bold'>Dr. Jose Simmons</span>
                <p>General Practitioner</p>
              </div>
              <div className='flex items-center'>
                <span className='ms-2 me-3 cursor-pointer' onClick={toggleMenu}><svg xmlns="http://www.w3.org/2000/svg" width="18.944" height="20" viewBox="0 0 18.944 20">
                  <path id="settings_FILL0_wght300_GRAD0_opsz24" d="M128.365-840a1.334,1.334,0,0,1-.93-.357,1.481,1.481,0,0,1-.477-.88l-.257-1.97a4.826,4.826,0,0,1-.867-.4,5.593,5.593,0,0,1-.795-.547l-1.824.775a1.311,1.311,0,0,1-1,.042,1.439,1.439,0,0,1-.778-.64l-1.186-2.057a1.29,1.29,0,0,1-.16-.981,1.484,1.484,0,0,1,.538-.853l1.577-1.184q-.036-.235-.052-.472t-.015-.472q0-.225.015-.457t.052-.507l-1.577-1.184a1.462,1.462,0,0,1-.533-.858,1.317,1.317,0,0,1,.165-.986l1.176-2.026a1.475,1.475,0,0,1,.778-.635,1.3,1.3,0,0,1,1,.037l1.814.765a6.743,6.743,0,0,1,.813-.552,5.374,5.374,0,0,1,.849-.4l.267-1.97a1.48,1.48,0,0,1,.477-.88,1.334,1.334,0,0,1,.93-.357H130.7a1.334,1.334,0,0,1,.93.357,1.48,1.48,0,0,1,.477.88l.257,1.98a4.962,4.962,0,0,1,.857.4,7.079,7.079,0,0,1,.774.542l1.864-.765a1.3,1.3,0,0,1,1-.037,1.475,1.475,0,0,1,.778.635l1.176,2.036a1.29,1.29,0,0,1,.16.981,1.484,1.484,0,0,1-.538.853l-1.617,1.215a2.464,2.464,0,0,1,.062.477q.005.222.005.446t-.01.436a3.04,3.04,0,0,1-.073.507l1.587,1.194a1.509,1.509,0,0,1,.543.853,1.273,1.273,0,0,1-.155.981l-1.192,2.047a1.439,1.439,0,0,1-.783.64,1.323,1.323,0,0,1-1-.042l-1.8-.775a6.89,6.89,0,0,1-.8.552,4.806,4.806,0,0,1-.834.392l-.257,1.98a1.481,1.481,0,0,1-.477.88,1.334,1.334,0,0,1-.93.357Zm.113-1.579h2.069l.379-2.82a5.865,5.865,0,0,0,1.473-.6,6.5,6.5,0,0,0,1.286-1l2.615,1.1,1.036-1.789-2.283-1.721a4.308,4.308,0,0,0,.179-.8,6.6,6.6,0,0,0,.048-.794,6.438,6.438,0,0,0-.048-.794,4.115,4.115,0,0,0-.179-.781l2.3-1.741-1.036-1.79-2.646,1.115a5.607,5.607,0,0,0-1.266-1,5.444,5.444,0,0,0-1.493-.613l-.332-2.82h-2.089l-.348,2.81a5.5,5.5,0,0,0-1.488.583,6.275,6.275,0,0,0-1.3,1.012l-2.615-1.089-1.036,1.79,2.273,1.694a3.836,3.836,0,0,0-.184.779,6.615,6.615,0,0,0-.053.852,6.092,6.092,0,0,0,.053.806,4.6,4.6,0,0,0,.174.779l-2.263,1.721,1.036,1.789L125.347-846a5.9,5.9,0,0,0,1.281,1.008,5.951,5.951,0,0,0,1.508.6Zm1.065-5.263a3.045,3.045,0,0,0,2.236-.922A3.045,3.045,0,0,0,132.7-850a3.045,3.045,0,0,0-.922-2.236,3.045,3.045,0,0,0-2.236-.922,3.037,3.037,0,0,0-2.244.922,3.059,3.059,0,0,0-.914,2.236,3.058,3.058,0,0,0,.914,2.236A3.037,3.037,0,0,0,129.543-846.841ZM129.531-850Z" transform="translate(-120.059 859.999)" fill="#072635"/>
                  </svg>
                </span>
                <span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="3.714" height="18" viewBox="0 0 3.714 18">
                    <path id="more_vert_FILL0_wght300_GRAD0_opsz24" d="M421.858-752.767a1.788,1.788,0,0,1-1.312-.546,1.788,1.788,0,0,1-.546-1.312,1.788,1.788,0,0,1,.546-1.312,1.788,1.788,0,0,1,1.312-.546,1.788,1.788,0,0,1,1.312.546,1.788,1.788,0,0,1,.546,1.312,1.788,1.788,0,0,1-.546,1.312A1.789,1.789,0,0,1,421.858-752.767Zm0-7.143a1.788,1.788,0,0,1-1.312-.546,1.788,1.788,0,0,1-.546-1.312,1.788,1.788,0,0,1,.546-1.312,1.788,1.788,0,0,1,1.312-.546,1.788,1.788,0,0,1,1.312.546,1.788,1.788,0,0,1,.546,1.312,1.788,1.788,0,0,1-.546,1.312A1.789,1.789,0,0,1,421.858-759.91Zm0-7.143a1.788,1.788,0,0,1-1.312-.546A1.788,1.788,0,0,1,420-768.91a1.788,1.788,0,0,1,.546-1.312,1.788,1.788,0,0,1,1.312-.545,1.788,1.788,0,0,1,1.312.545,1.788,1.788,0,0,1,.546,1.312,1.788,1.788,0,0,1-.546,1.312A1.788,1.788,0,0,1,421.858-767.053Z" transform="translate(-420.001 770.767)" fill="#072635"/>
                  </svg>
                </span>
              </div>
              <button data-collapse-toggle="navbar-user" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-user" aria-expanded="false">
                <span className="sr-only">Open main menu</span>
                <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
                </svg>
            </button>
          </div>
          <div className="items-center text-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-user">
            <ul className="flex flex-col items-center text-center text-sm font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <a href="#" className="flex items-center text-center py-2 px-3 rounded md:bg-transparent md:p-0" aria-current="page">
                  <span className='me-2'><svg xmlns="http://www.w3.org/2000/svg" width="15.509" height="14" viewBox="0 0 15.509 17">
                      <path id="home_FILL0_wght300_GRAD0_opsz24" d="M181.552-782.242h3.46v-5.209a.9.9,0,0,1,.269-.666.9.9,0,0,1,.666-.269h3.619a.9.9,0,0,1,.666.269.9.9,0,0,1,.269.666v5.209h3.46v-9.146a.3.3,0,0,0-.035-.144.387.387,0,0,0-.094-.114l-5.885-4.424a.277.277,0,0,0-.189-.07.277.277,0,0,0-.189.07l-5.885,4.424a.387.387,0,0,0-.094.114.3.3,0,0,0-.035.144Zm-1.551,0v-9.146a1.856,1.856,0,0,1,.2-.841,1.792,1.792,0,0,1,.549-.654l5.885-4.434a1.8,1.8,0,0,1,1.12-.374,1.81,1.81,0,0,1,1.123.374l5.885,4.434a1.792,1.792,0,0,1,.549.654,1.856,1.856,0,0,1,.2.841v9.146a1.492,1.492,0,0,1-.458,1.093,1.492,1.492,0,0,1-1.093.458h-4.076a.9.9,0,0,1-.666-.269.9.9,0,0,1-.269-.666v-5.209h-2.386v5.209a.9.9,0,0,1-.269.666.9.9,0,0,1-.666.269h-4.076a1.492,1.492,0,0,1-1.093-.458A1.492,1.492,0,0,1,180-782.242ZM187.755-789.2Z" transform="translate(-180.001 797.691)" fill="#072635"/>
                    </svg>
                  </span>Overview</a>
              </li>
              <li className='bg-[#01F0D0] rounded-full px-4 py-2 '>
                <a href="#" className="flex items-center text-center  text-gray-900 md:p-0">
                  <span className='me-2'><svg xmlns="http://www.w3.org/2000/svg" width="23.733" height="14" viewBox="0 0 23.733 17">
                  <path id="group_FILL0_wght300_GRAD0_opsz24" d="M71.925-757.892a2.855,2.855,0,0,1,.464-1.6,3.165,3.165,0,0,1,1.24-1.1,17.938,17.938,0,0,1,3.335-1.251,14.514,14.514,0,0,1,3.685-.44,14.514,14.514,0,0,1,3.685.44,17.938,17.938,0,0,1,3.335,1.251,3.165,3.165,0,0,1,1.24,1.1,2.855,2.855,0,0,1,.464,1.6v.819a1.721,1.721,0,0,1-.516,1.235,1.677,1.677,0,0,1-1.251.532H73.692a1.7,1.7,0,0,1-1.251-.516,1.7,1.7,0,0,1-.516-1.252v-.819Zm21.966,2.586H91.249a3.637,3.637,0,0,0,.334-.852,3.69,3.69,0,0,0,.115-.915v-.962a4.528,4.528,0,0,0-.561-2.183A5.286,5.286,0,0,0,89.547-762a12.241,12.241,0,0,1,2.221.54,14.907,14.907,0,0,1,2.006.865,4.143,4.143,0,0,1,1.392,1.134,2.32,2.32,0,0,1,.491,1.425v.962a1.7,1.7,0,0,1-.516,1.252A1.7,1.7,0,0,1,93.891-755.306Zm-13.242-8.858a3.92,3.92,0,0,1-2.875-1.2,3.92,3.92,0,0,1-1.2-2.875,3.92,3.92,0,0,1,1.2-2.875,3.92,3.92,0,0,1,2.875-1.2,3.92,3.92,0,0,1,2.875,1.2,3.92,3.92,0,0,1,1.2,2.875,3.92,3.92,0,0,1-1.2,2.875A3.92,3.92,0,0,1,80.649-764.164Zm10.043-4.071a3.92,3.92,0,0,1-1.2,2.875,3.92,3.92,0,0,1-2.875,1.2,3.571,3.571,0,0,1-.5-.045,4.365,4.365,0,0,1-.5-.1,6.169,6.169,0,0,0,1.058-1.835,6.037,6.037,0,0,0,.37-2.094,5.864,5.864,0,0,0-.377-2.086,6.724,6.724,0,0,0-1.05-1.841,2.173,2.173,0,0,1,.5-.116,4.7,4.7,0,0,1,.5-.027,3.92,3.92,0,0,1,2.875,1.2A3.92,3.92,0,0,1,90.692-768.235ZM73.67-757.051H87.628v-.841a1.175,1.175,0,0,0-.182-.649,1.517,1.517,0,0,0-.578-.5,13.719,13.719,0,0,0-2.957-1.122,13.379,13.379,0,0,0-3.261-.381,13.379,13.379,0,0,0-3.261.381,13.719,13.719,0,0,0-2.957,1.122,1.517,1.517,0,0,0-.578.5,1.175,1.175,0,0,0-.182.649Zm6.979-8.858a2.24,2.24,0,0,0,1.643-.683,2.24,2.24,0,0,0,.683-1.643,2.24,2.24,0,0,0-.683-1.643,2.24,2.24,0,0,0-1.643-.683,2.24,2.24,0,0,0-1.643.683,2.24,2.24,0,0,0-.683,1.643,2.24,2.24,0,0,0,.683,1.643A2.24,2.24,0,0,0,80.649-765.909ZM80.649-757.051ZM80.649-768.235Z" transform="translate(-71.925 772.306)" fill="#072635"/>
                </svg>
                </span>Patients</a>
              </li>
              <li>
                <a href="#" className="flex items-center text-center py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
                  <span className='me-2'><svg xmlns="http://www.w3.org/2000/svg" width="15.119" height="14" viewBox="0 0 15.119 17">
                    <path id="calendar_today_FILL0_wght300_GRAD0_opsz24" d="M141.609-847.614a1.552,1.552,0,0,1-1.141-.467,1.552,1.552,0,0,1-.467-1.141v-11.9a1.552,1.552,0,0,1,.467-1.141,1.552,1.552,0,0,1,1.141-.467h1.231v-1.2a.663.663,0,0,1,.2-.488.663.663,0,0,1,.488-.2.663.663,0,0,1,.488.2.663.663,0,0,1,.2.488v1.2h6.738v-1.214a.646.646,0,0,1,.192-.475.646.646,0,0,1,.475-.192.646.646,0,0,1,.475.192.646.646,0,0,1,.192.475v1.214h1.231a1.552,1.552,0,0,1,1.141.467,1.552,1.552,0,0,1,.467,1.141v11.9a1.552,1.552,0,0,1-.467,1.141,1.552,1.552,0,0,1-1.141.467Zm0-1.334h11.9a.262.262,0,0,0,.188-.086.261.261,0,0,0,.086-.188v-8.346H141.335v8.346a.261.261,0,0,0,.085.188A.262.262,0,0,0,141.609-848.948Zm-.274-9.954h12.451v-2.223a.262.262,0,0,0-.086-.188.262.262,0,0,0-.188-.086h-11.9a.262.262,0,0,0-.188.086.262.262,0,0,0-.085.188Zm0,0v0Z" transform="translate(-140.001 864.614)" fill="#072635"/>
                  </svg>
                  </span>Schedule</a>
              </li>
              <li>
                <a href="" className="flex text-center items-center py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
                  <span className='me-2'><svg xmlns="http://www.w3.org/2000/svg" width="18.695" height="14" viewBox="0 0 18.695 17">
                  <path id="chat_bubble_FILL0_wght300_GRAD0_opsz24" d="M103.483-845.24l-1.97,1.97a.815.815,0,0,1-.966.19.829.829,0,0,1-.546-.828V-858.22a1.717,1.717,0,0,1,.517-1.262A1.717,1.717,0,0,1,101.78-860h15.137a1.717,1.717,0,0,1,1.262.517,1.717,1.717,0,0,1,.517,1.262v11.2a1.717,1.717,0,0,1-.517,1.262,1.717,1.717,0,0,1-1.262.517Zm-.628-1.476h14.062a.29.29,0,0,0,.208-.095.29.29,0,0,0,.095-.208v-11.2a.289.289,0,0,0-.095-.208.29.29,0,0,0-.208-.095H101.78a.289.289,0,0,0-.208.095.289.289,0,0,0-.095.208v12.867Zm-1.378,0v0Z" transform="translate(-100.001 859.999)" fill="#072635"/>
                </svg>
                </span>Message</a>
              </li>
              <li>
                <a href="#" className="flex text-center items-center py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
                  <span className='me-2'><svg xmlns="http://www.w3.org/2000/svg" width="21.533" height="14" viewBox="0 0 21.533 17">
                  <path id="credit_card_FILL0_wght300_GRAD0_opsz24" d="M121.534-777.95v12.9a1.978,1.978,0,0,1-.6,1.454,1.978,1.978,0,0,1-1.454.6H102.05a1.978,1.978,0,0,1-1.454-.6,1.978,1.978,0,0,1-.6-1.454v-12.9a1.978,1.978,0,0,1,.6-1.454A1.978,1.978,0,0,1,102.05-780h17.436a1.978,1.978,0,0,1,1.454.595A1.978,1.978,0,0,1,121.534-777.95ZM101.7-775.575h18.133v-2.376a.333.333,0,0,0-.109-.24.333.333,0,0,0-.24-.109H102.05a.333.333,0,0,0-.24.109.333.333,0,0,0-.109.24Zm0,3.618v6.909a.333.333,0,0,0,.109.24.333.333,0,0,0,.24.109h17.436a.333.333,0,0,0,.24-.109.333.333,0,0,0,.109-.24v-6.909Zm0,7.258v0Z" transform="translate(-100.001 779.999)" fill="#072635"/>
                </svg>
                </span>Transactions</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {isMenuVisible && (
                  <div className="menu absolute right-12 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 z-10">
                    <ul className='py-2 text-sm'>
                      <li>
                          <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</a>
                        </li>
                        <li>
                          <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Settings</a>
                        </li>
                        <li>
                          <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Reports</a>
                        </li>
                        <li>
                          <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Sign out</a>
                        </li>
                    </ul>
                  </div>
      )}

    </>
  )
}
