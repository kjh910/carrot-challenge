type AppLayoutProps = {
    children: React.ReactNode;
  };

export default function Layout({ children }: AppLayoutProps) {
    return (
        <>
        <div className="layout">
            {children}
        </div>
        <style jsx>
            {
                `
                    .layout {
                        @apply p-4 w-full min-h-screen text-white bg-[#0f181c];
                    }
                `
            }
        </style>
        </>
    );
}