import { useMemo } from 'react'
import Table from '../../components/Table/Table'
import useMediaQuery from '@mui/material/useMediaQuery'
import { muiTheme } from '../../constants/MUI/MuiTheme'
import { Post } from '../../constants/Types/dataType'

const PostTable = ({ data }: { data: Post[] }) => {
  const isMobile = useMediaQuery(muiTheme.breakpoints.down('sm'))

  const columns = useMemo(
    () => [
      {
        accessorKey: 'title',
        header: 'Title',
        size: isMobile ? 100 : 200,
      },
      {
        accessorKey: 'body',
        header: 'Content',
        size: isMobile ? 200 : 1000,
      },
    ],
    [isMobile]
  )

  return <Table columns={columns} data={data} />
}

export default PostTable
