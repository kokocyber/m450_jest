import MemberEntry from "@/app/memberEntry";
import { teamMembers } from "@/helper/object";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

const member = teamMembers[0];

test("renders member information correctly", () => {
  render(<MemberEntry member={member} />);

  // Check full name
  expect(screen.getByText("Julia Meier")).toBeInTheDocument();

  // Check position
  expect(
    screen.getByText("Position: Recruiting Specialist")
  ).toBeInTheDocument();

  // Check age
  expect(screen.getByText("Alter: 29")).toBeInTheDocument();

  // Check gender
  expect(screen.getByText("Geschlecht: female")).toBeInTheDocument();
});
