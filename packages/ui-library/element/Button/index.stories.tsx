import React from 'react';
import { Button } from '.';
import { ComponentStory } from "@storybook/react";

export default {
  title: 'General/Buttons',
  component: Button,
  argTypes: {
    variant: {
      options: ["primary", "secondary", "outline_primary", "light", "white", "outline_secondary", "custom_btn"],
      control: {
        type: "select"
      },
      description: "Buttons categories."
    },
    label: {
      control: "text",
      description: "Button text name"
    },
    buttonSize: {
      options: ['default', 'medium', 'large'],
      description: "Button size ",
      control: {
        type: "select",
      }
    },
    disable: {
      control: "boolean",
      description: "Button disable",
    },
    anchorLink: {
      description: "Anchor Link ",
    },
    color: {
      description: "color"
    },
    background: {
      description: "background"
    },
    icon: {
      description: "Button Icon"
    },
    className: {
      control: "text",
      description: "Class Name"
    }
  },
};

const Template: ComponentStory<typeof Button> = ({ ...args }) => {
  return <Button {...args} />;
};

export const primary = Template.bind({});
primary.args = {
  variant: "primary",
  className: " ",
  label: 'Get Started',
  buttonStyle: "fill",
  buttonSize: 'default',
  disable: false,
  onClick: () => {
    console.log("component clicked")
  },
  anchorLink: {},
};
primary.argTypes = {
  buttonStyle: {
    options: ["fill", "outline"],
    control: {
      type: "select"
    },
    description: "Buttons categorys."
  },
}

export const secondary = Template.bind({});
secondary.args = {
  variant: "secondary",
  disable: false,
  className: " ",
  label: 'Explore Premium',
  buttonSize: 'default',
  icon: {
    src: "@images/headerButtonIcon.png",
    alignment: "left"
  },
  onClick: () => {
    console.log("component clicked")
  },
  anchorLink: {},
};
secondary.argTypes = {
  icon: {
    description: "Button Icon."
  },
}

export const outlinePrimary = Template.bind({});
outlinePrimary.args = {
  variant: "outline_primary",
  disable: false,
  buttonSize: 'default',
  className: " ",
  label: 'Login/SignUp',
  onClick: () => {
    console.log("component clicked")
  },
  anchorLink: {},
};

export const light = Template.bind({});
light.args = {
  variant: "light",
  disable: false,
  buttonSize: 'default',
  className: " ",
  label: 'Learn more',
  onClick: () => {
    console.log("component clicked")
  },
  anchorLink: {},
};

export const white = Template.bind({});
white.args = {
  variant: "white",
  disable: false,
  buttonSize: 'default',
  className: " ",
  label: 'Continue',
  onClick: () => {
    console.log("component clicked")
  },
  anchorLink: {},
};

export const outlineSecondary = Template.bind({});
outlineSecondary.args = {
  variant: "outline_secondary",
  disable: false,
  buttonSize: 'default',
  className: " ",
  label: 'Learn More',
  onClick: () => {
    console.log("component clicked")
  },
  anchorLink: {},
};

export const customBtn = Template.bind({});
customBtn.args = {
  variant: "custom_btn",
  disable: false,
  icon: {
    src: "@images/headerButtonIcon.png",
    alignment: "left"
  },
  buttonSize: 'default',
  className: " ",
  label: 'Get Start ',
  buttonStyle: "fill",
  onClick: () => {
    console.log("component clicked")
  },
  anchorLink: {},
};
customBtn.argTypes = {
  buttonStyle: {
    options: ['fill', 'outline'],
    description: "Button Style ",
    control: {
      type: "select",
    }
  },
  color: { control: 'color' },
  background: { control: 'color' },
}
export const anchorButton = Template.bind({});
anchorButton.args = {
  variant: "custom_btn",
  disable: false,
  icon: {
    src: "@images/headerButtonIcon.png",
    alignment: "left"
  },
  anchorLink: { href: "#" },
  buttonSize: 'default',
  className: " ",
  label: 'Get Start ',
  buttonStyle: "fill",
};
anchorButton.argTypes = {
  color: { control: 'color' },
  background: { control: 'color' },
  buttonStyle: {
    options: ['fill', 'outline'],
    description: "Button Style ",
    control: {
      type: "select",
    }
  },
}

export const buttonWithoutClick = Template.bind({});
buttonWithoutClick.args = {
  variant: "buttonWithoutClick",
  disable: false,
  icon: {
    src: "@images/headerButtonIcon.png",
    alignment: "left"
  },
  buttonSize: 'default',
  className: " ",
  label: 'Get Start ',
  buttonStyle: "fill",
};
buttonWithoutClick.argTypes = {
  color: { control: 'color' },
  background: { control: 'color' },
  buttonStyle: {
    options: ['fill', 'outline'],
    description: "Button Style ",
    control: {
      type: "select",
    }
  },
}

