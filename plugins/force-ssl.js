export default ({ isDev }) => {
  if (!isDev && location.protocol !== 'https:') {
    location.protocol = 'https:';
  }
};
