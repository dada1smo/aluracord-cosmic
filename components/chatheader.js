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
          styleSheet={{ color: appConfig.theme.colors.neutrals[300] }}
        >
          Chat
        </Text>
        <Button
          variant="tertiary"
          colorVariant="neutral"
          label="Logout"
          href="/"
        />
      </Box>
    </>
  );
}
