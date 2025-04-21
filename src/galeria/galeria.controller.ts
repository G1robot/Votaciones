import { Controller, Get, Post, Body, Patch, Param, Delete, UseInterceptors, UploadedFile } from '@nestjs/common';
import { GaleriaService } from './galeria.service';
import { CreateGaleriaDto } from './dto/create-galeria.dto';
import { UpdateGaleriaDto } from './dto/update-galeria.dto';
import { FileInterceptor, FilesInterceptor, FileFieldsInterceptor  } from '@nestjs/platform-express';
import { diskStorage } from 'Multer';
import { extname } from 'path';
@Controller('galeria')
export class GaleriaController {
  constructor(private readonly galeriaService: GaleriaService) {}

  @Post()
    @UseInterceptors(FileInterceptor('imagen', {
    storage: diskStorage({
        destination: './uploads/galeria',
        filename: (req, file, cb) => {
          cb(null, file.originalname);
        },
    }),
    }))
    async createWithImage(
    @UploadedFile() file: any,

    @Body() body: any,
    ) {
    const categoria = {
        ...body,
        foto: file.filename, // Guardamos el nombre de la imagen en la entidad
    };

    return this.galeriaService.create(categoria);
    }

  @Get()
  findAll() {
    return this.galeriaService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.galeriaService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateGaleriaDto: UpdateGaleriaDto) {
    return this.galeriaService.update(+id, updateGaleriaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.galeriaService.remove(+id);
  }
}
