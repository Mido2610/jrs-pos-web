import React from 'react';
import { useTranslation } from 'react-i18next';
import { Box, Container, Typography, Stack, Link } from '@mui/material';
import { SUPPORT_EMAIL, SUPPORT_HOTLINE } from '../../utils/constants';

const PrivacyPolicy: React.FC = () => {
  const { t } = useTranslation();
  const today = new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  const Section = ({
    title,
    children,
  }: {
    title: string;
    children: React.ReactNode;
  }) => (
    <Box sx={{ mb: 4 }}>
      <Typography
        variant="h5"
        sx={{
          fontWeight: 700,
          mb: 2,
          color: 'primary.main',
          fontSize: '1.1rem',
        }}
      >
        {title}
      </Typography>
      {children}
    </Box>
  );

  const ListItem = ({ text }: { text: string }) => (
    <Typography
      component="li"
      sx={{
        mb: 1,
        color: '#475569',
        lineHeight: 1.7,
        fontSize: '0.95rem',
      }}
    >
      {text}
    </Typography>
  );

  return (
    <Box sx={{ bgcolor: '#ffffff', py: 6 }}>
      <Container maxWidth="md">
        {/* Header */}
        <Box sx={{ mb: 5 }}>
          <Typography
            variant="overline"
            sx={{
              color: 'primary.main',
              fontWeight: 700,
              letterSpacing: '0.1em',
              fontSize: '0.75rem',
              mb: 1,
              display: 'block',
            }}
          >
            {t('privacyOverline')}
          </Typography>
          <Typography
            variant="h3"
            sx={{
              fontWeight: 800,
              mb: 2,
              color: '#111827',
              fontSize: { xs: '1.75rem', sm: '2.25rem' },
            }}
          >
            {t('privacyTitle')}
          </Typography>
          <Typography
            sx={{
              color: '#64748b',
              fontSize: '0.9rem',
              mb: 4,
            }}
          >
            {t('privacyLastUpdated', { date: today })}
          </Typography>
        </Box>

        {/* Content */}
        <Box
          sx={{
            color: '#1e293b',
            lineHeight: 1.8,
            fontSize: '0.95rem',
          }}
        >
          {/* 1. Introduction */}
          <Section title={t('privacyIntroTitle')}>
            <Typography sx={{ color: '#475569', lineHeight: 1.7, mb: 2 }}>
              {t('privacyIntroDesc')}
            </Typography>
          </Section>

          {/* 2. Information We Collect */}
          <Section title={t('privacyCollectionTitle')}>
            <Box component="ul" sx={{ pl: 2, mb: 2 }}>
              <ListItem text={t('privacyCollectionItem1')} />
              <ListItem text={t('privacyCollectionItem2')} />
              <ListItem text={t('privacyCollectionItem3')} />
              <ListItem text={t('privacyCollectionItem4')} />
              <ListItem text={t('privacyCollectionItem5')} />
              <ListItem text={t('privacyCollectionItem6')} />
            </Box>
          </Section>

          {/* 3. How We Use Your Information */}
          <Section title={t('privacyUseTitle')}>
            <Box component="ul" sx={{ pl: 2, mb: 2 }}>
              <ListItem text={t('privacyUseItem1')} />
              <ListItem text={t('privacyUseItem2')} />
              <ListItem text={t('privacyUseItem3')} />
              <ListItem text={t('privacyUseItem4')} />
              <ListItem text={t('privacyUseItem5')} />
              <ListItem text={t('privacyUseItem6')} />
            </Box>
          </Section>

          {/* 4. Data Protection */}
          <Section title={t('privacyProtectionTitle')}>
            <Typography sx={{ color: '#475569', lineHeight: 1.7, mb: 2 }}>
              {t('privacyProtectionDesc')}
            </Typography>
          </Section>

          {/* 5. Data Retention */}
          <Section title={t('privacyRetentionTitle')}>
            <Typography sx={{ color: '#475569', lineHeight: 1.7, mb: 2 }}>
              {t('privacyRetentionDesc')}
            </Typography>
          </Section>

          {/* 6. Third-Party Sharing */}
          <Section title={t('privacyThirdPartyTitle')}>
            <Typography sx={{ color: '#475569', lineHeight: 1.7, mb: 2 }}>
              {t('privacyThirdPartyDesc')}
            </Typography>
          </Section>

          {/* 7. Cookies */}
          <Section title={t('privacyCookiesTitle')}>
            <Typography sx={{ color: '#475569', lineHeight: 1.7, mb: 2 }}>
              {t('privacyCookiesDesc')}
            </Typography>
          </Section>

          {/* 8. Your Rights */}
          <Section title={t('privacyRightsTitle')}>
            <Box component="ul" sx={{ pl: 2, mb: 2 }}>
              <ListItem text={t('privacyRightsItem1')} />
              <ListItem text={t('privacyRightsItem2')} />
              <ListItem text={t('privacyRightsItem3')} />
              <ListItem text={t('privacyRightsItem4')} />
              <ListItem text={t('privacyRightsItem5')} />
            </Box>
          </Section>

          {/* 9. Contact Us */}
          <Section title={t('privacyContactTitle')}>
            <Typography sx={{ color: '#475569', lineHeight: 1.7, mb: 3 }}>
              {t('privacyContactDesc')}
            </Typography>

            <Stack spacing={2} sx={{ pl: 2 }}>
              <Box>
                <Typography
                  sx={{
                    fontWeight: 600,
                    color: '#1e293b',
                    mb: 0.5,
                    fontSize: '0.95rem',
                  }}
                >
                  {t('privacyContactEmail')}
                </Typography>
                <Link
                  href={`mailto:${SUPPORT_EMAIL}`}
                  sx={{
                    color: 'primary.main',
                    textDecoration: 'none',
                    '&:hover': { textDecoration: 'underline' },
                    fontSize: '0.95rem',
                  }}
                >
                  {SUPPORT_EMAIL}
                </Link>
              </Box>

              <Box>
                <Typography
                  sx={{
                    fontWeight: 600,
                    color: '#1e293b',
                    mb: 0.5,
                    fontSize: '0.95rem',
                  }}
                >
                  {t('privacyContactPhone')}
                </Typography>
                <Link
                  href={`tel:${SUPPORT_HOTLINE}`}
                  sx={{
                    color: 'primary.main',
                    textDecoration: 'none',
                    '&:hover': { textDecoration: 'underline' },
                    fontSize: '0.95rem',
                  }}
                >
                  {SUPPORT_HOTLINE}
                </Link>
              </Box>

              <Box>
                <Typography
                  sx={{
                    color: '#64748b',
                    fontSize: '0.85rem',
                    fontStyle: 'italic',
                  }}
                >
                  {t('privacyContactHours')}
                </Typography>
              </Box>
            </Stack>
          </Section>
        </Box>
      </Container>
    </Box>
  );
};

export default PrivacyPolicy;
