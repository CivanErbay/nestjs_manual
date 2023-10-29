## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

# nestjs_manual

## Controllers

Controllers are responsible for handling incoming requests and returning responses to the client.

```
@Request(), @Req()  --- req

@Response(), @Res()*  ---	res
@Next()	--- next
@Session() ---	req.session
@Param(key?: string) ---	req.params / req.params[key]
@Body(key?: string) ---	req.body / req.body[key]
@Query(key?: string) --- req.query / req.query[key]
@Headers(name?: string)	--- req.headers / req.headers[name]
@Ip() --- req.ip
@HostParam() --- req.hosts
```

## Providers

Providers are a fundamental concept in Nest. Many of the basic Nest classes may be treated as a provider – services, repositories, factories, helpers, and so on. The main idea of a provider is that it can be injected as a dependency; this means objects can create various relationships with each other, and the function of "wiring up" these objects can largely be delegated to the Nest runtime system.

## Modules

A module is a class annotated with a @Module() decorator. The @Module() decorator provides metadata that Nest makes use of to organize the application structure.
Each application has at least one module, a root module. The root module is the starting point Nest uses to build the application graph - the internal data structure Nest uses to resolve module and provider relationships and dependencies.

providers the providers that will be instantiated by the Nest injector and that may be shared at least across this module
controllers the set of controllers defined in this module which have to be instantiated
imports the list of imported modules that export the providers which are required in this module
exports the subset of providers that are provided by this module and should be available in other modules which import this module. You can use either the provider itself or just its token (provide value)

The Nest module system includes a powerful feature called dynamic modules. This feature enables you to easily create customizable modules that can register and configure providers dynamically.

## Middleware

Middleware is a function which is called before the route handler. Middleware functions have access to the request and response objects, and the next() middleware function in the application’s request-response cycle. The next middleware function is commonly denoted by a variable named next.

Middleware functions can perform the following tasks:

```
execute any code.
make changes to the request and the response objects.
end the request-response cycle.
call the next middleware function in the stack.
if the current middleware function does not end the request-response cycle, it must call next() to pass control to the next middleware function. Otherwise, the request will be left hanging.
```

You implement custom Nest middleware in either a function, or in a class with an @Injectable() decorator. The class should implement the NestMiddleware interface, while the function does not have any special requirements. Let's start by implementing a simple middleware feature using the class method.

### Applying middleware

There is no place for middleware in the @Module() decorator. Instead, we set them up using the configure() method of the module class. Modules that include middleware have to implement the NestModule interface. Let's set up the LoggerMiddleware at the AppModule level.

### Functional middleware

See Docu

### Multiple middleware

As mentioned above, in order to bind multiple middleware that are executed sequentially, simply provide a comma separated list inside the apply() method:

```
app.module.ts


consumer.apply(cors(), helmet(), logger).forRoutes(CatsController);
```

### Global middleware

If we want to bind middleware to every registered route at once, we can use the use() method that is supplied by the INestApplication instance:

```
main.ts


const app = await NestFactory.create(AppModule);
app.use(logger);
await app.listen(3000);
```

## Exception filters

## Pipes

## Guards

### useful libraries

https://javascript.plainenglish.io/improving-nest-js-essential-packages-you-should-know-9a764294ed33
