"use client";

import React, { useState } from 'react';
import CircularInput from '@/components/CircularInput/CircularInput';

export default function Homes() {
    const [brutto, setBrutto] = useState(4000);
    const [abzuege, setAbzuege] = useState(35);

    const netto = brutto - (abzuege / 100) * brutto;

    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
            <CircularInput
                value={brutto}
                label="Brutto"
                onChange={(e) => setBrutto(parseInt(e.target.value, 10))}
            />
            <CircularInput
                value={abzuege}
                label="Abzüge"
                onChange={(e) => setAbzuege(parseInt(e.target.value, 10))}
                isPercentage={true}
            />
            <CircularInput
                value={netto}
                label="Netto"
                readOnly={true}
            />
        </div>
    );
}
