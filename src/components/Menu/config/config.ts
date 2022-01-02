import { MenuItemsType, DropdownMenuItemType } from '@pancakeswap/uikit'
import { ContextApi } from 'contexts/Localization/types'
import { nftsBaseUrl } from 'views/Nft/market/constants'

export type ConfigMenuItemsType = MenuItemsType & { hideSubNav?: boolean }

const config: (t: ContextApi['t']) => ConfigMenuItemsType[] = (t) => [
  {
    label: t('Trade'),
    icon: 'Swap',
    href: '/swap',
    showItemsOnMobile: false,
    items: [
      {
        label: t('Exchange'),
        href: '/swap?outputCurrency=0x031f7e8a0f17746f797cb4f7c0f18e99dee2aa96',
      },
      {
        label: t('Liquidity'),
        href: '/liquidity',
        // type: DropdownMenuItemType.EXTERNAL_LINK,
      },
    ],
  },

  /* {
    label: t('Create Token'),
    icon: 'Token',
    href: '/#',
    showItemsOnMobile: false,
    items: [
      {
        label: t('Create BEP20 Token'),
        href: 'http://bep20.me/',
        type: DropdownMenuItemType.EXTERNAL_LINK,
      },
    ],
  }, */

]

export default config
