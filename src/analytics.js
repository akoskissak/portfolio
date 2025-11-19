import ReactGA from "react-ga4";

export const initAnalytics = () => {
  ReactGA.initialize("G-N9EKF60PR8");
  ReactGA.send("pageview");
};
