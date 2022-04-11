import bcrypt from "bcryptjs";

const users = [
  {
    name: "AdminUser",
    email: "admin@example.com",
    password: bcrypt.hashSync("123456", 10),
    isAdmin: true,
  },
  {
    name: "John Doe",
    email: "seru@example.com",
    password: bcrypt.hashSync("123456", 10),
  },
  {
    name: "Jimmy John",
    email: "user@example.com",
    password: bcrypt.hashSync("123456", 10),
  },
];

export default users;
