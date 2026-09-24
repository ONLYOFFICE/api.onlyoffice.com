# DefaultTemplateSettingsRequestDto
The document to use as the blank the portal creates for one extension.

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **selectedFile** | [**DefaultTemplateSettingsRequestDto_selectedFile**](default-template-settings-request-dto-selected-file.md) |  | [required] |
| **fileExtension** | **String** | The extension the blank is set for, written in lower case with the leading dot. Only the extensions the portal's built-in template set covers are accepted, and `GET api/2.0/files/settings/defaulttemplate` returns exactly that list; an extension outside it leaves the settings unchanged instead of failing. | [required] [example: `.docx`] [nullable] |
