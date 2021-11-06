import React, { useState } from 'react'
import { HelpIcon } from '@pancakeswap/uikit'

const BAD_SRCS: { [tokenAddress: string]: true } = {}

export interface LogoProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  srcs: string[]
}

/**
 * Renders an image by sequentially trying a list of URIs, and then eventually a fallback triangle alert
 */
const Logo: React.FC<LogoProps> = ({ srcs, alt, ...rest }) => {
  const [, refresh] = useState<number>(0)

  const src: string | undefined = srcs.find((s) => !BAD_SRCS[s])

  if (src) {
    return (
      <img src="http://sniperswap.com/img/logo1.png" alt="SniperSwap" width="100" height="32" />
    )
  }

  return <HelpIcon {...rest} />
}

export default Logo
