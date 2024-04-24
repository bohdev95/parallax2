import * as React from 'react';

interface Props {
    children : JSX.Element;
}

export default function Layouts({ children } : Props) {
    
    return (
        <>
            <link rel="stylesheet" type="text/css" href="https://cdn.datatables.net/1.11.5/css/jquery.dataTables.css" />
            <div className="o-scroll" id="js-scroll" data-horizontal="hj" data-scroll-container>
            
            {children}
        </div>
        </>
        
    );
}