import Card from "./Card";

export default function SectionTwo() {
  return (
    <div className="container mt-3 ">
      <h4 className="mb-5">Related topics</h4>

      <div className="row mb-3">
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
}
