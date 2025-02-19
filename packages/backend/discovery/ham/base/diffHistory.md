Generated with discovered.json: 0x2d10eef9fe58935ec177f4fbe823f1e11cb1a7d0

# Diff at Fri, 09 Aug 2024 12:04:05 GMT:

- author: Mateusz Radomski (<radomski.main@protonmail.com>)
- comparing to: main@bf40aa32f030fd312056ca0ef198c8550467d1d7 block: 17827903
- current block number: 17827903

## Description

Discovery rerun on the same block number with only config-related changes.

## Config/verification related changes

Following changes come from updates made to the config file,
or/and contracts becoming verified, not from differences found during
discovery. Values are for block 17827903 (main branch discovery), not current.

```diff
    contract ProxyAdmin (0x5eC25263F8a79F8D5fF7bD5F493640b6E2627B49) {
    +++ description: It can upgrade the bridge implementation potentially gaining access to all funds, and change any system component.
      assignedPermissions.upgrade.6:
-        "0x80292D35789462aeD1D694899f1FaAE184Fe3E5b"
+        "0xdD83c537B35d98776913D7ab60EBaA5c28F9dD01"
      assignedPermissions.upgrade.5:
-        "0x3c69dcFF018766c72449cd460Cc7AF8863056a43"
+        "0xad22377De22537e4e6bd192AeBCa524a79B0d3Fd"
      assignedPermissions.upgrade.4:
-        "0xad22377De22537e4e6bd192AeBCa524a79B0d3Fd"
+        "0xFC57b0947C079073A1C5Fe61887Eb3495972EE72"
      assignedPermissions.upgrade.3:
-        "0x38893659CF2b4b3E02B2dC93fe9A55Ea155a3daF"
+        "0x936c137699230c4732d534c7E968cC7cEAa6Cf45"
      assignedPermissions.upgrade.2:
-        "0xdD83c537B35d98776913D7ab60EBaA5c28F9dD01"
+        "0x80292D35789462aeD1D694899f1FaAE184Fe3E5b"
      assignedPermissions.upgrade.1:
-        "0xFC57b0947C079073A1C5Fe61887Eb3495972EE72"
+        "0x3c69dcFF018766c72449cd460Cc7AF8863056a43"
      assignedPermissions.upgrade.0:
-        "0x936c137699230c4732d534c7E968cC7cEAa6Cf45"
+        "0x38893659CF2b4b3E02B2dC93fe9A55Ea155a3daF"
    }
```

Generated with discovered.json: 0xab4168bacbfba6fbd1fd917ef4c80a79fa4c1c9c

# Diff at Fri, 09 Aug 2024 10:14:04 GMT:

- author: Mateusz Radomski (<radomski.main@protonmail.com>)
- comparing to: main@1f0da1d0aab7bc6b3b5e54e7e93480bd98e57035 block: 17827903
- current block number: 17827903

## Description

Discovery rerun on the same block number with only config-related changes.

## Config/verification related changes

Following changes come from updates made to the config file,
or/and contracts becoming verified, not from differences found during
discovery. Values are for block 17827903 (main branch discovery), not current.

```diff
    contract HamMultisig1 (0x211A8defcF685E0Ef5Ed8eEf0c43dc1B0ba56aEA) {
    +++ description: It can act on behalf of 0x5eC25263F8a79F8D5fF7bD5F493640b6E2627B49, inheriting its permissions.
      assignedPermissions.owner:
-        ["0x5eC25263F8a79F8D5fF7bD5F493640b6E2627B49"]
      assignedPermissions.configure:
+        ["0x5eC25263F8a79F8D5fF7bD5F493640b6E2627B49"]
      values.$multisigThreshold:
-        "3 of 4 (75%)"
      values.getOwners:
-        ["0xD61640d06dC7A61C46d9515680b4DDd2AC51E9A9","0x356000Cec4fC967f8FC372381D983426760A0391","0x12ee26aD74d50a1f6BDD90811387d1e0f3e7C76A","0x4919167EA334BE84B1604Cbc82A26A7746D5943e"]
      values.getThreshold:
-        3
      values.$members:
+        ["0xD61640d06dC7A61C46d9515680b4DDd2AC51E9A9","0x356000Cec4fC967f8FC372381D983426760A0391","0x12ee26aD74d50a1f6BDD90811387d1e0f3e7C76A","0x4919167EA334BE84B1604Cbc82A26A7746D5943e"]
      values.$threshold:
+        3
      values.multisigThreshold:
+        "3 of 4 (75%)"
    }
```

```diff
    contract ProxyAdmin (0x5eC25263F8a79F8D5fF7bD5F493640b6E2627B49) {
    +++ description: It can upgrade the bridge implementation potentially gaining access to all funds, and change any system component.
      assignedPermissions.admin:
-        ["0x38893659CF2b4b3E02B2dC93fe9A55Ea155a3daF","0x3c69dcFF018766c72449cd460Cc7AF8863056a43","0x80292D35789462aeD1D694899f1FaAE184Fe3E5b","0x936c137699230c4732d534c7E968cC7cEAa6Cf45","0xFC57b0947C079073A1C5Fe61887Eb3495972EE72","0xad22377De22537e4e6bd192AeBCa524a79B0d3Fd","0xdD83c537B35d98776913D7ab60EBaA5c28F9dD01"]
      assignedPermissions.owner:
-        ["0xd2e0532f8AE8DeDA4b9Ad2CB79f008C97c9C25eE"]
      assignedPermissions.upgrade:
+        ["0x936c137699230c4732d534c7E968cC7cEAa6Cf45","0xFC57b0947C079073A1C5Fe61887Eb3495972EE72","0xdD83c537B35d98776913D7ab60EBaA5c28F9dD01","0x38893659CF2b4b3E02B2dC93fe9A55Ea155a3daF","0xad22377De22537e4e6bd192AeBCa524a79B0d3Fd","0x3c69dcFF018766c72449cd460Cc7AF8863056a43","0x80292D35789462aeD1D694899f1FaAE184Fe3E5b"]
      assignedPermissions.configure:
+        ["0xd2e0532f8AE8DeDA4b9Ad2CB79f008C97c9C25eE"]
    }
```

