import { ContextApi } from 'contexts/Localization/types'
import { PageMeta } from './types'

export const DEFAULT_META: PageMeta = {
  title: 'SniperSwap',
  description:
    'The leading DeFi exchange on Binance Smart Chain (BSC).',
  image: 'http://sniperswap.com/img/logo.png',
}

export const getCustomMeta = (path: string, t: ContextApi['t']): PageMeta => {
  let basePath
  if (path.startsWith('/swap')) {
    basePath = '/swap'
  } else if (path.startsWith('/add')) {
    basePath = '/add'
  } else if (path.startsWith('/remove')) {
    basePath = '/remove'
  } else if (path.startsWith('/teams')) {
    basePath = '/teams'
  } else if (path.startsWith('/voting/proposal') && path !== '/voting/proposal/create') {
    basePath = '/voting/proposal'
  } else if (path.startsWith('/nfts/collections')) {
    basePath = '/nfts/collections'
  } else if (path.startsWith('/nfts/profile')) {
    basePath = '/nfts/profile'
  } else if (path.startsWith('/pancake-squad')) {
    basePath = '/pancake-squad'
  } else {
    basePath = path
  }

  switch (basePath) {
    case '/':
      return {
        title: `${t('Home')} | ${t('SniperSwap')}`,
      }
    case '/swap':
      return {
        title: `${t('Exchange')} | ${t('SniperSwap')}`,
      }
    case '/add':
      return {
        title: `${t('Add Liquidity')} | ${t('SniperSwap')}`,
      }
    case '/remove':
      return {
        title: `${t('Remove Liquidity')} | ${t('SniperSwap')}`,
      }
    case '/liquidity':
      return {
        title: `${t('Liquidity')} | ${t('SniperSwap')}`,
      }
    case '/find':
      return {
        title: `${t('Import Pool')} | ${t('SniperSwap')}`,
      }
    case '/competition':
      return {
        title: `${t('Trading Battle')} | ${t('SniperSwap')}`,
      }
    case '/prediction':
      return {
        title: `${t('Prediction')} | ${t('SniperSwap')}`,
      }
    case '/prediction/leaderboard':
      return {
        title: `${t('Leaderboard')} | ${t('SniperSwap')}`,
      }
    case '/farms':
      return {
        title: `${t('Farms')} | ${t('SniperSwap')}`,
      }
    case '/farms/auction':
      return {
        title: `${t('Farm Auctions')} | ${t('SniperSwap')}`,
      }
    case '/pools':
      return {
        title: `${t('Pools')} | ${t('SniperSwap')}`,
      }
    case '/lottery':
      return {
        title: `${t('Lottery')} | ${t('SniperSwap')}`,
      }
    case '/ifo':
      return {
        title: `${t('Initial Farm Offering')} | ${t('SniperSwap')}`,
      }
    case '/teams':
      return {
        title: `${t('Leaderboard')} | ${t('SniperSwap')}`,
      }
    case '/voting':
      return {
        title: `${t('Voting')} | ${t('SniperSwap')}`,
      }
    case '/voting/proposal':
      return {
        title: `${t('Proposals')} | ${t('SniperSwap')}`,
      }
    case '/voting/proposal/create':
      return {
        title: `${t('Make a Proposal')} | ${t('SniperSwap')}`,
      }
    case '/info':
      return {
        title: `${t('Overview')} | ${t('SniperSwap Info & Analytics')}`,
        description: 'View statistics for SniperSwap exchanges.',
      }
    case '/info/pools':
      return {
        title: `${t('Pools')} | ${t('SniperSwap Info & Analytics')}`,
        description: 'View statistics for SniperSwap exchanges.',
      }
    case '/info/tokens':
      return {
        title: `${t('Tokens')} | ${t('SniperSwap Info & Analytics')}`,
        description: 'View statistics for SniperSwap exchanges.',
      }
    case '/nfts':
      return {
        title: `${t('Overview')} | ${t('SniperSwap')}`,
      }
    case '/nfts/collections':
      return {
        title: `${t('Collections')} | ${t('SniperSwap')}`,
      }
    case '/nfts/profile':
      return {
        title: `${t('Your Profile')} | ${t('SniperSwap')}`,
      }
    case '/pancake-squad':
      return {
        title: `${t('Pancake Squad')} | ${t('SniperSwap')}`,
      }
    default:
      return null
  }
}
