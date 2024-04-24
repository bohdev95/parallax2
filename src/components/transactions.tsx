import React, { useEffect } from 'react';
import { Parallax } from 'react-scroll-parallax';
import { profileType } from '@/config/config';
import $ from 'jquery';
import 'datatables.net';

type Props = {
    data: profileType;
};

export default function Transactions({data}: Props) {

    useEffect(() => {
      
        if (data) {
          $('#example').DataTable();
        }
    }, [data]);

    return (
        <Parallax speed={-10}>
           <div className="d-flex justify-content-center mt-15">
                <table id="example" className="display">
                <thead>
                    <tr>
                    <th>Date</th>
                    <th>Amount</th>
                    <th>Description</th>
                    </tr>
                </thead>
                <tbody>
                    {data && data.transactions && data.transactions.map((transaction, index) => (
                    <tr key={index}>
                        <td>{transaction.date}</td>
                        <td>{transaction.amount}</td>
                        <td>{transaction.description}</td>
                    </tr>
                    ))}

                </tbody>
                </table>

            </div>
        </Parallax>
    );
}