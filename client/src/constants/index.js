import {
  createCampaign,
  dashboard,
  logout,
  payment,
  profile,
  withdraw,
} from "../assets";

export const navlinks = [
  {
    name: "Home",
    imgUrl: dashboard,
    link: "/",
  },
  {
    name: "Create campaign",
    imgUrl: createCampaign,
    link: "/create-campaign",
  },
  {
    name: "Payment",
    imgUrl: payment,
    link: "/",
    disabled: true,
  },
  {
    name: "Withdraw",
    imgUrl: withdraw,
    link: "/",
    disabled: true,
  },
  {
    name: "Profile",
    imgUrl: profile,
    link: "/profile",
  },
  {
    name: "Logout",
    imgUrl: logout,
    link: "/",
  },
];
