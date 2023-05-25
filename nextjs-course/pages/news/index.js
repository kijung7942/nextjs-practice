// our-domain.com/news

import Link from 'next/link'

function NewsPage() {
    return <>
        <h1>The News Page</h1>
        <ul>
            <li>
                <Link href="/news/nextjs-is-a-great">NextJs is great!</Link>
            </li>
            <li>somthing Else</li>
        </ul>
    </>
}

export default NewsPage;