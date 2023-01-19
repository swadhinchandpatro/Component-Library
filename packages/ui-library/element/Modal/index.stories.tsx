import { Modal, ModalProps } from './index';
import { ComponentStory } from "@storybook/react";
import { getDirection } from '../../config';
import { ReactNode, useState } from "react";


export default {
  title: 'General/Modal',
  component: Modal,
  argTypes: {
    header: {
      description: 'Custom header component to be used as modal header. (Not Recommended)',
    },
    headerOption: {
      description: "Header options (doesn't work if header prop is used).Use header prop if custom header is needed. (Recommended)"
    },
    footer: {
      control: "text",
      description: 'Custom footer component (Not Recommended)',
    },
    footerOption: {
      description: "Footeroptions (doesn't work if footer prop is used).Use footer prop if custom footer is needed.(Recommended)"
    },
    backdropClose: {
      control: { type: "boolean" },
      description: "Callback for Modal close event on backdrop click"
    },
    backdropCloseColor: {
      control: 'color',
      description: "Custom color for background"
    },
    dimension: {
      options: ["small", "medium", "large"],
      control: {
        type: "radio"
      }
    },
    className: {
      description: 'If we want to create new variant',
    },
    onClose: {
      description: 'onClose callback to be called on Modal close. Note : onClose option will work only when we dont use any header and headerOptions',
    },
    fullScreen:{
      control:'boolean',
      description:"enabled full screen will look like page view"
    },
  },
};



const Template: ComponentStory<typeof Modal> = ({ ...args }, { globals: { textDirection } }) => {
  const [isActive, setIsActive] = useState(true);
  const openModal = () => {
    setIsActive(current => !current);
  }
  const closeModal = () => {
    setIsActive(current => !current);
  }
  return (
    <>
      <button onClick={openModal}> Open </button>
      {isActive && <Modal {...args} dir={getDirection(textDirection)} onClose={closeModal} />}
    </>
  )
}

const Component = (props: any) => <>
  {props.children}
</>;



export const modal = Template.bind({});
modal.args = {
  header: null,
  headerOption: {
    text: "Modal - All questions must be answered, unless marked",
    icon: {
      src: "@images/cross.png",
      alignment:"right",
      onClick: () => { console.log("icon clicked")},
    },
    isFixed: "true",
  },
  footer: null,
  footerOption: {
    text: "Modal - All questions must be answered, unless marked",
  },
  fullScreen:false,
  dimension: "small",
  className: "",
  backdropClose: "true",
  backdropCloseColor: "rgba(47, 47, 47, .8)",
  children: 
  <Component>
    Hello I am body
  </Component>,
  onClose: () => { console.log("icon clicked") }
};
