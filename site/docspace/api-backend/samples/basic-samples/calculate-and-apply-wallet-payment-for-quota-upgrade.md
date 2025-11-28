import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Calculate and apply wallet payment for a quota upgrade

This example demonstrates how to calculate the wallet payment amount for upgrading to a higher quota and then apply this payment in ONLYOFFICE DocSpace. It is useful when the portal uses a pre-paid balance (wallet) instead of direct card charges.

## Before you start

1. Replace `https://yourportal.onlyoffice.com` and `YOUR_API_KEY` with your actual DocSpace portal URL and API key. Ensure you have the necessary data and permissions to perform migration operations.
2. Before you can make requests to the API, you need to authenticate. Check out the [Personal access tokens](/docspace/api-backend/get-started/authentication/personal-access-tokens.md) page to learn how to obtain and use access tokens.

<details>
  <summary>Full example</summary>
<Tabs>
  <TabItem value="nodejs" label="Node.js">
  
  ``` ts
  // Config
  const BASE_URL = 'https://yourportal.onlyoffice.com';
  const API_KEY = 'YOUR_API_KEY';

  const HEADERS = {
    Accept: 'application/json',
    Authorization: `Bearer ${API_KEY}`,
    'Content-Type': 'application/json',
  };

  // Step 1: Calculate the wallet payment amount
  async function calculateWalletPayment(quantity, productQuantityType = 'Set') {
    const url = `${BASE_URL}/api/2.0/portal/payment/calculatewallet`;
    const body = { quantity, productQuantityType };

    const res = await fetch(url, {
      method: 'PUT',
      headers: HEADERS,
      body: JSON.stringify(body),
    });

    if (res.status === 200) {
      const json = await res.json();
      const calculation = json.response || json;
      console.log('Wallet payment calculation result:');
      console.log(calculation);
      return calculation;
    }

    const text = await res.text();
    console.log('Failed to calculate wallet payment:', res.status, text);
    return null;
  }

  // Step 2: Apply (update) the wallet payment quantity
  async function updateWalletPayment(quantity, productQuantityType = 'Set') {
    const url = `${BASE_URL}/api/2.0/portal/payment/updatewallet`;
    const body = { quantity, productQuantityType };

    const res = await fetch(url, {
      method: 'PUT',
      headers: HEADERS,
      body: JSON.stringify(body),
    });

    if (res.status === 200) {
      const json = await res.json();
      const result = json.response || json;
      console.log('Wallet payment successfully updated.');
      console.log('Server response:', result);
      return true;
    }

    const text = await res.text();
    console.log('Failed to update wallet payment:', res.status, text);
    return false;
  }

  // Example usage
  (async () => {
    const quantity = { '1001': 1 }; // item -> qty
    const productQuantityType = 'Set'; // Set | Add | Sub | Renew

    const calculation = await calculateWalletPayment(quantity, productQuantityType);
    if (calculation) {
      console.log('Calculated wallet payment based on the provided quantity.');
      await updateWalletPayment(quantity, productQuantityType);
    }
  })();
  ```

  </TabItem>
  <TabItem value="python" label="Python">

  ``` py
  import requests

  # Set API base URL
  BASE_URL = "https://yourportal.onlyoffice.com"
  API_KEY  = "YOUR_API_KEY"

  # Headers with API key for authentication
  HEADERS = {
    "Accept": "application/json",
    "Authorization": f"Bearer {API_KEY}",
  }

  # Step 1: Calculate the wallet payment amount
  def calculate_wallet_payment(quantity, product_quantity_type="Set"):
    url = f"{BASE_URL}/api/2.0/portal/payment/calculatewallet"

    data = {
      "quantity": quantity,
      "productQuantityType": product_quantity_type,  # Set, Add, Sub, Renew
    }

    response = requests.put(url, json=data, headers=HEADERS)

    if response.status_code == 200:
      payload = response.json()
      calculation = payload.get("response", payload)
      print("Wallet payment calculation result:")
      print(calculation)
      return calculation

    print("Failed to calculate wallet payment:", response.status_code, response.text)
    return None

  # Step 2: Apply (update) the wallet payment quantity
  def update_wallet_payment(quantity, product_quantity_type="Set"):
    url = f"{BASE_URL}/api/2.0/portal/payment/updatewallet"

    data = {
      "quantity": quantity,
      "productQuantityType": product_quantity_type,  # Set, Add, Sub, Renew
    }

    response = requests.put(url, json=data, headers=HEADERS)

    if response.status_code == 200:
      payload = response.json()
      result = payload.get("response", payload)
      print("Wallet payment successfully updated.")
      print("Server response:", result)
      return True

    print("Failed to update wallet payment:", response.status_code, response.text)
    return False

  # Example usage: calculate and apply wallet payment
  if __name__ == "__main__":

    # In this example, we set item "1001" to quantity 1.
    quantity = {
      "1001": 1,
    }

    # Product quantity type:
    # Set, Add, Sub, or Renew depending on your scenario.
    product_quantity_type = "Set"

    # Step 1: Calculate wallet payment
    calculation = calculate_wallet_payment(quantity, product_quantity_type)
    if calculation:
      print("Calculated wallet payment based on the provided quantity.")

      # Step 2: Apply wallet payment with the same parameters
      update_wallet_payment(quantity, product_quantity_type)
  ```

  </TabItem>
