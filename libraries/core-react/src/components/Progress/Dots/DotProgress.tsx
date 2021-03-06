import { forwardRef, SVGProps, Ref } from 'react'
import styled, { keyframes } from 'styled-components'
import * as tokens from './DotProgress.tokens'

const opacity = keyframes`
    0% {
        opacity: 1;
    }
    100% {
        opacity: 0.5;
    }
`

const Svg = styled.svg`
  fill: ${({ color }) => color};
  circle {
    &:nth-child(1) {
      animation: ${opacity} 1s ease infinite;
    }
    &:nth-child(2) {
      animation: ${opacity} 1s ease 0.2s infinite;
    }
    &:nth-child(3) {
      animation: ${opacity} 1s ease 0.4s infinite;
    }
  }
`

const getColor = (color: 'primary' | 'tertiary' | 'neutral'): string => {
  if (tokens[color]) {
    return tokens[color].background
  }

  return color
}

export type DotProgressProps = {
  /** Color */
  color?: 'primary' | 'tertiary' | 'neutral'
  /** Size */
  size?: 32 | 48 | 64
  /** @ignore */
  ref?: Ref<SVGSVGElement>
} & SVGProps<SVGSVGElement>

const DotProgress = forwardRef<SVGSVGElement, DotProgressProps>(
  function DotProgress({ color = 'neutral', size = 32, ...rest }, ref) {
    const props = {
      ...rest,
      color: getColor(color),
      ref,
    }
    const height = size / 4
    const width = size
    return (
      <Svg
        {...props}
        role="progressbar"
        viewBox="0 0 16 4"
        height={height}
        width={width}
        preserveAspectRatio="xMidYMid meet"
      >
        <circle cx={2} cy={2} r={2} />
        <circle cx={8} cy={2} r={2} />
        <circle cx={14} cy={2} r={2} />
      </Svg>
    )
  },
)

export { DotProgress }
