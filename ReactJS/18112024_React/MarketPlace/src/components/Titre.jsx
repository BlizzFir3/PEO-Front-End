// eslint-disable-next-line react/prop-types
export default function Titre({ children }) {
    return (
        <>
            <section className="w-full">
                <section className="font-semibold border-b border-[#021431] my-5 inline-block flex-grow-1 text-xl">
                    {children}
                </section>
            </section>
        </>
    );
}
