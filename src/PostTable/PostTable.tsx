import { useMemo } from 'react';
import {
  MaterialReactTable,
  useMaterialReactTable,
} from 'material-react-table';

import { createTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import usePostsData from './usePostsData';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

const muiTheme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 1024,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
});

const PostTable = () => {
  const isMobile = useMediaQuery(muiTheme.breakpoints.down('sm'));
 
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
    positionToolbarAlertBanner: 'bottom', 
    renderTopToolbarCustomActions: ({ table }) => (
      <Box sx={{ display: 'flex', gap: '1rem', p: '4px' }}>
        <Button
          color="secondary"
          onClick={() => {
            console.log('Create New Post');
          }}
          variant="contained"
        >
          Create Post
        </Button>
        </Box>)
  });

  return <MaterialReactTable table={table} />
};

export default PostTable;
