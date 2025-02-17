---
sidebar_label: '🔗 Connect a Universal Profile'
sidebar_position: 1
---

# Connect Your Universal Profile to a dApp

To allow your users to connect to your dApp with their [Universal Profile](../../standards/universal-profile/introduction.md), they need to:

- install the 🖥️ [Universal Profile Browser Extension](/install-up-browser-extension)
- and ✨ [create a Universal Profile](https://my.universalprofile.cloud)

:::note Manual Deployment

Optionally you can ⚒️ [deploy a Universal Profile programmatically](../../learn/expert-guides/universal-profile/create-profile.md) for your users, but then they will not benefit from free transactions through the LUKSO Transaction Relay Service.

:::

:::note

If you expect your users to have MetaMask or other similar browser extensions installed, you can also connect to the Universal Profile Browser Extension directly, using the `window.lukso` object.

:::

<div style={{textAlign: 'center'}}>

<img
    src="/img/learn/up_extension_connect.png"
    alt="Example of Sign-In with Ethereum screen"
    width="400"
/>

</div>

## Connect to a dApp

```js
import Web3 from 'web3';
const web3 = new Web3(window.ethereum);

async function connect() {
  await web3.eth.requestAccounts();

  try {
    const accounts = await web3.eth.requestAccounts();
    console.log('Connected with', accounts[0]);
  } catch (error) {
    // handle connection error
  }
}
connect();
```
