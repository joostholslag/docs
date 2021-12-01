# Quick Start

## Prerequisites

Install [Docker](https://www.docker.com/get-started) with [Docker Compose](https://docs.docker.com/compose/install/). Make sure your system architecture is AMD64.

{% hint style="info" %}
Not all containers in Medblocks support ARM. We're working to get there, but for now, you won't be able to run Medblocks on your Raspberry Pi, or an M1 Mac. In the meanwhile, you can easily follow the same instructions on an AMD64 machine on a cloud provider like AWS, Google Cloud, or Digital Ocean.
{% endhint %}

## Installation

Clone the `medblocks/medblocks` Github repository with:

```bash
git clone https://github.com/medblocks/medblocks.git
cd medblocks
```

Now run `docker-compose` to start all the different medblocks services

```bash
docker-compose up
```

Wait for a couple of minutes for all the different services to start. You can check and see if the different services are up and running by going to these URLs:

1. FHIR Capability Statement - [http://localhost/fhir/metadata](http://localhost/fhir/metadata)
2. EHRBase Swagger UI - [http://localhost/ehrbase/swagger-ui.html](http://localhost/ehrbase/swagger-ui.html)

You now have a working instance of Medblocks running! 🎉
