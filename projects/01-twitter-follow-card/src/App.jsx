import "./App.css";
import { LinkedinFollowCard } from "./LinkedinFollowCard.jsx";

const users = [
    {
        name: "Jaume Parrot Altisent",
        job: "Desarrollador de front-end",
        userName: "jaume",
        isFollowing: true,
    },
    {
        name: "Lucas Barallobre",
        job: "Frontend Developer",
        userName: "casey",
        isFollowing: false,
    },
    {
        name: "Jeulinser Mendez Sena",
        job: "Sr Angular Developer",
        userName: "IbaiLlanos",
        isFollowing: true,
    },
    {
        name: "Marcos Martínez Martínez",
        job: "Software Developer en Plexus",
        userName: "midulive",
        isFollowing: false,
    },
];

export default function App() {
    const format = (job) => `Trabajo: ${job}`;
    return (
        <section className="App">
            {users.map((user) => (
                <LinkedinFollowCard
                    key={user.userName}
                    formatJob={format}
                    name={user.name}
                    job={user.job}
                    userName={user.userName}
                    initialIsFollowing={user.isFollowing}
                >
                    {user.name}
                </LinkedinFollowCard>
            ))}
        </section>
    );
}
