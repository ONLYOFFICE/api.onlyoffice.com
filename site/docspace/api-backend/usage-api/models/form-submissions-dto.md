# FormSubmissionsDto
All completed copies of a form, together with the description of the fields they were filled into.

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **metadata** | [**List**](form-metadata.md) | Describes the fields of the form version that is being filled - the key each value is stored under, the type and format of the field and, where the field offers a fixed set of answers, those answers - in the order the fields are laid out, which is the order to build a results table in. It comes back empty when the portal holds no indexed description of that version. | [optional] [example: `[]`] [nullable] |
| **submissions** | [**List**](form-results-dto.md) | One entry per completed copy, ordered by the copy number that `formsData` carries. An empty list means nothing has been completed for the version that is currently being filled; the copies of earlier versions of the form are not reported here. | [optional] [example: `[]`] [nullable] |
