import { useMemo } from 'react';
import {
  MaterialReactTable,
  useMaterialReactTable,
} from 'material-react-table';

import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import usePostsData from './usePostsData';

const PostTable = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
 
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
  );

  const data  = usePostsData();

  const table = useMaterialReactTable({
    columns,
    data,
    enableColumnResizing: true,
    columnResizeMode: 'onChange', 
  });

  return <MaterialReactTable table={table} />
};

export default PostTable;
