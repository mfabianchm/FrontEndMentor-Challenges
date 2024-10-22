import paper from "./assets/images/icon-paper.svg";
import rock from "./assets/images/icon-rock.svg";
import scissors from "./assets/images/icon-scissors.svg";

const data = [
  {
    icon: paper,
    type: "paper",
    gradient01: "--Paper-Gradient01",
    gradient02: "--Paper-Gradient02",
  },
  {
    icon: rock,
    type: "rock",
    gradient01: "--Rock-Gradient01",
    gradient02: "--Rock-Gradient02",
  },
  {
    icon: scissors,
    type: "scissors",
    gradient01: "--Scissors-Gradient01",
    gradient02: "--Scissors-Gradient02",
  },
];

export function getIcon(type) {
  const result = data.find((icon) => icon.type === type);
  return result;
}

export function getRandomIcon(userIcon) {
  if (userIcon == null) {
    return;
  }

  const newArray = data.filter((icon) => icon.type !== userIcon);

  const randomIndex = Math.floor(Math.random() * newArray.length);
  const randomIcon = newArray[randomIndex];
  return randomIcon;
}

export default data;
