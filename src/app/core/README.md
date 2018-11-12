## Modules of global services
* https://medium.com/@cyrilletuzi/architecture-in-angular-projects-242606567e40 

# Modules of global services

Modules of global services are **modules with services you need through the whole app.** As services have generally a global scope, these modules are **loaded only once** in the AppModule, and then services are accessible everywhere (**including in lazy-loaded modules**).

You certainly use at least one : the HttpClient module. And you’ll soon need your own. A very common case is an AuthModule to store the user connection status (as this data is needed everywhere in the app) and save the token.

Note: **since Angular 6, you don’t need a module anymore for services, as they are auto-providing themselves.** But it doesn’t change the architecture described here.