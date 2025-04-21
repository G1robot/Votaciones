import { Controller, Get, Post, Body, Patch, Param, Delete, UseInterceptors, UploadedFiles } from '@nestjs/common';
import { PartidoService } from './partido.service';
import { CreatePartidoDto } from './dto/create-partido.dto';
import { UpdatePartidoDto } from './dto/update-partido.dto';
import { FileInterceptor, FilesInterceptor, FileFieldsInterceptor  } from '@nestjs/platform-express';
import { diskStorage } from 'Multer';
import { extname } from 'path';

@Controller('partido')
export class PartidoController {
  constructor(private partidoService: PartidoService) {}

  @Post()
  @UseInterceptors(
    FileFieldsInterceptor(
      [
        { name: 'logo', maxCount: 1 },
        { name: 'fotoCandidato', maxCount: 1 },
      ],
      {
        storage: diskStorage({
          destination: './uploads/partidos',
          filename: (req, file, cb) => {
            cb(null, file.originalname);
          },
        }),
      },
    ),
  )
  async createPartido(
    @UploadedFiles()
  files: {
    logo?: any;
    fotoCandidato?: any;
  },
    @Body() body: CreatePartidoDto,
  ){
    body.logo = files.logo?.[0]?.originalname ?? '';
  body.fotoCandidato = files.fotoCandidato?.[0]?.originalname ?? '';
  
    return this.partidoService.create(body);
  }

  @Get()
  findAll() {
    return this.partidoService.findAll();
  }

  @Get(':siglas')
  findBySiglas(@Param('siglas') siglas: string) {
    return this.partidoService.findById(siglas);
  }


  @Patch(':id')
  update(@Param() {id}, @Body() updatePartidoDto: CreatePartidoDto) {
    return this.partidoService.update(id, updatePartidoDto);
  }

  @Delete(':id')
  remove(@Param() {id}) {
    return this.partidoService.remove(id);
  }
}
