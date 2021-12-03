---
description: Different components of the Medblocks stack
---

# Concepts

Medblocks is a set of microservices that can be run individually or together. Each service is a docker container that can be configured using environment variables. Most of the services are directly built from a source repository and can be updated by updating the docker image.

Below are the main components of Medblocks, each handled by one or more containers.

### Authentication

It is responsible for answering the question: “**Who is accessing the data?**”.&#x20;

Relies on the [ORY Hydra](https://www.ory.sh/hydra/) and [ORY Kratos](https://www.ory.sh/kratos/) to provide identity and federated, single sign-on process through OAuth2. This also includes [medblocks/auth](https://github.com/medblocks/auth) provided by us that acts as the glue between the two.

### Authorization

It is responsible for answering the question: “**Does this user have access to do this**?”.

Relies on [ORY Keto](https://www.ory.sh/keto/) and [ORY Oathkeeper](https://www.ory.sh/oathkeeper) to manage user access rules and enforce authorization. Services like FHIR and openEHR also use ORY Keto to keep track of access control lists. This also includes middleware containers that translate the access control API between these different services.

### FHIR

Stores logical data and provides a mapping to other services to provide a consistent FHIR API.

Use HAPI JPA Server to provide the full FHIR REST API on multiple resources that do not directly represent clinical content - eg: Patient, Practitioner, Organisation, Appointment, Invoice. Resources like Observation and Condition that represent clinical content are mapped from EHRBase and are provided as a read-only API using HAPI Plain Server and [EHRBase FHIR Bridge](https://github.com/ehrbase/fhir-bridge).

### openEHR

Handles all clinical content using the openEHR standard. Uses EHRBase that exposes the official openEHR REST API, as well as the [EHRScape](https://www.ehrscape.com/reference.html#\_electronic\_health\_record\_apis) REST API.

### SNOMED CT

Uses [Hermes](https://github.com/wardle/hermes/) to provide a sensible API for SNOMED CT. The same can also be mapped to the FHIR Terminology API using [Hades](https://github.com/wardle/hades/).
