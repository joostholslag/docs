---
description: Different components of the Medblocks stack
---

# Concepts

Medblocks is a set of microservices that can be run individually or together. Each service is a docker container that can be configured using environment variables. Most of the services are directly build from a source repository and can be updated by updating the docker image.

Medblocks is a set of microservices that can be run individually or together. Each service is a docker container that can be configured using environment variables. Most of the services are directly built from a source repository and can be updated by updating the docker image.

Below are the main components of Medblocks, each handled by one or more containers.



## Authentication



It is responsible for answering the question: “**Who is accessing the data?**”. \


Relies on the ORY Hydra and ORY Kratos to provide identity, and federated, single sign-on process through OAuth2. This also includes another container provided by us that acts as glue between the two.\


{% hint style="info" %}
TODO: It also provides a proxy to enable the SMART launch framework for both FHIR and openEHR.
{% endhint %}



## Authorization

{% hint style="info" %}
TODO: It is responsible for answering the question: “Does this user have access to do this?”.

Relies on ORY Keto and ORY Oathkeeper to manage user access rules and enforce authorization. Services like FHIR and openEHR also use ORY Keto to keep track of access control lists. This also includes middleware containers that translate the access control API between these different services.
{% endhint %}



## FHIR

Stores logical data and provides a mapping to other services to provide a consistent FHIR API.

Use HAPI JPA Server to provide the full FHIR REST API on multiple resources that do not directly represent clinical content - eg: Patient, Practitioner, Organisation, Appointment, Invoice etc.&#x20;

{% hint style="info" %}
TODO: Resources like Observation and Condition that represent clinical content are mapped from EHRBase and are provided as a read-only API using HAPI Plain Server and EHRBase FHIR Bridge. It also maps the SNOMED CT service to provide a read-only FHIR Terminology API.
{% endhint %}

## openEHR

Handles all clinical content using the openEHR standard. Uses EHRBase that exposes the openEHR REST API, as well as the EtherCIS.



## SNOMED CT

Uses Hermes to provide a sensible API for SNOMED CT.

TODO: The same can also be used through a FHIR API by using the FHIR Terminology service.
