# DnsSettingsRequestsDto
The custom domain the portal answers on, and whether that mapping is in force.

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **dnsName** | **String** | The domain the portal is to be reachable under, as a bare hostname without a scheme. It must not collide with the reserved base domain of the installation, and a name that fails validation is refused without disturbing the mapping in force. It is read only while `enable` is true. | [optional] [example: `example.com`] [nullable] |
| **enable** | **Boolean** | Whether the custom domain is put in force. Setting it false clears the mapping and ignores `dnsName`; setting it true also stops the previous domain from answering and rewrites any Content Security Policy entry that named it. | [optional] [example: `true`] |
