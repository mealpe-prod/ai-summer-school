export default function Marquee() {
  const items = [
    "7 Days",
    "+",
    "13 Experts",
    "+",
    "Hands-On",
    "+",
    "Real Projects",
    "+",
    "AI + Design + Content",
    "+",
    "Build. Ship. Earn.",
    "+",
    "Ages 15–24",
    "+",
    "Ahmedabad",
    "+",
  ];

  return (
    <div className="marquee-wrapper">
      <div className="marquee-track">
        {[...items, ...items].map((item, i) => (
          <span key={i}>{item}</span>
        ))}
      </div>
    </div>
  );
}
