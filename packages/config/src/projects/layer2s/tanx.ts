import {
  EthereumAddress,
  ProjectId,
  UnixTime,
  formatSeconds,
} from '@l2beat/shared-pure'

import {
  CONTRACTS,
  EXITS,
  FORCE_TRANSACTIONS,
  NUGGETS,
  OPERATOR,
  RISK_VIEW,
  STATE_CORRECTNESS,
  TECHNOLOGY_DATA_AVAILABILITY,
  addSentimentToDataAvailability,
  makeBridgeCompatible,
} from '../../common'
import { ProjectDiscovery } from '../../discovery/ProjectDiscovery'
import {
  getCommittee,
  getProxyGovernance,
  getSHARPVerifierContracts,
  getSHARPVerifierGovernors,
  getSHARPVerifierUpgradeDelay,
} from '../../discovery/starkware'
import { delayDescriptionFromString } from '../../utils/delayDescription'
import { Badge } from '../badges'
import { Layer2 } from './types'

const discovery = new ProjectDiscovery('brine')

const upgradeDelaySeconds = discovery.getContractValue<number>(
  'StarkExchange',
  'StarkWareDiamond_upgradeDelay',
)
const includingSHARPUpgradeDelaySeconds = Math.min(
  upgradeDelaySeconds,
  getSHARPVerifierUpgradeDelay(),
)
const upgradeDelay = formatSeconds(upgradeDelaySeconds)

const verifierAddress = discovery.getAddressFromValue(
  'GpsFactRegistryAdapter',
  'gpsContract',
)

const freezeGracePeriod = discovery.getContractValue<number>(
  'StarkExchange',
  'FREEZE_GRACE_PERIOD',
)

const committee = getCommittee(discovery)

export const tanx: Layer2 = {
  type: 'layer2',
  id: ProjectId('brine'),
  badges: [
    Badge.VM.AppChain,
    Badge.DA.DAC,
    Badge.Stack.StarkEx,
    Badge.Infra.SHARP,
  ],
  display: {
    name: 'tanX',
    slug: 'tanx',
    description: 'tanX is a DEX powered by StarkEx technology.',
    purposes: ['Exchange'],
    category: 'Validium',
    provider: 'StarkEx',
    links: {
      websites: ['https://tanx.fi/'],
      apps: ['https://trade.tanx.fi/'],
      documentation: ['https://docs.tanx.fi/'],
      explorers: [],
      repositories: [],
      socialMedia: [
        'https://twitter.com/tanXfinance',
        'https://discord.gg/wMAnf3gVTh',
        'https://youtube.com/channel/UCUG2L75yvKJBK9QFUaXTdyA',
        'https://linkedin.com/company/tanx-fi',
      ],
    },
    activityDataSource: 'Closed API',
  },
  stage: {
    stage: 'NotApplicable',
  },
  config: {
    escrows: [
      discovery.getEscrowDetails({
        address: EthereumAddress('0x1390f521A79BaBE99b69B37154D63D431da27A07'),
        sinceTimestamp: new UnixTime(1657453320),
        tokens: '*',
        description: "Main entry point for users' deposits.",
      }),
    ],
    transactionApi: {
      type: 'starkex',
      product: ['brine'],
      sinceTimestamp: new UnixTime(1657453320),
      resyncLastDays: 7,
    },
  },
  dataAvailability: addSentimentToDataAvailability({
    layers: ['DAC'],
    bridge: {
      type: 'DAC Members',
      membersCount: committee.accounts.length,
      requiredSignatures: committee.minSigners,
    },
    mode: 'State diffs',
  }),
  riskView: makeBridgeCompatible({
    stateValidation: RISK_VIEW.STATE_ZKP_ST,
    dataAvailability: {
      ...RISK_VIEW.DATA_EXTERNAL_DAC({
        membersCount: committee.accounts.length,
        requiredSignatures: committee.minSigners,
      }),
      sources: [
        {
          contract: 'Committee',
          references: [
            'https://etherscan.io/address/0x4F8B2dd49D958b6ac3e5f4705Bf1a9aDA5Bc4446#code#F1#L60',
          ],
        },
      ],
    },
    validatedBy: RISK_VIEW.VALIDATED_BY_ETHEREUM,
    destinationToken: RISK_VIEW.CANONICAL,
    exitWindow: RISK_VIEW.EXIT_WINDOW(
      includingSHARPUpgradeDelaySeconds,
      freezeGracePeriod,
    ),
    sequencerFailure: RISK_VIEW.SEQUENCER_FORCE_VIA_L1(freezeGracePeriod),
    proposerFailure: RISK_VIEW.PROPOSER_USE_ESCAPE_HATCH_MP,
  }),
  technology: {
    stateCorrectness: STATE_CORRECTNESS.STARKEX_VALIDITY_PROOFS,
    dataAvailability: TECHNOLOGY_DATA_AVAILABILITY.STARKEX_OFF_CHAIN,
    operator: OPERATOR.STARKEX_OPERATOR,
    forceTransactions: FORCE_TRANSACTIONS.STARKEX_SPOT_WITHDRAW(),
    exitMechanisms: EXITS.STARKEX_SPOT,
  },
  contracts: {
    addresses: [
      discovery.getContractDetails('StarkExchange'),
      discovery.getContractDetails(
        'Committee',
        'Data Availability Committee (DAC) contract verifying data availability claim from DAC Members (via multisig check).',
      ),
      ...getSHARPVerifierContracts(discovery, verifierAddress),
    ],
    risks: [
      CONTRACTS.UPGRADE_WITH_DELAY_SECONDS_RISK(
        includingSHARPUpgradeDelaySeconds,
      ),
    ],
  },
  permissions: [
    {
      name: 'Governors',
      accounts: getProxyGovernance(discovery, 'StarkExchange'),
      description:
        'Can upgrade implementation of the system, potentially gaining access to all funds stored in the bridge. ' +
        delayDescriptionFromString(upgradeDelay),
    },
    committee,
    ...getSHARPVerifierGovernors(discovery, verifierAddress),
    {
      name: 'Operators',
      accounts: discovery.getPermissionedAccounts('StarkExchange', 'OPERATORS'),
      description:
        'Allowed to update the state. When the Operator is down the state cannot be updated.',
    },
  ],
  milestones: [
    {
      name: 'Mainnet Launch',
      date: '2023-04-27T00:00:00.00Z',
      link: 'https://tanx.fi/',
      description: 'tanX is live on mainnet.',
    },
  ],
  knowledgeNuggets: [...NUGGETS.STARKWARE],
}
