import { getDocs, collection, query } from "firebase/firestore";

export const products43 = [
  {
    id: 495,
    category: "Accessories",
    title: "Baby Bjorn Baby Carrier Mini 3D Mesh - Anthracite/Leopard",
    price: 29,
    imgSrc: "/assets/images/home/demo21/product-1.jpg",
    alt: "Product 1",
    filterCategory: "Women",
  },
  {
    id: 496,
    category: "Clothing",
    title: "Liverpool Recycled Rain Hat Pink Cherry",
    price: 29,
    imgSrc: "/assets/images/home/demo21/product-2.jpg",
    alt: "Product 2",
    filterCategory: "Women",
  },
  {
    id: 497,
    category: "Makeup",
    title: "Mustela Gentle Cleansing Gel 750ml",
    price: 29,
    imgSrc: "/assets/images/home/demo21/product-3.jpg",
    alt: "Product 3",
    filterCategory: "Women",
  },
  {
    id: 498,
    category: "Strollers",
    title: "Joolz AER Complete - Delightful Grey",
    price: 29,
    imgSrc: "/assets/images/home/demo21/product-4.jpg",
    alt: "Product 4",
    filterCategory: "Women",
  },
  {
    id: 499,
    category: "Toys",
    title: "Jellycat - Nibs Bunny",
    price: 29,
    imgSrc: "/assets/images/home/demo21/product-5.jpg",
    alt: "Product 5",
    filterCategory: "Women",
  },
  {
    id: 500,
    category: "Clothing",
    title: "Liverpool Recycled Rain Hat Pink Cherry",
    price: 29,
    imgSrc: "/assets/images/home/demo21/product-2.jpg",
    alt: "Product 2",
    filterCategory: "One Sale",
  },
  {
    id: 501,
    category: "Strollers",
    title: "Joolz AER Complete - Delightful Grey",
    price: 29,
    imgSrc: "/assets/images/home/demo21/product-4.jpg",
    alt: "Product 4",
    filterCategory: "One Sale",
  },
  {
    id: 502,
    category: "Accessories",
    title: "Baby Bjorn Baby Carrier Mini 3D Mesh - Anthracite/Leopard",
    price: 29,
    imgSrc: "/assets/images/home/demo21/product-1.jpg",
    alt: "Product 1",
    filterCategory: "One Sale",
  },
  {
    id: 503,
    category: "Toys",
    title: "Jellycat - Nibs Bunny",
    price: 29,
    imgSrc: "/assets/images/home/demo21/product-5.jpg",
    alt: "Product 5",
    filterCategory: "One Sale",
  },
  {
    id: 504,
    category: "Makeup",
    title: "Mustela Gentle Cleansing Gel 750ml",
    price: 29,
    imgSrc: "/assets/images/home/demo21/product-3.jpg",
    alt: "Product 3",
    filterCategory: "One Sale",
  },
  {
    id: 505,
    category: "Toys",
    title: "Jellycat - Nibs Bunny",
    price: 29,
    imgSrc: "/assets/images/home/demo21/product-5.jpg",
    alt: "Product 5",
    filterCategory: "New",
  },
  {
    id: 506,
    category: "Clothing",
    title: "Liverpool Recycled Rain Hat Pink Cherry",
    price: 29,
    imgSrc: "/assets/images/home/demo21/product-2.jpg",
    alt: "Product 2",
    filterCategory: "New",
  },
  {
    id: 507,
    category: "Accessories",
    title: "Baby Bjorn Baby Carrier Mini 3D Mesh - Anthracite/Leopard",
    price: 29,
    imgSrc: "/assets/images/home/demo21/product-1.jpg",
    alt: "Product 1",
    filterCategory: "New",
  },
  {
    id: 508,
    category: "Strollers",
    title: "Joolz AER Complete - Delightful Grey",
    price: 29,
    imgSrc: "/assets/images/home/demo21/product-4.jpg",
    alt: "Product 4",
    filterCategory: "New",
  },
  {
    id: 509,
    category: "Makeup",
    title: "Mustela Gentle Cleansing Gel 750ml",
    price: 29,
    imgSrc: "/assets/images/home/demo21/product-3.jpg",
    alt: "Product 3",
    filterCategory: "New",
  },
  {
    id: 510,
    category: "Accessories",
    title: "Baby Bjorn Baby Carrier Mini 3D Mesh - Anthracite/Leopard",
    price: 29,
    imgSrc: "/assets/images/home/demo21/product-1.jpg",
    alt: "Product 1",
    filterCategory: "Women",
  },
  {
    id: 511,
    category: "Clothing",
    title: "Liverpool Recycled Rain Hat Pink Cherry",
    price: 29,
    imgSrc: "/assets/images/home/demo21/product-2.jpg",
    alt: "Product 2",
    filterCategory: "Women",
  },
  {
    id: 512,
    category: "Makeup",
    title: "Mustela Gentle Cleansing Gel 750ml",
    price: 29,
    imgSrc: "/assets/images/home/demo21/product-3.jpg",
    alt: "Product 3",
    filterCategory: "Women",
  },
  {
    id: 513,
    category: "Strollers",
    title: "Joolz AER Complete - Delightful Grey",
    price: 29,
    imgSrc: "/assets/images/home/demo21/product-4.jpg",
    alt: "Product 4",
    filterCategory: "Women",
  },
  {
    id: 514,
    category: "Toys",
    title: "Jellycat - Nibs Bunny",
    price: 29,
    imgSrc: "/assets/images/home/demo21/product-5.jpg",
    alt: "Product 5",
    filterCategory: "Women",
  },
  {
    id: 515,
    category: "Clothing",
    title: "Liverpool Recycled Rain Hat Pink Cherry",
    price: 29,
    imgSrc: "/assets/images/home/demo21/product-2.jpg",
    alt: "Product 2",
    filterCategory: "One Sale",
  },
  {
    id: 516,
    category: "Strollers",
    title: "Joolz AER Complete - Delightful Grey",
    price: 29,
    imgSrc: "/assets/images/home/demo21/product-4.jpg",
    alt: "Product 4",
    filterCategory: "One Sale",
  },
  {
    id: 517,
    category: "Accessories",
    title: "Baby Bjorn Baby Carrier Mini 3D Mesh - Anthracite/Leopard",
    price: 29,
    imgSrc: "/assets/images/home/demo21/product-1.jpg",
    alt: "Product 1",
    filterCategory: "One Sale",
  },
  {
    id: 518,
    category: "Toys",
    title: "Jellycat - Nibs Bunny",
    price: 29,
    imgSrc: "/assets/images/home/demo21/product-5.jpg",
    alt: "Product 5",
    filterCategory: "One Sale",
  },
  {
    id: 519,
    category: "Makeup",
    title: "Mustela Gentle Cleansing Gel 750ml",
    price: 29,
    imgSrc: "/assets/images/home/demo21/product-3.jpg",
    alt: "Product 3",
    filterCategory: "One Sale",
  },
  {
    id: 520,
    category: "Toys",
    title: "Jellycat - Nibs Bunny",
    price: 29,
    imgSrc: "/assets/images/home/demo21/product-5.jpg",
    alt: "Product 5",
    filterCategory: "New",
  },
  {
    id: 521,
    category: "Clothing",
    title: "Liverpool Recycled Rain Hat Pink Cherry",
    price: 29,
    imgSrc: "/assets/images/home/demo21/product-2.jpg",
    alt: "Product 2",
    filterCategory: "New",
  },
  {
    id: 522,
    category: "Accessories",
    title: "Baby Bjorn Baby Carrier Mini 3D Mesh - Anthracite/Leopard",
    price: 29,
    imgSrc: "/assets/images/home/demo21/product-1.jpg",
    alt: "Product 1",
    filterCategory: "New",
  },
  {
    id: 523,
    category: "Strollers",
    title: "Joolz AER Complete - Delightful Grey",
    price: 29,
    imgSrc: "/assets/images/home/demo21/product-4.jpg",
    alt: "Product 4",
    filterCategory: "New",
  },
  {
    id: 524,
    category: "Makeup",
    title: "Mustela Gentle Cleansing Gel 750ml",
    price: 29,
    imgSrc: "/assets/images/home/demo21/product-3.jpg",
    alt: "Product 3",
    filterCategory: "New",
  },
];

