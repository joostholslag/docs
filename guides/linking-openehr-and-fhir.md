# Linking openEHR and FHIR

FHIR patient resource can be used to store the demographic data of Patients and can be linked with an EHR created in the openEHR. FHIR provides us endpoints for posting resources to their server.

To link FHIR resource and openEHR we can use an exclusive UUID. The ID present in the response JSON after posting a FHIR patient resource can also be used to create an Electronic Health Record with the same ID.

To do this, first create an axios instance for FHIR server and openEHR server

```
export const FHIR = axios.create({baseURL:"(insert BaseURL of FHIR server)"});
```

```
export const openehr = axios.create({baseURL:"(insert BaseURL of the openEHR server)",
headers: {
    Accept: "application/json",
  }});
```

Then send a request to the create a new patient  and extract the id from the response JSON

```
const resp = await FHIR.post("/Patient", data);
if (resp.status == 201) {
        ehrId = resp.data.id;
      }
```

Use this id to create a new EHR by sending a put request to the openEHR server

```
const respEHR = await openehr.put(`/ehr/${ehrId}`);
```

Done !! The FHIR Patient resource and the EHR of the patient on openEHR server are linked by a single and unique ID. This ID can be used to retrive data from both the FHIR and the openEHR servers.
