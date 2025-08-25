"use client";

import React, { useState } from "react";
import data from "../../helper/data.json";
import { Card } from "@/components/global/Card";

const EducationPage = () => {
  const [activeTab, setActiveTab] = useState("all");

  // filter based on tab
  const filteredEducation =
    activeTab === "all"
      ? data.education
      : activeTab === "degrees"
      ? data.education.filter((edu) =>
          ["B.A", "12th Grade - WBCHSE", "10th Grade - WBBSE"].includes(
            edu.studyType
          )
        )
      : activeTab === "certifications"
      ? data.education.filter((edu) => edu.studyType === "Certification")
      : data.education;

  return (
    <section className="px-6 py-10">
      {/* Tabs */}
      <div className="flex justify-start flex-wrap gap-4 mb-8">
        {["all", "degrees", "certifications"].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`cursor-pointer px-6 py-2 rounded-lg font-semibold text-white capitalize transition-all duration-300 ${
              activeTab === tab
                ? "bg-zinc-800 hover:bg-zinc-700 shadow-lg scale-105"
                : "bg-transparent border border-zinc-700"
            }`}
          >
            {tab === "all"
              ? "All"
              : tab === "degrees"
              ? "Education Degrees"
              : "Certifications"}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="grid md:grid-cols-2 gap-6 p-2 md:p-4">
        {filteredEducation.map((edu, index) => (
          <Card
            key={index}
            imgSrc={`/assets/images/institutions/${edu.code}.png`}
            imgAlt={edu.institution}
            heading={edu.institution}
            subHeading={`${edu.studyType} in ${edu.area}`}
            desc={[`${edu.startDate} - ${edu.endDate}`, edu.score]}
            skills={edu.skills}
          />
        ))}
      </div>
    </section>
  );
};

export default EducationPage;

