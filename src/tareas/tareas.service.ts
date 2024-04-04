import { Injectable } from '@nestjs/common';
import { CreateTareaDto } from './dto/create-tarea.dto';
import { UpdateTareaDto } from './dto/update-tarea.dto';
import { EntityManager } from 'typeorm';

@Injectable()
export class TareasService {
  constructor(private readonly entityManager: EntityManager) { }

  create(createTareaDto: CreateTareaDto) {
    return 'This action adds a new tarea';
  }

  async findAllTask(fechaCreacion?: string, estado?: number, tarea?: number, factura?: number, fechaTerminado?:string, asociacion?: number) {
    
    console.log("Estado", typeof estado," :",estado);
    console.log("FechaCreacion", typeof fechaCreacion," :",fechaCreacion);
    console.log("Tarea", typeof tarea," :",tarea);
    console.log("factura", typeof factura," :",factura);
    console.log("FechaTerminado", typeof fechaTerminado," :",fechaTerminado);
    console.log("Asociacion", typeof asociacion," :",asociacion);

    let sqlQuery = `
      SELECT T.*, A.Nombre AS NombreAsociacion FROM PagoFacil_FacturaTech.TAREA AS T 
      JOIN PagoFacil_FacturaTech.ASOCIACION AS A ON T.Asociacion = A.Asociacion
      WHERE T.TipoTarea = '2'
    `;

    if (fechaCreacion != 'undefined' && fechaCreacion != 'null' && fechaCreacion != ''){//|| fechaCreacion != null) {
      sqlQuery += ` AND T.FechaCreacion = '${fechaCreacion}'`;
    }

    if (fechaTerminado != 'undefined' && fechaTerminado != 'null' && fechaTerminado != ''){//|| fechaCreacion != null) {
      sqlQuery += ` AND T.FechaTerminado = '${fechaTerminado}'`;
    }

    if (String(estado) != 'undefined' && String(estado) != 'null' && estado!=0){//|| String(estado) != null) {
      sqlQuery += ` AND T.Estado = '${estado}'`;
    }

    if (String(tarea) != 'undefined' && String(tarea) != 'null' && tarea!=0){ //|| String(tarea) != null) {
      sqlQuery += ` AND T.Tarea = '${tarea}'`;
    }

    if (String(factura) != 'undefined' && String(factura) != 'null' && factura!=0){ //|| String(factura) != null) {
      sqlQuery += ` AND T.Factura = '${factura}'`;
    }

    if (String(asociacion) != 'undefined' && String(asociacion) != 'null' && asociacion!=0){//|| String(estado) != null) {
      sqlQuery += ` AND T.Asociacion = '${asociacion}'`;
    }

    sqlQuery += ` ;`
    console.log("la consulta: ", sqlQuery);
    return await this.entityManager.query(sqlQuery);
  }

  async findAllAsociacion(){
    let sqlQuery = `
    SELECT Asociacion,Nombre FROM PagoFacil_FacturaTech.ASOCIACION 
  `;
    return await this.entityManager.query(sqlQuery);
  }

  findOne(id: number) {
    return `This action returns a #${id} tarea`;
  }

  update(id: number, updateTareaDto: UpdateTareaDto) {
    return `This action updates a #${id} tarea`;
  }

  remove(id: number) {
    return `This action removes a #${id} tarea`;
  }

}
