// "use client"
// import { Badge } from "@/components/ui/badge";
// import Image from "next/image";
// import Link from "next/link";
// interface Product {
//   id: number;
//   title: string;
//   price: number;
//   originalPrice?: number;
//   image: string;
//   isNew?: boolean;
//   isSale?: boolean;
// }

// export default function OurProduct() {
//   const products: Product[] = [
//     {
//       id: 1,
//       title: "Library Stool Chair",
//       price: 20,
//       image: "/01.jpg",
//       isNew: true,
//     },
//     {
//       id: 2,
//       title: "Library Stool Chair",
//       price: 20,
//       originalPrice: 30,
//       image: "/02.jpg",
//       isSale: true,
//     },
//     {
//       id: 3,
//       title: "Library Stool Chair",
//       price: 20,
//       image: "/03.jpg",
//     },
//     {
//       id: 4,
//       title: "Library Stool Chair",
//       price: 20,
//       image: "/04.jpg",
//     },
//     {
//       id: 5,
//       title: "Library Stool Chair",
//       price: 20,
//       image: "/05.jpg",
//       isNew: true,
//     },
//     {
//       id: 6,
//       title: "Library Stool Chair",
//       price: 20,
//       originalPrice: 30,
//       image: "/06.jpg",
//       isSale: true,
//     },
//     {
//       id: 7,
//       title: "Library Stool Chair",
//       price: 20,
//       image: "/07.jpg",
//     },
//     {
//       id: 8,
//       title: "Library Stool Chair",
//       price: 20,
//       image: "/01.jpg",
//     },
//   ];

//   return (
//     <div className="container mx-auto px-4 py-20">
//       <h1 className="text-3xl text-center font-semibold text-[#1C1B1F] tracking-tight  mb-8">
//         {" "}
//         Our Products
//       </h1>

//       <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
//         {products.map((product) => (
//           <div key={product.id} className="group relative rounded-lg bg-white">
//             <div className="relative aspect-square overflow-hidden rounded-lg">
//               {product.isNew && (
//                 <Badge className="absolute left-3 top-3 text-[#FFFF] bg-emerald-500 hover:bg-emerald-600">
//                   New
//                 </Badge>
//               )}
//               {product.isSale && (
//                 <Badge className="absolute text-[#FFFF] left-3 top-3 bg-orange-500 hover:bg-orange-600">
//                   Sales
//                 </Badge>
//               )}
//               <Link href={"components/productDectription/discription"}>
//                 <Image
//                   src={product.image}
//                   alt={product.title}
//                   height={400}
//                   width={400}
//                   className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
//                 />
//               </Link>
//             </div>
//             <div className="mt-4 flex items-center justify-between">
//               <div>
//                 <h3 className="text-sm text-[#1C1B1F]">{product.title}</h3>
//                 <div className="mt-1 flex items-center gap-2">
//                   <span className="text-lg font-medium text-[#1C1B1F]">
//                     ${product.price}
//                   </span>
//                   {product.originalPrice && (
//                     <span className="text-sm text-gray-500 line-through">
//                       ${product.originalPrice}
//                     </span>
//                   )}
//                 </div>
//               </div>
//               <button className=" bg-[#F0F2F3] p-2 text-white transition-colors hover:bg-[#00A294]">
//                 <svg
//                   width="22"
//                   height="22"
//                   viewBox="0 0 22 22"
//                   fill="none"
//                   xmlns="http://www.w3.org/2000/svg"
//                 >
//                   <path
//                     d="M2.52075 2.97917L4.42742 3.30917L5.31017 13.8261C5.34408 14.2399 5.53278 14.6258 5.83861 14.9066C6.14445 15.1875 6.54494 15.3427 6.96017 15.3413H16.961C17.3586 15.3418 17.743 15.1987 18.0434 14.9383C18.3439 14.6779 18.5402 14.3178 18.5963 13.9242L19.4672 7.91267C19.4904 7.7528 19.4819 7.58991 19.4421 7.43334C19.4023 7.27676 19.332 7.12956 19.2353 7.00015C19.1386 6.87075 19.0173 6.76168 18.8784 6.67918C18.7395 6.59667 18.5857 6.54236 18.4258 6.51934C18.3672 6.51292 4.73359 6.50834 4.73359 6.50834"
//                     stroke="#272343"
//                     strokeWidth="1.5"
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                   />
//                   <path
//                     d="M12.9478 9.89542H15.4897"
//                     stroke="#272343"
//                     strokeWidth="1.5"
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                   />
//                   <path
//                     fill-Rule="evenodd"
//                     clip-Rule="evenodd"
//                     d="M6.55786 18.5194C6.62508 18.5165 6.69219 18.5273 6.75515 18.551C6.81811 18.5748 6.87562 18.611 6.9242 18.6575C6.97279 18.7041 7.01145 18.76 7.03787 18.8219C7.06428 18.8837 7.0779 18.9503 7.0779 19.0176C7.0779 19.0849 7.06428 19.1515 7.03787 19.2134C7.01145 19.2753 6.97279 19.3312 6.9242 19.3777C6.87562 19.4243 6.81811 19.4605 6.75515 19.4842C6.69219 19.508 6.62508 19.5187 6.55786 19.5158C6.42942 19.5103 6.30808 19.4554 6.21914 19.3626C6.13021 19.2698 6.08057 19.1462 6.08057 19.0176C6.08057 18.8891 6.13021 18.7655 6.21914 18.6726C6.30808 18.5798 6.42942 18.5249 6.55786 18.5194Z"
//                     fill="#272343"
//                     stroke="#272343"
//                     strokeWidth="1.5"
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                   />
//                   <path
//                     fill-Rule="evenodd"
//                     clip-Rule="evenodd"
//                     d="M16.8988 18.5194C17.0312 18.5194 17.1583 18.5721 17.252 18.6657C17.3457 18.7594 17.3983 18.8865 17.3983 19.019C17.3983 19.1515 17.3457 19.2786 17.252 19.3723C17.1583 19.466 17.0312 19.5186 16.8988 19.5186C16.7663 19.5186 16.6392 19.466 16.5455 19.3723C16.4518 19.2786 16.3992 19.1515 16.3992 19.019C16.3992 18.8865 16.4518 18.7594 16.5455 18.6657C16.6392 18.5721 16.7663 18.5194 16.8988 18.5194Z"
//                     fill="#272343"
//                     stroke="#272343"
//                     strokeWidth="1.5"
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                   />
//                 </svg>

                
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }



