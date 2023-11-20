import { Request, Response } from 'express';
import Usuario from '../models/usuario';

export const getUsuarios = async (req: Request, res: Response) => {
    try{
    const listUsuarios=  await Usuario.findAll();
        res.json(listUsuarios);
    }catch(err){
        res.status(500).json({
            msg: 'Error al obtener los usuarios'
        });
    }
}

export const getUsuario = async (req: Request, res: Response) => {
    const { id } = req.params;
    
    try{
    const usuario = await Usuario.findByPk(id);
   
        if(usuario){
            res.json(usuario);
        }else{
            res.status(404).json({
                msg: 'No existe un usuario con el id ${id}'
            });
        }
    }catch(err){
        res.status(500).json({
            msg: 'Error al obtener el usuario'
        });
    }
}

export const deleteUsuario = async (req: Request, res: Response) => {
    const { id } = req.params;

    try{
        const usuario = await Usuario.findByPk(id);
        if(usuario){
            await usuario.destroy();
            res.json({
                msg: 'El usuario ${id} ha sido eliminado con exito.'
            });
        }else{
            res.status(404).json({
                msg:'No existe un usuario con el id ${id}'
            });
        }
    }catch(err){
        res.status(500).json({
            msg: 'Error al eliminar el usuario'
        });
    }
}

export const postUsuario = async (req: Request, res: Response) => {
    const { body } = req;
    
    try{
        await Usuario.create(body);
        res.json({
            msg: 'Usuario agregado con exito.'
        })
    }catch(err){
        console.log(err);
        res.status(500).json({
            msg: 'Error al crear el usuario'
        });
    }
}

export const updateUsuario = async (req: Request, res: Response) => {
    const { id } = req.params;
    const { body } = req;
    
   try{
    const usuario = await Usuario.findByPk(id);
    if(usuario){
        await usuario.update(body);
        res.json({
            msg: 'Usuario actualizado con exito.'
        });
    }else{
        res.status(404).json({
            msg: 'No existe un usuario con el id ${id}'
        });
    }
   }catch(err){
    res.status(500).json({
        msg: 'Error al actualizar el usuario'
    });
   }
}