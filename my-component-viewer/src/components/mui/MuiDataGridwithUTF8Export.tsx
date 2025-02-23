import Box from "@mui/material/Box";
import { DataGrid, GridColDef, GridToolbarExport } from "@mui/x-data-grid";
import { rowType } from "./types";

const columuns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 90 },
  {
    field: "firstName",
    headerName: "First name",
    width: 150,
    editable: true,
  },
  {
    field: "lastName",
    headerName: "Last name",
    width: 150,
    editable: true,
  },
  {
    field: "age",
    headerName: "Age",
    type: "number",
    width: 110,
    editable: true,
  },
  {
    field: "fullName",
    headerName: "Full name",
    description: "This column has a value getter and is not sortable.",
    sortable: false,
    width: 160,
    valueGetter: (_, row) => `${row.firstName || ""} ${row.lastName || ""}`,
  },
];

const rows: rowType[] = [
  { id: 1, firstName: "太郎", lastName: "テスト", age: 35 },
  { id: 2, firstName: "次郎", lastName: "テスト", age: 42 },
  { id: 3, firstName: "三郎", lastName: "テスト", age: 45 },
];

function CustomToolbar() {
  //csvOptionsプロパティに utf8WithBom: true を渡す。
  return <GridToolbarExport csvOptions={{ utf8WithBom: true }} />;
}

const MuiDataGridwithUTF8Export = () => {
  return (
    <Box sx={{ height: 400, width: "100%" }}>
      <DataGrid
        rows={rows}
        columns={columuns}
        density="compact"
        slots={{
          toolbar: CustomToolbar,
        }}
      />
    </Box>
  );
};

export default MuiDataGridwithUTF8Export;
