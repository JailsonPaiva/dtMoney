import { Dashboard } from './components/Dashboard';
import { Header } from './components/Header';
import { GlobalStyle } from './styles/global';
import { useState } from 'react';
import { NewTrasactionModal } from './components/NewTrasactionModal';
import {  TransactionsProvider } from './hooks/useTransactions';

export function App(){
  const [ isNewTransactionModalOpen, setIsNewTransactionModalOpen ] = useState(false)

  function handleOpenNewTransactionModal() {
    setIsNewTransactionModalOpen(true)
  }

  function handleCloseNewTransactionModal() {
    setIsNewTransactionModalOpen(false)
  }

  return (
    // TEMOS QUE COLOCAR O CONTEXTO POR VOLTAR DOS COMPONENTES QUE QUEREMOS QUE ELES ACESSEM OS DADOS, NESSE CASO O COMPONENTE APP
    <TransactionsProvider>
      <Header onOperNewTrasactionModal={handleOpenNewTransactionModal}/>

      <Dashboard />

      <NewTrasactionModal 
        isOpen={isNewTransactionModalOpen}
        onRequestClose={handleCloseNewTransactionModal}
      />

      <GlobalStyle />
    </TransactionsProvider>
  );
}

