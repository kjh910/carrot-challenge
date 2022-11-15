type AppLayoutProps = {
  children: React.ReactNode;
};

export default function Layout({ children }: AppLayoutProps) {
  return (
    <>
      <div className="layout">{children}</div>
      <style>
        {`
            .layout {
              margin: 4
            }
          `}
      </style>
    </>
  );
}
