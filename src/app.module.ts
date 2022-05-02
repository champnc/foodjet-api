import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { OrderModule } from './order/order.module';
import { RestaurantModule } from './restaurant/restaurant.module';
import { MenuModule } from './menu/menu.module';

@Module({
  imports: [UserModule, RestaurantModule, OrderModule, MenuModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
