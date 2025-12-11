const PageLoader = () => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-background/80 backdrop-blur-sm">
      <div className="flex flex-col items-center gap-4">
        <div className="relative">
          <div className="h-12 w-12 rounded-full border-4 border-primary/20" />
          <div className="absolute inset-0 h-12 w-12 rounded-full border-4 border-transparent border-t-primary animate-spin" />
        </div>
        <span className="text-sm text-muted-foreground animate-pulse">Loading...</span>
      </div>
    </div>
  );
};

export default PageLoader;
