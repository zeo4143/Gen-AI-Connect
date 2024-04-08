import Paragraph from "@/components/global/paragraph";
import Info from "@/components/landing-page/footer/info";
import { privacyPolicy as infoPrivacyPolicy } from "@/lib/data";
import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="w-full pt-[100px] max-w-[600px] px-5">
      <h1 className="mb-10 text-3xl lg:text-4xl">Privacy Policy</h1>
      <Paragraph data="We are strongly committed to letting you know how we will collect and use your personal information. The policies below are applicable to data and information collected via GenAiConnect, Inc’s Cloud or Consulting Services and Website located at GenAiConnect." />
      <br/>
      <Paragraph  data="We have established this privacy policy (“Privacy Policy”) to let you know the kinds of personal information we may gather during your use of our Service, why we gather your information, what we use your personal information for, when we might disclose your personal information, and how you can manage your personal information." />
      <Info infoData={infoPrivacyPolicy} className="mt-5" />
    </div>
  );
};



export default PrivacyPolicy;
