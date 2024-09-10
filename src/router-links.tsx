export const routerLinks = (name: string, type?: string) => {
  const array: {
    [selector: string]: string;
  } = {
    Home: "/home",
  };

  const apis: {
    [selector: string]: string;
  } = {
    Home: "/home",
  }; // 💬 generate api to here

  switch (type) {
    case "api":
      return apis[name];
    default:
      return array[name];
  }
};
