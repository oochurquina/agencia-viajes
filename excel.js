import ExcelJS from 'exceljs';

(async () => {
  const workbook = new ExcelJS.Workbook();
  const worksheet = workbook.addWorksheet('Registro de Emociones');

  // Añadir las columnas
  worksheet.columns = [
    { header: 'Fecha y Hora de la Operación', key: 'fecha_hora', width: 30 },
    { header: 'Monto de la Operación', key: 'monto', width: 20 },
    { header: 'Emociones Previas a la Operación', key: 'emociones_previas', width: 30 },
    { header: 'Emociones Durante la Operación', key: 'emociones_durante', width: 30 },
    { header: 'Emociones al Percatarte que la Operación Sería Negativa', key: 'emociones_negativa', width: 40 },
    { header: 'Emociones al Finalizar la Operación', key: 'emociones_finalizar', width: 30 },
    { header: 'Reacción a las Emociones Después de la Operación', key: 'reaccion_emociones', width: 40 }
  ];

  // Posibles emociones para cada etapa
  const emociones = {
    "Emociones Previas a la Operación": ["Confianza", "Nerviosismo", "Entusiasmo", "Ansiedad", "Expectativa", "Tranquilidad"],
    "Emociones Durante la Operación": ["Esperanza", "Tensión", "Estrés", "Concentración", "Duda", "Calma"],
    "Emociones al Percatarte que la Operación Sería Negativa": ["Frustración", "Desesperanza", "Miedo", "Decepción", "Resignación", "Rabia"],
    "Emociones al Finalizar la Operación": ["Alivio", "Tristeza", "Satisfacción", "Desilusión", "Aceptación", "Ira"],
    "Reacción a las Emociones Después de la Operación": ["Reflexión", "Análisis", "Calma", "Persistencia", "Desánimo", "Determinación"]
  };

  // Añadir las posibles emociones en la primera fila como referencia
  worksheet.addRow({
    fecha_hora: '',
    monto: '',
    emociones_previas: emociones["Emociones Previas a la Operación"].join(', '),
    emociones_durante: emociones["Emociones Durante la Operación"].join(', '),
    emociones_negativa: emociones["Emociones al Percatarte que la Operación Sería Negativa"].join(', '),
    emociones_finalizar: emociones["Emociones al Finalizar la Operación"].join(', '),
    reaccion_emociones: emociones["Reacción a las Emociones Después de la Operación"].join(', ')
  });

  // Guardar el archivo
  await workbook.xlsx.writeFile('Registro_de_Emociones_Trading.xlsx');
  console.log('Archivo Excel generado exitosamente');
})();
