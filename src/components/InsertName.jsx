"use client";

import { useAtom } from "jotai";
import { userAtom } from "@/globalState";


const InsertName = () => {
    const [user, setUser] = useAtom(userAtom);

    return (
        <div>
            <br />
            <br />
            <br />
            <input name="first Name" placeholder="Entrez votre prénom" onChange={(e) => setUser({...user, name: e.target.value})}/>
        </div>
    );
};

export default InsertName;