import Dib from "./assets/Icon.png";
import Dreams from "./assets/Icon (1).png";
import Vault from "./assets/Icon (2).png";
import Grit from "./assets/Icon (3).png";
import application from './assets/application.png'
import hiring from './assets/hiring.png'
import feedback from './assets/feedback.png'
 export const accessData = [
  {
    name: "DIB",
    text: "Nothing beats an emergency quite like an emergency fund. With Ardilla you can get started building that emergency fund",
    subtext: "Learn More",
    image: Dib,
  },
  {
    name: "Dreams",
    text: "Helping you make your dreams a reality is important to us. We have helped so many others. We can help you as well.",
    subtext: "Learn More",
    image: Dreams,
  },
  {
    name: "Vault",
    text: "Lock away excess funds you don't know what to do with. We can help you safeguard it till you are ready. It definitely beats spending it and wondering where all that money went to.",
    subtext: "Learn More",
    image: Vault,
  },
  {
    name: "Grit",
    text: "Become a VIP when you save more money with us. Enjoy better benefits.",
    subtext: "Learn More",
    image: Grit,
  },
];


export const openPostions = [
  {
    position: 'Design',
    desc: "Oh no...Position currently filled, check back later! To make sure you don't miss any update subscribe to our newsletter.",
    status: 'Position Closed',
    bg: 'bg-[url(/positionBlue.png)]'
  },
  {
    position: 'Engineering',
    desc: "Oh no...Position currently filled, check back later! To make sure you don't miss any update subscribe to our newsletter.",
    status: 'Position Closed',
    bg: 'bg-[url(/positionGreen.png)]'

  },
  {
    position: 'Content Writer',
    desc: "Oh no...Position currently filled, check back later! To make sure you don't miss any update subscribe to our newsletter.",
    status: 'Position Closed',
    bg: 'bg-[url(/positionYellow.png)]'

  },
  {
    position: 'Financial Advisor',
    desc: "Oh no...Position currently filled, check back later! To make sure you don't miss any update subscribe to our newsletter.",
    status: 'Position Closed',
    bg: 'bg-[url(/positionPink.png)]'

  }
]

export const hiringProcess = [
  {
    name: 'Application',
    desc: 'Send in your applications and if you are a good fit, we will schedule an interview.',
    image: application
  },
  {
    name: 'Hiring Manager Interview',
    desc: 'The interview comprises a chat or two with the hiring manager and your department team lead about your suitability and skills for the role.',
    image: hiring
  },
  {
    name: 'Feedback',
    desc: 'When the process is complete, we give you feedback on your performance and we let you know if you have been selected.',
    image: feedback

  },
]