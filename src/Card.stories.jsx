import { Card } from "./Card.jsx";
export default { title: "Card", component: Card };
export const Plain = { args: { title: "A card", body: "With a little text in it." } };
export const Broken = { args: { title: "Broken", body: "Its play function throws." }, play: async () => { throw new Error("expected a dialog"); } };
