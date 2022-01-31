import Title from '../components/title';
import { Box, Button, Text, TextField, Image } from '@skynexui/components';
import appConfig from '../config.json';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';

function HomePage() {
  const [userInput, setUserInput] = useState('dada1smo');
  const [userName, setUserName] = useState('dada1smo');
  const [userData, setUserData] = useState([]);
  const router = useRouter();

  const getUserData = async () => {
    try {
      const response = await axios.get(
        `https://api.github.com/users/${userName}`
      );
      setUserData(response.data);
    } catch (error) {
      setUserData([]);
    }
  };

  useEffect(() => {
    if (userInput.length > 2) {
      setUserName(userInput);
    }
  }, [userInput]);

  useEffect(() => {
    getUserData();
  }, [userName]);

  const handleSubmitUserName = (event) => {
    event.preventDefault();
    router.push(`/chat?username=${userName}`);
  };

  return (
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
      }}
    >
      <Box
        as="form"
        onSubmit={(e) => handleSubmitUserName(e)}
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
          {appConfig.name} ({userName}) {userData.login}
        </Text>

        <TextField
          fullWidth
          textFieldColors={{
            neutral: {
              textColor: appConfig.theme.colors.neutrals[200],
              mainColor: appConfig.theme.colors.neutrals[900],
              mainColorHighlight: appConfig.theme.colors.primary[500],
              backgroundColor: appConfig.theme.colors.neutrals[900],
            },
          }}
          value={userInput}
          onChange={(e) => {
            setUserInput(e.target.value);
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
          src={`https://github.com/${userName}.png`}
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
          {userName}
        </Text>
      </Box>
    </Box>
  );
}

export default HomePage;
