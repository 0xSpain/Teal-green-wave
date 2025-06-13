import Placeholder1 from "@/assets/placeholders/Eluminati_01.jpg";
import Placeholder2 from "@/assets/placeholders/Eluminati_02.jpg";
import Placeholder3 from "@/assets/placeholders/Eluminati_03.jpg";
import Placeholder4 from "@/assets/placeholders/Eluminati_04.jpg";
import Placeholder5 from "@/assets/placeholders/Eluminati_05.jpg";
import Placeholder6 from "@/assets/placeholders/Eluminati_06.jpg";
import Placeholder7 from "@/assets/placeholders/Eluminati_07.jpg";
import Placeholder8 from "@/assets/placeholders/Eluminati_08.jpg";
import Placeholder9 from "@/assets/placeholders/Eluminati_09.jpg";
import Placeholder10 from "@/assets/placeholders/Eluminati_10.jpg";
import Placeholder11 from "@/assets/placeholders/Eluminati_11.jpg";
import Placeholder12 from "@/assets/placeholders/Eluminati_12.jpg";
import Placeholder13 from "@/assets/placeholders/Eluminati_13.jpg";
import Placeholder14 from "@/assets/placeholders/Eluminati_14.jpg";
import Placeholder15 from "@/assets/placeholders/Eluminati_15.jpg";
import Placeholder16 from "@/assets/placeholders/Eluminati_16.jpg";
import Placeholder17 from "@/assets/placeholders/Eluminati_17.jpg";



import { COLLECTION_ADDRESS } from "./constants";

export const config: Config = {
  collection_id: COLLECTION_ADDRESS,

  // Removing one or all of these socials will remove them from the page
  socials: {
    twitter: "https://twitter.com",
    discord: "https://discord.com",
    homepage: "#",
  },

  defaultCollection: {
    name: "Eluminati",
    description: "Discover the mysteries of the Freemasons through stunning visual renderings - from secret handshakes to sacred symbols, the possibilities are endless.",
    image: Placeholder1,
  },

  ourStory: {
    title: "Eluminati",
    subTitle: "Proin lorem",
    description:
     "Discover the mysteries of the Freemasons through stunning visual renderings - from secret handshakes to sacred symbols, the possibilities are endless.",
    discordLink: "https://discord.com",
    images: [Placeholder1, Placeholder2, Placeholder3, Placeholder4, Placeholder5, Placeholder6, Placeholder7, Placeholder8, Placeholder9, Placeholder10, Placeholder11, Placeholder12, Placeholder13, Placeholder14, Placeholder15, Placeholder16, Placeholder17],
  },

  ourTeam: {
    title: "Eluminati",
    members: [
      {
        name: "#Eluminati_1",
        role: "Aliquip Esse",
        img: Placeholder1,
        socials: {
          twitter: "https://twitter.com",
        },
      },
 {
        name: "#Eluminati_2",
        role: "Aliquip Esse",
        img: Placeholder2,
        socials: {
          twitter: "https://twitter.com",
        },
      },
       {
        name: "#Eluminati_3",
        role: "Aliquip Esse",
        img: Placeholder3,
        socials: {
          twitter: "https://twitter.com",
        },
      },
       {
        name: "#Eluminati_4",
        role: "Aliquip Esse",
        img: Placeholder4,
        socials: {
          twitter: "https://twitter.com",
        },
      },
       {
        name: "#Eluminati_5",
        role: "Aliquip Esse",
        img: Placeholder5,
        socials: {
          twitter: "https://twitter.com",
        },
      },
       {
        name: "#Eluminati_6",
        role: "Aliquip Esse",
        img: Placeholder6,
        socials: {
          twitter: "https://twitter.com",
        },
      },
       {
        name: "#Eluminati_7",
        role: "Aliquip Esse",
        img: Placeholder7,
        socials: {
          twitter: "https://twitter.com",
        },
      },
       {
        name: "#Eluminati_8",
        role: "Aliquip Esse",
        img: Placeholder8,
        socials: {
          twitter: "https://twitter.com",
        },
      },
       {
        name: "#Eluminati_9",
        role: "Aliquip Esse",
        img: Placeholder9,
        socials: {
          twitter: "https://twitter.com",
        },
      },
       {
        name: "#Eluminati_10",
        role: "Aliquip Esse",
        img: Placeholder10,
        socials: {
          twitter: "https://twitter.com",
        },
      },
       {
        name: "#Eluminati_11",
        role: "Aliquip Esse",
        img: Placeholder11,
        socials: {
          twitter: "https://twitter.com",
        },
      },
       {
        name: "#Eluminati_12",
        role: "Aliquip Esse",
        img: Placeholder12,
        socials: {
          twitter: "https://twitter.com",
        },
      },
       {
        name: "#Eluminati_13",
        role: "Aliquip Esse",
        img: Placeholder13,
        socials: {
          twitter: "https://twitter.com",
        },
      },
       {
        name: "#Eluminati_14",
        role: "Aliquip Esse",
        img: Placeholder14,
        socials: {
          twitter: "https://twitter.com",
        },
      },
       {
        name: "#Eluminati_15",
        role: "Aliquip Esse",
        img: Placeholder15,
        socials: {
          twitter: "https://twitter.com",
        },
      },
       {
        name: "#Eluminati_16",
        role: "Aliquip Esse",
        img: Placeholder16,
        socials: {
          twitter: "https://twitter.com",
        },
      },
       {
        name: "#Eluminati_17",
        role: "Aliquip Esse",
        img: Placeholder17,
        socials: {
          twitter: "https://twitter.com",
        },
      },


      
    ],
  },

  faqs: {
    title: "F.A.Q.",

    questions: [
      {
        title: "Eluminati",
        description:
      "Discover the mysteries of the Freemasons through stunning visual renderings - from secret handshakes to sacred symbols, the possibilities are endless.",
      },
    
    ],
  },

  nftBanner: [Placeholder1, Placeholder2, Placeholder3, Placeholder4, Placeholder5, Placeholder6, Placeholder7, Placeholder8, Placeholder9, Placeholder10, Placeholder11, Placeholder12, Placeholder13, Placeholder14, Placeholder15, Placeholder16, Placeholder17],
};

export interface Config {
  collection_id: string;

  socials?: {
    twitter?: string;
    discord?: string;
    homepage?: string;
  };

  defaultCollection?: {
    name: string;
    description: string;
    image: string;
  };

  ourTeam?: {
    title: string;
    members: Array<ConfigTeamMember>;
  };

  ourStory?: {
    title: string;
    subTitle: string;
    description: string;
    discordLink: string;
    images?: Array<string>;
  };

  faqs?: {
    title: string;
    questions: Array<{
      title: string;
      description: string;
    }>;
  };

  nftBanner?: Array<string>;
}

export interface ConfigTeamMember {
  name: string;
  role: string;
  img: string;
  socials?: {
    twitter?: string;
    discord?: string;
  };
}
