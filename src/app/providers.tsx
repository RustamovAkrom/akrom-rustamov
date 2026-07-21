import ProgressBar from "@/components/ProgressBar";

export default function Providers({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <>
            <ProgressBar />
            {children}
        </>
    );
}
