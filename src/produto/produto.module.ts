import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CategoriaModule } from '../categoria/categoria.module';
import { ProdutoController } from './controllers/produto.controller';
import { Produto } from './entities/produto.entity';
import { ProdutoService } from './services/produto.service';

@Module({
  imports: [TypeOrmModule.forFeature([Produto]), CategoriaModule], //add o tema module para que possamos acessar a classe
  providers: [ProdutoService],
  controllers: [ProdutoController],
  exports: [],
})
export class ProdutoModule {}
