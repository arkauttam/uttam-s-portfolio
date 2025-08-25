"use client";

import React, { useEffect, useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import data from "../../helper/data.json";

const SkillsPageContent = () => {
  const searchParams = useSearchParams();
  const name = searchParams.get("name");
  const [highlightedSkill, setHighlightedSkill] = useState(null);
  const [activeTab, setActiveTab] = useState("all");

  useEffect(() => {
    if (name) {
      const skillElement = document.getElementById(name);
      if (skillElement) {
        skillElement.scrollIntoView({ behavior: "smooth", block: "center" });
        setHighlightedSkill(name);

        setTimeout(() => setHighlightedSkill(null), 1000);
      }
    }
  }, [name]);

  // filter skills based on tab
  const skillsByTab =
    activeTab === "all"
      ? data.skills
      : data.skills.filter((skill) => skill.category === activeTab);

  // remove duplicate skill names
  const filteredSkills = skillsByTab.filter(
    (skill, index, self) =>
      index === self.findIndex((s) => s.name.toLowerCase() === skill.name.toLowerCase())
  );

  return (
    <section className="px-6 py-10">
      {/* Tabs */}
      <div className="flex justify-start flex-wrap gap-4 mb-8">
        {["all", "frontend", "backend", "database", "tools"].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`cursor-pointer px-6 py-2 rounded-lg font-semibold text-white capitalize transition-all duration-300 ${
              activeTab === tab
                ? "bg-zinc-800 hover:bg-zinc-700 shadow-lg scale-105"
                : "bg-transparent border border-zinc-700"
            }`}
          >
            {tab === "tools" ? "Tools / Platforms" : tab}
          </button>
        ))}
      </div>

      {/* Skills Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
        {filteredSkills.map((skill) => (
          <div
            key={skill.id}
            id={skill.name}
            className={`group relative flex flex-col items-center justify-center rounded-xl bg-zinc-800 p-6 shadow-lg transition-all duration-300 hover:scale-105 hover:bg-zinc-700 hover:shadow-2xl ${
              highlightedSkill === skill.name
                ? "ring-4 ring-blue-500 shadow-lg"
                : ""
            }`}
          >
            <div className="w-24 h-24 flex items-center justify-center">
              <img
                src={`/assets/svg/${skill.name}.svg`}
                alt={skill.name}
                className="w-20 h-20 object-contain transition-transform duration-300 group-hover:rotate-6"
              />
            </div>
            <p className="mt-4 text-white font-semibold text-lg">
              {skill.name}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

const SkillsPage = () => {
  return (
    <Suspense fallback={<div className="text-white text-center">Loading...</div>}>
      <SkillsPageContent />
    </Suspense>
  );
};

export default SkillsPage;
