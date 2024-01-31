import * as React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

type LoaderProps = {
    message?: string;
}

const Loader = (props: LoaderProps) => {
  return (
    <Box sx={{ display: 'flex' }}>
      <CircularProgress />
      <div>{props.message}</div>
    </Box>
  );
}

export default Loader;