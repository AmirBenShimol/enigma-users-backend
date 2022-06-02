import { Sequelize } from "sequelize";

const sequelize = new Sequelize("enigma-users", "root", "amir1102", {
  dialect: "mysql",
  host: "localhost",
  logging: false,
});

export default sequelize;
