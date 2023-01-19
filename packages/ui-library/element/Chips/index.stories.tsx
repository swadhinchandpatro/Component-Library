import { Chips } from './index';
import { ComponentStory} from "@storybook/react";
import { getDirection } from '../../config';

export default {
  title: 'General/Chips',
  component: Chips,
  argTypes: {
    icon: {
      description:'Chips icon can be left or right. By default its is left if nothing is written. For images : Use @images/ in case you are using your own document folder ',
    },
    text:{
      control: 'text',
      description: 'Text for chips',
    },
    onClick:{
      description : "When event fired on click on component"
    },
    className:{
      description: 'If we want to create new variant',
    }
  },
};

const Template:ComponentStory<typeof Chips>  = ({ ...args },{globals: {textDirection }}) => {
  return <Chips {...args}  dir={getDirection(textDirection)} />;
};

export const chips = Template.bind({});
chips.args = {
  icon:[
    {
      src:"",
      onClick:()=>{console.log("icon clicked")}
    },
    {
      src : "",
      alignment:"right",
      onClick:()=>{console.log("icon clicked")}
    },
  ],
  text:"9-12",
  onClick:()=>{
    console.log("component clicked")
  }
};