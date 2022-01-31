import { Box, Text, Image } from '@skynexui/components';
import appConfig from '../config.json';

export default function MessageList({ messages }) {
  return (
    <Box
      tag="ul"
      styleSheet={{
        overflowY: 'auto',
        display: 'flex',
        flexDirection: 'column-reverse',
        flex: 1,
        color: appConfig.theme.colors.neutrals['000'],
        marginBottom: '16px',
        height: '60vh',
        minHeight: '60vh',
        maxHeight: '60vh',
      }}
    >
      {messages.map(({ id, from, text }) => {
        return (
          <Text
            key={id}
            tag="li"
            styleSheet={{
              borderRadius: '5px',
              padding: '6px',
              marginBottom: '12px',
              hover: {
                backgroundColor: appConfig.theme.colors.neutrals[700],
              },
            }}
          >
            <Box
              styleSheet={{
                marginBottom: '8px',
              }}
            >
              <Image
                styleSheet={{
                  width: '20px',
                  height: '20px',
                  borderRadius: '50%',
                  display: 'inline-block',
                  marginRight: '8px',
                }}
                src={`https://github.com/${from}.png`}
              />
              <Text tag="strong">{from}</Text>
              <Text
                styleSheet={{
                  fontSize: '10px',
                  marginLeft: '8px',
                  color: appConfig.theme.colors.neutrals[300],
                }}
                tag="span"
              >
                {new Date().toLocaleDateString()}
              </Text>
            </Box>
            {text.includes(':sticker:') ? (
              <Image src={text.replace(':sticker:', '')} />
            ) : (
              text
            )}
          </Text>
        );
      })}
    </Box>
  );
}
