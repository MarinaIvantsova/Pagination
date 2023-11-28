import { MaterialReactTable, useMaterialReactTable, MRT_RowData, type MRT_ColumnDef } from 'material-react-table'

type TableColumn = {
  accessorKey: string
  header: string
  size: number
}

const Table = <T extends Array<MRT_ColumnDef<TableColumn>> | MRT_RowData>({
  columns,
  data,
}: {
  columns: TableColumn[]
  data: T[]
}) => {
  const table = useMaterialReactTable({
    columns,
    data,
    enableColumnResizing: true,
    columnResizeMode: 'onChange',
    positionToolbarAlertBanner: 'bottom',
  })

  return <MaterialReactTable table={table} />
}

export default Table
