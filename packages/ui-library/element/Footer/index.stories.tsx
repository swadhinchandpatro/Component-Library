import { Footer, FooterProps } from './index';
import { ComponentStory} from "@storybook/react";

export default {
  title: 'General/Footer',
  component: Footer,
  argTypes: {
    image:{
      description: 'Home Logo'
    },
    className:{
      description: 'If one want to add styles others than default styles',
    },
    homeLink:{
      description: 'Home Link'
    },
    aboutUsLink:{
      description: 'About Us Link'
    },
    whyLMCLink:{
      description: 'Why LauchMyCareer Link'
    },
    partnersLink:{
      description: 'Partners Link'
    },
    faqsLink:{
      description: 'FAQs Link'
    },
    vrLearnLink:{
      description: 'VR Learn Link'
    },
    futureOfWorkLink:{
      description: 'Future of Work Link'
    },
    termsLink:{
      description: 'Terms of Use Link'
    },
    privacyPolicy:{
      description: 'Privacy Policy Link'
    },
    storeData:[
      {description: 'Privacy Policy Link'}
    ],
    socialData:[{
      description: 'Privacy Policy Link'
    }],
    offerings:[{
      description: 'Privacy Policy Link'
    }],
    solutions:[{
      description: 'Privacy Policy Link'
    }]
  },
};

const Template:ComponentStory<typeof Footer>  = ({ ...args }: FooterProps) => {
  return <Footer {...args}/>;
};

export const footer = Template.bind({});
footer.args = {
  image: "@images/logoWithName.png",
  className:"",
  homeLink:"",
  aboutUsLink:"",
  whyLMCLink:"",
  partnersLink:"",
  faqsLink:"",
  vrLearnLink:"",
  futureOfWorkLink:"",
  termsLink:"",
  privacyPolicyLink:"",
  storeData: [{
    image: "@images/appStore.png",
    link: "/"
  },{
    image: "@images/playStore.png",
    link: "/"
  }],
  socialData: [{
    image: "@images/linkedIn.png",
    link: "/"
  },{
    image: "@images/facebook.png",
    link: "/"
  },{
    image: "@images/instagram.png",
    link: "/"
  },{
    image: "@images/twitter.png",
    link: "/"
  },{
    image: "@images/youTube.png",
    link: "/"
  }],
  offerings: [{
    label: "Live Counselling",
    link: "/"
  },{
    label: "Learning Hub",
    link: "/"
  },{
    label: "Career Explorer",
    link: "/"
  },{
    label: "Study Abroad",
    link: "/"
  },{
    label: "Passport",
    link: "/"
  }],
  solutions: [{
    label: "For Parent",
    link: "/"
  },{
    label: "For School",
    link: "/"
  },{
    label: "For Counsellor",
    link: "/"
  }]
};