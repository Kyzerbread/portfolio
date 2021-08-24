export default function Section({ children, backgroundColor = "#263238" }) {
  return (
    <div style={{ backgroundColor: backgroundColor }} className="pt-16 pb-16">
      {children}
    </div>
  );
}
