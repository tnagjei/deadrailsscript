
export const Footer = () => {
  return (
    <footer className="py-6 bg-card">
      <div className="container mx-auto text-center">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Tangjei. All rights reserved. | Contact:
          tangjei@gmail.com
        </p>
      </div>
    </footer>
  );
};
