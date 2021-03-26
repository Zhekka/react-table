import './App.css';
import Table from "./Table/Table";
import React from "react";
import Form from "./Form/Form";
import MaterialTable from "./MaterialTable/MaterialTable";


function App() {

    const columns = [
        {
            Header: "TV Show",
            columns: [
                {
                    Header: "Name",
                    accessor: "show.name"
                },
                {
                    Header: "Type",
                    accessor: "show.type"
                }
            ]
        },
        {
            Header: "Details",
            columns: [
                {
                    Header: "Language",
                    accessor: "show.language"
                },
                {
                    Header: "Genre(s)",
                    accessor: "show.genres"
                },
                {
                    Header: "Runtime",
                    accessor: "show.runtime"
                },
                {
                    Header: "Status",
                    accessor: "show.status"
                }
            ]
        }
    ];
    const data = [
        {
            "show": {
                "name": "The Snow Spider",
                "type": "Scripted",
                "language": "English",
                "genres": [
                    "Drama",
                    "Fantasy"
                ],
                "status": "In Development",
                "runtime": 30,
            }
        },
        {
            "show": {
                "name": "The Snow Spider2",
                "type": "Scripted2",
                "language": "English2",
                "genres": [
                    "Drama2",
                    "Fantasy2"
                ],
                "status": "In Development2",
                "runtime": 31,
            }
        }];

    return (
        <div className="App">
            <Form/>



            {/*<Table columns={columns} data={data}/>*/}

        </div>
    );
}

export default App;
