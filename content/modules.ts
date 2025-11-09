export type ModuleSection = {
  id: string;
  title: string;
  description: string;
  takeaway: string[];
};

export type LearningModule = {
  id: string;
  title: string;
  subtitle: string;
  status: "current" | "upcoming";
  gradient: string;
  sections: ModuleSection[];
  sensoryHook: string;
};

export const modules: LearningModule[] = [
  {
    id: "module-1",
    title: "Machine Learning Ki Pehli Jhalak",
    subtitle:
      "apne doston ko samjha sakne layak soojh-boojh — bina bhari maths ke",
    status: "current",
    gradient: "from-aurora via-saffron to-pink-500",
    sensoryHook:
      "Socho tum ek artist ho aur data tumhara canvas. Linear line aur logistic curve se future strokes predict karna seekho.",
    sections: [
      {
        id: "section-1",
        title: "Machine Learning ka seedha matlab",
        description:
          "Machine = algorithm + data se seekhne wali soch. Jaise bachpan me tum baar-baar practice karke cycle chalana seekhte ho, waise hi algorithm examples dekhkar pattern samajhta hai.",
        takeaway: [
          "Machine learning ko 'data se seekhne ka tareeka' socho.",
          "Algorithm hamesha doosre examples se better hota rehta hai.",
          "Hum machine ko feedback dete rehte hain taaki woh apni galti sudhaare."
        ]
      },
      {
        id: "section-2",
        title: "Linear Regression: seedhi line wali friendly future",
        description:
          "Linear regression ek straight line banati hai jo points ke beech se best guzar sake. Socho tum bazaar me aam kharidne ja rahe ho aur price kis din badhega, tum line se guess kar rahe ho.",
        takeaway: [
          "Line ka slope batata hai ki x badhne par y kitna badlega.",
          "Distance minor karna goal hai: line aur data points ke beech ka fark kam se kam hona chahiye.",
          "Prediction = line par naya point daalna aur uski height (y value) dekhna."
        ]
      },
      {
        id: "section-3",
        title: "Logistic Regression: haan-ya-na ka smart switch",
        description:
          "Jab output sirf do ho sakte hain — jaise email spam hai ya nahi — logistic regression ek smooth S-shape curve ke through decide karta hai. Line nahi, par ek curve jo 0 aur 1 ke beech smoothly move karti hai.",
        takeaway: [
          "Curve beech me fast switch karta hai jab decision mushkil ho.",
          "Probability deta hai: 0.0 se 1.0 tak kitna chance hai kisi class ka.",
          "Threshold set karke hum final haan/na decide karte hain (jaise 0.5 se upar matlab haan)."
        ]
      }
    ]
  },
  {
    id: "module-2",
    title: "Data Samajhne Ki Kala",
    subtitle: "visual intuition se dataset ko decode karna",
    status: "upcoming",
    gradient: "from-slate-300 via-slate-400 to-slate-500",
    sensoryHook:
      "Box plots, histograms aur feature stories ki duniya mein agla kadam.",
    sections: []
  },
  {
    id: "module-3",
    title: "Training ka Rhythm",
    subtitle: "loss functions aur optimization ka music theory",
    status: "upcoming",
    gradient: "from-slate-300 via-slate-400 to-slate-500",
    sensoryHook:
      "Gradient descent ko dance routine ki tarah step-by-step mehsoos karo.",
    sections: []
  }
];
