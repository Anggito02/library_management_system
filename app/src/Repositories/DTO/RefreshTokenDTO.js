class RefreshTokenDTO {
  constructor(username, email, role, refreshToken) {
    this.username = username;
    this.email = email;
    this.role = role;
    this.refreshToken = refreshToken;
  }
};

module.exports = RefreshTokenDTO;
