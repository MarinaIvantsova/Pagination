import { useEffect, useMemo, useState } from 'react';
import {
  MaterialReactTable,
  useMaterialReactTable,
} from 'material-react-table';

const PostTable = () => {
  const [posts, setPosts] = useState([]);
  
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(data => setPosts(data))
      .catch(error => console.error('Error fetching posts:', error));
  }, []);

   const data = useMemo(
    () => posts,
    [posts]
  );
 
  const columns = useMemo(
    () => [
      {
        accessorKey: 'title',
        header: 'Title', 
      },
      {
        accessorKey: 'body',
        header: 'Content',
        size: 1000,
      },
    ],
    [],
  );

  const table = useMaterialReactTable({
    columns,
    data, 
    enableColumnResizing: true,
    columnResizeMode: 'onChange', 
  });

  return <MaterialReactTable table={table} />;
};

export default PostTable;
