import "./style.css"

export default function Booklayout({
    children,
}: {
    children: React.ReactNode,
}) {
    return (
        <div className="booklayout">
            {children}
        </div>
    )
}