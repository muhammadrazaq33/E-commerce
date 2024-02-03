import React from "react";
import { SiTrustedshops } from "react-icons/si";
import { SiTrustpilot } from "react-icons/si";
import { VscWorkspaceTrusted } from "react-icons/vsc";
import { VscWorkspaceUntrusted } from "react-icons/vsc";
import { RiSecurePaymentFill } from "react-icons/ri";

const Trusted = () => {
  return (
    <div className="bg-slate-200">
      <section className="py-[4rem]">
        <div className="max-w-[60rem] m-auto">
          {/* Title  =======> */}
          <h4 className="text-[2rem] font-bold text-center">
            Trusted by 1000+ companies
          </h4>
          {/* Logos    ===============> */}
          <div className=" grid sm:grid-cols-5 grid-cols-3 gap-y-10 justify-items-center mt-[3.5rem]">
            <SiTrustedshops className="text-[5rem]" />
            <SiTrustpilot className="text-[5rem]" />
            <VscWorkspaceTrusted className="text-[5rem]" />
            <VscWorkspaceUntrusted className="text-[5rem]" />
            <RiSecurePaymentFill className="text-[5rem]" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Trusted;
