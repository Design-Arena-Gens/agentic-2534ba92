import { ReactNode } from "react";

type LayoutProps = {
  children: ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-mist via-white to-slate-100">
      <div className="mx-auto flex w-full max-w-6xl flex-col px-4 pb-20 pt-10 sm:px-8 lg:px-12">
        {children}
      </div>
    </div>
  );
}
