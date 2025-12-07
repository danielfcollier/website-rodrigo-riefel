import { cn } from "@/lib/utils";

/**
 * Componente Primitivo
 */
function Skeleton({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("animate-pulse rounded-md bg-muted", className)} {...props} />;
}

/**
 * Componente de Layout para Carregamento de Seção
 */
function SectionSkeleton() {
  return (
    <div className="container-section py-12 md:py-24 space-y-8 opacity-50">
      {/* Título Fake */}
      <div className="flex flex-col items-center space-y-4">
        <Skeleton className="h-8 w-48 rounded-full bg-brand-complementary/20" />
        <Skeleton className="h-12 w-3/4 max-w-2xl bg-brand-complementary/10" />
      </div>
      
      {/* Grid Fake */}
      <div className="grid md:grid-cols-3 gap-8 mt-12">
        <Skeleton className="h-64 w-full rounded-xl bg-black/5" />
        <Skeleton className="h-64 w-full rounded-xl bg-black/5" />
        <Skeleton className="h-64 w-full rounded-xl bg-black/5" />
      </div>
    </div>
  );
}

export { Skeleton, SectionSkeleton };