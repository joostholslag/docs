# Terminology integration

Medblocks UI supports searching on SNOMED using the `mb-search` component.

![mb-search component](<../.gitbook/assets/image (12).png>)

### Usage

The VSCode extension automatically renders `mb-search` as the _Search_ component for all coded text elements.

![](<../.gitbook/assets/image (11).png>)

This can directly be used in your code like below:

```markup

<mb-search path="event_encounter.v0/reason_for_encounter/presenting_problem" hits={5}>
    <mb-filter value="<272379006 | Event (event) |" label="Events"></mb-filter>
</mb-search>
```

You can use any [SNOMED Expression Constraint Language (ECL)](https://confluence.ihtsdotools.org/display/DOCECL) query in the `mb-filter` element. For more examples on how to use ECL, please refer to the [official examples](https://confluence.ihtsdotools.org/display/DOCECL/6.1+Simple+Expression+Constraints).

### Dependency Injection

The `mb-search` component has a dependency on the terminology server, which has to be an [Axios](https://www.npmjs.com/package/axios) like instance. This has to be injected through an event-based mechanism. The `axios` instance can include other configuration options like Authentication headers and interceptors too.

```html
<div id="container">
    <mb-form>
        <mb-search path="event_encounter.v0/reason_for_encounter/presenting_problem" hits={5}>
            <mb-filter value="<272379006 | Event (event) |" label="Events"></mb-filter>
        </mb-search>
    </mb-form>
</div>
<script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
<script>
    var container = document.getElementById("container");
    var hermes = axios.create({
        baseURL: "https://hermes-2-kbsdxvq3bq-el.a.run.app/v1",
    });
    container.addEventListner("mb-dependency", (event)=>{
        if (e.detail.key === "hermes") {
            e.detail.value = hermes;
        }
    })
</script>
```

### Plugins

By default `mb-search` works with the `hermesPlugin` and uses the [Hermes API](https://github.com/wardle/hermes#documentation) for SNOMED CT search and the default behavior of _combining_ the active filters is to `OR` them. This can, however, be customized by setting the `plugin` property on `mb-search`.&#x20;

The plugin should implement the `SearchPlugin` interface as below:

```typescript
interface SearchPlugin {
    /**Search function to execute the search and return the results**/
    search: (options: SearchOptions) => Promise<SearchResult[]>
    /**How should the constraints provided in mb-filter add up?**/
    getConstraints: (filters: string[])=> string | undefined
}

interface SearchOptions {
  /**The text in the search box**/
  searchString: string;
  /**Axios instance provided by dependency injection**/
  axios: AxiosInstance;
  /**The final constraint query obtained by calling getConstraints**/
  constraint?: string;
  /**Maximum number of search results to show**/
  maxHits?: number;
}

interface SearchResult {
  /**The code of the returned search term**/
  value: string;
  /**The label/term for the search term**/
  label?: string;
  /**Should there be a star next to it? (useful for preferred terms)**/
  star?: boolean;
}
```

For an example implementation using Hermes, refer to [this](https://github.com/medblocks/medblocks-ui/blob/master/src/medblocks/codedtext/searchFunctions.ts).
