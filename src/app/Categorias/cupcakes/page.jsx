"use client";

import { Pagination } from "flowbite-react";
import { useState } from "react";
import { Card } from "flowbite-react";
import { Open_Sans, Luckiest_Guy } from "next/font/google";
const luckiestguy = Luckiest_Guy({ subsets: ["latin"], weight: ["400"] });
const opensans = Open_Sans({ subsets: ["latin"] });
import "./styles.css";
import Image from "next/image";
import cupcake1 from "../../../../public/cupcake/algodon.jpg";
import cupcake2 from "../../../../public/cupcake/avellana.jpg";
import cupcake3 from "../../../../public/cupcake/cafe.jpg";
import cupcake4 from "../../../../public/cupcake/cereza.jpg";
import cupcake5 from "../../../../public/cupcake/oreo.jpg";
import cupcake6 from "../../../../public/cupcake/redvelvet.jpg";

export default function Cupcakes() {
  const [currentPage, setCurrentPage] = useState(1);

  const onPageChange = (page) => setCurrentPage(page);
  return (
    <div>
      <h1 className={luckiestguy.className} id="titulo">
        CUP CAKES
      </h1>
      <div className="grid justify-items-center md:grid-cols-3" id="cuerpo">
        {/* card1 */}
        <div className={opensans.className}>
          <Card className="max-w-sm">
            <Image src={cupcake1} alt="cupcake1" />
            <h5 className="text-center text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Cupcake con chantilli sabor algodon de azucar
            </h5>
            <p className="text-center font-normal text-gray-700 dark:text-gray-800">
              $35.00 c/u
            </p>
            <div className="flex justify-center">
              <button
                type="submit"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Agregar al carrito
              </button>
            </div>
          </Card>
        </div>
        {/* termino card1 */}
        {/* card2 */}
        <div>
          <Card className="max-w-sm">
            <Image src={cupcake2} alt="cupcake2" />
            <h5 className="text-center text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Avellana y ferrero rocher
            </h5>
            <p className="text-center font-normal text-gray-700 dark:text-gray-400">
              $35.00 c/u
            </p>
            <div className="flex justify-center">
              <button
                type="submit"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Agregar al carrito
              </button>
            </div>
          </Card>
        </div>
        {/* termino card2 */}
        {/* card3 */}
        <div>
          <Card className="max-w-sm">
            <Image src={cupcake3} alt="cupcake3" />
            <h5 className="text-center text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Café con chocolate
            </h5>
            <p className="text-center font-normal text-gray-700 dark:text-gray-400">
              $35.00 c/u
            </p>
            <div className="flex justify-center">
              <button
                type="submit"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Agregar al carrito
              </button>
            </div>
          </Card>
        </div>
        {/* termino card3 */}
        {/* card4 */}
        <div>
          <Card className="max-w-sm">
            <Image src={cupcake4} alt="cupcake4" />
            <h5 className="text-center text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Cereza con chispas de colores
            </h5>
            <p className="text-center font-normal text-gray-700 dark:text-gray-400">
              $35.00 c/u
            </p>
            <div className="flex justify-center">
              <button
                type="submit"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Agregar al carrito
              </button>
            </div>
          </Card>
        </div>
        {/* termino card4 */}
        {/* card5 */}
        <div>
          <Card className="max-w-sm">
            <Image src={cupcake5} alt="cupcake5" />
            <h5 className="text-center text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Cupcake de oreo
            </h5>
            <p className="text-center font-normal text-gray-700 dark:text-gray-400">
              $35.00 c/u
            </p>
            <div className="flex justify-center">
              <button
                type="submit"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Agregar al carrito
              </button>
            </div>
          </Card>
        </div>
        {/* termino card5 */}
        {/* card6 */}
        <div>
          <Card className="max-w-sm">
            <Image src={cupcake6} alt="cupcake6" />
            <h5 className="text-center text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Red velvet
            </h5>
            <p className="text-center font-normal text-gray-700 dark:text-gray-400">
              $35.00 c/u
            </p>
            <div className="flex justify-center">
              <button
                type="submit"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Agregar al carrito
              </button>
            </div>
          </Card>
        </div>
        {/* termino card6 */}
      </div>
      <div className="flex overflow-x-auto sm:justify-center" id="carousel">
        <Pagination
          currentPage={currentPage}
          totalPages={100}
          onPageChange={onPageChange}
          showIcons
        />
      </div>
    </div>
  );
}
