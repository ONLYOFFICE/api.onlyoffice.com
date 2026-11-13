# AiConfigDto
The AI settings the editor opens with. They follow the portal-wide AI access setting for signed-in users; an anonymous visitor who opened the document through an external link always gets AI disabled.

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **disabled** | **Boolean** | Whether the editor hides its AI tools. It is set when AI is turned off for the portal, and always for an anonymous visitor of an external link. | [optional] [example: `true`] |
