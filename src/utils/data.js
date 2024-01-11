import customer_img_1 from "../assets/images/customer_img_1.jpg";
import customer_img_2 from "../assets/images/customer_img_2.jpg";
import customer_img_3 from "../assets/images/customer_img_3.jpg";
import customer_img_4 from "../assets/images/customer_img_4.jpg";
import customer_img_5 from "../assets/images/customer_img_5.jpg";
import customer_img_6 from "../assets/images/customer_img_6.jpg";
import portfolio_img_1 from "../assets/images/portfolio_img_1.jpg";
import portfolio_img_2 from "../assets/images/portfolio_img_2.jpg";
import portfolio_img_3 from "../assets/images/portfolio_img_3.jpg";
import {
  FaPaperPlane,
  FaEdit,
  FaRocket,
  FaShoppingCart,
  FaFileAlt,
  FaPhoneAlt,
  FaEnvelopeOpen,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { BiDollarCircle } from "react-icons/bi";
import { ImMagicWand } from "react-icons/im";
import { AiOutlineReload } from "react-icons/ai";

const gradient = "url(#blue-gradient)" ;

export const services = [
  {
    id: 1,
    icon: <FaPaperPlane style={{ fill: gradient }} />,
    title: "Wi-fi",
    text: "Lorem ipsum dolor sit mattis amet consectetur adipiscing",
  },
  {
    id: 2,
    icon: <BiDollarCircle style={{ fill: gradient }} />,
    title: "Complete Kitchen",
    text: "Lorem ipsum dolor sit mattis amet consectetur adipiscing",
  },
  {
    id: 3,
    icon: <FaRocket style={{ fill: gradient }} />,
    title: "Washing machine",
    text: "Lorem ipsum dolor sit mattis amet consectetur adipiscing",
  },
  {
    id: 4,
    icon: <FaEdit style={{ fill: gradient }} />,
    title: "TV",
    text: "Lorem ipsum dolor sit mattis amet consectetur adipiscing",
  },
  {
    id: 5,
    icon: <ImMagicWand style={{ fill: gradient }} />,
    title: "Air Conditioner",
    text: "Lorem ipsum dolor sit mattis amet consectetur adipiscing",
  },
  // {
  //   id: 6,
  //   icon: <FaShoppingCart style={{ fill: gradient }} />,
  //   title: "Media Buying",
  //   text: "Lorem ipsum dolor sit mattis amet consectetur adipiscing",
  // },
];

export const qualities = [
  {
    id: 1,
    icon: <FaFileAlt style={{ fill: gradient }} />,
    title: "Stay on the best!",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod.",
  },
  {
    id: 2,
    icon: <AiOutlineReload style={{ fill: gradient }} />,
    title: "Affordable and Cool",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod.",
  },
];

export const features = [
  {
    id: 1,
    title: "Question 1",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et elit vitae lectus convallis scelerisque. Cras vestibulum blandit lorem, at fringilla nisl sollicitudin ac. Nunc venenatis nec neque sed semper. Mauris viverra, sapien sed fringilla egestas, sem felis condimentum augue, vitae sodales sem metus in ex. Aenean massa velit, sollicitudin quis elementum sit amet, vehicula sed nunc.",
  },
  {
    id: 2,
    title: "Question 2",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et elit vitae lectus convallis scelerisque. Cras vestibulum blandit lorem, at fringilla nisl sollicitudin ac. Nunc venenatis nec neque sed semper. Mauris viverra, sapien sed fringilla egestas, sem felis condimentum augue, vitae sodales sem metus in ex. Aenean massa velit, sollicitudin quis elementum sit amet, vehicula sed nunc.",
  },
  {
    id: 3,
    title: "Question 3",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et elit vitae lectus convallis scelerisque. Cras vestibulum blandit lorem, at fringilla nisl sollicitudin ac. Nunc venenatis nec neque sed semper. Mauris viverra, sapien sed fringilla egestas, sem felis condimentum augue, vitae sodales sem metus in ex. Aenean massa velit, sollicitudin quis elementum sit amet, vehicula sed nunc.",
  },
  {
    id: 4,
    title: "Question 4",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et elit vitae lectus convallis scelerisque. Cras vestibulum blandit lorem, at fringilla nisl sollicitudin ac. Nunc venenatis nec neque sed semper. Mauris viverra, sapien sed fringilla egestas, sem felis condimentum augue, vitae sodales sem metus in ex. Aenean massa velit, sollicitudin quis elementum sit amet, vehicula sed nunc.",
  },
  {
    id: 5,
    title: "Question 5",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et elit vitae lectus convallis scelerisque. Cras vestibulum blandit lorem, at fringilla nisl sollicitudin ac. Nunc venenatis nec neque sed semper. Mauris viverra, sapien sed fringilla egestas, sem felis condimentum augue, vitae sodales sem metus in ex. Aenean massa velit, sollicitudin quis elementum sit amet, vehicula sed nunc.",
  },
  {
    id: 6,
    title: "Question 6",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et elit vitae lectus convallis scelerisque. Cras vestibulum blandit lorem, at fringilla nisl sollicitudin ac. Nunc venenatis nec neque sed semper. Mauris viverra, sapien sed fringilla egestas, sem felis condimentum augue, vitae sodales sem metus in ex. Aenean massa velit, sollicitudin quis elementum sit amet, vehicula sed nunc.",
  },
];

export const portfolio = [
  {
    id: 1,
    title: "Lorem ipsum dolor sit amet, consectetur adipisicing elit",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elits",
    image: portfolio_img_1,
  },
  {
    id: 2,
    title: "Lorem ipsum dolor sit amet, consectetur adipisicing elit",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elits",
    image: portfolio_img_2,
  },
  {
    id: 3,
    title: "Lorem ipsum dolor sit amet, consectetur adipisicing elit",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elits",
    image: portfolio_img_3,
  },
];

export const testimonials = [
  {
    id: 1,
    name: "Marie Jordan",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing.",
    image: customer_img_1,
    rating: 3,
  },
  {
    id: 2,
    name: "Ann Brown",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing.",
    image: customer_img_2,
    rating: 5,
  },
  {
    id: 3,
    name: "Andrew Bill",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing.",
    image: customer_img_3,
    rating: 2,
  },
  {
    id: 4,
    name: "Jason Stawer",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing.",
    image: customer_img_4,
    rating: 4,
  },
  {
    id: 5,
    name: "Lisa Green",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing.",
    image: customer_img_5,
    rating: 2,
  },
  {
    id: 6,
    name: "Anna Doe",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing.",
    image: customer_img_6,
    rating: 4,
  },
];

export const channels = [
  {
    id: 1,
    icon: <FaPhoneAlt style={{ fill: gradient }} />,
    info: "+425 235 712",
    text: "Lorem ipsum dolor sit mattis amet consectetur adipiscing",
  },
  {
    id: 2,
    icon: <FaEnvelopeOpen style={{ fill: gradient }} />,
    info: "solnhub@info.com",
    text: "Lorem ipsum dolor sit mattis amet consectetur adipiscing",
  },
  {
    id: 3,
    icon: <FaMapMarkerAlt style={{ fill: gradient }} />,
    info: "United Kingdom, New Street",
    text: "Lorem ipsum dolor sit mattis amet consectetur adipiscing",
  },
];