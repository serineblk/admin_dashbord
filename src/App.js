// App.js
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Dashboard from './components/Dashboard';
import UserManagement from './components/UserManagement';
import RoomManagement from './components/RoomManagement';
import ReservationManagement from './components/ReservationManagement';
import MessagesAndEmails from './components/MessagesAndEmails';
import Settings from './components/Settings';
import Services from './components/Services';
import CompatibleService from './components/CompatibleService';
import CleaningService from './components/CleaningService'; // Importez le nouveau composant
import Payments from './components/Payments'; 
import Invoices from './components/Invoices';
import Taxes from './components/Taxes';
import CleaningTasks from './components/CleaningTasks'; // Importez le nouveau composant
import StaffTracking from './components/StaffTracking'; // Importez le nouveau composant
import './App.css';

function App() {
  const [activeTab, setActiveTab] = useState('dashboard'); // Onglet actif par défaut

  const renderActiveTab = () => {
    switch (activeTab) {
      case 'dashboard':
        return <Dashboard />;
      case 'users':
        return <UserManagement />;
      case 'rooms':
        return <RoomManagement />;
      case 'reservations':
        return <ReservationManagement />;
      case 'messages':
        return <MessagesAndEmails />;
        
      case 'services':
        return <Services />;
      case 'compatible':
        return <CompatibleService />;
      case 'cleaning': // Ajoutez le cas pour le service de ménage
        return <CleaningService />;
        case 'payments': // Ajoutez le cas pour le composant Payments
        return <Payments />;
        case 'invoices': // Ajoutez le cas pour le composant Invoices
        return <Invoices />;
        
        case 'taxes': // Ajoutez le cas pour le composant Taxes
        return <Taxes />;
        case 'cleaning-tasks': // Ajoutez le cas pour le composant CleaningTasks
        return <CleaningTasks />;
        case 'staff-tracking': // Ajoutez le cas pour le composant StaffTracking
        return <StaffTracking />;
        case 'settings': // Ajoutez le cas pour le composant Settings
        // eslint-disable-next-line react/jsx-no-undef
        return <Settings />;
      default:
        return <Dashboard />; // Par défaut, afficher le tableau de bord
    }
  };

  return (
    <div className="App">
      <Navbar setActiveTab={setActiveTab} adminName="John Doe" />
      <div className="content">
        {renderActiveTab()}
      </div>
    </div>
  );
}

export default App;