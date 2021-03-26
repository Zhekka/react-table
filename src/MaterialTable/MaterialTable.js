import * as React from 'react';
import {DataGrid} from '@material-ui/data-grid';

const columns = [
    {field: 'id', headerName: 'ID', width: 70},
    {field: 'firstName', headerName: 'First name', width: 130},
    {field: 'lastName', headerName: 'Last name', width: 130},
    {field: 'age', headerName: 'Age', type: 'number', width: 90},
    {
        field: 'userName', headerName: 'Username', description: 'This column has a value getter and is not sortable.',
        sortable: false,
        width: 200
    },
];


export default function DataTable(props) {

    let rows = [
        {id: 1, lastName: 'Snow', firstName: 'Jon', age: 35, userName: 'firstName' + Date.now()},
        {id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42, userName: 'firstName' + Date.now()},

    ];

    console.log('form props', props.userData)

    return (
        <div style={{padding: 20, margin: '0 5%', height: 400, width: '90%'}}>
            <DataGrid rows={props.userData} columns={columns} pageSize={5} checkboxSelection/>
        </div>
    );
}