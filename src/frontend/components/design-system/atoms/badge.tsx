import styled from 'styled-components'
import { color, space, fontSize, SpaceProps, FontSizeProps, ColorProps, variant } from 'styled-system'

export type BadgeProps = SpaceProps & FontSizeProps & ColorProps & {
  variant?: 'primary' | 'danger' | 'text' | 'success' | 'info' | 'secondary';
  outline?: boolean;
}

const variantStyle = (color: string, props: BadgeProps) => ({
  bg: color,
  borderColor: color,
  color: props.outline ? color : 'white',
})

const colorVariant = (props: BadgeProps) => variant({
  variants: {
    primary: variantStyle('bluePrimary', props),
    danger: variantStyle('red', props),
    success: variantStyle('treal', props),
    info: variantStyle('blueLight', props),
    secondary: variantStyle('blueSecondary', props),
  },
})

const sizeVariants = variant({
  prop: 'size',
  variants: {
    sm: {
      py: 1,
    },
    lg: {
      py: 3,
      px: '10px',
    },
  },
})

export const Badge = styled.span<BadgeProps>`
  border-radius: 12px;
  border: 2px solid ${({ theme }): string => theme.colors.greyLight};
  color: ${({ outline, theme }): string => (outline ? theme.colors.grey : theme.colors.white)};
  vertical-align: middle;
  font-family: ${({ theme }): string => theme.font};

  ${space};
  ${color};
  ${fontSize};
  ${props => colorVariant(props)};
  ${sizeVariants};
  ${({ outline }): string => (outline ? 'background: transparent;' : '')}
`

Badge.defaultProps = {
  px: 3,
  py: '6px',
  fontSize: 0,
  bg: 'greyLight',
}
