# CspRequestsDto
The external sources the portal Content Security Policy is to trust.

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **domains** | **List** | The domains the policy trusts, as the complete list that is to hold afterwards rather than a list of additions: send the domains already trusted together with the new one to add one, leave one out to withdraw it, and send an empty list to fall back to the portal built-in policy. An entry may be a bare host, a host with a scheme, or a wildcard host such as `*.example.com`; it has to form a valid absolute address and may contain ASCII characters only. Every entry becomes an allowed source for scripts, styles, images, fonts, frames, media and connections at once - the directives cannot be set apart here. | [optional] [example: `[example.com, trusted-site.com]`] [nullable] |
