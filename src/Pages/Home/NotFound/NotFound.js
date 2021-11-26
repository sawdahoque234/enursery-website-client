import { Link,Button } from '@mui/material';
import React from 'react';

const NotFound = () => {
    return (
        <div className="mb-3">
            <img src="https://i1.wp.com/saedx.com/blog/wp-content/uploads/2019/01/saedx-blog-featured-70.jpg?fit=1200%2C500&ssl=1" alt="" />
                <Link href="/home">
                        
             <Button variant="contained" style={{backgroundColor:'blue',color:'white'}}  > Back To Home</Button>
                </Link>
            </div>
            
    );
};

export default NotFound;