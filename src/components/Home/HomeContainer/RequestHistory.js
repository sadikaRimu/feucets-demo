import Button from 'react-bootstrap/Button';
import React, { useEffect, useState } from 'react';
import TableData from './TableData';
import Table from 'react-bootstrap/Table';

const RequestHistory = () => {
    const [tableData, setTableData] = useState([]);
    const [formData, setFormData] = useState("1");
    useEffect(() => {
        fetch('ETHdata.json')
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                setTableData(data);

            })
    }, [])
    const handleFirstTable = (event) => {
        event.preventDefault();
        const form = event.target.value;
        setFormData(form);
        fetch('ETHdata.json')
            .then(res => res.json())
            .then(data => {
                //  console.log(data);
                setTableData(data);

            })

    }

    return (
        <div>
            <h6 className='fw-bold my-2'>Request History</h6>
            <div onClick={handleFirstTable} className='d-flex'>
                <Button value={1} className='me-2' variant="outline-primary">ETH Transaction History</Button>{' '}
                <Button value={2} variant="outline-primary">TestLink Transaction History</Button>{' '}
            </div>

            <Table bordered className='w-50 mt-4'>
                <thead>
                    <tr>
                        <th>Sr</th>
                        <th>Time</th>
                        <th>Amount</th>
                        <th>Hash</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        tableData.map(element => <>
                            {
                                formData === element.btn_id ?
                                    <tr>
                                        <td>{element.id}</td>
                                        <td>{element.time}</td>
                                        <td>{element.amount}</td>
                                        <td>{element.hash}</td>
                                    </tr> :
                                    <></>

                            }
                        </>)
                    }

                </tbody>
            </Table>


        </div>
    );
};

export default RequestHistory;