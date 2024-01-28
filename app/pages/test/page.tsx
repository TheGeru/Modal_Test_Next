import Link from 'next/link'

export default function Test() {
    return (
        <main>
            <h1 className="text-4xl font-bold">
                Pagina de prueba
            </h1>
            <nav className="my-4">
                <ul className="flex">
                    <li className="mr-4">
                        <Link href="/">
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link href="/pages/test">
                            Test
                        </Link>
                    </li>
                </ul>
            </nav>
        </main>
    )
}

