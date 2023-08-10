class UserDTO {
  constructor(id, username, password, email, role, banned, banDays, lending) {
    this.id = id;
    this.username = username;
    this.password = password;
    this.email = email;
    this.role = role;
    this.banned = banned;
    this.banDays = banDays;
    this.lending = lending;
  }
};

module.exports = UserDTO;
