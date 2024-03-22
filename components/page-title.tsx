"use client";

export const PageTitle = ({ title = "" }) => {
  return (
    <>
      <title>{title}</title>
      <div className="p-4 border-b mb-5">
        <p className="text-2xl font-semibold text-left">{title}</p>
      </div>
    </>
  );
};
