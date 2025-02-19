Generated with discovered.json: 0x202698101e977c3a33e24d85257db8d4fc2d0a62

# Diff at Tue, 13 Aug 2024 11:18:48 GMT:

- author: Bartek Kiepuszewski (<bkiepuszewski@gmail.com>)
- comparing to: main@925407501fd3d01acc73c6851abc4b5c56e2e056 block: 20490461
- current block number: 20519354

## Description

Nothing significant has changed, likely a small upgrade to the circuit

## Watched changes

```diff
    contract Verifier (0x6BCe7408c0781dcE7b71494274302D4b75a1447c) {
    +++ description: None
      values.$implementation:
-        "0xA153Ec874DaB9e6590cFcf4DC3f5bb86FfaC08B9"
+        "0x13A06FF21E46BCCd4B03E5Cb04372bB7aE7f2168"
      values.version:
-        "6ad34d4fc0cb1cbbed736b058d02532e881f9674"
+        "0c13cfbb19b823f524a346e7ff5b352e24b8d79b"
    }
```

## Source code changes

```diff
.../Verifier/Verifier.sol                          | 166 ++++++++++-----------
 1 file changed, 83 insertions(+), 83 deletions(-)
```

Generated with discovered.json: 0x576473c0656040c6d9b2a979123507d0bb002581

# Diff at Fri, 09 Aug 2024 12:10:58 GMT:

- author: Mateusz Radomski (<radomski.main@protonmail.com>)
- comparing to: main@43f10227394a700c20a2a00a94db255d929b2777 block: 20490461
- current block number: 20490461

## Description

Discovery rerun on the same block number with only config-related changes.

## Config/verification related changes

Following changes come from updates made to the config file,
or/and contracts becoming verified, not from differences found during
discovery. Values are for block 20490461 (main branch discovery), not current.

```diff
    contract ProxyAdmin (0x5B1Ef673d9c316b3eE9Ed3B4E3cC84952bfC5257) {
    +++ description: It can upgrade the bridge implementation potentially gaining access to all funds, and change any system component.
      assignedPermissions.upgrade.8:
-        "0x6BCe7408c0781dcE7b71494274302D4b75a1447c"
+        "0xc77ece87C91C44AFb5f19638f9a0F75b5d90E932"
      assignedPermissions.upgrade.6:
-        "0xc77ece87C91C44AFb5f19638f9a0F75b5d90E932"
+        "0x92Ef6Af472b39F1b363da45E35530c24619245A4"
      assignedPermissions.upgrade.5:
-        "0x30F82a1Ca89226E8b8815d6EbB728e3b18a428ff"
+        "0x745393Cc03b5fE668ECd52c0E625f59aAD6D3Da0"
      assignedPermissions.upgrade.4:
-        "0x92Ef6Af472b39F1b363da45E35530c24619245A4"
+        "0x6BCe7408c0781dcE7b71494274302D4b75a1447c"
      assignedPermissions.upgrade.3:
-        "0x17bfAfA932d2e23Bd9B909Fd5B4D2e2a27043fb1"
+        "0x386B76D9cA5F5Fb150B6BFB35CF5379B22B26dd8"
      assignedPermissions.upgrade.2:
-        "0x745393Cc03b5fE668ECd52c0E625f59aAD6D3Da0"
+        "0x30F82a1Ca89226E8b8815d6EbB728e3b18a428ff"
      assignedPermissions.upgrade.0:
-        "0x386B76D9cA5F5Fb150B6BFB35CF5379B22B26dd8"
+        "0x17bfAfA932d2e23Bd9B909Fd5B4D2e2a27043fb1"
    }
```

Generated with discovered.json: 0xa87cd2a83ac938e7e57e7e3f83cdfa45e40f27f9

# Diff at Fri, 09 Aug 2024 11:46:50 GMT:

- author: Mateusz Radomski (<radomski.main@protonmail.com>)
- current block number: 20490461

## Description

Initial discovery: Fork from the latest pre-FP OP stack contracts with added ZK proofs.

## Initial discovery

```diff
+   Status: CREATED
    contract OptimismPortal (0x17bfAfA932d2e23Bd9B909Fd5B4D2e2a27043fb1)
    +++ description: The main entry point to deposit funds from host chain to this chain. It also allows to prove and finalize withdrawals.
```

```diff
+   Status: CREATED
    contract L1CrossDomainMessenger (0x2a721cBE81a128be0F01040e3353c3805A5EA091)
    +++ description: Sends messages from host chain to this chain, and relays messages back onto host chain. In the event that a message sent from host chain to this chain is rejected for exceeding this chain's epoch gas limit, it can be resubmitted via this contract's replay function.
```

```diff
+   Status: CREATED
    contract ZircuitGuardianMultiSig (0x2c0B27F7C8F083B539557a0bA787041BF22DB276)
    +++ description: None
```

```diff
+   Status: CREATED
    contract SystemConfig (0x30F82a1Ca89226E8b8815d6EbB728e3b18a428ff)
    +++ description: Contains configuration parameters such as the Sequencer address, gas limit on this chain and the unsafe block signer address.
```

```diff
+   Status: CREATED
    contract L1StandardBridge (0x386B76D9cA5F5Fb150B6BFB35CF5379B22B26dd8)
    +++ description: The main entry point to deposit ERC20 tokens from host chain to this chain. This contract can store any token.
```

```diff
+   Status: CREATED
    contract ProxyAdmin (0x5B1Ef673d9c316b3eE9Ed3B4E3cC84952bfC5257)
    +++ description: It can upgrade the bridge implementation potentially gaining access to all funds, and change any system component.
```

```diff
+   Status: CREATED
    contract Verifier (0x6BCe7408c0781dcE7b71494274302D4b75a1447c)
    +++ description: None
```

```diff
+   Status: CREATED
    contract ZircuitSuperchainConfig (0x745393Cc03b5fE668ECd52c0E625f59aAD6D3Da0)
    +++ description: None
```

```diff
+   Status: CREATED
    contract L2OutputOracle (0x92Ef6Af472b39F1b363da45E35530c24619245A4)
    +++ description: Contains a list of proposed state roots which Proposers assert to be a result of block execution. Currently only the PROPOSER address can submit new state roots.
```

```diff
+   Status: CREATED
    contract L1ERC721Bridge (0x994eEb321F9cD79B077a5455fC248c77f30Dd244)
    +++ description: Used to bridge ERC-721 tokens from host chain to this chain.
```

```diff
+   Status: CREATED
    contract ZircuitMultiSig (0xC463EaC02572CC964D43D2414023E2c6B62bAF38)
    +++ description: It can update the preconfer address, the batch submitter (Sequencer) address and the gas configuration of the system.
```

```diff
+   Status: CREATED
    contract OptimismMintableERC20Factory (0xc77ece87C91C44AFb5f19638f9a0F75b5d90E932)
    +++ description: None
```
