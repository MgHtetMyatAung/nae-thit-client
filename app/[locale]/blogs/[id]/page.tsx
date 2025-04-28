import Image from "next/image";
import React from "react";

export default function BlogDetailPage({ params }: { params: { id: string } }) {
  return (
    <div className=" container">
      <div className=" max-w-[500px] mx-auto py-10">
        <h1 className=" text-xl md:text-3xl font-bold">Blog Detail Page</h1>
        <div className=" mt-3">
          <div className="flex space-x-2 text-sm text-gray-500">
            <time dateTime="2023-10-15">2.5.2025</time>
            <span>•</span>
            <span>4 mins read</span>
          </div>
        </div>
        <div className=" mb-5 mt-3">
          <Image
            src={"/imgs/clinic.jpg"}
            alt="clinic"
            width={500}
            height={500}
            className=" w-full h-auto"
          />
        </div>
        <div>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla
            velit sed tempore repellendus expedita blanditiis voluptate. Facere,
            maiores. In, minima nobis? Temporibus, nostrum in. Nisi sunt ipsa
            unde quia nesciunt ea quidem hic culpa, cumque, ducimus asperiores
            eum eos id dignissimos alias architecto sit quaerat ut dolorem.
            Maxime obcaecati est ratione ullam dolore illum, quas error
            temporibus nesciunt dolor inventore eum suscipit amet, fuga
            repudiandae delectus, voluptatum ipsa quos quae dolorum molestias
            deserunt autem tempore ducimus! Tenetur, cupiditate voluptatibus
            sequi dolorum ut atque in, vitae quas ratione voluptate facilis
            voluptatem veritatis, modi illum vel id cumque architecto
            repellendus nulla. Praesentium!
          </p>
        </div>
      </div>
    </div>
  );
}
