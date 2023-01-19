export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

export const globalTypes = {
  textDirection: {
     name: 'Text Direction',
     description: 'Direction of the text',
     defaultValue: 'rtl',
     toolbar: {
       icon: 'arrowrightalt',
       items: [
         { value: 'ltr', icon: 'arrowleftalt', title: 'left to right' },
         { value: 'rtl', icon: 'arrowrightalt', title: 'right to left' },
       ],
     },
   },
 };
 
