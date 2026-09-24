# PasswordHasher
The password hash parameters.

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **size** | **Integer** (int32) | The password hash size. | [optional] [example: `32`] |
| **iterations** | **Integer** (int32) | The number of iterations to generate the ppassword hash. | [optional] [example: `1000`] |
| **salt** | **String** | The salt to generate the ppassword hash. | [optional] [example: `random_salt_value`] [nullable] |
