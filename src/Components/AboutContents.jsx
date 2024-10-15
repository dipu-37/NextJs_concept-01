import Link from "next/link";
import React from 'react'

const AboutContents = () => {
    return (
        <div className="space-y-3">
            <Link className=" mr-4 underline" href="/about/history">History</Link>
            <Link className="underline " href="/about/mission">Mission</Link>
        </div>
    );
};

export default AboutContents;