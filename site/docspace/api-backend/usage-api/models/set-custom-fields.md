# SetCustomFields
The parameters for setting custom fields.

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **fields** | [**List**](custom-field-request.md) | The custom fields to set on the entry. A listed field gets the value, a null or empty value removes the field from the entry, the fields not listed are left alone. A name the portal has not seen yet creates the field. | [required] [example: `[{name=Project code, value=A-42}, {name=Client, value=null}]`] |
