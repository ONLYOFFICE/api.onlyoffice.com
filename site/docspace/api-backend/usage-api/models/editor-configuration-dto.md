# EditorConfigurationDto
How the editors behave for this opening: the mode, the language, the interface, and who is editing.

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **callbackUrl** | **URI** (uri) | Where the editors post the document back to when they save it. A client must not call it itself; it is the address the document service uses. | [optional] [example: `https://portal.example.com/filehandler.ashx?action=track&fileid=512`] [nullable] |
| **coEditing** | [**CoEditingConfig**](co-editing-config.md) | How co-editing starts out for this session and whether the user may switch it in the interface. | [optional] |
| **createUrl** | **String** | Where the editor sends the user when they ask for a new document of the same type. It is empty when creating one is not offered here. | [optional] [example: `https://portal.example.com/products/files/?action=create&doctype=word`] [nullable] |
| **customization** | [**CustomizationConfigDto**](customization-config-dto.md) | How the editor interface is dressed for this portal, this document and this layout. | [optional] |
| **embedded** | [**EmbeddedConfig**](embedded-config.md) | The addresses the framed viewer needs. It is filled in only for the embedded layout. | [optional] |
| **encryptionKeys** | [**List**](encryption-key-dto.md) | The caller's end-to-end encryption keys, added only when the document lies in a private room, so that the editors can decrypt it in the browser. It is empty everywhere else. | [optional] [nullable] |
| **lang** | **String** | The culture the editor interface is shown in, taken from the profile of the caller. | [required] [example: `en-US`] [nullable] |
| **mode** | **String** | `edit` when this session may write the document, `view` when it may only read it. | [required] [example: `edit`] [nullable] |
| **modeWrite** | **Boolean** | Whether this session may write; it is what the mode above says in one word. | [optional] [example: `true`] |
| **plugins** | [**PluginsConfig**](plugins-config.md) | Which editor plugins are offered. The portal currently offers none, so the list inside comes back empty. | [optional] |
| **recent** | [**List**](recent-config.md) | The documents offered in the editor's recent list. It is left out altogether when there is nothing to offer. | [optional] [example: `[]`] [nullable] |
| **templates** | [**List**](templates-config.md) | Always empty: the portal no longer passes creation templates through the editor configuration. | [optional] [example: `[]`] [nullable] |
| **user** | [**UserConfig**](user-config.md) | The account the editors attribute changes to. It is empty for an anonymous session opened through an external link, and the editors then ask for a name themselves. | [optional] |
