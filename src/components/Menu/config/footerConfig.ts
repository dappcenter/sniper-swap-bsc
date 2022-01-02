import { FooterLinkType } from '@pancakeswap/uikit'
import { ContextApi } from 'contexts/Localization/types'

export const footerLinks: (t: ContextApi['t']) => FooterLinkType[] = (t) => [
  /* {
     label: t('Services'),
    items: [
      {
        label: t('Solana Exchange'),
        href: 'http://sol.sniperswap.com:5000',
        isHighlighted: false,
      },
      {
        label: t('Sniper Trader'),
        href: '#',
      },
      {
        label: t('Sniper Bot'),
        href: '#',
      },
      
    ],
  },

  {
    label: t('Help'),
    items: [
      {
        label: t('Customer Support'),
        href: '#',
      },
      {
        label: t('Contact Us'),
        href: '#',
      },

    ],
  },

  {
    label: t('Developers'),
    items: [
      {
        label: 'Github',
        href: 'https://github.com/SniperProject/sniper-swap-bsc',
      },
      {
        label: t('Documentation'),
        href: 'https://github.com/SniperProject/sniper-swap-bsc/blob/develop/README.md',
      },
      
    ], 
  }, */
]
