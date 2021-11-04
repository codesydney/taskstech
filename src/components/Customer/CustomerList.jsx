import React, { useEffect } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { useDispatch, useSelector } from "react-redux";
import { getCustomers } from "../../actions/customerActions";
import Button from '@material-ui/core/Button';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import {push} from 'connected-react-router';
// import { getCustomersList } from "../../selector/customerSelector";


export default function CustomerList() {
    const dispatch = useDispatch();
    const state = useSelector((state)=>state.customers.payload)




    console.log(state)


    const handleClick = (cellValues) => {
        cellValues
      };


    const viewDetail = params => {
        return (
          <Button
            variant="contained"
            color="primary"
            onClick={() => {
                handleClick(params)
                 let id = params.row.user_id
                console.log(id)
                dispatch(push('/users/customer/' + id))
            }}
          >
            <MenuBookIcon />
          </Button>
        );
      }

      function getFullName(params){
          return `${params.getValue(params.id, 'first_name') || ''} ${
            params.getValue(params.id, 'last_name') || ''
          }`;
      }


    const columns = [
        { field: "user_id", headerName: "ID", width: 90 },
        {
            field: "first_name",
            headerName: "First Name",
            width: 250,
            hide:true,
        },
        {
            field: "last_name",
            headerName: "Last Name",
            width: 250,
            hide:true,
        },
        {
            field: "fullName",
            headerName: "Full Name",
            width: 220,
            valueGetter:getFullName,
        },
        {
            field: "address",
            headerName: "Address",
            width: 220,
        },
        {
            field: "phone",
            headerName: "Phone No",
            width: 150,
        },
        {
            field: 'link',
            headerName: 'View Detail',
            sortable: false,
            width: 140,
            renderCell: viewDetail
          },
    ];

    useEffect(() => {
        dispatch(getCustomers())
    }, []);

    return (
        <>
        <h2>Customer List</h2>
        <div style={{ height: 400, width: "90%", margin:"auto", maxWidth:600}}>
            <DataGrid
                rows={state}
                getRowId = {(row) =>row.user_id}
                columns={columns}
                pageSize={15}
                rowsPerPageOptions={[15]}
                // checkboxSelection
                // disableSelectionOnClick
            />
        </div>
        </>
    );
}