export const products44 = [
  {
    id: 525,
    category: "Clothing",
    title: "Liverpool Recycled Rain Hat Pink Cherry",
    price: 29,
    imgSrc: "/assets/images/home/demo21/product-6.jpg",
    alt: "Product 6",
  },
  {
    id: 526,
    category: "Makeup",
    title: "Mustela Gentle Cleansing Gel 750ml",
    price: 29,
    imgSrc: "/assets/images/home/demo21/product-7.jpg",
    alt: "Product 7",
  },
  {
    id: 527,
    category: "Strollers",
    title: "Joolz AER Complete - Delightful Grey",
    price: 29,
    imgSrc: "/assets/images/home/demo21/product-8.jpg",
    alt: "Product 8",
  },
  {
    id: 528,
    category: "Toys",
    title: "Jellycat - Nibs Bunny",
    price: 29,
    imgSrc: "/assets/images/home/demo21/product-9.jpg",
    alt: "Product 9",
  },
  {
    id: 529,
    category: "Clothing",
    title: "Liverpool Recycled Rain Hat Pink Cherry",
    price: 29,
    imgSrc: "/assets/images/home/demo21/product-6.jpg",
    alt: "Product 6",
  },
  {
    id: 530,
    category: "Makeup",
    title: "Mustela Gentle Cleansing Gel 750ml",
    price: 29,
    imgSrc: "/assets/images/home/demo21/product-7.jpg",
    alt: "Product 7",
  },
  {
    id: 531,
    category: "Strollers",
    title: "Joolz AER Complete - Delightful Grey",
    price: 29,
    imgSrc: "/assets/images/home/demo21/product-8.jpg",
    alt: "Product 8",
  },
  {
    id: 532,
    category: "Toys",
    title: "Jellycat - Nibs Bunny",
    price: 29,
    imgSrc: "/assets/images/home/demo21/product-9.jpg",
    alt: "Product 9",
  },
];

