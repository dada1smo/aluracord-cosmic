import { createClient } from '@supabase/supabase-js';
import { useEffect, useState } from 'react';
import { Box, TextField } from '@skynexui/components';
import Header from '../components/chatheader';
import appConfig from '../config.json';
import MessageList from '../components/messagelist';
import { useRouter } from 'next/router';
import ButtonSendSticker from '../components/buttonsendsticker';

const SUPABASE_ANON_KEY =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTY0MzU1NjQyMiwiZXhwIjoxOTU5MTMyNDIyfQ.kjzIy-51TubLnYXCld8bMsS2ATb7hfJW3nxAWEJ6UOk';
const SUPABASE_URL = 'https://ealpqpkitiqymojnfpwk.supabase.co';
const supabaseClient = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

const chatListener = (addNewMessage) => {
  return supabaseClient
    .from('messages')
    .on('INSERT', (response) => {
      addNewMessage(response.new);
    })
    .subscribe();
};

export default function Chat() {
  const [message, setMessage] = useState('');
  const [messageList, setMessageList] = useState([]);
  const router = useRouter();
  const user = router.query.username;

  useEffect(() => {
    supabaseClient
      .from('messages')
      .select('*')
      .order('id', { ascending: false })
      .then(({ data }) => {
        setMessageList(data);
      });

    chatListener((newMessage) => {
      setMessageList((currentMessages) => {
        return [newMessage, ...currentMessages];
      });
    });
  }, []);

  const handleNewMessage = (newMessage) => {
    const message = {
      from: user,
      text: newMessage,
    };

    supabaseClient
      .from('messages')
      .insert([message])
      .then(({ data }) => {});

    setMessage('');
  };

  const onStickerClick = (sticker) => {
    handleNewMessage(`:sticker: ${sticker}`);
  };

  return (
    <>
      <Header />
      <Box
        styleSheet={{
          position: 'relative',
          display: 'flex',
          flex: 1,
          height: '80%',
          backgroundColor: appConfig.theme.colors.neutrals[600],
          flexDirection: 'column',
          borderRadius: '5px',
          padding: '16px',
        }}
      >
        <MessageList messages={messageList} />
        <Box
          as="form"
          styleSheet={{
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <TextField
            value={message}
            onChange={(e) => {
              setMessage(e.target.value);
            }}
            onKeyPress={(e) => {
              if (e.key === 'Enter') {
                e.preventDefault();
                handleNewMessage(message);
              }
            }}
            placeholder="Insira sua mensagem aqui..."
            type="textarea"
            styleSheet={{
              width: '100%',
              border: '0',
              resize: 'none',
              borderRadius: '5px',
              padding: '6px 8px',
              backgroundColor: appConfig.theme.colors.neutrals[800],
              marginRight: '12px',
              color: appConfig.theme.colors.neutrals[200],
            }}
          />
          <ButtonSendSticker onStickerClick={onStickerClick} />
        </Box>
      </Box>
    </>
  );
}