import Image from "next/image";
import React from "react";

const Products = () => {
  const products = [
    {
      id: 1,
      image: "/Image1.png",
      title: "Library Stool Chair",
      price: "$20",
      label: "New",
    },
    {
      id: 2,
      image: "/Image2.png",
      title: "Library Stool Chair",
      price: "$20",
      label: "Sale",
    },
    {
      id: 3,
      image: "/Image3.png",
      title: "Library Stool Chair",
      price: "$20",
    },
    {
      id: 4,
      image: "/Image4.png",
      title: "Library Stool Chair",
      price: "$20",
    },
    {
      id: 5,
      image: "/Image5.png",
      title: "Library Stool Chair",
      price: "$20",
      label: "New",
    },
    {
      id: 6,
      image: "/Image6.png",
      title: "Library Stool Chair",
      price: "$20",
      label: "Sale",
    },
    {
      id: 7,
      image: "/Image7.png",
      title: "Library Stool Chair",
      price: "$20",
    },
    {
      id: 8,
      image: "/Image8.png",
      title: "Library Stool Chair",
      price: "$20",
    },
  ];

  return (
    <section className="lg:ml-44 lg:mr-44 my-10 mt-32">
      <h2 className="text-2xl font-bold text-center text-[#272343] mb-8">
        Our Products
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-10">
        {products.map((product) => (
          <div
            key={product.id}
            className="relative bg-white shadow-md rounded-lg overflow-hidden"
          >
            {/* Product Label */}
            {product.label && (
              <span
                className={`absolute top-2 left-2 px-2 py-1 text-xs font-bold rounded ${
                  product.label === "New"
                    ? "bg-green-500 text-white"
                    : "bg-[#F5813F] text-white"
                }`}
              >
                {product.label}
              </span>
            )}

            {/* Product Image */}
            <Image
              src={product.image}
              alt={product.title}
              width={350}
              height={350}
              className="object-cover w-full"
            />

            {/* Product Details */}
            <div className="p-4 flex justify-between items-center">
              <div>
                <h3 className="text-sm font-medium text-[#272343]">
                  {product.title}
                </h3>
                <p className="text-gray-600 font-semibold">{product.price}</p>
              </div>

              {/* Cart Icon */}
              <button className="p-2 hover:bg-[#029FAE] rounded">
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 22 22"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2.52 2.98L4.43 3.31L5.31 13.83C5.34 14.24 5.53 14.63 5.84 14.91C6.14 15.19 6.54 15.34 6.96 15.34H16.96C17.36 15.34 17.74 15.2 18.04 14.94C18.34 14.68 18.54 14.32 18.6 13.92L19.47 7.91C19.49 7.75 19.48 7.59 19.44 7.43C19.4 7.28 19.33 7.13 19.24 7.00C19.14 6.87 19.02 6.76 18.88 6.68C18.74 6.6 18.59 6.54 18.43 6.52C18.37 6.51 4.73 6.51 4.73 6.51"
                    stroke="#272343"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M12.95 9.9H15.49"
                    stroke="#272343"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <circle cx="6.56" cy="19.02" r="0.9" fill="#272343" />
                  <circle cx="16.9" cy="19.02" r="0.9" fill="#272343" />
                </svg>
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Products;
