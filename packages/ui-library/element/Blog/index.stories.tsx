import { Blog } from './index';
import { ComponentStory} from "@storybook/react";
import { getDirection } from '../../config';

export default {
  title: 'General/Blog',
  component: Blog,
  argTypes: {
    media: {
      description: 'Blog can be in video and image type.For video : use @videos/ and for images : @images/ in case if you are using your own document folder ',
    },
    heading:{
      control: 'text',
      description: 'heading of blog',
    },
    description:{
      control: 'text',
      description: 'description of blog',
    },
    className:{
      description: 'If we want to create new variant',
    },
    fullScreenEnabled:{
      description: 'To allow full screen to view',
    }
  },
};

const Template:ComponentStory<typeof Blog>  = ({ ...args },{globals: {textDirection } }) => {
  return <Blog {...args}  dir={getDirection(textDirection)}/>;
};

export const blog = Template.bind({});
blog.args = {
  media:{
    src:"",
    type:"video"
  },
  heading:"Emerging Careers",
  description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt...",
  fullScreenEnabled:"0"
};