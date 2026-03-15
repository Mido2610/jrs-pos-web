import BarChartIcon from '@mui/icons-material/BarChart';
import GroupIcon from '@mui/icons-material/Group';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import RestaurantMenuIcon from '@mui/icons-material/RestaurantMenu';
import {
  Box,
  Button,
  Card,
  CardContent,
  Container,
  Divider,
  Grid,
  Stack,
  Typography,
} from '@mui/material';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import {
  APP_FULL_NAME,
  APP_NAME,
  LOGO_PATH,
  SUPPORT_EMAIL,
  SUPPORT_HOTLINE,
  SUPPORT_HOTLINE_HREF,
} from '../../utils/constants';

const FEATURE_ICONS = [
  <RestaurantMenuIcon sx={{ fontSize: 36 }} />,
  <BarChartIcon sx={{ fontSize: 36 }} />,
  <GroupIcon sx={{ fontSize: 36 }} />,
  <PhoneAndroidIcon sx={{ fontSize: 36 }} />,
];

const Home: React.FC = () => {
  const { t } = useTranslation();

  const features = [
    { icon: FEATURE_ICONS[0], title: t('feature1Title'), desc: t('feature1Desc') },
    { icon: FEATURE_ICONS[1], title: t('feature2Title'), desc: t('feature2Desc') },
    { icon: FEATURE_ICONS[2], title: t('feature3Title'), desc: t('feature3Desc') },
    { icon: FEATURE_ICONS[3], title: t('feature4Title'), desc: t('feature4Desc') },
  ];

  return (
    <Box>
      {/* Hero */}
      <Box sx={{ bgcolor: '#ffffff', py: { xs: 10, md: 14 }, textAlign: 'center', px: 3, position: 'relative', overflow: 'hidden', borderBottom: '1px solid', borderColor: 'divider' }}>
        <Box sx={{ position: 'absolute', width: 600, height: 600, borderRadius: '50%', border: '1px solid rgba(26,61,143,0.08)', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', pointerEvents: 'none' }} />
        <Box sx={{ position: 'absolute', width: 900, height: 900, borderRadius: '50%', border: '1px solid rgba(26,61,143,0.04)', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', pointerEvents: 'none' }} />

        <Box sx={{ position: 'relative', zIndex: 1 }}>
          <Box component="img" src={LOGO_PATH} alt={APP_NAME} sx={{ width: { xs: 80, md: 110 }, height: { xs: 80, md: 110 }, objectFit: 'contain', mb: 3 }} />
          <Typography variant="h1" sx={{ fontSize: { xs: 38, md: 60 }, color: 'primary.dark', mb: 1.5, lineHeight: 1.1 }}>
            {APP_FULL_NAME}
          </Typography>
          <Typography variant="h5" sx={{ color: 'text.secondary', mb: 1.5, fontWeight: 400 }}>
            {t('heroSubtitle')}
          </Typography>
          <Typography variant="body1" sx={{ color: 'text.secondary', maxWidth: 520, mx: 'auto', mb: 5, lineHeight: 1.8 }}>
            {t('heroDesc')}
          </Typography>
          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} justifyContent="center">
            <Button component={Link} to="/contact" variant="contained" color="primary" size="large">
              {t('heroCtaContact')}
            </Button>
            <Button
              component={Link}
              to="/delete-account"
              variant="outlined"
              color="primary"
              size="large"
            >
              {t('heroCtaDelete')}
            </Button>
          </Stack>
        </Box>
      </Box>

      {/* Features */}
      <Container maxWidth="md" sx={{ py: { xs: 6, md: 10 } }}>
        <Typography variant="h3" textAlign="center" mb={1} color="text.primary">
          {t('featuresTitle')}
        </Typography>
        <Typography variant="body1" textAlign="center" color="text.secondary" mb={6}>
          {t('featuresSubtitle')}
        </Typography>
        <Grid container spacing={3}>
          {features.map(({ icon, title, desc }) => (
            <Grid key={title} size={{ xs: 12, sm: 6 }}>
              <Card variant="outlined" sx={{ height: '100%', transition: 'box-shadow .2s', '&:hover': { boxShadow: '0 4px 20px rgba(26,61,143,0.12)' } }}>
                <CardContent sx={{ p: 3 }}>
                  <Box sx={{ width: 56, height: 56, borderRadius: 2.5, bgcolor: 'primary.main', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', mb: 2 }}>
                    {icon}
                  </Box>
                  <Typography variant="h6" fontWeight={700} mb={1}>{title}</Typography>
                  <Typography variant="body2" color="text.secondary" lineHeight={1.7}>{desc}</Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      <Divider />

      {/* CTA */}
      <Box sx={{ bgcolor: '#f0f6ff', py: { xs: 8, md: 10 }, textAlign: 'center', px: 3 }}>
        <Typography variant="h3" fontWeight={700} mb={1} color="primary.dark">
          {t('ctaTitle')}
        </Typography>
        <Typography color="text.secondary" mb={4} maxWidth={480} mx="auto">
          {t('ctaDesc')}
        </Typography>
        <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} justifyContent="center" alignItems="center" mb={4}>
          <Box
            component="a"
            href={SUPPORT_HOTLINE_HREF}
            sx={{ display: 'flex', alignItems: 'center', gap: 1, px: 3, py: 1.5, bgcolor: '#fff', border: '1px solid', borderColor: 'divider', borderRadius: 2, textDecoration: 'none', color: 'inherit', '&:hover': { borderColor: 'primary.main' } }}
          >
            <Typography>📞</Typography>
            <Box>
              <Typography variant="caption" color="text.secondary" display="block" lineHeight={1}>{t('ctaHotlineLabel')}</Typography>
              <Typography fontWeight={600} color="primary.main">{SUPPORT_HOTLINE}</Typography>
            </Box>
          </Box>
          <Box
            component="a"
            href={`mailto:${SUPPORT_EMAIL}`}
            sx={{ display: 'flex', alignItems: 'center', gap: 1, px: 3, py: 1.5, bgcolor: '#fff', border: '1px solid', borderColor: 'divider', borderRadius: 2, textDecoration: 'none', color: 'inherit', '&:hover': { borderColor: 'primary.main' } }}
          >
            <Typography>📧</Typography>
            <Box>
              <Typography variant="caption" color="text.secondary" display="block" lineHeight={1}>{t('ctaEmailLabel')}</Typography>
              <Typography fontWeight={600} color="primary.main">{SUPPORT_EMAIL}</Typography>
            </Box>
          </Box>
        </Stack>
        <Button component={Link} to="/contact" variant="contained" color="primary" size="large">
          {t('ctaButton')}
        </Button>
      </Box>
    </Box>
  );
};

export default Home;
