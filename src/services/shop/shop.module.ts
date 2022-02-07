import { Module } from '@nestjs/common';
import { ShopController } from './shop.controller';
import { ProductsModule } from './products/products.module';
import { CollectionsModule } from './collections/collections.module';

@Module({
  controllers: [ShopController],
  imports: [ProductsModule, CollectionsModule],
})
export class ShopModule {}
