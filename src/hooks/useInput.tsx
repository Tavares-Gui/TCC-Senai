import { useEffect, useState, useCallback } from "react";

export const useInput = () => {
    const [input, setInput] = useState({
        forward: false,
        backward: false,
        left: false,
        right: false,
        shift: false,
        jump: false
    });

    const keys: { [key: string]: string } = {
        KeyW: "forward",
        KeyS: "backward",
        KeyA: "left",
        KeyD: "right",
        ShiftLeft: "shift",
        Space: "jump"
    };

    const findKey = useCallback((key: string) => keys[key], [keys]);

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            const key = findKey(e.code);
            if (key) {
                setInput((m) => ({ ...m, [key]: true }));
            }
        };
        const handleKeyUp = (e: KeyboardEvent) => {
            const key = findKey(e.code);
            if (key) {
                setInput((m) => ({ ...m, [key]: false }));
            }
        };
        document.addEventListener("keydown", handleKeyDown);
        document.addEventListener("keyup", handleKeyUp);
        return () => {
            document.removeEventListener("keydown", handleKeyDown);
            document.removeEventListener("keyup", handleKeyUp);
        };
    }, [findKey]);

    return input;
};
