// comentar si deseas que el microfrontend funcione también desde el host del microfrontend
if (process.env.NODE_ENV === "development") {
  import("./bootstrap");
}

export default true;
