# WebPluginDto
One web plugin available to the portal: its manifest, where to load it from, and the state the portal keeps.

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **name** | **String** | The plugin's manifest name, which is what every other operation of this group addresses it by and what makes it unique within the portal - an installation-wide plugin wins the name over a portal one. | [required] [example: `Example Plugin`] [nullable] |
| **version** | **String** | The plugin's own version from its manifest. The portal does not compare it against anything; it is there for a person to read. | [required] [example: `1.0.0`] [nullable] |
| **minDocSpaceVersion** | **String** | The oldest portal version the plugin declares it works with. It is a claim from the manifest and is not enforced, so a plugin can be loaded on an older portal and simply misbehave; compare it with the `version` of `GET api/2.0/settings`. | [optional] [example: `12.0.0`] [nullable] |
| **description** | **String** | The plugin's description from its manifest, in the language the manifest was written in. The translations of it are in `descriptionLocale`. | [required] [example: `A plugin that provides additional functionality`] [nullable] |
| **license** | **String** | The licence the plugin is published under, as its manifest states it. Nothing checks it. | [required] [example: `MIT`] [nullable] |
| **author** | **String** | Who wrote the plugin, as its manifest states it - not the portal member who uploaded it, who is `createBy`. | [required] [example: `ONLYOFFICE`] [nullable] |
| **homePage** | **String** | The plugin's own page, for a person to read more about it. It is empty when the manifest names none. | [required] [example: `https://example.com`] [nullable] |
| **pluginName** | **String** | The global the plugin registers itself under in the browser once its script has run, which is how a client reaches it. It is distinct from `name`, the identifier the portal uses. | [required] [example: `examplePlugin`] [nullable] |
| **scopes** | **String** | Which parts of the interface the plugin hooks into, as one comma-separated string rather than a list. | [required] [example: `Files,Rooms`] [nullable] |
| **image** | **String** | The plugin's icon exactly as its manifest declares it, which is normally a file name inside the plugin's own package rather than an absolute address - resolve it against the directory `url` points into. | [required] [example: `icon.svg`] [nullable] |
| **createBy** | [**EmployeeDto**](employee-dto.md) | The portal member who uploaded the plugin. For a plugin that ships with the installation it is an empty profile, since no member put it there. | [required] |
| **createOn** | **Date** (date-time) | When the plugin was uploaded. It stays at its zero value for a plugin that ships with the installation. | [required] [example: `2024-01-15T10:30:00Z`] |
| **enabled** | **Boolean** | Whether the portal loads the plugin. It is the state this portal stored, so an installation-wide plugin can be on for one portal and off for another. | [required] [example: `true`] |
| **system** | **Boolean** | Whether the plugin ships with the installation rather than having been uploaded here. A system plugin cannot be deleted through `DELETE api/2.0/settings/webplugins/{name}`, only switched off. | [required] [example: `false`] |
| **url** | **String** | The address of the plugin's script, which a client loads to run it. It ends in a `hash` query taken from `version`, so the address changes whenever the plugin is updated and an old one may be cached. | [required] [example: `https://example.com/plugin.js`] [nullable] |
| **cssUrl** | **String** | The absolute address of the plugin's stylesheet, empty for a plugin that ships none. | [required] [example: `https://example.com/plugin.css`] [nullable] |
| **settings** | **String** | The settings string the portal keeps for the plugin, stored and returned verbatim - only the plugin knows its shape. It is empty until `PUT api/2.0/settings/webplugins/{name}` saves one. | [required] [example: `{"theme":"dark"}`] [nullable] |
| **nameLocale** | **Map** | The plugin's name translated, keyed by culture name. A culture that is missing falls back to `name`, and the whole map is empty for a plugin that ships no translations. | [optional] [example: `{en-US=Example plugin, de-DE=Beispiel-Plugin}`] |
| **descriptionLocale** | **Map** | The plugin's description translated, keyed the same way as `nameLocale` and falling back to `description`. | [optional] [example: `{en-US=Adds extra actions, de-DE=Fugt Aktionen hinzu}`] |
| **runtime** | **String** | How the script at `url` is to be loaded - as an ES module or as a classic script. It is empty for a plugin whose manifest does not say, which a client treats as a classic script. | [optional] [example: `module`] [nullable] |
