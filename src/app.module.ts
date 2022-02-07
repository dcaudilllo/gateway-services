import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ShopController } from './services/shop/shop.controller';
import { ShopModule } from './services/shop/shop.module';
import { CalculatorModule } from './services/calculator/calculator.module';

@Module({
  imports: [ShopModule, CalculatorModule],
  controllers: [AppController, ShopController],
  providers: [AppService],
})
export class AppModule {}
