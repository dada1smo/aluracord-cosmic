import GlobalStyle from '../components/GlobalStyle';
import Title from '../components/Title';
import { Box, Button, Text, TextField, Image } from '@skynexui/components';
import appConfig from '../config.json';

function HomePage() {
  const username = 'dada1smo';

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
            alignItems: 'center',
            justifyContent: 'space-between',
            flexDirection: {
              xs: 'column',
              sm: 'row',
            },
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
          <Box
            as="form"
            styleSheet={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              width: { xs: '100%', sm: '60%' },
              textAlign: 'center',
              marginBottom: '32px',
              gap: '12px',
            }}
          >
            <Title tag="h1" label="Boas-vindas de volta!" />
            <Text
              variant="body3"
              styleSheet={{
                marginBottom: '20px',
                color: appConfig.theme.colors.neutrals[300],
              }}
            >
              {appConfig.name} ({username})
            </Text>

            <TextField
              fullWidth
              textFieldColors={{
                neutral: {
                  textColor: appConfig.theme.colors.neutrals[200],
                  mainColor: appConfig.theme.colors.neutrals[900],
                  mainColorHighlight: appConfig.theme.colors.primary[500],
                  backgroundColor: appConfig.theme.colors.neutrals[800],
                },
              }}
            />
            <Button
              type="submit"
              label="Entrar"
              fullWidth
              buttonColors={{
                contrastColor: appConfig.theme.colors.neutrals['000'],
                mainColor: appConfig.theme.colors.primary[500],
                mainColorLight: appConfig.theme.colors.primary[400],
                mainColorStrong: appConfig.theme.colors.primary[600],
              }}
            />
          </Box>
          <Box
            styleSheet={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              maxWidth: '200px',
              padding: '16px',
              backgroundColor: appConfig.theme.colors.neutrals[900],
              borderRadius: '10px',
              flex: 1,
              minHeight: '240px',
            }}
          >
            <Image
              styleSheet={{
                borderRadius: '50%',
                marginBottom: '16px',
              }}
              src={`https://github.com/${username}.png`}
            />
            <Text
              variant="body4"
              styleSheet={{
                color: appConfig.theme.colors.neutrals[200],
                backgroundColor: appConfig.theme.colors.neutrals[900],
                padding: '3px 10px',
                borderRadius: '1000px',
              }}
            >
              {username}
            </Text>
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default HomePage;
