class ItemEvaluacion {
  constructor(atrIevaId, atrLabId, atrEvaId, atrIevaActo, atrIevaEstado, atrIevaPuntaje) {
    this.atrIevaId = atrIevaId;
    this.atrLabId = atrLabId;
    this.atrEvaId = atrEvaId;
    this.atrIevaActo = atrIevaActo;
    this.atrIevaEstado = atrIevaEstado;
    this.atrIevaPuntaje = atrIevaPuntaje;
  }

  // Método para obtener un objeto ItemEvaluacion desde una fila de la base de datos
  static fromDBRow(row) {
    return new ItemEvaluacion(
      row.IEVA_ID,
      row.LAB_ID,
      row.EVA_ID,
      row.IEVA_ACTO,
      row.IEVA_ESTADO,
      row.IEVA_PUNTAJE
    );
  }
}

module.exports = ItemEvaluacion;
