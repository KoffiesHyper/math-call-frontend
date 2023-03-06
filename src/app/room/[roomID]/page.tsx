'use client';

import Pad from "./Pad";

type PageProps = {
    params: { roomID: string }
}

export default function Page({ params }: PageProps) {
    return (

        <div>
            <Pad />
        </div>
    )
}