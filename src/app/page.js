import React from "react";
import Link from "next/link";
import { teamMembers } from "@/helper/object";
import MemberEntry from "./memberEntry";

export default function Page() {
  return (
    <div>
      <h1>Home</h1>
      <Link href="/about">About</Link>

      <h2>Unser Team</h2>
      <div>
        {teamMembers.map((member, index) => (
          <MemberEntry key={index} member={member} />
        ))}
      </div>
    </div>
  );
}
