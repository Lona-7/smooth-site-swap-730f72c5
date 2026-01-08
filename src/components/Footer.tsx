const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border py-8 pb-24 md:pb-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Copyright */}
          <div className="text-muted-foreground text-sm text-center md:text-left">
            <span>DOWNAPK.ONLINE © Copyright {currentYear}. All Rights Reserved.</span>
          </div>

          {/* Links */}
          <div className="flex flex-wrap justify-center gap-4 md:gap-6">
            <a
              href="#"
              className="text-sm text-muted-foreground hover:text-primary transition"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-sm text-muted-foreground hover:text-primary transition"
            >
              About Us
            </a>
            <a
              href="#"
              className="text-sm text-muted-foreground hover:text-primary transition"
            >
              Contact Us
            </a>
            <a
              href="#"
              className="text-sm text-muted-foreground hover:text-primary transition"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
