import React from 'react';
import Table from 'react-bootstrap/Table';

const TableData = ({ formData, element }) => {
    const { id, btn_id, time, amount, hash } = element;
    return (
        <div className='mt-4'>
            {
                formData === btn_id ? <>
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>Sr</th>
                                <th>Time</th>
                                <th>Amount</th>
                                <th>Hash</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>{id}</td>
                                <td>{time}</td>
                                <td>{amount}</td>
                                <td>{hash}</td>
                            </tr>

                        </tbody>
                    </Table>
                </> : <>
                </>
            }
        </div>
    );
};

export default TableData;