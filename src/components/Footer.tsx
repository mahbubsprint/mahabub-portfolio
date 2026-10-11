export default function Footer() {
  return (
    <footer className="footer-section">
      <div className="container text-center">
        <div className="eyebrow">// connect</div>
        <ul className="social-links">
          <li><a href="https://www.facebook.com/mahbubsprint" target="_blank" rel="noreferrer"><i className="fa fa-facebook" /></a></li>
          <li><a href="https://bd.linkedin.com/in/mahbubsprint" target="_blank" rel="noreferrer"><i className="fa fa-linkedin" /></a></li>
          <li><a href="https://github.com/mahbubsprint" target="_blank" rel="noreferrer"><i className="fa fa-github" /></a></li>
          <li><a href="skype:extreme_mahbub?userinfo"><i className="fa fa-skype" /></a></li>
        </ul>
        <div className="footer-bottom">
          <span className="copyright">© Designed &amp; Built by Mahabub Mollah · 2026</span>
          <span className="footer-credit">Built with Next.js · Hosted on Vercel</span>
        </div>
      </div>
    </footer>
  );
}
