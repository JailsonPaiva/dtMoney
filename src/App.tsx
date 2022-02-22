import { Dashboard } from './components/Dashboard';
import { Header } from './components/Header';
import { GlobalStyle } from './styles/global';
import { useState } from 'react';
import { NewTrasactionModal } from './components/NewTrasactionModal';

export function App(){
  const [ isNewTransactionModalOpen, setIsNewTransactionModalOpen ] = useState(false)

  function handleOpenNewTransactionModal() {
    setIsNewTransactionModalOpen(true)
  }

  function handleCloseNewTransactionModal() {
    setIsNewTransactionModalOpen(false)
  }

  return (
    <div className="App">
      <Header onOperNewTrasactionModal={handleOpenNewTransactionModal}/>

      <Dashboard />

      <NewTrasactionModal 
        isOpen={isNewTransactionModalOpen}
        onRequestClose={handleCloseNewTransactionModal}
      />

      <GlobalStyle />
    </div>
  );
}

