import ADMAS from "/public/image/ADMAS.jpeg";
import falcon from "/public/image/falcon.png";
import realEstate from "/public/image/real-estate.jpg";
import furniture from "/public/image/furniture shop.png";
import Growpro from "/public/image/Growpro.png";

export const projectsData = [
  {
    id: 1,
    name: "Hotel Room Booking Management System",
    description:
      "Me and my team built a Room Booking and  Management System. I design the UI/UX for the website and took part in creating both front and back-end of the project. this was created using React  ",
    tools: [
      "React",
      "Express",
      "MongoDB",
      "Node.js",
      "JWT",
      "bcrypt",
      "Babel",
      "Socket.io",
    ],
    role: "Backend Developer",
    code: "",
    demo: "https://github.com/sasunnethmina/Hotel-Room-Booking-Management-System",
    image: falcon,
  },
  {
    id: 2,
    name: "Furniture nest- Furniture Shop Management System",
    description:
      "me and my team devlop a Desktop application for furniture shops: can create stunning 2D/3Drooms, manage staff details, manage orders, and track inventoryseamlessly.",
    tools: ["Java", "Java Swing", "OpenGL", "LWJGL"],
    role: "Full Stack Developer, ui devoper",
    code: "",
    demo: "https://github.com/sasunnethmina/FurnitureNest-Furniture-Shop-Management-System/tree/main",
    image: furniture,
  },
  {
    id: 3,
    name: "Grow pro - IOT based indoor greenhouse management application",
    description:
      "as a project i devop a Mobile application to monitor and control lighting, water and CO2gases within the indoor greenhouse remotely.",
    tools: ["Arduino IDE", "Expo React Native", "Firebase", "JWT"],
    code: "",
    role: "Full Stack Developer",
    demo: "https://github.com/sasunnethmina/Grow-Pro-1",
    image: Growpro,
  },
  {
    id: 4,
    name: "ADMAS",
    description:
      "The 'Automatic Drowsiness Monitoring and Alert System' is designed to improve road safety by detecting early signs of driver drowsiness,ADMAS seamlessly integrates into the vehicle environment, using machine learning algorithms and image processing techniques to monitor key indicators of drowsiness.This proactive system provides real-time monitoring while safeguarding driver privacy and comfort by processing data locally and employing stringent data security measures. thus reducing the risk of accidents caused by fatigue.",
    tools: [
      "Python",
      "Java",
      "C++ (Arduino)",
      "OpenCV (cv2)",
      "TensorFlow",
      " Keras",
      "Dlib's Facial Landmark Detection",
      "CLAHE (Contrast Limited Adaptive Histogram Equalization)",
    ],
    code: "",
    demo: "https://drive.google.com/file/d/13j1BOPe4cuw8I-48nOlGUKrmlz69bvcC/view",
    image: ADMAS,
    role: "Full Stack Developer",
  },
];

// Do not remove any property.
// Leave it blank instead as shown below

// {
//     id: 1,
//     name: '',
//     description: "",
//     tools: [],
//     role: '',
//     code: '',
//     demo: '',
//     image: crefin,
// },
