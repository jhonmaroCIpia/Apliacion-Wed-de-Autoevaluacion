const express = require('express');
const ItemEvaluacion = require('./models/ItemEvaluacion');

const router = express.Router();

module.exports = (pool) => {
  // Obtener items según evaluación
  router.get('/:eva_id', (req, res) => {
    const { eva_id } = req.params;
    console.log(`Solicitud para obtener items de la evaluación ID ${eva_id}`);
    const query = 'SELECT * FROM item_evaluacion WHERE eva_id = ?';

    pool.query(query, [eva_id], (error, result) => {
      if (error) {
        console.error(error.message);
        return res.status(500).json({ error: 'Internal Server Error' });
      }

      const items = result.map(ItemEvaluacion.fromDBRow);
      console.log('Items enviados:', items);
      res.json(items);
    });
  });

  // Obtener un solo ítem por ID
  router.get('/detalle/:ieva_id', (req, res) => {
    const { ieva_id } = req.params;
    const query = `SELECT * FROM item_evaluacion WHERE ieva_id = ${ieva_id}`;

    conn.query(query, (error, result) => {
      if (error) return handleErrors(res, error);

      if (result.length > 0) {
        res.json(result);
      } else {
        res.json({ message: 'Item not found' });
      }
    });
  });

  // Agregar item
  router.post('/agregar', (req, res) => {
    const nuevoItem = new ItemEvaluacion(
      null,
      req.body.lab_id,
      req.body.eva_id,
      req.body.ieva_acto,
      req.body.ieva_estado,
      req.body.ieva_puntaje
    );

    const query = 'INSERT INTO item_evaluacion SET ?';
    pool.query(query, nuevoItem, (error) => {
      if (error) {
        console.error(error.message);
        return res.status(500).json({ error: 'Internal Server Error' });
      }

      res.json('Item added');
    });
  });

  // Actualizar item
  router.put('/editar/:ieva_id', (req, res) => {
    const { prmIevaId } = req.params;

    const item = new ItemEvaluacion(
      null,
      req.body.lab_id,
      req.body.eva_id,
      req.body.ieva_acto,
      req.body.ieva_estado,
      req.body.ieva_puntaje
    );

    const query = 'UPDATE item_evaluacion SET ? WHERE ieva_id = ?';
    pool.query(query, [item, prmIevaId], (error) => {
      if (error) {
        console.error(error.message);
        return res.status(500).json({ error: 'Internal Server Error' });
      }

      res.json('Item updated');
    });
  });

  // Eliminar item
  router.delete('/eliminar/:ieva_id', (req, res) => {
    const { prmIevaId } = req.params;

    const query = 'DELETE FROM item_evaluacion WHERE ieva_id = ?';
    pool.query(query, [prmIevaId], (error) => {
      if (error) {
        console.error(error.message);
        return res.status(500).json({ error: 'Internal Server Error' });
      }

      res.json('Item removed');
    });
  });

  return router;
};
