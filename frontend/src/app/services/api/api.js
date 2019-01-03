import fetcher from 'app/services/fetcher';

export default {
  getConfig: () => fetcher.get('/config'),
  getUser: () => fetcher.get('/user'),
};
