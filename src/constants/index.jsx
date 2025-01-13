import { Search  } from "lucide-react";
import { Instagram } from "lucide-react";
import { Laptop } from "lucide-react";
import { Figma } from "lucide-react";
import { Mouse } from "lucide-react";


import user1 from "../assets/profile-pictures/user1.jpg";
import user2 from "../assets/profile-pictures/user2.jpg";
import user3 from "../assets/profile-pictures/user3.jpg";
import user4 from "../assets/profile-pictures/user4.jpg";
import user5 from "../assets/profile-pictures/user5.jpg";
import user6 from "../assets/profile-pictures/user6.jpg";




export const navItems = [
  { label: "Home", href: "#" },
  { label: "Services", href: "#" },
  { label: "About Us", href: "#" },
  { label: "Testimonial", href: "#" },
  { label: "Contact Us", href: "#" },
];

export const Testimonials = [
  {
    user: "John Doe",
    company: "E-commerce Business Owner",
    image: user1,
    text: "We saw a 150% increase in organic traffic within three months of working with [Your Company Name]. Their team revamped our website and implemented effective strategies that doubled our conversions. Highly recommended!",
  },
  {
    user: "Jane Smith",
    company: "Marketing Manager",
    image: user2,
    text: "Our website now ranks on the first page of Google for all our target keywords. Their team is knowledgeable, responsive, and truly results-driven. They’ve been a game-changer for our online presence.",
  },
  {
    user: "David Johnson",
    company: "SaaS Company CEO",
    image: user3,
    text: "The team took the time to understand our business goals and tailored their SEO strategy to meet our needs. Their communication and customer service are outstanding. We’re thrilled with the results!",
  },
  {
    user: "Ronee Brown",
    company: "Small Business Owner",
    image: user4,
    text: "I was skeptical about SEO services, but [Your Company Name] proved their worth. They delivered real results at a price that worked for my small business. I’m now getting more leads than ever before!",
  },
  {
    user: "Michael Wilson",
    company: "Travel Agency Director",
    image: user5,
    text: "I am amazed by the level of professionalism and dedication shown by the team. They were able to exceed our expectations and deliver outstanding results.",
  },
  {
    user: "Emily Davis",
    company: "Founder, Tech Startup",
    image: user6,
    text: "We’ve been working with them for over a year, and their strategies have consistently delivered growth. Our revenue has increased significantly thanks to their SEO efforts. They’re the best in the business!",
  },
];

export const services = [
  {
    icon: <Search />,
    text: "Search Engine Optimization (SEO)",
    description:
      "Boost your website’s visibility on search engines with tailored strategies. Our SEO services include keyword research, on-page optimization, link building, and content creation to drive organic traffic and improve your rankings.",
  },
  {
    icon: <Laptop />,
    text: "Web Development",
    description:
      "Create a fast, secure, and user-friendly website that aligns with your business goals. We specialize in custom development, responsive design, and functionality to ensure an exceptional user experience.",
  },
  {
    icon: <Figma />,
    text: " Web Designing",
    description:
      "Bring your brand to life with stunning, modern, and responsive web designs. Our creative team focuses on user-centric designs to captivate your audience and enhance engagement.",
  },
  {
    icon: <Instagram />,
    text: "Social Media Marketing (SMM)",
    description:
      "Expand your online reach and connect with your audience on platforms like Facebook, Instagram, LinkedIn, and more. We create and manage data-driven campaigns to boost brand awareness and engagement.",
  },
  {
    icon: <Mouse />,
    text: "Pay-Per-Click Advertising (PPC)",
    description:
      "Drive instant traffic and conversions with our PPC campaigns. From Google Ads to social media platforms, we design and optimize ad strategies that maximize ROI for your business.",
  },
];

export const about = [
  {
    
    description:
      "Welcome to our website, your trusted partner for all things digital. Whether you're a small business, a growing enterprise, or an individual looking to establish a strong online presence, we are here to help you succeed in the digital landscape, With a passion for innovation and a commitment to excellence, we specialize in delivering top-notch services.We pride ourselves on providing personalized solutions that align with your goals and vision. Whether you're looking to grow your brand, increase sales, or enhance your online reputation, we use cutting-edge tools and proven strategies to deliver measurable results.client satisfaction is at the heart of everything we do. With years of experience and a passion for staying ahead of industry trends, we bring expertise, creativity, and dedication to every project we undertake. Let’s work together to take your business to new heights. Get in touch today to see how we can transform your digital presence!",

  },
  
];
