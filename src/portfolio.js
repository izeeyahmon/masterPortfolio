/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Izeeyahmon.eth",
  description: "Startup web3 dev for your services and enthusiast",
  og: {
    title: "Izeeyahmon",
    type: "website",
    url: "Izeeyahmon.eth",
  },
};

//Home Page
const greeting = {
  title: "Izeeyahmon.eth",
  logo_name: "izeeyahmon",
  nickname: "Soyboy",
  subTitle:
    "Startup Learnoor Junior Blockchain developer at your service, Will convert food and coffee to code",
};

const socialMediaLinks = [
  {
    name: "Github",
    link: "https://github.com/izeeyahmon",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "E-mail",
    link: "mailto:orange_morning@protonmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  {
    name: "Twitter",
    link: "https://twitter.com/izeeyahmon",
    fontAwesomeIcon: "fa-twitter", // Reference https://fontawesome.com/icons/twitter?style=brands
    backgroundColor: "#1DA1F2", // Reference https://simpleicons.org/?q=twitter
  },
];

const skills = {
  data: [
    {
      title: "Blockchain Development",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Coding smart contracts depending clients use-case",
        "⚡ Setting up nodes and waitching mempool",
        "⚡ Coding discord bots",
      ],
      softwareSkills: [
        {
          skillName: "EVM",
          fontAwesomeClassname: "logos-ethereum",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Web3 Dapps",
          fontAwesomeClassname: "logos-react",
          style: {
            backgroundColor: "white",
            color: "#D00000",
          },
        },
        {
          skillName: "Rust",
          fontAwesomeClassname: "logos-rust",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "ion-logo-python",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
        {
          skillName: "Discord",
          fontAwesomeClassname: "ion-logo-discord",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
      ],
    },
    {
      title: "Cloud Infra-Architecture",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Experience working on  AWS and GCP",
        "⚡ Hosting and maintaining websites on virtual machine instances",
        "⚡ Setting up networks and Firewalls with High availability",
      ],
      softwareSkills: [
        {
          skillName: "GCP",
          fontAwesomeClassname: "simple-icons:googlecloud",
          style: {
            color: "#4285F4",
          },
        },
        {
          skillName: "AWS",
          fontAwesomeClassname: "simple-icons:amazonaws",
          style: {
            color: "#FF9900",
          },
        },
      ],
    },
  ],
};

// Experience Page

// Projects Page

// Contact Page

export { settings, seo, greeting, socialMediaLinks, skills };
