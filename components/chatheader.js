import { Box, Text, Button } from '@skynexui/components';
import appConfig from '../config.json';

export default function Header() {
  return (
    <>
      <Box
        styleSheet={{
          width: '100%',
          marginBottom: '16px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <Text
          variant="heading4"
          styleSheet={{ color: appConfig.theme.colors.primary[100] }}
        >
          Chat
        </Text>
        <Button
          colorVariant="neutral"
          label="Logout"
          href="/"
          styleSheet={{
            backgroundColor: appConfig.theme.colors.neutrals[900],
            hover: { backgroundColor: appConfig.theme.colors.primary[800] },
          }}
        />
      </Box>
    </>
  );
}
