# CspDto
The Content Security Policy of the portal: the domains an administrator allowed, and the header built from them.

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **domains** | **List** | The external hosts an administrator has allowed, each in the form it was saved in - a bare host, a host with a scheme, or a wildcard such as `*.example.com`. An empty list means nobody has added one, not that the portal serves no policy. | [required] [example: `[https://example.com, https://cdn.example.com]`] [nullable] |
| **header** | **String** | The complete policy value the portal sends to browsers, assembled from `domains` together with the portal's own sources and the integrations it has switched on. It is therefore wider than `domains` alone, and is filled in even while that list is empty. | [required] [example: `default-src 'self'; script-src 'self' https://example.com`] [nullable] |
