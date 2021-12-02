---
description: Get started with an open-source UI library for openEHR based interfaces.
---

# Quick Start

## Introduction

Medblocks UI is a set of Web Components. They can be used in any browser that supports them. You can also use it with front-end frameworks to build complex single-page applications. They can also be freely be used in back-end templates.

{% hint style="info" %}
Some front-end frameworks support custom elements [better than others](https://custom-elements-everywhere.com).
{% endhint %}

## Installation

Medblocks UI can be used with a CDN script or with a modern bundler like [Vite](https://vitejs.dev) or [Snowpack](https://www.snowpack.dev).

### Using a CDN

Include the following in your HTML file:

```markup
<script src="https://unpkg.com/medblocks-ui@0.0.82/dist/bundle.js"></script>
<link rel="stylesheet" href="https://unpkg.com/@shoelace-style/shoelace@2.0.0-beta.50/dist/themes/light.css">
```

The [CSS file](https://unpkg.com/@shoelace-style/shoelace@2.0.0-beta.50/dist/themes/light.css) provided here uses the default light theme. You can override the CSS variables to change the appearance of elements.

### Using Vite or another bundler

Install Medblocks UI using `npm`:

```bash
npm install medblocks-ui
```

Import Medblocks UI in your Typescript or Javascript file. You can also import it in your Vue, JSX, TSX, or Svelte files. Make sure the import happens before any custom elements are used.

You also need to import the CSS file for styling to work. To import the default CSS file:

```javascript
import "medblocks-ui"
import "medblocks-ui/dist/styles.js"
```

If you intend on using other [Shoelace.style](https://shoelace.style) elements, import both the modules together. The default styling of shoelace is automatically imported:

```javascript
import "medblocks-ui"
import "medblocks-ui/dist/shoelace"
```

{% hint style="info" %}
Importing a different version of Shoelace.style will cause a clash in the custom element registry. When using Medblocks and Shoelace together, always import as mentioned above.
{% endhint %}

## Usage

### Form structure

Let's start with an `mb-form` element. This will contain all the other elements. The `mb-submit` element listens to any click event within the form and acts as a trigger to submit the form.

```markup
<mb-form>
    <!-- To add more fields -->
    <mb-submit>
        <button>Submit</button>
    </mb-submit>
</mb-form>
```

We'll add a simple `mb-input` field to get the name of the user:

```markup
<mb-form>
    <mb-input path="name" label="What's your name?"></mb-input>
    <mb-submit>
        <button>Submit</button>
    </mb-submit>
</mb-form>
```

### Exporting data

The mb-form emits a custom event when the submit button is clicked.

Upon submitting the form, we usually need to perform some action like posting to a server. In this case, we'll get the `mb-form` element by id and add an event listner to log the event to the console.

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

Output in the browser's console:

```
{
    "name": "Hello there"
}
```

### Importing data

Now let's try to bind some data back into a blank form. This is especially useful while editing content.

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
    // Import openEHR flat compositions
    form.import({"name": "This data was already present"})
});
</script>
```

Congratulations! You now know the basics of Medblocks UI!

### Next steps

Check out the full guide to learn how to create an openEHR template and build a single-page application with it:

{% content-ref url="../guides/clinical-forms-with-openehr.md" %}
[clinical-forms-with-openehr.md](../guides/clinical-forms-with-openehr.md)
{% endcontent-ref %}

Or continue reading to learn more about Medblocks UI and how to use it with your favorite frameworks.
