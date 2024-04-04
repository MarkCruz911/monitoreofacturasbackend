import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { TareasService } from './tareas.service';
import { CreateTareaDto } from './dto/create-tarea.dto';
import { UpdateTareaDto } from './dto/update-tarea.dto';

@Controller('tareas')
export class TareasController {
  constructor(private readonly tareasService: TareasService) { }

  @Post()
  create(@Body() createTareaDto: CreateTareaDto) {
    return this.tareasService.create(createTareaDto);
  }

  @Get()
  findAllTask(@Query('fechaCreacion') fechaCreacion?: string, @Query('estado') estado?: number, @Query('tarea') tarea?: number, @Query('factura') factura?: number, @Query('fechaTerminado') fechaTerminado?: string, @Query('asociacion') asociacion?: number) {
    return this.tareasService.findAllTask(fechaCreacion, estado, tarea, factura, fechaTerminado, asociacion);
  }

  @Get('/asociacion')
  findAllAsociacion() {
    return this.tareasService.findAllAsociacion();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.tareasService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTareaDto: UpdateTareaDto) {
    return this.tareasService.update(+id, updateTareaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.tareasService.remove(+id);
  }
}
