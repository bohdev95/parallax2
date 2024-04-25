import React, { useState, useEffect } from 'react';
import { useParallax } from 'react-scroll-parallax';
import { profileType } from '@/config/config';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import styles from "@/styles/Home.module.css";
import { InputText } from 'primereact/inputtext';


type Props = {
    data: profileType;
};

interface Transaction {
    date: string;
    amount: string;
    description: string;
}

export default function Transactions({data}: Props) {
    const [transactions, setTransactions] = useState<Transaction[]>([]);
    const [globalFilter, setGlobalFilter] = useState<string>('');

    const formatCurrency = (value: number) => {
        return value.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
    };
    useEffect(() => {
        setTransactions(data.transactions);
    }, []);

    const parallax = useParallax<HTMLDivElement>({
        opacity:[0, 2]
    });

    const header = (
        <div className={styles.search}>
            
            <InputText type="search" placeholder="Search..." onInput={(e) => {const target = e.target as HTMLInputElement; setGlobalFilter(target.value);}}  />
            
        </div>
    );


    return (
        <div ref={parallax.ref} className={styles.box}>
            <div className={styles.transactionTable}>
                <DataTable value={transactions} paginator globalFilter={globalFilter} header={header} rows={5} dataKey="id" rowsPerPageOptions={[5, 10, 25, 50]} sortField="date" sortOrder={-1}>
                    <Column field="date" header="Date" sortable style={{ width: '30%' }}></Column>
                    <Column field="amount" header="Amount" sortable style={{ width: '30%' }}></Column>
                    <Column field="description" header="Description" sortable style={{ width: '40%' }}></Column>
                </DataTable>
            </div>
        </div>
    );
}