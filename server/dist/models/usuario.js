"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../db/connection"));
const Usuario = connection_1.default.define('usuario', {
    USR_IDENTIFICACION: {
        type: sequelize_1.DataTypes.DOUBLE,
        primaryKey: true
    },
    USU_NOMBRE: {
        type: sequelize_1.DataTypes.STRING
    },
    USU_APELLIDO: {
        type: sequelize_1.DataTypes.STRING
    },
    USU_GENERO: {
        type: sequelize_1.DataTypes.STRING
    },
    USU_ESTUDIO: {
        type: sequelize_1.DataTypes.STRING
    },
    USU_CORREO: {
        type: sequelize_1.DataTypes.STRING
    },
    USU_CONTRASENIA: {
        type: sequelize_1.DataTypes.STRING
    }
}, {
    createdAt: false,
    updatedAt: false,
    freezeTableName: true
});
exports.default = Usuario;
