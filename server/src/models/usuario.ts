import { DataTypes } from "sequelize";
import db from "../db/connection";

const Usuario = db.define('usuario', {
    USR_IDENTIFICACION: {
        type: DataTypes.DOUBLE,
        primaryKey: true
    },
    USU_NOMBRE: {
        type: DataTypes.STRING
    },
    USU_APELLIDO: {
        type: DataTypes.STRING
    },
    USU_GENERO:{
        type: DataTypes.STRING
    },
    USU_ESTUDIO:{
        type: DataTypes.STRING
    },
    USU_CORREO: {
        type: DataTypes.STRING
    },
    USU_CONTRASENIA: {
        type: DataTypes.STRING
    }
}, {
    createdAt: false,
    updatedAt: false,
    freezeTableName: true
});

export default Usuario;