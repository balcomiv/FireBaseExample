## Modules of routable pages (smart container / view components)

* https://medium.com/@cyrilletuzi/architecture-in-angular-projects-242606567e40

# Modules of pages 

Modules of pages are modules with routing. They are here to separate and organize the different areas of your application. They are loaded only once, either in the AppModule or via lazy-loading.

For example, you could have an AccountModule for the register, login and logout pages; then a HeroesModule for the heroes list and hero details pages; and so on.

These modules contain 3 things:

* /shared: services and interfaces,
* /pages: routed components,
* /components: pure presentation components.

# Shared services for pages
To display a page, you need data first. Here come services.

# Pages: routed components
A page component just injects the service, and uses it to get the data.

You could display the data directly in the component template but you should not: data should be transferred to another component via an attribute.

Each page component is associated to a route.

# Presentation components
A presentation component just retrieves the transferred data with the Input decorator, and displays it in the template.