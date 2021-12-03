---
description: Introduction to Web Components and Medblocks UI
---

# Concepts

Medblocks UI is built using [Lit](https://lit.dev), a framework for web components. Here are some basic concepts to understand how to use these elements.



For a list of all web components available and their properties, attributes, and events, please visit the Github[ documentation](https://github.com/medblocks/medblocks-ui/tree/master/documentation).

{% embed url="https://github.com/medblocks/medblocks-ui/tree/master/documentation" %}

## Attributes and Properties

When you import `medblocks-ui`, multiple custom elements get registered in your browser. This allows the usage of elements that are not covered in the base HTML specification:

```markup
<mb-input label="Hello there"></mb-input>
```

The behavior of these elements can be configured using attributes and properties.

**Attributes:** Are what you see represented in the HTML code. Eg: `label="Hello there"`

**Properties:** What you can programmatically set using Javascript on an element. Eg: Select the element, and do `$0.label = "Hello there"`

Most attributes in Medblocks UI also have a corresponding property, but not all properties, have an attribute of the same name. For example, if you want to set the `ctx` on `mb-form`, you'll have to use a property because you need to pass an Object:

{% code title="Plain HTML" %}
```html
<mb-form>
</mb-form>
<script>
    document.querySelector('mb-form').ctx = {"composer": "Dr. Bean"}
</script>
```
{% endcode %}

Using `<mb-form ctx="{'hello': 'there'}">` does **NOT** work, because attributes can only pass strings.

However, in most modern frameworks, this issue has been addressed.

**In Vue:**

```html
<template>
    <mb-form :ctx.prop="data"></mb-form>
</template>
```

**In Svelte:**

```markup
<mb-form ctx={data} />
```

For a more definite list of how to set properties and attributes in your favorite framework, check out the [Custom Elements Everywhere](https://custom-elements-everywhere.com) website.

## Listening to events

Just like normal HTML elements, custom elements emit events. These are [Custom Events](https://developer.mozilla.org/en-US/docs/Web/Events/Creating\_and\_triggering\_events#adding\_custom\_data\_%E2%80%93\_customevent) and can be listened to by using the same event listeners:

```html
<mb-form id="form">
    <mb-input path="name" label="What's your name?"></mb-input>
    <mb-submit>
        <button>Submit</button>
    </mb-submit>
</mb-form>

<script>
// Pure javascript version of JQuery's $('document').ready
document.addEventListener("DOMContentLoaded", ()=>{
    var form = document.getElementById("form");
    // Listen for mb-submit event
    form.addEventListner("mb-submit", (event)=>{console.log(event.detail)})
});
</script>
```

However, most frameworks have a sophisticated way to listen to events.

**In Vue:**

```html
<mb-form id="form" @mb-submit="handleEvent">
    <mb-input path="name" label="What's your name?"></mb-input>
    <mb-submit>
        <button>Submit</button>
    </mb-submit>
</mb-form>
```

**In Svelte:**

```markup
<mb-form id="form" on:mb-submit="handleEvent">
    <mb-input path="name" label="What's your name?" />
    <mb-submit>
        <button>Submit</button>
    </mb-submit>
</mb-form>
```

For a more definite list of how to listen to events in your favorite framework, check out the [Custom Elements Everywhere](https://custom-elements-everywhere.com) website.

