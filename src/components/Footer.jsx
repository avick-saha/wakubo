export default function Footer() {
  return (
    <footer>
      <div className="wrap foot-row">
        <span className="logo">wakubo</span>
        <p>
          Every person shown on this site is generated. No model was
          photographed, and none of these images depict a real individual.
        </p>
        <span className="foot-copy">© {new Date().getFullYear()} Wakubo Studio</span>
      </div>
    </footer>
  );
}
