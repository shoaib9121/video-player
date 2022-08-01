export enum configEndpoint {
  login = 'login',
}
 const config = {
  [configEndpoint.login]: {
    uri: '/login.json'
  },
}

export default config;