import React, { useState } from 'react';
import './main.css'; 
// import img from '../image/img1.jpg'

import { PiStudentBold } from "react-icons/pi";
import { FaMoneyBillTransfer } from "react-icons/fa6";
import { MdHighQuality } from "react-icons/md";
import { TbReportAnalytics } from "react-icons/tb";
import { IoSettings } from "react-icons/io5";
import { IoIosHelpCircleOutline } from "react-icons/io";
import { IoMdLogOut } from "react-icons/io";
import { FaClinicMedical } from "react-icons/fa";
import { FcDataSheet } from "react-icons/fc";
import { AiTwotoneMail } from "react-icons/ai";
import { SiGoogleclassroom } from "react-icons/si";
import { GiPublicSpeaker } from "react-icons/gi";
import { FaBookBookmark } from "react-icons/fa6";
import { BiLogoDigitalocean } from "react-icons/bi";





const Main = () => {

  const [regularStudents, setRegularStudents] = useState(8);
  const [remedialStudents, setRemedialStudents] = useState(13);
  const [inPaidClubs, setInPaidClubs] = useState(0);

  return (
    <div className="dashboard">
      
      <div className="sidebar">
        <div className="sidebar-logo">
        <BiLogoDigitalocean  className='icon'fontSize={73} fill='white' />
        </div>
        <div className="sidebar-item"><PiStudentBold  className='icon'fontSize={40} fill='white' /> <br/> Student Management</div>
        <div className="sidebar-item"><FaMoneyBillTransfer  className='icon' fontSize={40} fill='white' /> <br/>Financial Management</div>
        <div className="sidebar-item"><MdHighQuality  className='icon'fontSize={40} fill='white' /> <br/>Quality Control</div>
        <div className="sidebar-item"><TbReportAnalytics  className='icon'fontSize={40} fill='white' /> <br/>Report Delivery</div>
        <div className="sidebar-footer"><IoSettings fontSize={30} fill='white' /><IoIosHelpCircleOutline fontSize={30} fill='white' /><IoMdLogOut fontSize={30} fill='white' /></div>
      </div>

 
      <div className="main-content">
        <div className='headder'>
        <h2>Student Management</h2>
        </div>
       
        <div className="student-cards">
          <div className="card red">
            <div className="card-icon">
              <i className="fas fa-user"></i>
            </div>
            <div className="card-details">
              <span><svg xmlns="http://www.w3.org/2000/svg" height="80px" viewBox="0 -960 960 960" width="80px" fill="white"><path d="M480-480q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47ZM160-160v-112q0-34 17.5-62.5T224-378q62-31 126-46.5T480-440q66 0 130 15.5T736-378q29 15 46.5 43.5T800-272v112H160Zm80-80h480v-32q0-11-5.5-20T700-306q-54-27-109-40.5T480-360q-56 0-111 13.5T260-306q-9 5-14.5 14t-5.5 20v32Zm240-320q33 0 56.5-23.5T560-640q0-33-23.5-56.5T480-720q-33 0-56.5 23.5T400-640q0 33 23.5 56.5T480-560Zm0-80Zm0 400Z"/></svg>{regularStudents}</span>
              <p>Regular Students</p>
            </div>
          </div>
          <div className="card purple">
            <div className="card-icon">
              <i className="fas fa-user-graduate"></i>
            </div>
            <div className="card-details">
              <span><svg xmlns="http://www.w3.org/2000/svg" height="98px" viewBox="0 -960 960 960" width="80px" fill="white"><path d="M290-80q-53.86 0-91.93-38.07Q160-156.14 160-210v-540q0-53.86 38.07-91.93Q236.14-880 290-880h510v600q-26 0-43 21t-17 49q0 28 17 49t43 21v60H290Zm-70-240q15-10 32.5-15t37.5-5h30v-480h-30q-29.17 0-49.58 20.42Q220-779.17 220-750v430Zm160-20h360v-480H380v480Zm-160 20v-500 500Zm69.54 180H699q-9-15-14-33t-5-37q0-20 5-37.5t15-32.5H289.61q-28.61 0-49.11 20.42Q220-239.17 220-210q0 29 20.5 49.5t49.04 20.5Z"/></svg>{remedialStudents}</span>
              <p>Remedial Students</p>
            </div>
          </div>
          <div className="card green">
            <div className="card-icon">
              <i className="fas fa-users"></i>
            </div>
            <div className="card-details">
              <span><svg xmlns="http://www.w3.org/2000/svg" height="80px" viewBox="0 -960 960 960" width="80px" fill="white"><path d="M480-40q-186 0-313-68T40-275q0-79 73.5-135T310-481v60q-96 9-153 49t-57 97q0 69 114 122t266 53q152 0 266-53t114-122q0-58-57.5-97.5T650-421v-60q122 14 196 70.5T920-275q0 100-127 167.5T480-40ZM370-204v-454H160v-60h640v60H590v454h-60v-205H430v205h-60Zm110.2-574q-29.2 0-50.2-20.8-21-20.79-21-50 0-29.2 20.8-50.2 20.79-21 50-21 29.2 0 50.2 20.8 21 20.79 21 50 0 29.2-20.8 50.2-20.79 21-50 21Z"/></svg>{inPaidClubs}</span>
              <p>In Paid Clubs</p>
            </div>
          </div>
        </div>

        
        <div className="menu">
          <div className="menu-item">
            <i className="user"><PiStudentBold  className='icon'fontSize={40} fill='black' /> <br/></i>
            <p>Regular Enrollment</p>
          </div>
          <div className="menu-item">
            <i className="book"><FaBookBookmark   className='icon'fontSize={40} fill='black' /> <br/></i>
            <p>Remedial Enrollment</p>
          </div>
          <div className="menu-item">
            <i className="club">< GiPublicSpeaker  className='icon'fontSize={40} fill='black' /> <br/></i>
            <p>Club Management</p>
          </div>
          <div className="menu-item">
            <i className="teacher"><SiGoogleclassroom  className='icon'fontSize={40} fill='black' /> <br/></i>
            <p>Classroom Management</p>
          </div>
          <div className="menu-item">
            <i className="envelope"><AiTwotoneMail  className='icon'fontSize={40} fill='black' /> <br/></i>
            <p>SMS / EMAIL</p>
          </div>
          <div className="menu-item">
            <i className="clinicMedical"><FaClinicMedical  className='icon'fontSize={40} fill='black' /> <br/></i>
            <p>Clinic</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
