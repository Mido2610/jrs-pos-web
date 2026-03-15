import MenuIcon from '@mui/icons-material/Menu';
import TranslateIcon from '@mui/icons-material/Translate';
import {
  AppBar,
  Box,
  Button,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemText,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link, useLocation } from 'react-router-dom';
import { APP_NAME, LOGO_PATH } from '../../utils/constants';

const LANGUAGES = [
  { code: 'ja', label: '日本語', flag: '🇯🇵' },
  { code: 'vi', label: 'Tiếng Việt', flag: '🇻🇳' },
  { code: 'en', label: 'English', flag: '🇬🇧' },
];

const NAV_KEYS = [
  { tKey: 'navHome', path: '/' },
  { tKey: 'navContact', path: '/contact' },
  { tKey: 'navDeleteAccount', path: '/delete-account' },
] as const;

const Navbar: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const { t, i18n } = useTranslation();
  const location = useLocation();

  const [drawerOpen, setDrawerOpen] = useState(false);
  const [langMenuAnchor, setLangMenuAnchor] = useState<null | HTMLElement>(null);

  const currentLang = LANGUAGES.find((l) => l.code === i18n.language) ?? LANGUAGES[0];
  const isActive = (path: string) => location.pathname === path;

  const handleLangSelect = (code: string) => {
    i18n.changeLanguage(code);
    setLangMenuAnchor(null);
  };

  const drawer = (
    <Box sx={{ width: 240 }} onClick={() => setDrawerOpen(false)}>
      <Box sx={{ p: 2, display: 'flex', alignItems: 'center', gap: 1 }}>
        <Box component="img" src={LOGO_PATH} alt={APP_NAME} sx={{ width: 32, height: 32, objectFit: 'contain' }} />
        <Typography fontWeight={700} color="primary.main">{APP_NAME}</Typography>
      </Box>
      <Divider />
      <List>
        {NAV_KEYS.map(({ tKey, path }) => (
          <ListItemButton
            key={path}
            component={Link}
            to={path}
            selected={isActive(path)}
            sx={{ '&.Mui-selected': { bgcolor: 'primary.main', '& .MuiListItemText-primary': { color: '#fff', fontWeight: 700 } } }}
          >
            <ListItemText primary={t(tKey)} />
          </ListItemButton>
        ))}
      </List>
      <Divider />
      <Box sx={{ p: 1 }}>
        <Typography variant="caption" color="text.secondary" px={1} mb={0.5} display="block">Language</Typography>
        {LANGUAGES.map(({ code, label, flag }) => (
          <ListItemButton
            key={code}
            selected={i18n.language === code}
            onClick={() => handleLangSelect(code)}
            sx={{ borderRadius: 1, py: 0.75, '&.Mui-selected': { bgcolor: 'rgba(26,61,143,0.1)', color: 'primary.main' } }}
          >
            <Typography mr={1}>{flag}</Typography>
            <ListItemText primary={label} />
          </ListItemButton>
        ))}
      </Box>
    </Box>
  );

  return (
    <>
      <AppBar position="sticky" elevation={0} sx={{ borderBottom: '1px solid', borderColor: 'divider' }}>
        <Toolbar sx={{ maxWidth: '1200px', width: '100%', mx: 'auto', px: { xs: 2, md: 3 }, gap: 1 }}>
          {isMobile && (
            <IconButton edge="start" onClick={() => setDrawerOpen(true)} aria-label="menu" color="inherit">
              <MenuIcon />
            </IconButton>
          )}

          <Box component={Link} to="/" sx={{ display: 'flex', alignItems: 'center', gap: 1.5, textDecoration: 'none', flexGrow: 1 }}>
            <Box component="img" src={LOGO_PATH} alt={APP_NAME} sx={{ width: 40, height: 40, objectFit: 'contain' }} />
            <Typography variant="h6" fontWeight={700} sx={{ color: 'primary.dark', letterSpacing: 0.5 }}>
              {APP_NAME}{' '}
              <Box component="span" sx={{ color: 'secondary.main', fontWeight: 400, fontSize: '0.72em' }}>POS</Box>
            </Typography>
          </Box>

          {!isMobile && (
            <Box sx={{ display: 'flex', gap: 0.5 }}>
              {NAV_KEYS.map(({ tKey, path }) => (
                <Button
                  key={path}
                  component={Link}
                  to={path}
                  sx={{
                    color: isActive(path) ? 'primary.main' : 'text.secondary',
                    bgcolor: isActive(path) ? 'rgba(26,61,143,0.08)' : 'transparent',
                    borderRadius: 1.5,
                    fontWeight: isActive(path) ? 700 : 500,
                    '&:hover': { bgcolor: 'rgba(26,61,143,0.06)', color: 'primary.main' },
                  }}
                >
                  {t(tKey)}
                </Button>
              ))}
            </Box>
          )}

          <Button
            startIcon={<TranslateIcon sx={{ fontSize: '18px !important' }} />}
            onClick={(e) => setLangMenuAnchor(e.currentTarget)}
            sx={{ color: 'text.secondary', minWidth: 0, '&:hover': { bgcolor: 'rgba(26,61,143,0.06)', color: 'primary.main' }, ml: 0.5 }}
          >
            <Typography variant="body2">{currentLang.flag}</Typography>
          </Button>

          <Menu
            anchorEl={langMenuAnchor}
            open={Boolean(langMenuAnchor)}
            onClose={() => setLangMenuAnchor(null)}
            transformOrigin={{ horizontal: 'right', vertical: 'top' }}
            anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
            slotProps={{ paper: { sx: { mt: 1, minWidth: 160 } } }}
          >
            {LANGUAGES.map(({ code, label, flag }) => (
              <MenuItem
                key={code}
                selected={i18n.language === code}
                onClick={() => handleLangSelect(code)}
                sx={{ gap: 1.5, '&.Mui-selected': { bgcolor: 'rgba(26,61,143,0.08)', fontWeight: 700 } }}
              >
                <Typography>{flag}</Typography>
                <Typography variant="body2">{label}</Typography>
              </MenuItem>
            ))}
          </Menu>
        </Toolbar>
      </AppBar>

      <Drawer anchor="left" open={drawerOpen} onClose={() => setDrawerOpen(false)}>
        {drawer}
      </Drawer>
    </>
  );
};

export default Navbar;
