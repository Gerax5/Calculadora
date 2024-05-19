import Button from './Button'
import { fn } from '@storybook/test'
import {action} from '@storybook/addon-actions'

const meta = {
  component: Button
}

export default meta

export const Default = {
  args: {
    text: '+',
    onClick: fn(),
  }
}

export const HasDefaultWidth = {
  args: {
    text: '',
    onClick: fn(),
  }
}


export const HasAToolTip = {
  args: {
    text: '+',
  }
}

export const ResponseToKeyboard = {
    args: {
        text: '+',
        onClick: action('+')
    }
}
