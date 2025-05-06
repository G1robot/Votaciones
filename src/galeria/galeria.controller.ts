import { Controller, Get, Post, Body, Patch, Param, Delete, UseInterceptors, UploadedFile, UseGuards } from '@nestjs/common';
import { GaleriaService } from './galeria.service';
import { CreateGaleriaDto } from './dto/create-galeria.dto';
import { UpdateGaleriaDto } from './dto/update-galeria.dto';
import { FileInterceptor, FilesInterceptor, FileFieldsInterceptor  } from '@nestjs/platform-express';
import { diskStorage } from 'Multer';
import { extname } from 'path';
import { AuthGuard } from 'src/guard/auth.guard';
import { RolesGuard } from 'src/guard/roles.guard';
import { Roles } from 'src/decoradores/roles.decorator';

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
        foto: file.filename,
    };

    return this.galeriaService.create(categoria);
    }

  @Get()
  findAll() {
    return this.galeriaService.findAll();
  }

  @Get(':partidoId')
  findOne(@Param('partidoId') partidoId: string) {
    return this.galeriaService.find(partidoId);
  }


  @Patch(':id')
  update(@Param('id') id: string, @Body() updateGaleriaDto: UpdateGaleriaDto) {
    return this.galeriaService.update(+id, updateGaleriaDto);
  }

  @Delete(':id')
  remove(@Param() {id}) {
    return this.galeriaService.remove(id);
  }
}
