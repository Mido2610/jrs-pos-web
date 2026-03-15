import { Box, Button, Container, Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

const NotFound: React.FC = () => (
  <Container maxWidth="sm" sx={{ textAlign: 'center', py: 12 }}>
    <Typography variant="h1" sx={{ fontSize: 96, fontWeight: 800, color: 'primary.main', lineHeight: 1 }}>
      404
    </Typography>
    <Typography variant="h4" fontWeight={700} mb={2}>Page Not Found</Typography>
    <Typography color="text.secondary" mb={4}>
      The page you are looking for does not exist.
    </Typography>
    <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', flexWrap: 'wrap' }}>
      <Button variant="contained" component={Link} to="/">Go Home</Button>
      <Button variant="outlined" component={Link} to="/contact">Contact Support</Button>
    </Box>
  </Container>
);

export default NotFound;
