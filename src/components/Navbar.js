// components/Navbar.js
import React, { useState } from 'react';
import '../styles/Navbar.css';
import profileImage from '../assets/profile.webp';
import { 
  FaTachometerAlt, FaBed, FaCalendarAlt, FaUsers, FaEnvelope, 
  FaChartLine, FaCog, FaSignOutAlt, FaConciergeBell, 
  FaCheckCircle, FaBroom, FaChevronRight, FaChevronLeft,
  FaMoneyBillWave, FaFileInvoiceDollar, FaFileInvoice,
  FaTasks, FaShoppingCart, FaWarehouse, FaUserCheck
} from 'react-icons/fa';
import { RiHotelLine } from 'react-icons/ri';

function Navbar({ setActiveTab, adminName }) {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [activeTab, setActiveTabState] = useState('dashboard');

  const toggleNavbar = () => setIsCollapsed(!isCollapsed);
  const handleTabClick = (tab) => {
    setActiveTabState(tab);
    setActiveTab(tab);
  };

  return (
    <nav className={isCollapsed ? 'collapsed' : ''}>
      <div className="navbar-header">
        <div className="logo-container">
          <RiHotelLine className="logo-icon" />
          {!isCollapsed && (
            <div>
              <span className="logo-text">RoyelStay</span>
              <span className="logo-subtext">Hôtel de Luxe</span>
            </div>
          )}
        </div>
        
        <button className="toggle-button" onClick={toggleNavbar}>
          {isCollapsed ? <FaChevronRight /> : <FaChevronLeft />}
        </button>
      </div>

     

      <div className="nav-divider"></div>

      <div className="nav-buttons">
        {[
          { icon: <FaTachometerAlt />, label: 'Tableau de bord', tab: 'dashboard' },
          { icon: <FaBed />, label: 'Chambres', tab: 'rooms' },
          { icon: <FaCalendarAlt />, label: 'Réservations', tab: 'reservations' },
          { icon: <FaUsers />, label: 'Clients', tab: 'users' },
          { icon: <FaEnvelope />, label: 'Messages', tab: 'messages' },
          { icon: <FaConciergeBell />, label: 'Services', tab: 'services' },
          { icon: <FaMoneyBillWave />, label: 'Paiements', tab: 'payments' },
          { icon: <FaFileInvoiceDollar />, label: 'Invoices', tab: 'invoices' },
          { icon: <FaFileInvoice />, label: 'Taxes', tab: 'taxes' },
          {  icon: <FaWarehouse />, label: 'Gestion de Stocks & Commande de produits', tab: 'cleaning' },
          { icon: <FaTasks />, label: 'Tâches de Ménage & Demmandes Spécial', tab: 'cleaning-tasks' },
          { icon: <FaUserCheck />, label: 'Suivi du Personnel', tab: 'staff-tracking' },
          
          
          
          { icon: <FaCog />, label: 'Paramètres', tab: 'settings' }, // Ajoutez l'option Paramètres
        ].map((item) => (
          <button
            key={item.tab}
            className={activeTab === item.tab ? 'active' : ''}
            onClick={() => handleTabClick(item.tab)}
          >
            <span className="nav-icon">{item.icon}</span>
            {!isCollapsed && <span className="nav-label">{item.label}</span>}
          </button>
        ))}
      </div>

      <div className="nav-footer">
        <button 
          className="logout-button"
          onClick={() => handleTabClick('logout')}
        >
          <FaSignOutAlt className="logout-icon" />
          {!isCollapsed && <span>Déconnexion</span>}
        </button>
      </div>
    </nav>
  );
}

export default Navbar;