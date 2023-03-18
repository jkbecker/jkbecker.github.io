+++
title = "Tracking Anonymized Bluetooth Devices"
date = 2019-07-16

[extra]
type = "conferences"
featured = true
url_pdf = "https://petsymposium.org/2019/files/papers/issue3/popets-2019-0036.pdf"
+++

Bluetooth Low Energy (BLE) devices use public (non-encrypted) advertising channels to announce their presence to other devices. To prevent tracking on these public channels, devices may use a periodically changing, randomized address instead of their permanent Media Access Control (MAC) address. In this work we show that many state-of-the-art devices which are implementing such anonymization measures are vulnerable to passive tracking that extends well beyond their address randomization cycles. We show that it is possible to extract identifying tokens from the payload of advertising messages for tracking purposes. We present an address-carryover algorithm which exploits the asynchronous nature of payload and address changes to achieve tracking beyond the address randomization of a device. We furthermore identify an identity-exposing attack via a device accessory that allows permanent, non-continuous tracking, as well as an iOS side-channel which allows insights into user activity. Finally, we provide countermeasures against the presented algorithm and other privacy flaws in BLE advertising