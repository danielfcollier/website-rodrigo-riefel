/// <reference types="vite/client" />

// Image imports with optimization
declare module "*?optimized" {
  const src: string;
  export default src;
}

declare module "*?w=*" {
  const src: string;
  export default src;
}
