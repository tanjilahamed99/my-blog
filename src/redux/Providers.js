"use client";

import PropTypes from "prop-types";
import { Provider } from "react-redux";
import store from "./store";

const Providers = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};

Providers.propTypes = {
  children: PropTypes.node,
};

export default Providers;
