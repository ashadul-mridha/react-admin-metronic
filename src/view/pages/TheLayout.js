import React from 'react';
import Aside from './common/aside/Aside';
import Wrapper from './common/wrapper/Wrapper';

const TheLayout = () => {
    return (
        <>
            <div class="d-flex flex-column flex-root">
                <div class="page d-flex flex-row flex-column-fluid">
                    <Aside></Aside>
                    <Wrapper></Wrapper>
                </div>
            </div>
        </>
    );
};

export default TheLayout;