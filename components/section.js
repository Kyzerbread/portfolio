export default function Section({ children, backgroundColor = "#eceff1" }) {
  return (
    <div style={{ backgroundColor: backgroundColor }} className="pt-16 pb-16">
      {children}
    </div>
  );
}
