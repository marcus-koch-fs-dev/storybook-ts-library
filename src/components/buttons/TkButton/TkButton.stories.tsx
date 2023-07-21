/* eslint-disable no-alert */
import { FunctionComponent } from 'react'
import { Paper } from '@mui/material'
import { Meta, StoryObj } from '@storybook/react'
import { userEvent, within } from '@storybook/testing-library'

import TkButton from '@/components/buttons/TkButton/TkButton'

// Decorator to wrap the component in a Paper component for styling
const iconWrapperDecorator = (StoryFn: FunctionComponent) => (
  <Paper>
    <StoryFn />
  </Paper>
)

// Meta information for the component, providing details for Storybook
const meta = {
  title: 'Test/TkButton', // Title for the component in Storybook
  component: TkButton, // The component itself
  args: {
    toolTipTitle: 'Hello World', // Default tooltip title prop
    iconSize: 'small', // Default icon size prop
  },
  argTypes: {
    onButtonClick: { action: 'clicked' }, // Action to log when button is clicked in Storybook
  },
  parameters: {},
  decorators: [iconWrapperDecorator], // Applying the iconWrapperDecorator to the component in Storybook
} satisfies Meta<typeof TkButton>

export default meta

// Type definition for the Story object
type Story = StoryObj<typeof meta>

// Default story for the TkButton component
export const Default: Story = {
  render: (args) => <TkButton {...args} />, // Rendering the TkButton component with given args

  //! Testing of implemented functions
  // A custom "play" function to simulate user interaction in Storybook
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    userEvent.hover(canvas.getByLabelText('Hello World')) // Simulating hover event
  },
}

// Different scenarios for the TkButton component

export const Large: Story = {
  render: (args) => <TkButton {...args} iconSize="large" />, // Rendering the TkButton component with iconSize set to "large"
}

export const IconDualColor: Story = {
  render: (args) => <TkButton {...args} iconSize="large" />, // Rendering the TkButton component with iconSize set to "large"
}

// Adding custom argTypes for the IconDualColor scenario
IconDualColor.argTypes = {
  backgroundColor: {
    control: 'inline-radio', // Control type for Storybook
    options: ['white', 'lightblue'], // Available options for the prop
  },
}

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
