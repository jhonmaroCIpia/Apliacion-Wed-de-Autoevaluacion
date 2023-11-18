// itemEvaluacion.js
class ItemEvaluacion {
  constructor(Ieva_Id, Lab_Id, Eva_Id, Ieva_Acto, Ieva_Estado, Ieva_Puntaje) {
    this.Ieva_Id = Ieva_Id;
    this.Lab_Id = Lab_Id;
    this.Eva_Id = Eva_Id;
    this.Ieva_Acto = Ieva_Acto;
    this.Ieva_Estado = Ieva_Estado;
    this.Ieva_Puntaje = Ieva_Puntaje;
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
