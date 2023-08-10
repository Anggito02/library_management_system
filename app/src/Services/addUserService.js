const path = require('path');
const bcrypt = require('bcrypt');

const UserDTO = require(path.resolve('app', 'src', 'Repositories', 'DTO', 'UserDto.js'));

const addUserQuery = require(path.resolve('app', 'src', 'Repositories', 'Queries', 'addUserQuery.js'));

const {
  usernameValidator,
  emailValidator,
  passwordValidator,
} = require(path.resolve('app', 'src', 'Utils', 'Validator', 'validator.js'));

const addUserService = async (data) => {
  // try {
  //   const username = data.username;
  //   const email = data.email;
  //   const password = data.password;

  //   const usernameValidation = await usernameValidator(username);
  //   const emailValidation = await emailValidator(email);
  //   const passwordValidation = passwordValidator(password);

  //   if (usernameValidation.status !== true) {
  //     return {
  //       status: 400,
  //       message: usernameValidation.message,
  //     };
  //   }

  //   if (emailValidation.status !== true) {
  //     return {
  //       status: 400,
  //       message: emailValidation.message,
  //     };
  //   }

  //   if (passwordValidation.status !== true) {
  //     return {
  //       status: 400,
  //       message: passwordValidation.message,
  //     };
  //   }

  //   const hashedPassword = bcrypt.hashSync(password, 10);

  //   const result = await addUserQuery(new UserDTO(
  //       null,
  //       username,
  //       hashedPassword,
  //       email,
  //       null,
  //       null,
  //       null,
  //       null,
  //   ));

  //   return {
  //     status: 201,
  //     message: 'Successfully add new user.',
  //     data: result,
  //   };
  // } catch (error) {
  //   return {
  //     status: 500,
  //     message: error.message,
  //   };
  // }

  const username = data.username;
  const email = data.email;
  const password = data.password;

  const usernameValidation = await usernameValidator(username);
  const emailValidation = await emailValidator(email);
  const passwordValidation = passwordValidator(password);

  if (usernameValidation.status !== true) {
    return {
      status: 400,
      message: usernameValidation.message,
    };
  }

  if (emailValidation.status !== true) {
    return {
      status: 400,
      message: emailValidation.message,
    };
  }

  if (passwordValidation.status !== true) {
    return {
      status: 400,
      message: passwordValidation.message,
    };
  }

  const hashedPassword = bcrypt.hashSync(password, 10);

  const result = await addUserQuery(new UserDTO(
      null,
      username,
      hashedPassword,
      email,
      null,
      null,
      null,
      null,
  ));

  return {
    status: 201,
    message: 'Successfully add new user.',
    data: result,
  };
};

module.exports = addUserService;
