import { Stack, Rating } from '@mui/material';
import { useState } from 'react';

function StarRating() {
  const [value, setValue] = useState<null | number>(null);
  function handleChange(e: React.ChangeEvent<{}>, newValue: number | null) {
    setValue(newValue);
  }
  return (
    <Stack spacing={10}>
      <Rating value={value} onChange={handleChange} precision={0.5} max={3} />
    </Stack>
  );
}

export default StarRating;
