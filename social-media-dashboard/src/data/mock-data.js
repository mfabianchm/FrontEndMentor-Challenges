import { v4 as uuidv4 } from "uuid";

import facebookLogo from "../assets/icon-facebook.svg";
import twitterLogo from "../assets/icon-twitter.svg";
import instagramLogo from "../assets/icon-instagram.svg";
import youtubeLogo from "../assets/icon-youtube.svg";

import greenArrow from "../assets/icon-up.svg";
import redArrow from "../assets/icon-down.svg";

const usersInfo = [
  {
    id: uuidv4(),
    image: facebookLogo,
    username: "@nathanf",
    followers: "1987",
    newFollowers: "12",
    followersColor: "--Lime-Green",
    arrowIcon: greenArrow,
    topGradient: "--Facebook",
    social: "Facebook",
  },
  {
    id: uuidv4(),
    image: twitterLogo,
    username: "@realnathanf",
    followers: "1044",
    newFollowers: "99",
    followersColor: "--Lime-Green",
    arrowIcon: greenArrow,
    topGradient: "--Twitter",
    social: "Twitter",
  },
  {
    id: uuidv4(),
    image: instagramLogo,
    username: "@nathanf",
    followers: "11k",
    newFollowers: "1099",
    followersColor: "--Lime-Green",
    arrowIcon: greenArrow,
    topGradient: "--Twitter",
    social: "Instagram",
  },
  {
    id: uuidv4(),
    image: youtubeLogo,
    username: "@nathanf",
    followers: "1987",
    newFollowers: "12",
    followersColor: "--Bright-Red",
    arrowIcon: redArrow,
    topGradient: "--YouTube",
    social: "Youtube",
  },
];

const overviewUserInfo = [
  {
    id: uuidv4(),
    overviewType: "Page views",
    overviewNumber: "87",
    overviewImage: facebookLogo,
    overviewPercentage: "3",
    overviewArrowIcon: greenArrow,
    overviewPercentageColor: "--Lime-Green",
  },
  {
    id: uuidv4(),
    overviewType: "Likes",
    overviewNumber: "52",
    overviewImage: facebookLogo,
    overviewPercentage: "2",
    overviewArrowIcon: redArrow,
    overviewPercentageColor: "--Bright-Red",
  },
  {
    id: uuidv4(),
    overviewType: "Likes",
    overviewNumber: "5462",
    overviewImage: instagramLogo,
    overviewPercentage: "2257",
    overviewArrowIcon: greenArrow,
    overviewPercentageColor: "--Lime-Green",
  },
  {
    id: uuidv4(),
    overviewType: "Profile Views",
    overviewNumber: "52k",
    overviewImage: instagramLogo,
    overviewPercentage: "1375",
    overviewArrowIcon: greenArrow,
    overviewPercentageColor: "--Lime-Green",
  },
  {
    id: uuidv4(),
    overviewType: "Retweets",
    overviewNumber: "117",
    overviewImage: twitterLogo,
    overviewPercentage: "303",
    overviewArrowIcon: greenArrow,
    overviewPercentageColor: "--Lime-Green",
  },
  {
    id: uuidv4(),
    overviewType: "Likes",
    overviewNumber: "507",
    overviewImage: twitterLogo,
    overviewPercentage: "553",
    overviewArrowIcon: greenArrow,
    overviewPercentageColor: "--Lime-Green",
  },
  {
    id: uuidv4(),
    overviewType: "Likes",
    overviewNumber: "107",
    overviewImage: youtubeLogo,
    overviewPercentage: "19",
    overviewArrowIcon: redArrow,
    overviewPercentageColor: "--Bright-Red",
  },
  {
    id: uuidv4(),
    overviewType: "Total Views",
    overviewNumber: "1407",
    overviewImage: youtubeLogo,
    overviewPercentage: "12",
    overviewArrowIcon: redArrow,
    overviewPercentageColor: "--Bright-Red",
  },
];

export { usersInfo, overviewUserInfo };
