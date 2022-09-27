import { ComponentStory, ComponentMeta } from "@storybook/react";
import { useEffect } from "react";
import App from "./App";

export default {
  title: "Features/App",
  component: App,
} as ComponentMeta<typeof App>;

const Template: ComponentStory<typeof App> = () => <App/>;

export const AppDefault = Template.bind({});

AppDefault.parameters = {
  layout: "fullscreen",
};
