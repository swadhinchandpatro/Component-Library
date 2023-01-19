import { PersonalityCard } from "./index";
import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
  title: "Card/Personality_Card",
  component: PersonalityCard,
  argTypes: {
    variant: {
      options: ["primary", "secondary"],
      control: { type: "radio" },
    },
    isActive: { options: ["Yes", "No"], control: "radio" },
    image: {
      control: { type: "select" },
      options: ["ENTJ", "ESFJ", "ESFP", "ISFJ", "ISTP"],
    },
    heading: { control: "text" },
    className: { control: "text" },
  },
} as ComponentMeta<typeof PersonalityCard>;

const Template: ComponentStory<typeof PersonalityCard> = (args) => (
  <PersonalityCard {...args} />
);

export const Personality_active = Template.bind({});

Personality_active.args = {
  variant: "primary",
  isActive: "Yes",
  image: "@images/ENTJ.png",
  heading: "THE BIRD SQUAD",
  className: "",
};

export const Personality_Inactive = Template.bind({});

Personality_Inactive.args = {
  variant: "primary",
  showImage_Header: "No",
  isActive: "No",
  className: "",
  heading: "THE BIRD SQUAD",
};
