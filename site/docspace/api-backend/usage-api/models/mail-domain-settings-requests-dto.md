# MailDomainSettingsRequestsDto
Which email domains the portal treats as already verified, and how their users join.

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **type** | [**TenantTrustedDomainsType**](tenant-trusted-domains-type.md) | How trusted domains are decided: no domain is trusted, every domain is, or only the ones listed in `domains`. Only the custom mode reads `domains`; under the other two the list is ignored rather than refused. | [required] [enum: `0`, `1`, `2`] |
| **domains** | **List** | The trusted domains, as bare hostnames such as `example.com` without a scheme or an `@`. This is the whole list that is to hold afterwards and not a list of additions. Each entry is lowercased before it is stored, and one entry that is not a valid hostname - or an empty list in the custom mode - fails the whole call without saving anything. | [required] [example: `[example.com, company.com]`] [nullable] |
| **inviteUsersAsVisitors** | **Boolean** | What a user joining through a trusted domain becomes: `true` admits them as a guest, `false` as a full member. It applies to joins made from now on and does not change anybody who has already joined. | [required] [example: `false`] |
