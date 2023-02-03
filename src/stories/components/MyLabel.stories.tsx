import { ComponentMeta, ComponentStory } from "@storybook/react";
import { MyLabel } from "../../componentes/MyLabel";

export default {
  title: "UI/MyLabel",
  component: MyLabel,
  argTypes: {
    size: { control: "select" },
    color: { control: "select" },
    fontColor: { control: "color" },
  },
} as ComponentMeta<typeof MyLabel>;

const Template: ComponentStory<typeof MyLabel> = (args) => (
  <MyLabel {...args} />
);
export const Basic = Template.bind({});
Basic.args = {
  size: "normal",
  allCaps: false, //true:Capitaliza toda la palabra
};
export const AllCaps = Template.bind({});
AllCaps.args = {
  size: "normal",
  allCaps: true, //true:Capitaliza toda la palabra
};
export const Secondary = Template.bind({});
Secondary.args = {
  size: "normal",
  color: "secondary", //true:Capitaliza toda la palabra
};
export const Tertiary = Template.bind({});
Tertiary.args = {
  size: "normal",
  color: "tertiary", //true:Capitaliza toda la palabra
};
export const CustomFontColor = Template.bind({});
Tertiary.args = {
  size: "h1",
  fontColor: "#FFFAAF", //true:Capitaliza toda la palabra
};
