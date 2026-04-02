import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
import { Box, Container, Divider, Grid, IconButton, Link as MuiLink, Stack, Typography } from '@mui/material';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { APP_FULL_NAME, APP_NAME, DEVELOPER_NAME, LOGO_PATH, SUPPORT_EMAIL, SUPPORT_HOTLINE, WEBSITE_URL } from '../../utils/constants';

const Footer: React.FC = () => {
  const { t } = useTranslation();

  return (
    <Box component="footer" sx={{ bgcolor: '#0a1628', color: '#fff', pt: 6, pb: 3, mt: 'auto' }}>
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid size={{ xs: 12, md: 4 }}>
            <Stack spacing={2}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                <Box component="img" src={LOGO_PATH} alt={APP_NAME} sx={{ width: 44, height: 44, objectFit: 'contain' }} />
                <Typography variant="h6" fontWeight={700} color="#fff">{APP_FULL_NAME}</Typography>
              </Box>
              <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.55)', lineHeight: 1.8, maxWidth: 280 }}>
                {t('footerTagline')}
              </Typography>
              <Stack direction="row" spacing={1}>
                {[
                  { icon: <FacebookIcon sx={{ fontSize: 18 }} />, href: '#' },
                  { icon: <YouTubeIcon sx={{ fontSize: 18 }} />, href: '#' },
                  { icon: <LinkedInIcon sx={{ fontSize: 18 }} />, href: '#' },
                ].map(({ icon, href }, i) => (
                  <IconButton key={i} component="a" href={href} size="small" sx={{ bgcolor: 'rgba(255,255,255,0.1)', color: '#fff', '&:hover': { bgcolor: 'rgba(41,184,224,0.5)' } }}>
                    {icon}
                  </IconButton>
                ))}
              </Stack>
            </Stack>
          </Grid>

          <Grid size={{ xs: 6, md: 2 }}>
            <Typography variant="caption" fontWeight={700} color="#fff" mb={2} display="block" sx={{ textTransform: 'uppercase', letterSpacing: 1 }}>
              {t('footerCompany')}
            </Typography>
            <Stack spacing={1.5}>
              <MuiLink href={WEBSITE_URL} target="_blank" rel="noreferrer" variant="body2" sx={{ color: 'rgba(255,255,255,0.55)', textDecoration: 'none', '&:hover': { color: '#fff' } }}>
                {t('footerAbout')}
              </MuiLink>
              <MuiLink component={Link} to="/contact" variant="body2" sx={{ color: 'rgba(255,255,255,0.55)', textDecoration: 'none', '&:hover': { color: '#fff' } }}>
                {t('footerContactUs')}
              </MuiLink>
            </Stack>
          </Grid>

          <Grid size={{ xs: 6, md: 2 }}>
            <Typography variant="caption" fontWeight={700} color="#fff" mb={2} display="block" sx={{ textTransform: 'uppercase', letterSpacing: 1 }}>
              {t('footerSupport')}
            </Typography>
            <Stack spacing={1.5}>
              <MuiLink href={`mailto:${SUPPORT_EMAIL}`} variant="body2" sx={{ color: 'rgba(255,255,255,0.55)', textDecoration: 'none', '&:hover': { color: '#fff' } }}>
                {t('footerHelpCenter')}
              </MuiLink>
              <MuiLink component={Link} to="/delete-account" variant="body2" sx={{ color: 'rgba(255,255,255,0.55)', textDecoration: 'none', '&:hover': { color: '#fff' } }}>
                {t('footerDeleteAccount')}
              </MuiLink>
              <MuiLink component={Link} to="/privacy-policy" variant="body2" sx={{ color: 'rgba(255,255,255,0.55)', textDecoration: 'none', '&:hover': { color: '#fff' } }}>
                {t('navPrivacyPolicy')}
              </MuiLink>
            </Stack>
          </Grid>

          <Grid size={{ xs: 12, md: 4 }}>
            <Typography variant="caption" fontWeight={700} color="#fff" mb={2} display="block" sx={{ textTransform: 'uppercase', letterSpacing: 1 }}>
              {t('footerContact')}
            </Typography>
            <Stack spacing={1}>
              <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.55)' }}>
                📞{' '}
                <MuiLink href="tel:19008973" sx={{ color: 'rgba(255,255,255,0.85)', textDecoration: 'none', '&:hover': { color: '#29b8e0' } }}>{SUPPORT_HOTLINE}</MuiLink>
              </Typography>
              <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.55)' }}>
                📧{' '}
                <MuiLink href={`mailto:${SUPPORT_EMAIL}`} sx={{ color: 'rgba(255,255,255,0.85)', textDecoration: 'none', '&:hover': { color: '#29b8e0' } }}>{SUPPORT_EMAIL}</MuiLink>
              </Typography>
            </Stack>
          </Grid>
        </Grid>

        <Divider sx={{ my: 4, borderColor: 'rgba(255,255,255,0.08)' }} />

        <Stack direction={{ xs: 'column', sm: 'row' }} alignItems="center" justifyContent="space-between" spacing={1}>
          <Typography variant="caption" sx={{ color: 'rgba(255,255,255,0.35)' }}>
            {t('footerRights', { year: new Date().getFullYear() })}
          </Typography>
          <Typography variant="caption" sx={{ color: 'rgba(255,255,255,0.35)' }}>
            {APP_FULL_NAME} · {DEVELOPER_NAME}
          </Typography>
        </Stack>
      </Container>
    </Box>
  );
};

export default Footer;
