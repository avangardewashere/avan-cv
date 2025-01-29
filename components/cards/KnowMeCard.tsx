import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import React from "react";

interface KnowMeProps {
  title: string;
  id: number;
  href: string;
  b1color: string;
  b2color: string;
  image?: string | StaticImageData;
}

const KnowMeCard = (props: KnowMeProps) => {
  const { title, id, href, b1color, b2color, image } = props;
  return (
    <>
      <Link href="/">
        <div
          style={{ background: "linear-gradient(120deg,#6D8AE3,#427DCA)" }}
          className="pt-1 min-h-12 border flex space-x-2  items-center justify-start pl-4 border-amber-200 bg-slate-300 rounded-lg"
        >
          <Image
            src={"/images/icons/github.png"}
            alt={"image"}
            width={20}
            height={20}
            // style={{filter:"brightness(1000%)"}}
          />
          <div className="cardContent">
            <span className=" font-semibold text-white">
              {" "}
              Visit my Github Profile
            </span>
          </div>
        </div>
      </Link>
    </>
  );
};

export default KnowMeCard;
