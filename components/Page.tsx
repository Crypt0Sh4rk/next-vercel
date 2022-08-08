import { useUser } from '../hooks/useUser';  

function Page() {
    return <div>
        <Navbar />
        <Content />
    </div>
}

// child components

function Navbar() {
    return <div>
        {/* ... */}
        <Avatar />
    </div>
}

function Content() {
    const { user, isLoading } = useUser()
    if (isLoading) return <Spinner />
    return <h1>Welcome back, {user.name}</h1>
}

function Avatar() {
    const { user, isLoading } = useUser()
    if (isLoading) return <Spinner />
    return <img src={user.avatar} alt={user.name} />
}

function Spinner() {
    return <div>loading...</div>
}

export {
    Page
}