export const products45 = [
  {
    id: 533,
    category: "Clothing",
    title: "Liverpool Recycled Rain Hat Pink Cherry",
    price: 29,
    imgSrc: "/assets/images/home/demo21/product-10.jpg",
    alt: "Product 10",
  },
  {
    id: 534,
    category: "Makeup",
    title: "Mustela Gentle Cleansing Gel 750ml",
    price: 29,
    imgSrc: "/assets/images/home/demo21/product-11.jpg",
    alt: "Product 11",
  },
  {
    id: 535,
    category: "Strollers",
    title: "Joolz AER Complete - Delightful Grey",
    price: 29,
    imgSrc: "/assets/images/home/demo21/product-12.jpg",
    alt: "Product 12",
  },
  {
    id: 536,
    category: "Toys",
    title: "Jellycat - Nibs Bunny",
    price: 29,
    imgSrc: "/assets/images/home/demo21/product-13.jpg",
    alt: "Product 13",
  },
  {
    id: 537,
    category: "Clothing",
    title: "Liverpool Recycled Rain Hat Pink Cherry",
    price: 29,
    imgSrc: "/assets/images/home/demo21/product-10.jpg",
    alt: "Product 10",
  },
  {
    id: 538,
    category: "Makeup",
    title: "Mustela Gentle Cleansing Gel 750ml",
    price: 29,
    imgSrc: "/assets/images/home/demo21/product-11.jpg",
    alt: "Product 11",
  },
  {
    id: 539,
    category: "Strollers",
    title: "Joolz AER Complete - Delightful Grey",
    price: 29,
    imgSrc: "/assets/images/home/demo21/product-12.jpg",
    alt: "Product 12",
  },
  {
    id: 540,
    category: "Toys",
    title: "Jellycat - Nibs Bunny",
    price: 29,
    imgSrc: "/assets/images/home/demo21/product-13.jpg",
    alt: "Product 13",
  },
];

export const products46 = [
  {
    id: 541,
    category: "Clothing",
    title: "Liverpool Recycled Rain Hat Pink Cherry",
    price: 29,
    imgSrc: "/assets/images/home/demo21/product-14.jpg",
    alt: "Product 14",
  },
  {
    id: 542,
    category: "Makeup",
    title: "Mustela Gentle Cleansing Gel 750ml",
    price: 29,
    imgSrc: "/assets/images/home/demo21/product-15.jpg",
    alt: "Product 15",
  },
  {
    id: 543,
    category: "Strollers",
    title: "Joolz AER Complete - Delightful Grey",
    price: 29,
    imgSrc: "/assets/images/home/demo21/product-16.jpg",
    alt: "Product 16",
  },
  {
    id: 544,
    category: "Toys",
    title: "Jellycat - Nibs Bunny",
    price: 29,
    imgSrc: "/assets/images/home/demo21/product-17.jpg",
    alt: "Product 17",
  },
  {
    id: 545,
    category: "Clothing",
    title: "Liverpool Recycled Rain Hat Pink Cherry",
    price: 29,
    imgSrc: "/assets/images/home/demo21/product-14.jpg",
    alt: "Product 14",
  },
  {
    id: 546,
    category: "Makeup",
    title: "Mustela Gentle Cleansing Gel 750ml",
    price: 29,
    imgSrc: "/assets/images/home/demo21/product-15.jpg",
    alt: "Product 15",
  },
  {
    id: 547,
    category: "Strollers",
    title: "Joolz AER Complete - Delightful Grey",
    price: 29,
    imgSrc: "/assets/images/home/demo21/product-16.jpg",
    alt: "Product 16",
  },
  {
    id: 548,
    category: "Toys",
    title: "Jellycat - Nibs Bunny",
    price: 29,
    imgSrc: "/assets/images/home/demo21/product-17.jpg",
    alt: "Product 17",
  },
];
