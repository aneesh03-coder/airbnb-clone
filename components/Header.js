import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import {SearchIcon,GlobeAltIcon,MenuIcon,UserCircleIcon,UsersIcon} from '@heroicons/react/solid'
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { DateRangePicker,DateRange } from 'react-date-range';
import {BrowserView, MobileView, TabletView} from 'react-device-detect';

const Header = () => {
    const [searchInput,setSearchInput]=useState('');
    const [startDate,setStartDate]=useState(new Date())
    const [endDate,setEndDate]=useState(new Date())
    const [noOfGuests,setNoOfGuests]=useState(1);
    const [width, setWidth] = useState('');
    
        function handleWindowSizeChange() {
                setWidth(window.innerWidth);
                console.log(width)
            }
        useEffect(() => {
                setWidth(window.innerWidth);
                window.addEventListener('resize', handleWindowSizeChange);
                return () => {
                    window.removeEventListener('resize', handleWindowSizeChange);
                }
            }, []);

    // const maxDate = new Date();
    // maxDate.setDate(maxDate.getDate() + 7);
    // const disabledDates=[new Date("2021-08-19")]

    const selectionRange = {
        startDate: startDate,
        endDate: endDate,
        key: 'selection',
      }

    const handleSelect=(ranges)=>{
        setStartDate(ranges.selection.startDate)
        setEndDate(ranges.selection.endDate)
    }

    const resetInput=()=>{
        setSearchInput('')
        setStartDate(new Date())
        setEndDate(new Date())
    }

    return (
        <header className='sticky  top-0 z-50 grid grid-cols-3 bg-white shadow-md py-5 px-5 md:px-10'>
            {/* Left Section */}
            <div className='relative flex items-center h-9 md:h-10 cursor-pointer my-auto'>
                <Image 
                    src='https://links.papareact.com/qd3'
                    layout='fill'
                    objectFit='contain'
                    objectPosition='left'
                    
                />
            </div>

            {/* Middle Section - Search */}
            <div className='flex items-center md:border-2 rounded-full py-2 md:shadow-md mr-2'>
                <input type="text" className='flex-grow text-sm text-gray-600 placeholder-gray-400 pl-5 bg-transparent outline-none' placeholder='Start your Search' value={searchInput} onChange={e => setSearchInput(e.target.value)}/>
                <SearchIcon className='hidden md:inline-flex h-8 bg-red-400 text-white rounded-full cursor-pointer p-2 mx-2'/>
            </div>

            {/* Right Section */}
            <div className='flex space-x-4 items-center justify-end text-gray-500'>
                <p className='hidden md:inline-flex cursor-pointer'>Become a host</p>
                <GlobeAltIcon className='h-6 cursor-pointer'/>
                <div className='flex items-center space-x-2 border-2 p-2 rounded-full cursor-pointer'>
                  <MenuIcon className='h-6'/> 
                  <UserCircleIcon className='h-6'/> 
                </div>
            </div>

            {searchInput && (
                <div className='flex flex-col col-span-3 mx-auto mt-1'>
                {/* <BrowserView> */}
                {width <=768 ?( <DateRange
                    ranges={[selectionRange]}
                        minDate={new Date()}
                        // maxDate={maxDate}
                        // disabledDates={disabledDates}
                        rangeColors={["#FD5B61"]}
                        onChange={handleSelect}
                        editableDateInputs={true}
                    />):(
                    <DateRangePicker
                        ranges={[selectionRange]}
                        minDate={new Date()}
                        // maxDate={maxDate}
                        // disabledDates={disabledDates}
                        rangeColors={["#FD5B61"]}
                        onChange={handleSelect}
                        editableDateInputs={true}
                      
                    />   
                )}
                                     
                {/* </BrowserView> */}

                {/* <MobileView> */}
               
                {/* </MobileView> */}
                    <div className='flex items-center border-b mb-2 pb-1'>
                        <h2 className='text-2xl flex-grow font-semibold'>Number of Guests</h2>
                        <UsersIcon className='h-5'/>
                        <input className='w-12 pl-2 text-lg outline-none text-red-400 font-semibold' type="number" value={noOfGuests} onChange={e=>setNoOfGuests(e.target.value)} min={1}/>
                    </div>
                    <div className='flex'>
                        <button onClick={resetInput} className='flex-grow text-gray-500'>Cancel</button>
                        <button className='flex-grow text-red-400'>Search</button>
                    </div>
                </div>
            )}

        </header>
    )
}

export default Header
