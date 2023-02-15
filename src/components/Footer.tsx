import * as React from "react";

const Footer: React.FC = () => {
  return (
    <React.Fragment>
      <footer className="footer">
        <p className="footer-text">
          Made with ❤️ by{" "}
          <a href="https://twitter.com/Raghav__Rama" target="_blank" rel="noreferrer">
            hackerboy
          </a>
        </p>
      </footer>
    </React.Fragment>
  );
};

export { Footer };
