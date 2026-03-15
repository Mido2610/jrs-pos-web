import { CallOutlined, CheckCircleOutline, EmailOutlined, LanguageOutlined, StorefrontOutlined } from '@mui/icons-material';
import {
  Box,
  Button,
  Card,
  CardContent,
  Container,
  Grid,
  MenuItem,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import {
  APP_FULL_NAME,
  DEVELOPER_NAME,
  SUPPORT_EMAIL,
  SUPPORT_HOTLINE,
  SUPPORT_HOTLINE_HREF,
  WEBSITE_URL,
} from '../../utils/constants';

interface FormState {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const INITIAL_FORM: FormState = { name: '', email: '', subject: '', message: '' };

const Contact: React.FC = () => {
  const { t } = useTranslation();
  const [form, setForm] = useState<FormState>(INITIAL_FORM);
  const [submitted, setSubmitted] = useState(false);

  const INFO_ITEMS = [
    { icon: <CallOutlined />, label: t('contactLabelHotline'), value: SUPPORT_HOTLINE, href: SUPPORT_HOTLINE_HREF, note: t('contactNoteHotline') },
    { icon: <EmailOutlined />, label: t('contactLabelEmail'), value: SUPPORT_EMAIL, href: `mailto:${SUPPORT_EMAIL}`, note: t('contactNoteEmail') },
    { icon: <LanguageOutlined />, label: t('contactLabelWebsite'), value: WEBSITE_URL, href: WEBSITE_URL, note: t('contactNoteWebsite') },
    { icon: <StorefrontOutlined />, label: t('contactLabelDeveloper'), value: DEVELOPER_NAME, href: undefined, note: t('contactNoteApp') },
  ];

  const SUBJECTS = [
    t('contactSubjectAccountSupport'),
    t('contactSubjectDeleteAccount'),
    t('contactSubjectTechnical'),
    t('contactSubjectBilling'),
    t('contactSubjectGeneral'),
    t('contactSubjectOther'),
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    const body = `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`;
    window.location.href = `mailto:${SUPPORT_EMAIL}?subject=${encodeURIComponent(form.subject)}&body=${encodeURIComponent(body)}`;
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <Container maxWidth="sm" sx={{ py: { xs: 10, md: 14 }, textAlign: 'center' }}>
        <CheckCircleOutline sx={{ fontSize: 72, color: 'success.main', mb: 2 }} />
        <Typography variant="h4" fontWeight={700} mb={1}>{t('contactSuccessTitle')}</Typography>
        <Typography color="text.secondary">{t('contactSuccessDesc')}</Typography>
        <Button variant="contained" color="primary" sx={{ mt: 4 }} onClick={() => setSubmitted(false)}>
          {t('contactFormTitle')}
        </Button>
      </Container>
    );
  }

  return (
    <Box>
      {/* Page Header */}
      <Box sx={{ bgcolor: '#0a1628', color: '#fff', py: { xs: 7, md: 10 }, textAlign: 'center', px: 3 }}>
        <Typography variant="overline" sx={{ color: '#29b8e0', letterSpacing: 3, fontSize: 11 }}>
          {t('contactOverline')}
        </Typography>
        <Typography variant="h2" sx={{ color: '#fff', mt: 1, mb: 1.5, fontSize: { xs: 28, md: 40 } }}>
          {t('contactTitle')}
        </Typography>
        <Typography sx={{ color: 'rgba(255,255,255,0.6)', maxWidth: 520, mx: 'auto', lineHeight: 1.8 }}>
          {t('contactSubtitle')}
        </Typography>
      </Box>

      <Container maxWidth="lg" sx={{ py: { xs: 5, md: 8 } }}>
        <Grid container spacing={4} alignItems="flex-start">

          {/* Left — Info cards */}
          <Grid size={{ xs: 12, md: 4 }}>
            <Stack spacing={2}>
              {INFO_ITEMS.map(({ icon, label, value, href, note }) => (
                <Card
                  key={label}
                  variant="outlined"
                  sx={{ transition: 'border-color .2s, box-shadow .2s', '&:hover': { borderColor: 'primary.main', boxShadow: '0 2px 12px rgba(26,61,143,0.1)' } }}
                >
                  <CardContent sx={{ display: 'flex', alignItems: 'flex-start', gap: 2, py: '14px !important' }}>
                    <Box sx={{ width: 38, height: 38, borderRadius: 2, bgcolor: '#eef2ff', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'primary.main', flexShrink: 0 }}>
                      {icon}
                    </Box>
                    <Box>
                      <Typography variant="caption" color="text.secondary" display="block" lineHeight={1.4}>{label}</Typography>
                      {href ? (
                        <Typography variant="body2" fontWeight={600} mt={0.25}>
                          <Box
                            component="a"
                            href={href}
                            target={href.startsWith('http') ? '_blank' : undefined}
                            rel="noreferrer"
                            sx={{ color: 'primary.main', textDecoration: 'none', '&:hover': { textDecoration: 'underline' } }}
                          >
                            {value}
                          </Box>
                        </Typography>
                      ) : (
                        <Typography variant="body2" fontWeight={600} mt={0.25}>{value}</Typography>
                      )}
                      {note && <Typography variant="caption" color="text.secondary" display="block" mt={0.25}>{note}</Typography>}
                    </Box>
                  </CardContent>
                </Card>
              ))}

              {/* App badge */}
              <Box sx={{ mt: 1, p: 2.5, bgcolor: '#f0f6ff', borderRadius: 3, border: '1px solid', borderColor: '#c7d9f8' }}>
                <Typography variant="caption" color="primary.dark" fontWeight={700} display="block" mb={0.5}>
                  {APP_FULL_NAME}
                </Typography>
                <Typography variant="caption" color="text.secondary">
                  Developer: {DEVELOPER_NAME}
                </Typography>
              </Box>
            </Stack>
          </Grid>

          {/* Right — Form */}
          <Grid size={{ xs: 12, md: 8 }}>
            <Box
              component="form"
              onSubmit={handleSubmit}
              sx={{ bgcolor: '#fff', border: '1px solid', borderColor: 'divider', borderRadius: 3, p: { xs: 3, md: 4 } }}
            >
              <Typography variant="h5" fontWeight={700} mb={0.5}>{t('contactFormTitle')}</Typography>
              <Typography variant="body2" color="text.secondary" mb={3.5}>
                {t('contactFormSubtitle')}
              </Typography>

              <Grid container spacing={2.5}>
                <Grid size={{ xs: 12, sm: 6 }}>
                  <TextField name="name" label={t('contactFieldName')} value={form.name} onChange={handleChange} required fullWidth size="medium" />
                </Grid>
                <Grid size={{ xs: 12, sm: 6 }}>
                  <TextField name="email" label={t('contactFieldEmail')} type="email" value={form.email} onChange={handleChange} required fullWidth size="medium" />
                </Grid>
                <Grid size={{ xs: 12 }}>
                  <TextField name="subject" label={t('contactFieldSubject')} select value={form.subject} onChange={handleChange} required fullWidth size="medium">
                    <MenuItem value="" disabled>{t('contactSubjectPlaceholder')}</MenuItem>
                    {SUBJECTS.map((s) => <MenuItem key={s} value={s}>{s}</MenuItem>)}
                  </TextField>
                </Grid>
                <Grid size={{ xs: 12 }}>
                  <TextField name="message" label={t('contactFieldMessage')} multiline rows={5} value={form.message} onChange={handleChange} required fullWidth size="medium" />
                </Grid>
              </Grid>

              <Button type="submit" variant="contained" color="primary" size="large" fullWidth sx={{ mt: 3.5, py: 1.5 }}>
                {t('contactSubmitButton')}
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Contact;
