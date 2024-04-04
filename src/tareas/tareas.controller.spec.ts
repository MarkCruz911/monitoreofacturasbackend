import { Test, TestingModule } from '@nestjs/testing';
import { TareasController } from './tareas.controller';
import { TareasService } from './tareas.service';

describe('TareasController', () => {
  let controller: TareasController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TareasController],
      providers: [TareasService],
    }).compile();

    controller = module.get<TareasController>(TareasController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