</Tabs>
</details>

## Step 1: Calculate the wallet payment amount for the selected quota

A PUT request is sent to [/api/2.0/portal/payment/calculatewallet](/docspace/api-backend/usage-api/calculate-wallet-payment) to calculate the wallet payment amount based on the requested product quantities.

The request body includes:

- `quantity`: a mapping of item identifiers to their quantities in the payment.
- `productQuantityType`: the type of action performed on a product's quantity. Possible values: `Set`, `Add`, `Sub`, `Renew`.

<Tabs>
  <TabItem value="nodejs" label="Node.js">
  
  ``` ts
  async function calculateWalletPayment(quantity, productQuantityType = 'Set') {
    const url = `${BASE_URL}/api/2.0/portal/payment/calculatewallet`;
    const body = { quantity, productQuantityType };

    const res = await fetch(url, {
      method: 'PUT',
      headers: HEADERS,
      body: JSON.stringify(body),
    });

    if (res.status === 200) {
      const json = await res.json();
      const calculation = json.response || json;
      console.log('Wallet payment calculation result:');
      console.log(calculation);
      return calculation;
    }

    const text = await res.text();
    console.log('Failed to calculate wallet payment:', res.status, text);
    return null;
  }
  ```

  </TabItem>
  <TabItem value="python" label="Python">

  ``` py
  def calculate_wallet_payment(quantity, product_quantity_type="Set"):
    url = f"{BASE_URL}/api/2.0/portal/payment/calculatewallet"

    data = {
      "quantity": quantity,
      "productQuantityType": product_quantity_type,  # Set, Add, Sub, Renew
    }

    response = requests.put(url, json=data, headers=HEADERS)

    if response.status_code == 200:
      payload = response.json()
      calculation = payload.get("response", payload)
      print("Wallet payment calculation result:")
      print(calculation)
      return calculation

    print("Failed to calculate wallet payment:", response.status_code, response.text)
    return None
  ```

  </TabItem>
</Tabs>

## Step 2: Apply the wallet payment for the selected quota

A PUT request is sent to [/api/2.0/portal/payment/updatewallet](/docspace/api-backend/usage-api/update-wallet-payment) to update the wallet payment quantity using the same structure as in the calculation step.

The request body includes:

- `quantity`: mapping of item identifiers to their quantities in the payment.
- `productQuantityType`: the type of action for those quantities (`Set`, `Add`, `Sub`, `Renew`).

<Tabs>
  <TabItem value="nodejs" label="Node.js">
  
  ``` ts
  async function updateWalletPayment(quantity, productQuantityType = 'Set') {
    const url = `${BASE_URL}/api/2.0/portal/payment/updatewallet`;
    const body = { quantity, productQuantityType };

    const res = await fetch(url, {
      method: 'PUT',
      headers: HEADERS,
      body: JSON.stringify(body),
    });

    if (res.status === 200) {
      const json = await res.json();
      const result = json.response || json;
      console.log('Wallet payment successfully updated.');
      console.log('Server response:', result);
      return true;
    }

    const text = await res.text();
    console.log('Failed to update wallet payment:', res.status, text);
    return false;
  }
  ```

  </TabItem>
  <TabItem value="python" label="Python">

  ``` py
  def update_wallet_payment(quantity, product_quantity_type="Set"):
    url = f"{BASE_URL}/api/2.0/portal/payment/updatewallet"

    data = {
      "quantity": quantity,
      "productQuantityType": product_quantity_type,  # Set, Add, Sub, Renew
    }

    response = requests.put(url, json=data, headers=HEADERS)

    if response.status_code == 200:
      payload = response.json()
      result = payload.get("response", payload)
      print("Wallet payment successfully updated.")
      print("Server response:", result)
      return True

    print("Failed to update wallet payment:", response.status_code, response.text)
    return False
  ```

  </TabItem>
</Tabs>