---
description: >-
  Medblocks supports exporting data in the openEHR FLAT composition format and
  as FHIR through Plugins
---

# Data Format Plugins

Medblocks UI relies on a plugin mechanism to handle multiple data types. The `mb-form` web component has a `plugin` property that can be replaced by any other class with the following interface:

```typescript
export interface MbPlugin {
  /**Serialize EHRElement to the output format - eg: openEHR FLAT format, FHIR resource.*/
  serialize(mbElements: { [path: string]: EhrElement }): any;
  /**Parse output format to internal representation. */
  parse(mbElements: { [path: string]: EhrElement }, data: any): any;
  /**Handle an empty mb-context given a ctx object. */
  getContext(path: string, ctx: any, nonNullPaths: string[],mbElements: { [path: string]: EhrElement }): any;
}
```

By default, `mb-form` uses the [openEHRFlat plugin](https://github.com/medblocks/medblocks-ui/blob/ef35f7755450d1d56a35627ec8b0736c4e7b242e/src/medblocks/form/form.ts#L47). There is also a [FHIR plugin](https://github.com/medblocks/medblocks-ui/blob/master/src/medblocks/form/plugins/fhir.ts) available to handle FHIR elements. This is the default plugin while using the `mb-fhir-form` element.

## Writing your own plugins

You can write your own plugins by writing the following methods:

### serialize

This is called right after the form data is submitted. The function takes the internal representation of `mb-form` and translates it to the desired output which is emitted as the detail of the `mb-submit` event.

**Input/Output:** `mbElements` provides an object with the `path` as the key and the Custom HTML Element ([`EhrElement`](https://github.com/medblocks/medblocks-ui/blob/master/src/medblocks/EhrElement.ts)) as the value. You can process the data in the HTML element, usually in the `data` property, and provide the serialized output that you desire.

### parse

This is called when the `import` method of the form is called. Responsible for returning the internal state of the form, so that it can be bound to the `data` property of the custom elements.

**Input/Output:** Provides the `mbElements` as well as the unprocessed `data` to be parsed. The function must return an object with the `path` as keys, and the `data` to be set on the HTML Elements' data property.

### getContext

This is an optional function that's useful when auto-populating the form with useful information like time, subject, participant when using `mb-context`. Look at the [inbuilt plugins](https://github.com/medblocks/medblocks-ui/tree/master/src/medblocks/form/plugins) for more details.

