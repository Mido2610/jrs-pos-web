import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import WarningAmberIcon from '@mui/icons-material/WarningAmber';
import {
  Alert,
  Box,
  Button,
  Checkbox,
  Container,
  Divider,
  FormControlLabel,
  MenuItem,
  Stack,
  Step,
  StepLabel,
  Stepper,
  TextField,
  Typography,
} from '@mui/material';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import {
  APP_FULL_NAME,
  DEVELOPER_NAME,
  SUPPORT_EMAIL,
  SUPPORT_HOTLINE,
  SUPPORT_HOTLINE_HREF,
} from '../../utils/constants';

type StepKey = 'info' | 'form' | 'confirm';
const STEP_INDEX: Record<StepKey, number> = { info: 0, form: 1, confirm: 2 };

interface FormState {
  email: string;
  phone: string;
  reason: string;
  confirmed: boolean;
}

const INITIAL_FORM: FormState = { email: '', phone: '', reason: '', confirmed: false };

const DeleteAccount: React.FC = () => {
  const { t } = useTranslation();
  const [step, setStep] = useState<StepKey>('info');
  const [form, setForm] = useState<FormState>(INITIAL_FORM);

  const STEPS = [t('deleteStep1'), t('deleteStep2'), t('deleteStep3')];

  const DELETE_ITEMS = [
    t('deleteItem1'), t('deleteItem2'), t('deleteItem3'), t('deleteItem4'), t('deleteItem5'),
  ];

  const RETAIN_ITEMS = [t('retainItem1'), t('retainItem2')];

  const REASONS = [
    t('deleteReason1'), t('deleteReason2'), t('deleteReason3'), t('deleteReason4'), t('deleteReason5'),
  ];

  const DELETE_SUBJECT = `Delete Account Request – ${APP_FULL_NAME}`;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const target = e.target as HTMLInputElement;
    setForm((prev) => ({
      ...prev,
      [target.name]: target.type === 'checkbox' ? target.checked : target.value,
    }));
  };

  const handleSubmit = (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    const body = `DELETE ACCOUNT REQUEST\n\nApp: ${APP_FULL_NAME}\nDeveloper: ${DEVELOPER_NAME}\n\nEmail: ${form.email}\nPhone: ${form.phone}\nReason: ${form.reason}`;
    window.location.href = `mailto:${SUPPORT_EMAIL}?subject=${encodeURIComponent(DELETE_SUBJECT)}&body=${encodeURIComponent(body)}`;
    setStep('confirm');
  };

  return (
    <Box>
      {/* Page Header */}
      <Box sx={{ bgcolor: '#0a1628', color: '#fff', py: { xs: 7, md: 10 }, textAlign: 'center', px: 3 }}>
        <Typography variant="overline" sx={{ color: '#29b8e0', letterSpacing: 3, fontSize: 11 }}>
          {t('deleteOverline')}
        </Typography>
        <Typography variant="h2" sx={{ color: '#fff', mt: 1, mb: 1.5, fontSize: { xs: 28, md: 40 } }}>
          {t('deleteTitle')}
        </Typography>
        <Typography sx={{ color: 'rgba(255,255,255,0.6)', maxWidth: 580, mx: 'auto', lineHeight: 1.8 }}>
          {t('deleteSubtitle')}
        </Typography>
      </Box>

      <Container maxWidth="sm" sx={{ py: { xs: 5, md: 7 } }}>
        <Stepper activeStep={STEP_INDEX[step]} sx={{ mb: 5 }} alternativeLabel>
          {STEPS.map((label) => (
            <Step key={label}><StepLabel>{label}</StepLabel></Step>
          ))}
        </Stepper>

        {/* ── Step 1: Info ── */}
        {step === 'info' && (
          <Stack spacing={4}>
            {/* Warning banner */}
            <Box sx={{ display: 'flex', gap: 2, p: 3, bgcolor: '#fffbeb', border: '1px solid #f59e0b', borderRadius: 3 }}>
              <WarningAmberIcon sx={{ color: '#d97706', mt: 0.2, flexShrink: 0 }} />
              <Box>
                <Typography variant="subtitle2" fontWeight={700} color="#92400e">{t('deleteWarningTitle')}</Typography>
                <Typography variant="body2" color="#78350f" mt={0.5}>{t('deleteWarningDesc')}</Typography>
              </Box>
            </Box>

            {/* What's deleted */}
            <Box sx={{ p: 3, border: '1px solid', borderColor: 'divider', borderRadius: 3 }}>
              <Stack direction="row" alignItems="center" spacing={1} mb={2}>
                <DeleteForeverIcon color="error" fontSize="small" />
                <Typography variant="subtitle1" fontWeight={700}>{t('deleteWhatTitle')}</Typography>
              </Stack>
              <Stack spacing={1}>
                {DELETE_ITEMS.map((item) => (
                  <Stack key={item} direction="row" spacing={1} alignItems="flex-start">
                    <Box sx={{ width: 18, height: 18, borderRadius: '50%', bgcolor: '#fee2e2', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, mt: 0.2 }}>
                      <Box sx={{ width: 8, height: 8, borderRadius: '50%', bgcolor: '#ef4444' }} />
                    </Box>
                    <Typography variant="body2">{item}</Typography>
                  </Stack>
                ))}
              </Stack>
            </Box>

            {/* What's retained */}
            <Box sx={{ p: 3, border: '1px solid', borderColor: 'divider', borderRadius: 3 }}>
              <Stack direction="row" alignItems="center" spacing={1} mb={2}>
                <InfoOutlinedIcon color="primary" fontSize="small" />
                <Typography variant="subtitle1" fontWeight={700}>{t('deleteRetainTitle')}</Typography>
              </Stack>
              <Stack spacing={1}>
                {RETAIN_ITEMS.map((item) => (
                  <Stack key={item} direction="row" spacing={1} alignItems="flex-start">
                    <Box sx={{ width: 18, height: 18, borderRadius: '50%', bgcolor: '#e0e7ff', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, mt: 0.2 }}>
                      <Box sx={{ width: 8, height: 8, borderRadius: '50%', bgcolor: '#6366f1' }} />
                    </Box>
                    <Typography variant="body2" color="text.secondary">{item}</Typography>
                  </Stack>
                ))}
              </Stack>
            </Box>

            <Divider />

            {/* How to delete */}
            <Box>
              <Typography variant="subtitle1" fontWeight={700} mb={2}>{t('deleteHowTitle')}</Typography>
              <Stack spacing={2}>
                {[
                  { icon: <PhoneAndroidIcon />, title: t('deleteHow1Title'), desc: t('deleteHow1Desc'), color: '#eef2ff', iconColor: 'primary.main' },
                  { icon: <LockOpenIcon />, title: t('deleteHow2Title'), desc: t('deleteHow2Desc'), color: '#f0fdf4', iconColor: '#16a34a' },
                ].map(({ icon, title, desc, color, iconColor }, idx) => (
                  <Box key={idx} sx={{ display: 'flex', gap: 2, p: 2.5, bgcolor: color, borderRadius: 2.5 }}>
                    <Box sx={{ width: 40, height: 40, borderRadius: 2, display: 'flex', alignItems: 'center', justifyContent: 'center', bgcolor: '#fff', color: iconColor, flexShrink: 0 }}>
                      {icon}
                    </Box>
                    <Box>
                      <Typography variant="subtitle2" fontWeight={700}>{title}</Typography>
                      <Typography variant="body2" color="text.secondary" mt={0.25}>{desc}</Typography>
                    </Box>
                  </Box>
                ))}

                {/* Step 3 — contact */}
                <Box sx={{ display: 'flex', gap: 2, p: 2.5, bgcolor: '#fff7ed', borderRadius: 2.5 }}>
                  <Box sx={{ width: 40, height: 40, borderRadius: 2, display: 'flex', alignItems: 'center', justifyContent: 'center', bgcolor: '#fff', color: '#ea580c', flexShrink: 0, fontSize: 20 }}>
                    📧
                  </Box>
                  <Box>
                    <Typography variant="subtitle2" fontWeight={700}>{t('deleteHow3Title')}</Typography>
                    <Typography variant="body2" color="text.secondary" mt={0.25}>
                      {t('deleteHow3Desc')}{' '}
                      <Box component="a" href={`mailto:${SUPPORT_EMAIL}`} sx={{ color: 'primary.main', fontWeight: 600, textDecoration: 'none' }}>{SUPPORT_EMAIL}</Box>
                      {' '}{t('deleteHow3Or')}{' '}
                      <Box component="a" href={SUPPORT_HOTLINE_HREF} sx={{ color: 'primary.main', fontWeight: 600, textDecoration: 'none' }}>{SUPPORT_HOTLINE}</Box>
                    </Typography>
                  </Box>
                </Box>
              </Stack>
            </Box>

            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
              <Button variant="contained" color="error" size="large" startIcon={<DeleteForeverIcon />} onClick={() => setStep('form')}>
                {t('deleteBtnRequest')}
              </Button>
              <Button variant="outlined" component={Link} to="/contact">
                {t('deleteBtnContactInstead')}
              </Button>
            </Stack>
          </Stack>
        )}

        {/* ── Step 2: Form ── */}
        {step === 'form' && (
          <Box>
            <Typography variant="h5" fontWeight={700} mb={0.5}>{t('deleteFormTitle')}</Typography>
            <Typography variant="body2" color="text.secondary" mb={3.5}>
              {t('deleteFormSubtitle')}
            </Typography>

            <Box component="form" onSubmit={handleSubmit} sx={{ border: '1px solid', borderColor: 'divider', borderRadius: 3, p: 3 }}>
              <Stack spacing={2.5}>
                <TextField name="email" label={t('deleteFieldEmail')} type="email" value={form.email} onChange={handleChange} required fullWidth size="medium" />
                <TextField name="phone" label={t('deleteFieldPhone')} type="tel" placeholder={t('deleteFieldPhonePlaceholder')} value={form.phone} onChange={handleChange} required fullWidth size="medium" />
                <TextField name="reason" label={t('deleteFieldReason')} select value={form.reason} onChange={handleChange} fullWidth size="medium">
                  <MenuItem value="" disabled>{t('deleteReasonPlaceholder')}</MenuItem>
                  {REASONS.map((r) => <MenuItem key={r} value={r}>{r}</MenuItem>)}
                </TextField>

                <Box sx={{ p: 2, bgcolor: '#fef2f2', border: '1px solid #fecaca', borderRadius: 2 }}>
                  <FormControlLabel
                    control={<Checkbox name="confirmed" checked={form.confirmed} onChange={handleChange} required color="error" />}
                    label={<Typography variant="body2">{t('deleteConfirmCheck')}</Typography>}
                    sx={{ alignItems: 'flex-start', '& .MuiCheckbox-root': { mt: -0.75 } }}
                  />
                </Box>
              </Stack>

              <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} mt={3}>
                <Button type="submit" variant="contained" color="error" size="large" disabled={!form.confirmed} startIcon={<DeleteForeverIcon />}>
                  {t('deleteBtnSubmit')}
                </Button>
                <Button variant="outlined" onClick={() => setStep('info')}>{t('deleteBtnBack')}</Button>
              </Stack>
            </Box>
          </Box>
        )}

        {/* ── Step 3: Confirm ── */}
        {step === 'confirm' && (
          <Box sx={{ textAlign: 'center', py: 4 }}>
            <CheckCircleIcon sx={{ fontSize: 72, color: 'success.main', mb: 2 }} />
            <Typography variant="h4" fontWeight={700} mb={1}>{t('deleteConfirmTitle')}</Typography>
            <Typography color="text.secondary" mb={1}>{t('deleteConfirmDesc1')}</Typography>
            <Typography color="text.secondary" mb={3}>{t('deleteConfirmDesc2')}</Typography>

            <Alert severity="info" sx={{ textAlign: 'left', mb: 3 }}>
              <Typography variant="body2">
                {t('deleteConfirmDesc3')}{' '}
                <Box component="a" href={`mailto:${SUPPORT_EMAIL}`} sx={{ color: 'primary.main', fontWeight: 600 }}>{SUPPORT_EMAIL}</Box>
                {' '}{t('deleteConfirmOr')}{' '}
                <Box component="a" href={SUPPORT_HOTLINE_HREF} sx={{ color: 'primary.main', fontWeight: 600 }}>{SUPPORT_HOTLINE}</Box>
              </Typography>
            </Alert>

            <Button variant="contained" color="primary" component={Link} to="/">
              {t('deleteBtnHome')}
            </Button>
          </Box>
        )}
      </Container>
    </Box>
  );
};

export default DeleteAccount;
