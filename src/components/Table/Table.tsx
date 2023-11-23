import { MaterialReactTable, useMaterialReactTable } from 'material-react-table'
import { Post } from '../../constants/Types/dataType'

type TableColumn = {
  accessorKey: string
  header: string
  size: number
}

const Table = ({ columns, data }: { columns: TableColumn[]; data: Post[] }) => {
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
