import appConfig from '../config.json';

const Title = ({ tag, label }) => {
  const Tag = tag;

  return (
    <>
      <Tag>{label}</Tag>

      <style jsx>
        {`
          ${Tag} {
            color: ${appConfig.theme.colors.primary['400']};
          }
        `}
      </style>
    </>
  );
};

export default Title;
