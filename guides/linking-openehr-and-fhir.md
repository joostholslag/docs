# Linking openEHR and FHIR

The FHIR 'Patient' resource can be used to store the demographic data of patients and can be linked with an 'EHR' created in the openEHR. FHIR provides us endpoints for posting resources to the server.

To link a FHIR 'Patient' resource and to the openEHR 'EHR', we can use a UUID. The 'ID' present in the response JSON after posting a FHIR 'Patient' resource can be taken out and used to create an 'EHR' in openEHR by using a PUT request.

To do this, first create an axios instance for 'FHIR server' and 'openEHR server':
(example Javascript code)

```javascript
export const FHIR = axios.create({
baseURL:"(insert BaseURL of FHIR server)"});
```

```javascript
export const openEHR = axios.create({
baseURL:"(insert BaseURL of the openEHR server)",
headers: {
    Accept: "application/json",
}});
```

Then send a request to create a new patient and extract the id from the response JSON

```javascript
const resp = await FHIR.post("/Patient", data);
if (resp.status == 201) {
    ehr_id = resp.data.id;
}
```

Use this id to create a new EHR by sending a PUT request to the openEHR server

```javascript
const respEHR = await openehr.put(`/ehr/${ehr_id}`);
```

Done! The FHIR Patient resource and the EHR of the patient on the openEHR server are linked by a single and unique ID. This ID can be used to retrieve data from both the FHIR and the openEHR servers.
