# EnabledModuleDto
One portal module the calling user may open.

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **id** | **String** | The module's product class name, HTML-escaped. It is a display-oriented identifier and not the GUID the access-settings operations work with, so it must not be passed to `GET api/2.0/settings/security/{id}`. | [optional] [example: `ASC.Web.Files.Configuration.FilesSpaceUsageStatManager`] [nullable] |
| **title** | **String** | The module name in the portal language, HTML-escaped and ready to be rendered as text. | [optional] [example: `Documents`] [nullable] |
