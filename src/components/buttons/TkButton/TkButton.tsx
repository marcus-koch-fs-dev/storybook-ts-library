import { FC } from 'react'
import PersonIcon from '@mui/icons-material/Person'
import {
  Icon,
  IconButton,
  IconButtonProps,
  IconProps,
  Tooltip,
  TooltipProps,
} from '@mui/material'

type IconSizeType = 'small' | 'medium' | 'large'

export interface ITkButtonProps {
  toolTipTitle?: string
  onButtonClick: () => void
  iconSize?: IconSizeType
  iconColor?: string
  backgroundColor?: string
  tooltipProps?: TooltipProps
  iconButtonProps?: IconButtonProps
  iconProps?: IconProps
}

const TkButton: FC<ITkButtonProps> = (props) => {
  const {
    toolTipTitle,
    onButtonClick,
    iconSize = 'small',
    iconColor = '#000',
    backgroundColor = 'lightblue',
    tooltipProps,
    iconButtonProps,
    iconProps,
  } = props

  return (
    <Tooltip {...tooltipProps} title={toolTipTitle}>
      <IconButton
        {...iconButtonProps}
        onClick={onButtonClick}
        sx={{ backgroundColor }}
        size={iconSize}
      >
        <Icon {...iconProps} sx={{ color: iconColor }}>
          <PersonIcon />
        </Icon>
      </IconButton>
    </Tooltip>
  )
}

export default TkButton
