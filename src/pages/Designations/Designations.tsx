import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { Button } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import DeleteIcon from "@mui/icons-material/Delete";
import AddSharpIcon from "@mui/icons-material/AddSharp";

const renderDeleteButton = () => {
  return (
    <IconButton aria-label="delete">
      <DeleteIcon />
    </IconButton>
  );
};
const columns: GridColDef[] = [
  { field: "id", headerName: "SI.No", minWidth: 200 },
  { field: "name", headerName: "Name", minWidth: 200 },
  { field: "designation", headerName: "Designation", minWidth: 200 },
  {
    field: "action",
    headerName: "Action",
    renderCell: renderDeleteButton,
    minWidth: 200,
  },
];

const rows = [
  {
    id: 1,
    lastName: "Snow",
    firstName: "Jon",
    name: "Snow Jon",
    designation: "Laravel Developer",
    age: 35,
  },
  {
    id: 2,
    lastName: "Lannister",
    firstName: "Cersei",
    name: "Lannister Cersi",
    designation: "React Developer",
    age: 42,
  },
  {
    id: 3,
    lastName: "Lannister",
    firstName: "Jaime",
    name: "Lannister Jaime",
    designation: "Front End Developer",
    age: 45,
  },
  {
    id: 4,
    lastName: "Stark",
    firstName: "Arya",
    name: "Stark Arya",
    designation: "Backend Developer",
    age: 16,
  },
  {
    id: 5,
    lastName: "Targaryen",
    firstName: "Daenerys",
    name: "Targaryen Daenerys",
    designation: "Laravel Developer",
    age: null,
  },
  {
    id: 6,
    lastName: "Melisandre",
    firstName: null,
    name: "Melisandre ",
    designation: "Laravel Developer",
    age: 150,
  },
  {
    id: 7,
    lastName: "Clifford",
    firstName: "Ferrara",
    name: "Clifford Ferrara",
    designation: "Tester",
    age: 44,
  },
  {
    id: 8,
    lastName: "Frances",
    firstName: "Rossini",
    name: "Frances Rossini",
    designation: "UI Developer",
    age: 36,
  },
  {
    id: 9,
    lastName: "Roxie",
    firstName: "Harvey",
    name: "Roxie Harvey",
    designation: "UX Developer",
    age: 65,
  },
];

export default function Designations() {
  return (
    <>
      <div>
        <div className="d-flex justify-content-between w-100 mb-3 mt-5">
          <h3>Designation List</h3>
          <div>
            <Button variant="outlined" size="small" color="inherit">
              <AddSharpIcon /> Add New Record
            </Button>
          </div>
        </div>
      </div>
      <div className="" style={{ height: 400, width: "100%" }}>
        <DataGrid
          rows={rows}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: 5 },
            },
          }}
          pageSizeOptions={[5, 10]}
        />
      </div>
    </>
  );
}
