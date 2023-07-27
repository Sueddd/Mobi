import CustomPagenation from "./pagenation";

export default {
  title: "Components/page",
  component: CustomPagenation,
  argTypes: {
    variant: {
      options: ["primary", "secondary", "error"],
      control: { type: "radio" },
    },
    shape: {
      options: ["moreBtn", "submitBtn", "checkBtn", "round"],
      control: { type: "radio" },
    },
    size: {
      options: ["small", "medium", "large", "full"],
      control: { type: "select" },
    },
    num: {
      options: ["ten", "twowelve", "third"],
      control: { type: "radio" },
    },
  },
};

export const Primary = {
  args: {
    variant: "primary",
    shape: "moreBtn",
    size: "small",
    num: "ten",
    children: "Button",
  },
};
