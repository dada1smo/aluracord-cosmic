import GlobalStyle from '../components/globalstyle';
import { Box } from '@skynexui/components';
import appConfig from '../config.json';

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <Box
        styleSheet={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: appConfig.theme.colors.neutrals['800'],
          backgroundImage: 'url(/stars.svg)',
          backgroundRepeat: 'repeat',
          backgroundSize: 'fit',
        }}
      >
        <Box
          styleSheet={{
            display: 'flex',
            alignItems: 'stretch',
            justifyContent: 'space-between',
            flexDirection: 'column',
            width: '100%',
            maxWidth: '720px',
            borderRadius: '5px',
            border: `1px solid ${appConfig.theme.colors.primary[900]}`,
            padding: '32px',
            margin: '16px',
            boxShadow: `0 0px 32px 0 ${appConfig.theme.colors.primary[900]}`,
            backgroundColor: appConfig.theme.colors.neutrals[800],
          }}
        >
          <Component {...pageProps} />
        </Box>
      </Box>
    </>
  );
}
