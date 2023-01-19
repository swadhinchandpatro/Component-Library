import { CountCard } from "./index";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { getDirection } from '../../config';

export default {
  description: "Example/Count_Card",
  component: CountCard,

  argTypes: {
    className: { control: "text" },
    icon: { control: "text" },
    count: { control: "text" },
    description: { control: "text" },
  },
} as ComponentMeta<typeof CountCard>;

const Template: ComponentStory<typeof CountCard> = ({ ...args },{globals: {textDirection }}) => (
  <CountCard {...args}  dir={getDirection(textDirection)} />
);

export const Count_card = Template.bind({});

Count_card.args = {
  className: "",
  icon: "@images/CountCard/c1.png",
  count: 500,
  description: "Live Counselling Sessions",
};
