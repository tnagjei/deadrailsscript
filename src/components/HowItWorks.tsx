
export const HowItWorks = () => {
  return (
    <section className="py-12 bg-background">
      <div className="container mx-auto">
        <h2 className="text-3xl font-semibold text-center mb-8">
          How It Works
        </h2>
        <div className="flex flex-col md:flex-row gap-8">
          <StepItem
            number="1"
            title="Explore Scripts"
            description="Browse our extensive collection of DeadRails scripts."
          />
          <StepItem
            number="2"
            title="Copy & Customize"
            description="Copy the script and customize it to fit your game."
          />
          <StepItem
            number="3"
            title="Implement in Your Game"
            description="Follow our guide to seamlessly integrate the script into your game."
          />
        </div>
      </div>
    </section>
  );
};

const StepItem = ({
  number,
  title,
  description,
}: {
  number: string;
  title: string;
  description: string;
}) => {
  return (
    <div className="flex flex-col items-center p-4 rounded-lg bg-card shadow-md">
      <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-xl mb-4">
        {number}
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-muted-foreground text-center">{description}</p>
    </div>
  );
};
