
import { Copy, FileCode, Globe, Lightbulb } from 'lucide-react';

export const Features = () => {
  return (
    <section className="py-12 bg-secondary">
      <div className="container mx-auto">
        <h2 className="text-3xl font-semibold text-center mb-8">
          Key Features
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <FeatureItem
            icon={<FileCode />}
            title="Script Display"
            description="View pre-made DeadRails scripts in a user-friendly code editor with syntax highlighting."
          />
          <FeatureItem
            icon={<Copy />}
            title="Copy to Clipboard"
            description="Easily copy the displayed script to your clipboard with a single click."
          />
          <FeatureItem
            icon={<Globe />}
            title="Multi-Language Support"
            description="Supports English, Chinese, Japanese, Korean, and Spanish."
          />
          <FeatureItem
            icon={<Lightbulb />}
            title="AI Script Suggestion"
            description="Get relevant script suggestions based on your game description."
          />
        </div>
      </div>
    </section>
  );
};

const FeatureItem = ({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) => {
  return (
    <div className="flex flex-col items-center p-4 rounded-lg bg-card shadow-md">
      <div className="p-3 bg-primary/20 text-primary rounded-full mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-muted-foreground text-center">{description}</p>
    </div>
  );
};
