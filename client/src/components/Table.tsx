import Box from '@mui/material/Box';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import rows from '../utils/rows';

interface IProps {
    isCollapsed: boolean;
}

const Table: React.FC<IProps> = (props) => {
    const columns = [
        { field: 'awardedCompany', headerName: 'Awarded Company', width: 250 },
        { field: 'date', headerName: 'Date', width: 150 },
        {
            field: 'expectedCompletionDate',
            headerName: 'Est. Completion Date',
            width: 250,
        },
        {
            field: 'awardedCompanyLocation',
            headerName: 'Company Location',
            width: 250,
        },
        { field: 'amountAwarded', headerName: 'Amount Awarded', width: 180 },
        { field: 'awardedFor', headerName: 'Awarded For', width: 250 },
        { field: 'context', headerName: 'Context', width: 200 },
        { field: 'workLocation', headerName: 'Work Location', width: 250 },
        {
            field: 'contractingActivityGroup',
            headerName: 'Contracting Activity Group',
            width: 250,
        },
        {
            field: 'activityGroupLocation',
            headerName: 'Activity Group Location',
            width: 250,
        },
        { field: 'activityCode', headerName: 'Activity Code', width: 200 },
        { field: 'contractType', headerName: 'Contract Type', width: 180 },
        { field: 'isModification', headerName: 'Modification', width: 150 },
    ];

    return (
        <Box>
            <DataGrid
                rows={rows}
                columns={columns}
                slots={{ toolbar: GridToolbar }}
                autoPageSize={true}
                sx={{ height: (props.isCollapsed ? '30vh' : '70vh'), '.MuiDataGrid-scrollbar': { left: 0 } }}
            />
        </Box>
    );
};

export default Table;
