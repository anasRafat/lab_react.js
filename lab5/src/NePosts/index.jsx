import { useEffect, useState } from "react";
import { useGetNePosts } from "../hooks/index";

export const NePosts = () => {
    const [Neposts, setNePosts] = useState([]);
    const getNePosts = useGetNePosts();

    useEffect(() => {
        getNePosts().then(setNePosts);
    }, []);

    if (!Neposts.length) return <h1>Loading...</h1>;
    return (
        <>
            <h1>Posts</h1>
            {Neposts.map((Nepost) => (
                <div key={Nepost.id}>
                    <h4>{Nepost.title}</h4>
                    <p>{Nepost.body}</p>
                </div>
            ))}
        </>
    );
};
