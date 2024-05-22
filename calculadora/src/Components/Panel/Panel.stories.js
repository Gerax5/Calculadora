import Panel from './Panel'
import { fn } from '@storybook/test'
import {action} from '@storybook/addon-actions'

const meta = {
    component: Panel
}
  
export default meta

export const Default = {
    args: {
      text: '123456789',
    }
}

export const NoMoreThan9Chaacters = {
  args: {
    text: '1.23456789'
  }
}

export const PropStyle = {
  args: {
    text: '1.23456789',
    stylePanel: {backgroundColor:'blueviolet'}
  }
}