```diff
    contract HamMultisig2 (0x87Ef0aB1189F76eBCaEe736A5EB8F639a8cF156d) {
    +++ description: It can update the preconfer address, the batch submitter (Sequencer) address and the gas configuration of the system.
      assignedPermissions.owner:
-        ["0xad22377De22537e4e6bd192AeBCa524a79B0d3Fd"]
      assignedPermissions.configure:
+        ["0xad22377De22537e4e6bd192AeBCa524a79B0d3Fd"]
      values.$multisigThreshold:
-        "3 of 4 (75%)"
      values.getOwners:
-        ["0xD61640d06dC7A61C46d9515680b4DDd2AC51E9A9","0x356000Cec4fC967f8FC372381D983426760A0391","0x12ee26aD74d50a1f6BDD90811387d1e0f3e7C76A","0x4919167EA334BE84B1604Cbc82A26A7746D5943e"]
      values.getThreshold:
-        3
      values.$members:
+        ["0xD61640d06dC7A61C46d9515680b4DDd2AC51E9A9","0x356000Cec4fC967f8FC372381D983426760A0391","0x12ee26aD74d50a1f6BDD90811387d1e0f3e7C76A","0x4919167EA334BE84B1604Cbc82A26A7746D5943e"]
      values.$threshold:
+        3
      values.multisigThreshold:
+        "3 of 4 (75%)"
    }
```

Generated with discovered.json: 0x05d0893d8cadd2b6f0bf619fe90c1fee304254d8

# Diff at Wed, 31 Jul 2024 16:59:44 GMT:

- author: sekuba (<29250140+sekuba@users.noreply.github.com>)
- current block number: 17827903

## Description

Provide description of changes. This section will be preserved.

## Initial discovery

```diff
+   Status: CREATED
    contract HamMultisig1 (0x211A8defcF685E0Ef5Ed8eEf0c43dc1B0ba56aEA)
    +++ description: It can act on behalf of 0x5eC25263F8a79F8D5fF7bD5F493640b6E2627B49, inheriting its permissions.
```

```diff
+   Status: CREATED
    contract L2OutputOracle (0x38893659CF2b4b3E02B2dC93fe9A55Ea155a3daF)
    +++ description: Contains a list of proposed state roots which Proposers assert to be a result of block execution. Currently only the PROPOSER address can submit new state roots.
```

```diff
+   Status: CREATED
    contract OptimismMintableERC20Factory (0x3c69dcFF018766c72449cd460Cc7AF8863056a43)
    +++ description: A helper contract that generates OptimismMintableERC20 contracts on the network it's deployed to. OptimismMintableERC20 is a standard extension of the base ERC20 token contract designed to allow the L1StandardBridge contracts to mint and burn tokens. This makes it possible to use an OptimismMintablERC20 as this chain's representation of a token on the host chain, or vice-versa.
```

```diff
+   Status: CREATED
    contract L1CrossDomainMessenger (0x3Ef6ce577FC438591d6C683E7a6Ea9e14A8f2d36)
    +++ description: Sends messages from host chain to this chain, and relays messages back onto host chain. In the event that a message sent from host chain to this chain is rejected for exceeding this chain's epoch gas limit, it can be resubmitted via this contract's replay function.
```

```diff
+   Status: CREATED
    contract ProxyAdmin (0x5eC25263F8a79F8D5fF7bD5F493640b6E2627B49)
    +++ description: It can upgrade the bridge implementation potentially gaining access to all funds, and change any system component.
```

```diff
+   Status: CREATED
    contract L1ERC721Bridge (0x80292D35789462aeD1D694899f1FaAE184Fe3E5b)
    +++ description: Used to bridge ERC-721 tokens from host chain to this chain.
```

```diff
+   Status: CREATED
    contract HamMultisig2 (0x87Ef0aB1189F76eBCaEe736A5EB8F639a8cF156d)
    +++ description: It can update the preconfer address, the batch submitter (Sequencer) address and the gas configuration of the system.
```

```diff
+   Status: CREATED
    contract L1StandardBridge (0x936c137699230c4732d534c7E968cC7cEAa6Cf45)
    +++ description: The main entry point to deposit ERC20 tokens from host chain to this chain. This contract can store any token.
```

```diff
+   Status: CREATED
    contract SystemConfig (0xad22377De22537e4e6bd192AeBCa524a79B0d3Fd)
    +++ description: Contains configuration parameters such as the Sequencer address, gas limit on this chain and the unsafe block signer address.
```

```diff
+   Status: CREATED
    contract AddressManager (0xd2e0532f8AE8DeDA4b9Ad2CB79f008C97c9C25eE)
    +++ description: None
```

```diff
+   Status: CREATED
    contract OptimismPortal (0xdD83c537B35d98776913D7ab60EBaA5c28F9dD01)
    +++ description: The main entry point to deposit funds from host chain to this chain. It also allows to prove and finalize withdrawals.
```

```diff
+   Status: CREATED
    contract SuperchainConfig (0xFC57b0947C079073A1C5Fe61887Eb3495972EE72)
    +++ description: Used to manage global configuration values for multiple OP Chains within a single Superchain network. The SuperchainConfig contract manages the `PAUSED_SLOT`, a boolean value indicating whether the Superchain is paused, and `GUARDIAN_SLOT`, the address of the guardian which can pause and unpause the system.
```
