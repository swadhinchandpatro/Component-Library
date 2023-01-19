import { ProgressBar } from './index';
import { ComponentStory} from "@storybook/react";

export default {
  title: 'General/ProgressBar',
  component: ProgressBar,
  argTypes: {
    type: {
      options: ['default', 'inline'],
      description: 'Label direction',
      control: {
        type: "radio"
      }
    },
    size:{
      options: ['small', 'medium' , 'large'],
      description: 'size of label',
      control: {
        type: "radio"
      }
    },
    showValue:{
      control:"boolean",
      description:"Value visiblity to the end user"
    },
    maxValue:{
      control: {
        type: "number",
        description: 'max value of progress bar',
      }
    },
    value:{
      control: {
        type: "number",
        description: 'Value Showed using  amount of filled bar',
      }
    },
    filledbackgroundColor:{
      control: 'color' ,
      description: 'Background color of filled part Progress Bar',
    },
    unFilledbackgroundColor:{
      control:'color',
      description:'Background color for unfilled part of progress bar'
    },
    label:{
      control: 'text',
      description: 'label for Progress Bar',
    },
    className:{
      description: 'If we want to create new variant',
    }
  },
};

const Template:ComponentStory<typeof ProgressBar>  = ({ ...args }) => {
  return <ProgressBar {...args}/>;
};

export const progressBar = Template.bind({});
progressBar.args = {
  type:"default",
  showValue:"true",
  size:"small",
  value: 20,
  maxValue: 100,
  label: "Progress Bar",
  className:"",
  filledbackgroundColor:"#65BDC4",
  unFilledbackgroundColor:"#F4F5FC",
};