import Paragraph from "@/components/global/paragraph";
import Info from "@/components/landing-page/footer/info";
import { termsOfServices } from "@/lib/data";
import React from "react";

const TermsOfServices = () => {
  return (
    <div>
      <div className="w-full pt-[100px] max-w-[600px] px-5">
        <h1 className="mb-10 text-3xl lg:text-4xl">Terms of Services</h1>
        <Paragraph data={`This Agreement for Shape (the "Agreement") is made and entered into between Shape and the entity agreeing to these terms ("Customer"). The Agreement consists of Part A (General Terms), Part B (Specific Terms), Part C (Definitions) any addenda (if applicable), and each Order Form, including any statements of work, and each amendment to any of the foregoing. This Agreement is effective as of the date of the last signature appearing on Customer's initial Order Form (the "Effective Date").`} />
        <br />
        <Paragraph data="We have established this privacy policy (“Privacy Policy”) to let you know the kinds of personal information we may gather during your use of our Service, why we gather your information, what we use your personal information for, when we might disclose your personal information, and how you can manage your personal information." />
        <Info infoData={termsOfServices} className="mt-5" />
      </div>
    </div>
  );
};

export default TermsOfServices;
