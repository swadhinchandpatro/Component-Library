import { InputText } from './index';
import { ComponentStory} from "@storybook/react";

export default {
  title: 'General/InputText',
  component: InputText,
  argTypes: {
    type: {
      options: ['text', 'number'],
      description: 'type for input field',
      control: {
        type: "radio"
      }
    },
    label:{
      control: 'text',
      description: 'label for input field',
    },
    placeholder:{
      control: 'text',
      description: 'placeholder for input field',
    },
    size:{
      control: 'number',
      description: 'size for input field',
    },
    autoFocus:{
      control: 'boolean',
      description: 'enable focus for input field',
    },
    readOnly:{
      control: 'boolean',
      description: 'set wheather this field is read only or not',
    },
    disabled:{
      control: 'boolean',
      description: 'disable input filed',
    },
    passwordShow:{
      control: 'boolean',
      description: 'set class for password',
    },
    icon:{
      src: '',
      description: 'size for input field',
    },
    className:{
      description: 'If we want to create new variant',
    }
  },
};

const Template:ComponentStory<typeof InputText>  = ({ ...args }) => {
  return <InputText {...args}/>;
};

export const inputText = Template.bind({});
inputText.args = {
  type:"text",
  label: "Name",
  placeholder: "Enter your name",
  size: 50,
  autoFocus: false,
  readOnly: false,
  disabled: false,
  passwordShow: false,
  icon: [{
    src: "",
    onClick:()=>{console.log("icon clicked")}
  }],
  className:""
};