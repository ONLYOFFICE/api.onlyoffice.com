# AppDto
One feature module of the portal: whether it is switched on here, and the settings stored for it.

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **id** | **String** | The application's stable key, declared in the installation configuration - `ai-rooms`, `docs-cloud` and the like. It is what every other operation of this group addresses an application by, and a client maps it to a title and an icon of its own; the portal ships no display name for it. | [optional] [example: `ai-rooms`] [nullable] |
| **enabled** | **Boolean** | Whether the application is switched on for this portal. It is the portal's own flag where one has been saved, and the default the installation configuration gives the application otherwise. | [optional] [example: `true`] |
| **settings** | **oas_any_type_not_mapped** |  | [optional] [nullable] |
