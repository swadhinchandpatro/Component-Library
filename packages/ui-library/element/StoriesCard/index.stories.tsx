import { StoriesCard } from "./index";
import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
  title: "Card/Stories_Card",
  component: StoriesCard,

  argTypes: {
    image: {
      src: "Enter image path",
      description: "Enter avatar image from assets/images"
    },
    title: { control: "text", description: "Please enter Reviewer Name" },
    instituteName: { control: "text", description: "Please enter Reviewer's Institute Name" },
    review: { control: "text", description: "Enter Review" },
    className: { control: "text", description: "If we want to provide more styles" },
    width: { control: "number", description: "Value less 100 to control width of card" },
  },
} as ComponentMeta<typeof StoriesCard>;

const Template: ComponentStory<typeof StoriesCard> = (args) => (
  <StoriesCard {...args} />
);

export const Stories_Card = Template.bind({});

Stories_Card.args = {
  image: {
    src: "@images/avatar1.png"
  },
  title: "Suvansh Arora",
  instituteName: "Lotus Valley International School, Noida",
  review: "The animal personality quiz proved to be really insightful; the questions asked during the quiz helped me to explore myself along with definite career path. The careers highlighted matched my interests and personality, and knowing myself through personality animal was really fun to learn.",
  className: "",
  width: "50",
};
