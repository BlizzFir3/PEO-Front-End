import WithoutUseMemo from "../WithoutUseMemo";
import WithUseMemo from "../WithUseMemo";

export default function HookUseMemo() {
    return (
        <>
            <h1 className="pt-20">HookUseMemo</h1>
            <WithoutUseMemo />
            <WithUseMemo />
        </>
    );
}
