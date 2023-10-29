import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsModule } from './cats/cats.module';
import { DatabaseModule } from './database/database.module';
import { Cat } from './cats/entities/cat.entity';
import { LoggerMiddleware } from './common/middleware/logger.middleware';

@Module({
  imports: [CatsModule, DatabaseModule.forRoot([Cat])],
  controllers: [AppController],
  providers: [AppService],
  /*   If you want to in turn re-export a dynamic module, you can omit the 
  forRoot() method call in the exports array: */
  exports: [DatabaseModule],
})
/* 
There is no place for middleware in the @Module() decorator.
 Instead, we set them up using the configure() method of the module class. 
 Modules that include middleware have to implement the NestModule interface. 
Let's set up the LoggerMiddleware at the AppModule level. */
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(LoggerMiddleware)
      .forRoutes({ path: 'cats', method: RequestMethod.GET });
  }
}

/* In the above example we have set up the LoggerMiddleware 
for the /cats route handlers that were previously defined inside the CatsController.
 We may also further restrict a middleware to a particular request method by 
 passing an object containing the route path and request method to the forRoutes() 
 method when configuring the middleware. In the example below, notice that we import the
 RequestMethod enum to reference the desired request method type. */

/*  The configure() method can be made asynchronous using async/await 
 (e.g., you can await completion 
  of an asynchronous operation inside the configure() method body). */
