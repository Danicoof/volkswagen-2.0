import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';
import { VehiclesModule } from './vehicles/vehicles.module';
import { DealershipsModule } from './dealerships/dealerships.module';
import { FirestoreModule } from './database/firestore.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    FirestoreModule,
    AuthModule,
    VehiclesModule,
    DealershipsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
