import Image from "next/image";
import Link from "next/link";
import React from "react";

const KnowMeCard = () => {
  return (
    <>
    <Link href="/">
      <div className="pt-1 min-h-12 border flex space-x-2  items-center justify-start pl-4 border-amber-200 bg-slate-300 rounded-md">
        <Image src={"/images/icons/nextjs.png"} alt="" width={20} height={20} />
        <div className="cardContent">
          {/* logo */}
          <span className=" font-semibold "> Visit my Github Profile</span>
        </div>
      </div>
    </Link>
    </>
  );
};

export default KnowMeCard;
