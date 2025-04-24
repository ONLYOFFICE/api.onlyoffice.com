---
sidebar_position: -1
---

# API keys

The ONLYOFFICE DocSpace API uses API keys for [authentication](passing-authentication.md). Create and manage API keys on your portal from the **Developer Tools** page:

1. Go to the DocSpace settings.
2. Navigate to the **Developer Tools** section.
3. On the **API keys** tab, click the **Create new secret key** button to generate a new secret key.
    
    ![API keys](/assets/images/docspace/api-keys.png)

5. Specify the key name. The name usually contains information that allows the user to quickly understand where the key is used. For example, "LangFlow on a home computer."
6. Configure the key access rights. You can create a read-only key or grant full access to the data.
7. Specify the key lifetime in days (maximum 365), after which the key will be automatically deactivated.

    ![Create API key](/assets/images/docspace/create-api-key.png)

> Do not share the API key or include it in any client-side code (browsers, apps). API keys should be securely loaded from environment variables or a key management service on the server side.

When calling the API, pass the API keys in the Authorization header in the same way as an OAuth access token.

API keys should be provided via [HTTP Bearer authentication](https://swagger.io/docs/specification/v3_0/authentication/bearer-authentication/):

```sh
Authorization: Bearer ONLYOFFICE_API_KEY
```

The following example shows how to get the current user profile using a cURL request with API key authentication:

```sh
curl https://yourportal.onlyoffice.com/api/2.0/people/@self \
  -H "Authorization: Bearer ONLYOFFICE_API_KEY" 
```

where `ONLYOFFICE_API_KEY` is the API key.

For security, regularly audit the list of API keys you have created and revoke any keys that are no longer in use.

Always keep your API keys secret and treat them like passwords. Since API keys perform actions on your behalf when interacting with the API, avoid hardcoding them directly into your programs.

As your application scales, consider using a dedicated secrets management service, such as [HashiCorp Vault](https://www.vaultproject.io/), [AWS Secrets Manager](https://aws.amazon.com/ru/secrets-manager/), or [Azure Key Vault](https://azure.microsoft.com/en-us/products/key-vault). These tools offer secure storage, encryption, access control, and auditing capabilities. In containerized environments, solutions like [Kubernetes Secrets](https://kubernetes.io/docs/concepts/configuration/secret/) or [Docker Secrets](https://docs.docker.com/engine/swarm/secrets/) (with encryption enabled) can further enhance security. Additionally, ensure that secrets are loaded into memory at runtime and are never exposed in logs or code repositories.

By implementing these practices, you ensure your API keys remain safe and your application stays secure as it scales.
