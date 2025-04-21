import { Test, TestingModule } from '@nestjs/testing';
import { PropuestaController } from './propuesta.controller';
import { PropuestaService } from './propuesta.service';

describe('PropuestaController', () => {
  let controller: PropuestaController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PropuestaController],
      providers: [PropuestaService],
    }).compile();

    controller = module.get<PropuestaController>(PropuestaController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
