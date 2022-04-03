// CRIANDO UM CONTEXTO PARA QUE OUTROS COMPONENTES POSSAM ACESSA-LO
import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { api } from "../services/api";


interface Transaction {
    id: number,
    title: string,
    category: string,
    amount: number,
    type: string,
    createdAt: string,
}

interface TransactionContextData {
    transactions: Transaction[],
    CreateTransaction: (transaction: TransactionInput) => Promise<void>;
}

// EU ESTOU PEGANDO OS MESMO TIPOS DE TRANSACTION E REMOVENDO O ID E O CREATEDAT
type TransactionInput = Omit<Transaction, 'id' | 'createdAt'>

// TIPANDO O COMPONENTE PARA QUE ELE POSSA RECEBER UM VALOR, O REACTNODE PERMITE QUE ELE RECEBAR QUALQUER VALOR JSX
interface TransactionProviderProps {
    children: ReactNode
}

const TransactionsContex = createContext<TransactionContextData>( {} as TransactionContextData );

export function TransactionsProvider({ children}: TransactionProviderProps) {
    const [transactions, setTransactions] = useState<Transaction[]>([])

    useEffect(() => {
		api.get('transactions')
        .then(response => setTransactions(response.data.transactions))
	}, [])

    async function CreateTransaction(transactionInput: TransactionInput) {
       const response = await api.post('/transactions', {
           ...transactionInput,
           createdAt: new Date()
       })

       const { transaction } = response.data

       setTransactions([...transactions, transaction])
    }

    return( 
        <TransactionsContex.Provider value={{ transactions, CreateTransaction }}>
            {children}
        </TransactionsContex.Provider>
    )
}

export function useTransactions() {
    const context = useContext(TransactionsContex)

    return context
}