import React from 'react';
import "./dashboardHeader.css";
import "./toggle-btn-style.css";
import BarCodeScanner from '../../BarCodeScanner/BarCodeScanner';
import { Link } from 'react-router-dom';

function DashBoardHeader() {
  return (
    <header>
      <div className="container">
        <button class="nav-toggle-btn">
            <span class="toggle-container" ariaLabel="open navigation" ariaControls=".nav">
                <span class="hamburger"></span>
                <span class="hamburger"></span>
                <span class="hamburger"></span>
            </span>
        </button>

        <ul className="nav__list">
          <li className="nav__item">
            <a className="nav__link"><strong>Made 2 Automate</strong></a>
          </li>
        </ul>

        <div className="nav">
          <ul className="nav__list nav__list--primary">
            <li className="nav__item">
                <a href="#" className="nav__link">Orders</a>
            </li>

            <li className="nav__item">
                <Link to='/products' className="nav__link">
                    Products
                </Link>
            </li>

            <li className="nav__item">
                <Link to='/barcodescanner' className="nav__link">
                    Barcode
                </Link>
            </li>

            <li className="nav__item">
                <a href="#" className="nav__link">Logout</a>
            </li>
          </ul>
        </div>

      </div>
    </header>

  )
}

export default DashBoardHeader;