## Modules of reusable components

## Modules of reusable components

Modules of reusable components are modules of UI components you would like to reuse in different projects. As components have a local scope, these modules are imported in each pages modules where you need them.

You certainly use one, like Material, NgBootstrap or PrimeNg. You can do yours too.

How to get the data?
UI components are pure presentation components. So they work exactly the same as in modules of pages (see above): data should come from the Input decorator (and sometimes from <ng-content> in advanced cases).

You should not rely on a service, because services are often specific to a particular app. Why? At least because of the API URL. Providing the data will be the role of pages component. The UI component just retrieves data passed by someone else.

# Public and private components
As components are in local scope, do not forget to export them in the NgModule. You just need to export public ones, internal sub components can stay private.

# Directives and pipes
An UI module can also be about directives or pipes. Same as components: they need to be exported if they are public.

# Private services
Services inside UI modules can be relevant for data manipulation if they contain nothing specific. But then, be sure to provide them in the component, so they have a local/private scope, and certainly not in the NgModule.

# Public services
But what if your UI module also needs to provide public services, in relation to the component? It should be avoided as much as possible, but it is relevant in some cases.

You will then provide the public services in the NgModule. But as the module will be loaded several times because of the components scope, it will cause a problem for the services.

You then need an extra code for each public service to prevent them to be loaded several times. It would be too long to explain it here, but it’s a best practice (done in Material for example). Just replace SomeService by the name of your class:

````
export function SOME_SERVICE_FACTORY(parentService: SomeService) {
  return parentService || new SomeService();
}

@NgModule({
  providers: [{
    provide: SomeService,
    deps: [[new Optional(), new SkipSelf(), SomeService]],
    useFactory: SOME_SERVICE_FACTORY
  }]
})
export class UiModule {}s
````