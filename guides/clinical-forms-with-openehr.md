---
description: A step by step guide from CKM to Forms using Medblocks UI
---

# Clinical Forms with openEHR

## Setting up the openEHR Template

Before we get started with the code, we need to create an openEHR template. Let's do that first.

### Download archetypes needed for the form from Clinical Knowledge Manager (CKM)

Archetypes needed for your system can be scoped out from openEHR's Clinical Knowledge Manager website and downloaded. Download the Archetype files in ADL format and make sure to include at least one Root Archetype. You can also download all archetypes by going into Archetypes -> Bulk Export -> Click the Bulk Export button.

{% embed url="https://ckm.openehr.org" %}

![Downloading Archetypes in CMK](<../.gitbook/assets/image (3) (1).png>)

### Create a new repository in Archetype Designer

Archetype Designer is a tool provided by Better to create templates and archetypes. If you cannot find an archetype specific to your needs, you can create one on Archetype Designer. But in this guide we'll be using the archetypes from the openEHR CKM.

{% embed url="https://tools.openehr.org" %}

![Creating a new Repository in Archetype Designer](<../.gitbook/assets/image (2) (1).png>)

### Import all the archetypes downloaded to the repository

Open the newly created Repository, click the import button and select all the archetypes downloaded and click Upload All to upload the archetypes. You can also **directly upload the .zip file** you downloaded in the bulk exoprt process.

![Archetypes Imported in the Repository](<../.gitbook/assets/image (11) (1).png>)

### Create a new template

Select 'New' and 'Template' to create a new template. You will have to select an RM Type and a Root Archetype id and give an id for the template.

![Clicking the New button](../.gitbook/assets/image.png)

![Creating a new template](<../.gitbook/assets/image (10).png>)

### Add the imported archetypes as required to the template

After following the above steps a blank template will be created. Add your imported archetypes by pressing the "+"(add) button on "content". Customize your template according to the requirements, you can deselect attributes of archetypes that are unnecessary.

![Adding archetypes to the template](<../.gitbook/assets/image (5).png>)

### Export the Template

After you are done editing your template, click export and select "Web Template" while exporting. This will export your template in a JSON format which will be used to create Clinical forms.

Export the template in **OPT format** also, you will need to post this file to openEHR server for posting compositions.

![Exporting the template](<../.gitbook/assets/image (2).png>)

For more information on how to create an openEHR template, watch this video:

{% embed url="https://www.youtube.com/watch?v=vlTJR2AbO0Y" %}

## Setting up the Application

### Initialize a Vite Application

We'll now create a Svelte application using Vite to create a single-page application.

Install npm and node. Create a new svelte project by using Vite:

```bash
npm init vite
```

Fill out the other details as necessary and open VsCode in the project's root directory.

### Setup Medblocks UI VsCode Extension

Open VsCode and navigate to the tab (Ctrl + Shift + X). Search for Medblocks-UI and install the Medblocks UI VsCode Extension.

[https://marketplace.visualstudio.com/items?itemName=tornadoalert.medblocks-ui](https://marketplace.visualstudio.com/items?itemName=tornadoalert.medblocks-ui)

![Installing Medblocks-UI extension](<../.gitbook/assets/image (9).png>)

{% content-ref url="../medblocks-ui/vscode-extension.md" %}
[vscode-extension.md](../medblocks-ui/vscode-extension.md)
{% endcontent-ref %}

### Install Medblocks UI npm package and import it into your app

Use the npm install command given below to install Medblocks-ui in your app

```
npm i medblocks-ui
```

Use the code snippet given below to import the packages in your `main.ts` file

{% code title="main.ts" %}
```javascript
import "medblocks-ui";
import "medblocks-ui/dist/shoelace";
```
{% endcode %}

{% content-ref url="broken-reference" %}
[Broken link](broken-reference)
{% endcontent-ref %}

### Import the template in your app

Create a folder with the name "templates" in the base directory of your app and paste your exported web template (JSON) into that folder.

![Using Medblocs-UI extensions](<../.gitbook/assets/image (6).png>)

### Use Medblocks Extension to generate JavaScript code for a Clinical form

Navigate to the Medblocks Extension Tab in VsCode, it will automatically detect the template and generate a JavaScipt code for a Clinical Form from your template.

![Automatice code for form generated](<../.gitbook/assets/image (1).png>)

### Using the extension to create forms

Click the clipboard icon to copy all the code generated and paste it into your app

![Form code generated based on the template](<../.gitbook/assets/image (7).png>)



### Make it look better

The code generated will contain limited CSS, so you can use CSS Frameworks to make the UI look better.

To add TailwindCSS to your project and customize, follow this guide \
[https://tailwindcss.com/docs/installation](https://tailwindcss.com/docs/installation)

![UI improved by adding CSS](<../.gitbook/assets/image (3).png>)

### Posting the compositions to the openEHR server

{% hint style="info" %}
Don't forget to post the template to the openEHR server before posting compositions.
{% endhint %}

To post the Clinical data of a Patients to the CDR, use axios package and create a new instance of axios for the openEHR server.

```
export const openehr = axios.create({baseURL:"(insert BaseUrl of the openEHR server)",
headers: {
    Accept: "application/json",
  }});
```

Add the following post request to the onSubmit method of the form generated by Medblocks-UI extension.

```
openehr.post("/composition", e.detail, {
        params: { format: "FLAT", templateId, ehrId },
      })
```

1\)  **templateId** contains the template ID of the composition\
2\) **ehrId** contains the EHR UUID of the patient\
3\) **e** is the instance of the form element

You can now Start posting compositions to the openEHR server. To fetch data from the openEHR server, use Archetype Query Language (AQL)

To see a collection of example forms : [https://github.com/medblocks/all-forms](https://github.com/medblocks/all-forms)
