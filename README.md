---
description: The philosophy behind building healthcare applications using Medblocks
---

# Introduction

Medblocks provides an opinionated way to build and ship modern healthcare applications. It leverages Health IT standards as well as best practices in software development to create reusable applications. We build and leverage open-source technology to make it possible for anyone to build amazing clinical experiences.

## Why?

Let's say you want to build a telemedicine application for hospitals. You start off by using a database like MongoDB and your language of choice and start working on things like video conferencing and booking appointments - things essential to your app. You finally launch your app, and hospitals start using it! 🎉

Over time, you realize that your users ask for more - "Can you add the ability to record the patient's condition?", "What about payments and accounting?". Before you know it, your "telemedicine application" now supports the workflow of the entire hospital. Since time and resources are limited, these "add-on" features will be an afterthought. The result - **frustrated** practitioners and **overworked** you.

<mark style="color:blue;">**Problem 1**</mark><mark style="color:blue;">: Scope creep is very common in healthcare. One app cannot do it all.</mark>

A year goes by, and the hospital using your app is now interested in the data you've been collecting about the patients - some medical students are interested in conducting research. So you give them a dump of your MongoDB database and you go about your work. Only to receive a dozen phone calls asking you "What do you mean by this field _bp\_snn4_ and _bpk1_?", "What are these codes used in the diagnosis field?" and "Why is the pulse rate captured as a hexadecimal color?".

"How do I make sense of this data?".

> "Data ages like fine wine, software ages like fish."

And imagine after 10 years of using your application, the hospital decides they want to move to other applications. They want to use a new application that offers better management of the doctor's workflow, and there's another application that offers excellent video conferencing. You are now tasked with collaborating with these developers and migrating the data from your systems into these two systems with different data schemas! The result is a lot of data loss and countless days of mapping and remapping.

There are standards for capturing healthcare data in a standardized way like openEHR, and FHIR. And there are standardized ways of coding data like SNOMED CT, LOINC, RxNorm, ICD, and more. However, asking a developer to use Health IT standards correctly in an application is a lot more work than "just building the app". And making an application standard-compliant just for the sake of standards leads to a poor experience for everyone involved.

<mark style="color:blue;">**Problem 2**</mark><mark style="color:blue;">: Capturing standardized data in healthcare is hard.</mark>

## The solution

It's always going to be harder to build applications that comply with standards.

However, by leveraging on standards, and by separating your application from the data you can do something magical ✨. Your application can now **just do one thing really well**, and let the other apps handle all the other requirements.

![](<.gitbook/assets/image (4).png>)

We try to make it easier to build and ship applications that comply with standards by using and building open-source technology.

## Quick Starts

### Medblocks

The Medblocks project is responsible for handling and running the microservices necessary to deploy healthcare applications. It provides multiple APIs based on open standards like openEHR, FHIR, and OAuth2 to authenticate and communicate with applications. Medblocks relies on containerization technology to provide consistent deployments. So whether you deploy using docker-compose on your local machine for testing or use a Kubernetes cluster in production, you can expect it to behave the same.

Get Medblocks running on your local machine with our quick start guide here:

{% content-ref url="broken-reference" %}
[Broken link](broken-reference)
{% endcontent-ref %}

### Medblocks UI

Medblocks UI is a library of [Web Components](https://developer.mozilla.org/en-US/docs/Web/Web\_Components) that helps build user interfaces that interact directly with the APIs based on open standards. It can be used in both [front-end frameworks](https://custom-elements-everywhere.com/) and in back-end templates. It works well with Medblocks, but you can also use it with your own services like a managed openEHR CDR or a FHIR server, as long as it exposes standard APIs. Medblocks UI primarily helps with creating openEHR compositions and FHIR resources. It also happens to integrate with the SNOMED CT terminology API directly for some components like search, so that you can deliver value in your applications faster.

Get up and running with Medblocks UI web components:

{% content-ref url="broken-reference" %}
[Broken link](broken-reference)
{% endcontent-ref %}
