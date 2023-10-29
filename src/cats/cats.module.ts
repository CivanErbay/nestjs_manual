import { Global, Module } from '@nestjs/common';
import { CatsService } from './cats.service';
import { CatsController } from './cats.controller';

/* When you want to provide a set of providers which should be available everywhere 
out-of-the-box (e.g., helpers, database connections, etc.), make the module global
 with the @Global() decorator. */
@Global()
@Module({
  controllers: [CatsController],
  providers: [CatsService],
  /* Every module is automatically a shared module. 
Once created it can be reused by any module. 
Let's imagine that we want to share an instance 
of the CatsService between several other modules. 
In order to do that, we first need to export the 
CatsService provider by adding it to the module's exports array, */
  exports: [CatsService],
  /* Now any module that imports the CatsModule has access to the CatsService 
  and will share the same instance with all other modules that import it as well. */
})
export class CatsModule {}
