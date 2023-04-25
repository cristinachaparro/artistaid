function Footer() {
  return (
    <>
      <div className="bg-slate-800 text-yellow-500 text-center text-xs">
        <p>Designed and developed by Cristina Chaparro.</p>
        <div className="flex justify-center">
          <a href="https://github.com/cristinachaparro">
            <img src="/public/icons8-github.svg" alt="GitHub icon" />
          </a>
          <a href="https://www.linkedin.com/in/cristinachaparrobautista/">
            <img src="/public/icons8-linkedin.svg" alt="LinkedIn icon" />
          </a>
        </div>
      </div>
    </>
  );
}

export default Footer;
