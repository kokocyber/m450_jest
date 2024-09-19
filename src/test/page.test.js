import { render, screen } from "@testing-library/react";
import Page from "../app/page";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import { MemoryRouter } from "react-router-dom";
import { teamMembers } from "@/helper/object";

test("renders Home heading and About link", () => {
  render(<Page />);
  const heading = screen.getByText(/HomeX/i);
  const link = screen.getByRole("link", { name: /About/i });
  expect(heading).toBeInTheDocument();
  expect(link).toBeInTheDocument();
  expect(link).toHaveAttribute("href", "/about");

  link.focus();
  expect(link).toHaveFocus();

  userEvent.click(link);
});

test("renders About page link with correct navigation", () => {
  render(
    <MemoryRouter>
      <Page />
    </MemoryRouter>
  );
  const link = screen.getByRole("link", { name: /About/i });
  expect(link).toHaveAttribute("href", "/about");
});

test("Die Page-Komponente rendert korrekt und zeigt alle Teammitglieder an", () => {
  // Komponente rendern
  render(<Page />);

  // screen.debug();

  // Überprüfen, ob alle Teammitglieder korrekt gerendert werden
  teamMembers.forEach((member) => {
    // Überprüfen, ob der Name angezeigt wird
    const fullName = `${member.firstname} ${member.lastname}`;
    expect(screen.getByText(fullName)).toBeInTheDocument();

    // Überprüfen, ob die Position angezeigt wird
    expect(
      screen.getByText(`Position: ${member.position}`)
    ).toBeInTheDocument();

    // Überprüfen, ob das Alter angezeigt wird
    expect(screen.getByText(`Alter: ${member.age}`)).toBeInTheDocument();

    // Überprüfen, ob das Geschlecht angezeigt wird
    const genderElements = screen.getAllByText(`Geschlecht: ${member.gender}`);
    expect(genderElements.length).toBeGreaterThan(0); // Ensure at least one element is found
    genderElements.forEach((element) => {
      expect(element).toBeInTheDocument();
      // console.log("Current element: ", element);
    });
  });
});

// test("renders About team and tests entries", () => {
//   render(<Page />);

//   teamMembers.forEach((currentMember, index) => {
//     const memberDiv = screen.getByTitle(`member-${index}`);

//     const name = within(memberDiv).getByTitle("name");
//     const position = within(memberDiv).getByTitle("position");
//     const age = within(memberDiv).getByTitle("age");
//     const gender = within(memberDiv).getByTitle("gender");

//     expect(name).toHaveTextContent(
//       `${currentMember.firstname} ${currentMember.lastname}`
//     );
//     expect(position).toHaveTextContent(`Position: ${currentMember.position}`);
//     expect(age).toHaveTextContent(`Age: ${currentMember.age}`);
//     expect(gender).toHaveTextContent(`Gender: ${currentMember.gender}`);
//   });
// });
