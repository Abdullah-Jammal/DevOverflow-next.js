"use client";
import { UserFilters } from "@/constants/filters";
import React from "react";
import { Button } from "../ui/button";

const HomeFilter = () => {
  const active = "new_users";
  return (
    <div className="mt-10 hidden flex-wrap gap-3 md:flex">
      {UserFilters.map((item) => (
        <Button
          className={`body-medium rounded-lg px-6 py-3 capitalize shadow-none
            ${active === item.value ? "bg-primary-100 text-primary-500 " : "bg-light-800 text-light-500"}`}
          key={item.value}
        >
          {item.name}
        </Button>
      ))}
    </div>
  );
};

export default HomeFilter;
