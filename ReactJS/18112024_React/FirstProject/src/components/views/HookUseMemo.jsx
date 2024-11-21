// eslint-disable-next-line no-unused-vars
import React from 'react';
import WithUseMemo from '../WithUseMemo';
import WithoutUseMemo from '../WithoutUseMemo';

export default function HookUseMemo() {
    return (
        <>
            <h1 className='pt-20'>HookUseMemo</h1>
            <WithoutUseMemo />
            <WithUseMemo />
        </>
    );
}
