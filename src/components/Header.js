import React from "react";
import BillGates from "../images/billgates.jpg";
import { AiOutlineInstagram, AiOutlineGithub } from "react-icons/ai";
function Header({ money}) {
  
  return (
    <>
      <div className='title'>
        <div className='socialMediaBar'>
          <ul>
            <li>
              <a
                className='instagram'
                href='https://www.instagram.com/nihad19_19/'
                target={"_blank"}
                rel='noopener noreferrer'
              >
                <AiOutlineInstagram />
              </a>
            </li>
            <li>
              <a
                className='github'
                href='https://github.com/Nihad18'
                target={"_blank"}
                rel='noopener noreferrer'
              >
                <AiOutlineGithub />
              </a>
            </li>
          </ul>
        </div>
        <img src={BillGates} alt={"Bill Gates"} />
        <h1>Spend Bill Gates' Money</h1>
      </div>
      <div className='money-bar'>
        <h1>${money.toLocaleString()}</h1>
      </div>
    </>
  );
}

export default Header;
