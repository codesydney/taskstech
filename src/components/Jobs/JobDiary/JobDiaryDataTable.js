import React, { useEffect } from 'react';
import { DataGrid } from '@material-ui/data-grid';
import { getActivities } from '../../../actions/activityAction';
import { useDispatch, useSelector } from 'react-redux';

const diaryColumns = [
  {
    field: 'description',
    headerName: 'Description',
    width: 170,
    editable: true,
  },
  {
    field: 'upload_photo',
    headerName: 'Upload Photo',
    width: 170,
    editable: true,
  },
  { 
    field: 'job_id', 
    headerName: 'Job ID', 
    width: 160,
    valueGetter: (params) => {
      return params.row.job.id;
    }
  }, 
];



export default function JobDiaryDataTable({ diary, handleReload, reload }) {
  const dispatch = useDispatch();
  const { activity } = useSelector(state => state);
  const id = diary === undefined ? 0 : diary.id; // fixes the undefined issue temporarilly

  useEffect(() => {
    dispatch(getActivities(true, id));

    if(reload) handleReload(false);
    
  }, [reload]);

  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={activity.payload}
        columns={diaryColumns}
        pageSize={5}
        checkboxSelection
        disableSelectionOnClick
        
      />
    </div>
  );
}
