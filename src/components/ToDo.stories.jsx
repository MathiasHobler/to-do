import React from "react";

import { ToDo } from "./ToDo";

export default {
  title: "Components/ToDo",
  component: ToDo,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
};

const Template = (args) => <ToDo {...args} />;

export const Uncomplete = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Uncomplete.args = {
  primary: true,
  label: "ToDo",
};

export const Complete = Template.bind({});
Complete.args = {
  label: "ToDO",
};
