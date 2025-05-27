const authService = {
  isAuthenticated: false,
  user: null,
  roles: ['user', 'admin'],

  login: function(username, password) {
    if (username === 'admin' && password === 'password') {
      this.isAuthenticated = true;
      this.user = { username: 'admin', role: 'admin' };
      return true;
    }
    return false;
  }
};
export { authService };