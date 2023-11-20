"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateUsuario = exports.postUsuario = exports.deleteUsuario = exports.getUsuario = exports.getUsuarios = void 0;
const usuario_1 = __importDefault(require("../models/usuario"));
const getUsuarios = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const listUsuarios = yield usuario_1.default.findAll();
        res.json(listUsuarios);
    }
    catch (err) {
        res.status(500).json({
            msg: 'Error al obtener los usuarios'
        });
    }
});
exports.getUsuarios = getUsuarios;
const getUsuario = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const usuario = yield usuario_1.default.findByPk(id);
        if (usuario) {
            res.json(usuario);
        }
        else {
            res.status(404).json({
                msg: 'No existe un usuario con el id ${id}'
            });
        }
    }
    catch (err) {
        res.status(500).json({
            msg: 'Error al obtener el usuario'
        });
    }
});
exports.getUsuario = getUsuario;
const deleteUsuario = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const usuario = yield usuario_1.default.findByPk(id);
        if (usuario) {
            yield usuario.destroy();
            res.json({
                msg: 'El usuario ${id} ha sido eliminado con exito.'
            });
        }
        else {
            res.status(404).json({
                msg: 'No existe un usuario con el id ${id}'
            });
        }
    }
    catch (err) {
        res.status(500).json({
            msg: 'Error al eliminar el usuario'
        });
    }
});
exports.deleteUsuario = deleteUsuario;
const postUsuario = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    try {
        yield usuario_1.default.create(body);
        res.json({
            msg: 'Usuario agregado con exito.'
        });
    }
    catch (err) {
        console.log(err);
        res.status(500).json({
            msg: 'Error al crear el usuario'
        });
    }
});
exports.postUsuario = postUsuario;
const updateUsuario = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { body } = req;
    try {
        const usuario = yield usuario_1.default.findByPk(id);
        if (usuario) {
            yield usuario.update(body);
            res.json({
                msg: 'Usuario actualizado con exito.'
            });
        }
        else {
            res.status(404).json({
                msg: 'No existe un usuario con el id ${id}'
            });
        }
    }
    catch (err) {
        res.status(500).json({
            msg: 'Error al actualizar el usuario'
        });
    }
});
exports.updateUsuario = updateUsuario;
