import { OfferingCard } from './index';
import { ComponentStory } from "@storybook/react";

export default {
  title: 'Ofering Card/OfferingCard',
  component: OfferingCard,
  argTypes: {
    heading: {
      control: 'text',
      description: 'this is heading ',
    },
    pargraph: {
      control: 'text',
      description: 'this is pargraph ',
    },
    offeringImage: {
      description: 'this is card Background Image ',
    },
    icon: {
      description: 'this is Right icon ',
    },
    className: {
      description: ' if you want any change create own class',
    },
    cardStatus: {
      description: 'if you want card on active sate please select active',
    },
    onClick: {
      description: 'if you want click card then select offeringCardOnclick ',
    },
    anchorLink: {
      description: 'if you want anchore card then select offeringCardAnchoreLink ',
    },
  },
};

const Template: ComponentStory<typeof OfferingCard> = ({ ...args }) => {
  return <OfferingCard {...args} />;
};

export const offeringCardOnclick = Template.bind({});
offeringCardOnclick.args = {
  heading: 'Live Counselling',
  pargraph: `Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium`,
  offeringImage: {
    src: "@images/offeringBg.png",
  },
  icon: {
    src: "@images/aroIcon.png",
  },
  className: "",
  cardStatus: "default",
  onClick: () => {
    console.log("component clicked");
  },

};
offeringCardOnclick.argTypes = {
  cardStatus: {
    options: ["default", "active"],
    control: {
      type: "select"
    },

  },
}

export const offeringCardAnchoreLink = Template.bind({});
offeringCardAnchoreLink.args = {
  heading: 'Live Counselling',
  anchorLink: { href: "#" },
  pargraph: `Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium`,
  offeringImage: {
    src: "@images/offeringBg.png",
  },
  icon: {
    src: "@images/aroIcon.png",
  },
  className: "",
  cardStatus: "default",
};

offeringCardAnchoreLink.argTypes = {
  cardStatus: {
    options: ["default", "active"],
    control: {
      type: "select"
    },
  },
}

